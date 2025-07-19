import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Car, Bus, Train, Plane, MapPin, Clock, Users, Star, Navigation } from 'lucide-react';
import CurrencySelector from '../components/CurrencySelector';
import { CurrencyService } from '../services/currencyService';

const TransportPage: React.FC = () => {
  const [activeType, setActiveType] = useState('all');
  const [selectedCurrency, setSelectedCurrency] = useState('ZAR');
  const [searchParams, setSearchParams] = useState({
    from: '',
    to: '',
    date: '',
    passengers: '1'
  });

  const transportTypes = [
    { id: 'all', label: 'All Transport', icon: Car },
    { id: 'car', label: 'Car Rental', icon: Car },
    { id: 'bus', label: 'Bus', icon: Bus },
    { id: 'train', label: 'Train', icon: Train },
    { id: 'transfer', label: 'Airport Transfer', icon: Plane },
    { id: 'live-map', label: 'Live Map', icon: Navigation },
  ];

  const transportOptions = [
    {
      id: 1,
      type: 'car',
      provider: 'Premium Car Rental',
      vehicle: 'BMW 3 Series',
      from: 'NYC Airport',
      to: 'Manhattan',
      price: 1650, // Price in ZAR
      duration: '45 min',
      rating: 4.8,
      reviews: 234,
      image: 'https://images.pexels.com/photos/100650/pexels-photo-100650.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['GPS Navigation', 'Insurance Included', 'Fuel Included', '24/7 Support'],
      capacity: 4
    },
    {
      id: 2,
      type: 'bus',
      provider: 'City Express',
      vehicle: 'Luxury Coach',
      from: 'New York',
      to: 'Washington DC',
      price: 850,
      duration: '4h 30m',
      rating: 4.6,
      reviews: 567,
      image: 'https://images.pexels.com/photos/1373100/pexels-photo-1373100.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['WiFi', 'Comfortable Seats', 'Air Conditioning', 'Snacks Available'],
      capacity: 45
    },
    {
      id: 3,
      type: 'train',
      provider: 'Rail Connect',
      vehicle: 'High-Speed Train',
      from: 'Paris',
      to: 'London',
      price: 180,
      duration: '2h 15m',
      rating: 4.9,
      reviews: 1234,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['High Speed', 'Comfortable Seating', 'Dining Car', 'Scenic Views'],
      capacity: 200
    },
    {
      id: 4,
      type: 'transfer',
      provider: 'Airport Shuttle Pro',
      vehicle: 'Mercedes Vito',
      from: 'Heathrow Airport',
      to: 'Central London',
      price: 450,
      duration: '1h 15m',
      rating: 4.7,
      reviews: 456,
      image: 'https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Meet & Greet', 'Luggage Assistance', 'Flight Tracking', 'Professional Driver'],
      capacity: 8
    },
    {
      id: 5,
      type: 'car',
      provider: 'Economy Rentals',
      vehicle: 'Toyota Corolla',
      from: 'Downtown',
      to: 'Airport',
      price: 650,
      duration: '30 min',
      rating: 4.5,
      reviews: 789,
      image: 'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Fuel Efficient', 'Easy Parking', 'GPS Included', 'Clean Interior'],
      capacity: 4
    },
    {
      id: 6,
      type: 'bus',
      provider: 'Tourist Express',
      vehicle: 'Double Decker Bus',
      from: 'City Center',
      to: 'Tourist Attractions',
      price: 280,
      duration: '2h tour',
      rating: 4.4,
      reviews: 345,
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Audio Guide', 'Hop On/Off', 'Panoramic Views', 'Multiple Languages'],
      capacity: 70
    }
  ];

  const filteredTransport = transportOptions.filter(option => {
    return activeType === 'all' || option.type === activeType;
  });

  const getTransportIcon = (type: string) => {
    switch (type) {
      case 'car': return Car;
      case 'bus': return Bus;
      case 'train': return Train;
      case 'transfer': return Plane;
      default: return Car;
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setSearchParams(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Transport & Transfers</h1>
          <p className="text-gray-400">Find the perfect transportation for your journey</p>
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
              <label className="block text-sm font-medium text-gray-300 mb-2">From</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchParams.from}
                  onChange={(e) => handleInputChange('from', e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Departure location"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">To</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchParams.to}
                  onChange={(e) => handleInputChange('to', e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Destination"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Date</label>
              <input
                type="date"
                value={searchParams.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Passengers</label>
              <div className="relative">
                <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <select
                  value={searchParams.passengers}
                  onChange={(e) => handleInputChange('passengers', e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num} Passenger{num > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Currency</label>
            <CurrencySelector
              selectedCurrency={selectedCurrency}
              onCurrencyChange={setSelectedCurrency}
            />
          </div>

          <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200">
            Search Transport
          </button>
        </motion.div>

        {/* Transport Type Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-4">
            {transportTypes.map((type) => {
              const IconComponent = type.icon;
              return (
                <button
                  key={type.id}
                  onClick={() => setActiveType(type.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeType === type.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {type.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Live Map Section */}
        {activeType === 'live-map' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4">Live Transport Map</h3>
              <div className="bg-gray-800 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <Navigation className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-2">Live Transport Tracking</h4>
                  <p className="text-gray-400 mb-4">Real-time vehicle locations and traffic updates</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-green-500 bg-opacity-20 text-green-300 p-2 rounded">
                      <div className="font-semibold">Available Vehicles: 24</div>
                    </div>
                    <div className="bg-yellow-500 bg-opacity-20 text-yellow-300 p-2 rounded">
                      <div className="font-semibold">Average Wait: 3 min</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Transport Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {activeType !== 'live-map' &&
          {filteredTransport.map((option) => {
            const IconComponent = getTransportIcon(option.type);
            return (
              <div key={option.id} className="bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800 transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative">
                  <img
                    src={option.image}
                    alt={option.vehicle}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                    <IconComponent className="w-4 h-4" />
                    {transportTypes.find(t => t.id === option.type)?.label}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-white">{CurrencyService.formatPrice(option.price, selectedCurrency)}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{option.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-cyan-400 text-sm font-medium mb-3">{option.provider}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <MapPin className="w-4 h-4" />
                      {option.from} → {option.to}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Clock className="w-4 h-4" />
                      {option.duration}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Users className="w-4 h-4" />
                      Up to {option.capacity} passengers
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {option.features.map((feature, index) => (
                        <span key={index} className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-white">${option.price}</span>
                      <span className="text-gray-400 text-sm">/trip</span>
                    </div>
                    <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                      Book Now
                    </button>
                  </div>
                  
                  <div className="mt-2 text-sm text-gray-400">
                    {option.reviews} reviews
                  </div>
                </div>
              </div>
            );
          })}
          }
        </motion.div>
      </div>
    </div>
  );
};

export default TransportPage;