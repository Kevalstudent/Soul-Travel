import axios from 'axios';

// Base API configuration
const api = axios.create({
  timeout: 10000,
});

// API Keys - In production, these should be in environment variables
const API_KEYS = {
  AMADEUS_CLIENT_ID: import.meta.env.VITE_AMADEUS_CLIENT_ID || 'your_amadeus_client_id',
  AMADEUS_CLIENT_SECRET: import.meta.env.VITE_AMADEUS_CLIENT_SECRET || 'your_amadeus_client_secret',
  BOOKING_API_KEY: import.meta.env.VITE_BOOKING_API_KEY || 'your_booking_api_key',
  SKYSCANNER_API_KEY: import.meta.env.VITE_SKYSCANNER_API_KEY || 'your_skyscanner_api_key',
  OPENCAGE_API_KEY: import.meta.env.VITE_OPENCAGE_API_KEY || 'your_opencage_api_key',
};

// Amadeus API for flights
class AmadeusAPI {
  private accessToken: string | null = null;
  private tokenExpiry: number = 0;

  async getAccessToken(): Promise<string> {
    if (this.accessToken && Date.now() < this.tokenExpiry) {
      return this.accessToken;
    }

    try {
      const response = await axios.post('https://test.api.amadeus.com/v1/security/oauth2/token', {
        grant_type: 'client_credentials',
        client_id: API_KEYS.AMADEUS_CLIENT_ID,
        client_secret: API_KEYS.AMADEUS_CLIENT_SECRET,
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      this.accessToken = response.data.access_token;
      this.tokenExpiry = Date.now() + (response.data.expires_in * 1000);
      return this.accessToken;
    } catch (error) {
      console.error('Failed to get Amadeus access token:', error);
      throw new Error('Authentication failed');
    }
  }

  async searchFlights(params: FlightSearchParams): Promise<FlightSearchResult[]> {
    try {
      const token = await this.getAccessToken();
      
      const response = await axios.get('https://test.api.amadeus.com/v2/shopping/flight-offers', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        params: {
          originLocationCode: params.from,
          destinationLocationCode: params.to,
          departureDate: params.departDate,
          returnDate: params.returnDate,
          adults: params.adults,
          children: params.children,
          infants: params.infants,
          travelClass: params.class.toUpperCase(),
          currencyCode: 'USD',
          max: 20,
        },
      });

      return this.transformFlightData(response.data.data);
    } catch (error) {
      console.error('Flight search failed:', error);
      // Return mock data if API fails
      return this.getMockFlightData(params);
    }
  }

  async getAirportSuggestions(query: string): Promise<AirportSuggestion[]> {
    try {
      const token = await this.getAccessToken();
      
      const response = await axios.get('https://test.api.amadeus.com/v1/reference-data/locations', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        params: {
          keyword: query,
          subType: 'AIRPORT,CITY',
          'page[limit]': 10,
        },
      });

      return response.data.data.map((item: any) => ({
        code: item.iataCode,
        name: item.name,
        city: item.address?.cityName || '',
        country: item.address?.countryName || '',
      }));
    } catch (error) {
      console.error('Airport search failed:', error);
      return [];
    }
  }

  private transformFlightData(data: any[]): FlightSearchResult[] {
    return data.map((offer: any) => ({
      id: offer.id,
      airline: offer.validatingAirlineCodes[0],
      from: offer.itineraries[0].segments[0].departure.iataCode,
      to: offer.itineraries[0].segments[offer.itineraries[0].segments.length - 1].arrival.iataCode,
      departure: offer.itineraries[0].segments[0].departure.at.split('T')[1].substring(0, 5),
      arrival: offer.itineraries[0].segments[offer.itineraries[0].segments.length - 1].arrival.at.split('T')[1].substring(0, 5),
      duration: offer.itineraries[0].duration.replace('PT', '').toLowerCase(),
      price: parseFloat(offer.price.total),
      class: offer.travelerPricings[0].fareDetailsBySegment[0].cabin,
      stops: offer.itineraries[0].segments.length - 1 === 0 ? 'Direct' : `${offer.itineraries[0].segments.length - 1} Stop${offer.itineraries[0].segments.length - 1 > 1 ? 's' : ''}`,
    }));
  }

  private getMockFlightData(params: FlightSearchParams): FlightSearchResult[] {
    return [
      {
        id: '1',
        airline: 'Sky Airlines',
        from: params.from,
        to: params.to,
        departure: '08:30',
        arrival: '20:45',
        duration: '8h 15m',
        price: 599,
        class: 'Economy',
        stops: 'Direct'
      },
      {
        id: '2',
        airline: 'Global Wings',
        from: params.from,
        to: params.to,
        departure: '14:20',
        arrival: '02:35+1',
        duration: '7h 15m',
        price: 729,
        class: 'Economy',
        stops: 'Direct'
      },
    ];
  }
}

