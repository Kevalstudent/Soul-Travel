import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Calendar, Users, Plane, Loader } from 'lucide-react';
import CurrencySelector from '../components/CurrencySelector';
import { CurrencyService } from '../services/currencyService';

const FlightsPage: React.FC = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('ZAR');
  const [searchParams, setSearchParams] = useState({
    from: '',
    to: '',
    departDate: '',
    returnDate: '',
    class: 'economy',
    adults: 1,
    children: 0,
    infants: 0
  });

  // Mock flight data
  const mockFlights = [
    {
      id: '1',
      airline: 'South African Airways',
      from: 'JNB',
      to: 'CPT',
      departure: '08:30',
      arrival: '10:45',
      duration: '2h 15m',
      price: 1850, // Price in ZAR
      class: 'Economy',
      stops: 'Direct',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '2',
      airline: 'Emirates',
      from: 'JNB',
      to: 'DXB',
      departure: '14:20',
      arrival: '23:35',
      duration: '8h 15m',
      price: 12500,
      class: 'Economy',
      stops: 'Direct',
      image: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '3',
      airline: 'British Airways',
      from: 'JNB',
      to: 'LHR',
      departure: '19:45',
      arrival: '06:30+1',
      duration: '11h 45m',
      price: 15800,
      class: 'Economy',
      stops: 'Direct',
      image: 'https://images.pexels.com/photos/1309644/pexels-photo-1309644.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const handleSearch = async () => {
    if (!searchParams.from || !searchParams.to || !searchParams.departDate) {
      alert('Please fill in all required fields');
      return;
    }

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setFlights(mockFlights);
      setLoading(false);
    }, 1500);
  };

  const handleInputChange = (field: string, value: string | number) => {
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
          <h1 className="text-4xl font-bold text-white mb-4">Find Your Perfect Flight</h1>
          <p className="text-gray-400">Search and compare flights from hundreds of airlines</p>
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
              <input
                type="text"
                value={searchParams.from}
                onChange={(e) => handleInputChange('from', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Departure city or airport"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">To</label>
              <input
                type="text"
                value={searchParams.to}
                onChange={(e) => handleInputChange('to', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Destination city or airport"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Departure</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  value={searchParams.departDate}
                  onChange={(e) => handleInputChange('departDate', e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Return</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  value={searchParams.returnDate}
                  onChange={(e) => handleInputChange('returnDate', e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Class</label>
              <select
                value={searchParams.class}
                onChange={(e) => handleInputChange('class', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="economy">Economy</option>
                <option value="business">Business</option>
                <option value="first">First Class</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Adults</label>
              <select
                value={searchParams.adults}
                onChange={(e) => handleInputChange('adults', parseInt(e.target.value))}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Children</label>
              <select
                value={searchParams.children}
                onChange={(e) => handleInputChange('children', parseInt(e.target.value))}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Infants</label>
              <select
                value={searchParams.infants}
                onChange={(e) => handleInputChange('infants', parseInt(e.target.value))}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {[0, 1, 2, 3, 4].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
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
                Search Flights
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
          className="space-y-4"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Search Results</h2>
            {flights.length > 0 && (
              <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors">
                <Filter className="w-4 h-4" />
                Filters
              </button>
            )}
          </div>

          {flights.length === 0 && !loading && (
            <div className="text-center py-12">
              <Plane className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2">No flights searched yet</h3>
              <p className="text-gray-400">Enter your travel details and search for flights.</p>
            </div>
          )}

          {flights.map((flight) => (
            <div key={flight.id} className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-colors">
              <div className="mb-4">
                <img
                  src={flight.image}
                  alt={flight.airline}
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center gap-6 mb-4 md:mb-0">
                  <div className="flex items-center gap-2">
                    <Plane className="w-6 h-6 text-cyan-400" />
                    <span className="text-white font-semibold">{flight.airline}</span>
                  </div>
                  
                  <div className="flex items-center gap-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{flight.departure}</div>
                      <div className="text-sm text-gray-400">{flight.from}</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-sm text-gray-400">{flight.duration}</div>
                      <div className="text-sm text-cyan-400">{flight.stops}</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{flight.arrival}</div>
                      <div className="text-sm text-gray-400">{flight.to}</div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">{CurrencyService.formatPrice(flight.price, selectedCurrency)}</div>
                  <div className="text-sm text-gray-400 mb-2">{flight.class}</div>
                  <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                    Select
                  </button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FlightsPage;