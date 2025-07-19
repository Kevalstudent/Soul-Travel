import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, MapPin, Calendar, Users, Star, Wifi, Car, Coffee, Loader, Hotel } from 'lucide-react';
import CurrencySelector from '../components/CurrencySelector';
import { CurrencyService } from '../services/currencyService';

const AccommodationPage: React.FC = () => {
  const [accommodations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('ZAR');
  const [searchParams, setSearchParams] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: 2,
    rooms: 1,
    propertyType: 'all'
  });

  // Mock accommodation data
  const mockAccommodations = [
    {
      id: '1',
      name: 'Cape Grace Hotel',
      location: 'Cape Town, South Africa',
      price: 4500, // Price in ZAR per night
      rating: 4.8,
      reviews: 1234,
      image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600',
      amenities: ['Wifi', 'Pool', 'Spa', 'Restaurant'],
      type: 'Luxury Hotel'
    },
    {
      id: '2',
      name: 'Silo Hotel',
      location: 'Cape Town, South Africa',
      price: 8900,
      rating: 4.9,
      reviews: 856,
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600',
      amenities: ['Wifi', 'Gym', 'Business Center', 'Parking'],
      type: 'Boutique Hotel'
    },
    {
      id: '3',
      name: 'Camps Bay Villa',
      location: 'Cape Town, South Africa',
      price: 12500,
      rating: 4.7,
      reviews: 456,
      image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600',
      amenities: ['Wifi', 'Pool', 'Ocean View', 'Kitchen'],
      type: 'Villa'
    }
  ];

  const handleSearch = async () => {
    if (!searchParams.destination || !searchParams.checkIn || !searchParams.checkOut) {
      alert('Please fill in all required fields');
      return;
    }

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setAccommodations(mockAccommodations);
      setLoading(false);
    }, 1500);
  };

  const handleInputChange = (field: string, value: string | number) => {
    setSearchParams(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi': return <Wifi className="w-4 h-4" />;
      case 'parking': return <Car className="w-4 h-4" />;
      case 'restaurant': return <Coffee className="w-4 h-4" />;
      default: return <Star className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Find Your Perfect Stay</h1>
          <p className="text-gray-400">Discover and book the best accommodations worldwide</p>
        </motion.div>

        {/* Search Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-900 rounded-xl p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Destination</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchParams.destination}
                  onChange={(e) => handleInputChange('destination', e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Where are you going?"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Check-in</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  value={searchParams.checkIn}
                  onChange={(e) => handleInputChange('checkIn', e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Check-out</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  value={searchParams.checkOut}
                  onChange={(e) => handleInputChange('checkOut', e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Guests</label>
              <div className="relative">
                <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <select
                  value={searchParams.guests}
                  onChange={(e) => handleInputChange('guests', parseInt(e.target.value))}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Rooms</label>
              <select
                value={searchParams.rooms}
                onChange={(e) => handleInputChange('rooms', parseInt(e.target.value))}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {[1, 2, 3, 4, 5].map(num => (
                  <option key={num} value={num}>{num} Room{num > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Property Type</label>
              <select
                value={searchParams.propertyType}
                onChange={(e) => handleInputChange('propertyType', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="all">All Properties</option>
                <option value="hotel">Hotels</option>
                <option value="resort">Resorts</option>
                <option value="villa">Villas</option>
                <option value="cabin">Cabins</option>
                <option value="apartment">Apartments</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Currency</label>
            <CurrencySelector
              selectedCurrency={selectedCurrency}
              onCurrencyChange={setSelectedCurrency}
            />
          </div>

          <button
            onClick={handleSearch}
            disabled={loading}
            className="w-full bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader className="w-5 h-5 animate-spin" />
                Searching...
              </>
            ) : (
              <>
                <Search className="w-5 h-5" />
                Search Accommodations
              </>
            )}
          </button>
        </motion.div>

        {/* Error Message */}

        {/* Search Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Available Properties</h2>
            {accommodations.length > 0 && (
              <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors">
                <Filter className="w-4 h-4" />
                Filters
              </button>
            )}
          </div>

          {accommodations.length === 0 && !loading && (
            <div className="text-center py-12">
              <Hotel className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2">No accommodations searched yet</h3>
              <p className="text-gray-400">Enter your travel details and search for places to stay.</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accommodations.map((property) => (
              <div key={property.id} className="bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800 transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                    {property.type}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-white">{CurrencyService.formatPrice(property.price, selectedCurrency)}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{property.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-4">{property.location}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {property.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded-full text-xs text-gray-300">
                        {getAmenityIcon(amenity)}
                        {amenity}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-white">${property.price}</span>
                      <span className="text-gray-400 text-sm">/night</span>
                    </div>
                    <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                      Book Now
                    </button>
                  </div>
                  
                  <div className="mt-2 text-sm text-gray-400">
                    {property.reviews} reviews
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AccommodationPage;