# Soul Travel - Comprehensive Travel Platform

A modern, full-featured travel platform built with React, TypeScript, and Tailwind CSS.

## Features

- **Flight Search**: Real-time flight search with Amadeus API integration
- **Accommodation Search**: Hotel and property search with Booking.com API
- **Travel Community**: Connect with other travelers, share experiences
- **Entertainment**: Discover events and activities worldwide
- **Support Services**: Hire professional services (maids, babysitters, chefs, etc.)
- **Tourism**: Explore attractions and cultural highlights
- **Transport**: Book various transportation options
- **Travel Planning**: Custom itineraries and travel packages
- **Interactive Map**: Visual exploration of destinations
- **Responsive Design**: Works perfectly on all devices

## API Integration

### Required API Keys

1. **Amadeus API** (Flights)
   - Sign up at: https://developers.amadeus.com/
   - Get Client ID and Client Secret
   - Free tier: 2,000 API calls/month

2. **Booking.com API** (Accommodations)
   - Available through RapidAPI: https://rapidapi.com/apidojo/api/booking/
   - Subscription required for production use

3. **OpenCage Geocoding API** (Location Services)
   - Sign up at: https://opencagedata.com/
   - Free tier: 2,500 requests/day

4. **OpenWeatherMap API** (Weather Data)
   - Sign up at: https://openweathermap.org/api
   - Free tier: 1,000 calls/day

### Setup Instructions

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env`
4. Add your API keys to the `.env` file
5. Start the development server: `npm run dev`

### API Configuration

The application includes fallback mock data when APIs are unavailable or rate-limited. This ensures the application remains functional during development and testing.

## Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Build Tool**: Vite
- **Routing**: React Router DOM

## Project Structure

```
src/
├── components/          # Reusable UI components
├── hooks/              # Custom React hooks
├── pages/              # Page components
├── services/           # API services and utilities
└── types/              # TypeScript type definitions
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## API Usage Examples

### Flight Search
```typescript
import { amadeusAPI } from './services/api';

const searchFlights = async () => {
  const results = await amadeusAPI.searchFlights({
    from: 'NYC',
    to: 'LON',
    departDate: '2025-03-15',
    adults: 2,
    children: 0,
    infants: 0,
    class: 'economy'
  });
};
```

### Accommodation Search
```typescript
import { bookingAPI } from './services/api';

const searchHotels = async () => {
  const results = await bookingAPI.searchHotels({
    destination: 'London',
    checkIn: '2025-03-15',
    checkOut: '2025-03-18',
    guests: 2,
    rooms: 1
  });
};
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

© 2025 Soul Travel. All rights reserved.