// Booking.com API for accommodations
class BookingAPI {
  async searchHotels(params: AccommodationSearchParams): Promise<AccommodationResult[]> {
    try {
      // Using RapidAPI's Booking.com API
      const response = await axios.get('https://booking-com.p.rapidapi.com/v1/hotels/search', {
        headers: {
          'X-RapidAPI-Key': API_KEYS.BOOKING_API_KEY,
          'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
        },
        params: {
          dest_type: 'city',
          dest_id: params.destinationId,
          search_type: 'city',
          arrival_date: params.checkIn,
          departure_date: params.checkOut,
          adults: params.guests,
          room_qty: params.rooms,
          units: 'metric',
          temperature_unit: 'c',
          languagecode: 'en-us',
          currency_code: 'USD',
        },
      });

      return this.transformHotelData(response.data.result);
    } catch (error) {
      console.error('Hotel search failed:', error);
      return this.getMockHotelData(params);
    }
  }

  async getDestinationId(destination: string): Promise<string> {
    try {
      const response = await axios.get('https://booking-com.p.rapidapi.com/v1/hotels/locations', {
        headers: {
          'X-RapidAPI-Key': API_KEYS.BOOKING_API_KEY,
          'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
        },
        params: {
          name: destination,
          locale: 'en-gb',
        },
      });

      return response.data[0]?.dest_id || '-553173';
    } catch (error) {
      console.error('Destination search failed:', error);
      return '-553173'; // Default to London
    }
  }

  private transformHotelData(data: any[]): AccommodationResult[] {
    return data.map((hotel: any) => ({
      id: hotel.hotel_id,
      name: hotel.hotel_name,
      location: hotel.city,
      price: hotel.min_total_price || 99,
      rating: hotel.review_score / 2 || 4.5,
      reviews: hotel.review_nr || 100,
      image: hotel.main_photo_url || 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      amenities: ['Wifi', 'Pool', 'Spa', 'Restaurant'],
      type: 'Hotel'
    }));
  }

  private getMockHotelData(params: AccommodationSearchParams): AccommodationResult[] {
    return [
      {
        id: '1',
        name: 'Ocean View Resort',
        location: 'Maldives',
        price: 299,
        rating: 4.8,
        reviews: 1234,
        image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800',
        amenities: ['Wifi', 'Pool', 'Spa', 'Restaurant'],
        type: 'Resort'
      },
      {
        id: '2',
        name: 'Downtown Luxury Hotel',
        location: 'New York',
        price: 189,
        rating: 4.6,
        reviews: 856,
        image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
        amenities: ['Wifi', 'Gym', 'Business Center', 'Parking'],
        type: 'Hotel'
      },
    ];
  }
}

// Geocoding API for location services
class GeocodingAPI {
  async searchLocations(query: string): Promise<LocationResult[]> {
    try {
      const response = await axios.get('https://api.opencagedata.com/geocode/v1/json', {
        params: {
          q: query,
          key: API_KEYS.OPENCAGE_API_KEY,
          limit: 10,
          no_annotations: 1,
        },
      });

      return response.data.results.map((result: any) => ({
        name: result.formatted,
        lat: result.geometry.lat,
        lng: result.geometry.lng,
        country: result.components.country,
        city: result.components.city || result.components.town || result.components.village,
      }));
    } catch (error) {
      console.error('Geocoding failed:', error);
      return [];
    }
  }
}

// Weather API for travel planning
class WeatherAPI {
  async getCurrentWeather(city: string): Promise<WeatherData> {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
          q: city,
          appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
          units: 'metric',
        },
      });

      return {
        temperature: Math.round(response.data.main.temp),
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        humidity: response.data.main.humidity,
        windSpeed: response.data.wind.speed,
      };
    } catch (error) {
      console.error('Weather fetch failed:', error);
      return {
        temperature: 22,
        description: 'Clear sky',
        icon: '01d',
        humidity: 65,
        windSpeed: 3.5,
      };
    }
  }
}

// Export API instances
export const amadeusAPI = new AmadeusAPI();
export const bookingAPI = new BookingAPI();
export const geocodingAPI = new GeocodingAPI();
export const weatherAPI = new WeatherAPI();

// Type definitions
export interface FlightSearchParams {
  from: string;
  to: string;
  departDate: string;
  returnDate?: string;
  adults: number;
  children: number;
  infants: number;
  class: string;
}

export interface FlightSearchResult {
  id: string;
  airline: string;
  from: string;
  to: string;
  departure: string;
  arrival: string;
  duration: string;
  price: number;
  class: string;
  stops: string;
}

export interface AirportSuggestion {
  code: string;
  name: string;
  city: string;
  country: string;
}

export interface AccommodationSearchParams {
  destination: string;
  destinationId?: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  rooms: number;
  propertyType?: string;
}

export interface AccommodationResult {
  id: string;
  name: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  amenities: string[];
  type: string;
}

export interface LocationResult {
  name: string;
  lat: number;
  lng: number;
  country: string;
  city: string;
}

export interface WeatherData {
  temperature: number;
  description: string;
  icon: string;
  humidity: number;
  windSpeed: number;
}