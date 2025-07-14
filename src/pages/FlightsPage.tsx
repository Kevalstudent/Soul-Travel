import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Calendar, Users, Plane, Loader } from 'lucide-react';
import { useFlightSearch } from '../hooks/useFlightSearch';
import { FlightSearchParams } from '../services/api';
import AirportAutocomplete from '../components/AirportAutocomplete';

const FlightsPage: React.FC = () => {
  const { flights, loading, error, searchFlights } = useFlightSearch();
  const [searchParams, setSearchParams] = useState({
    from: '',
    fromCode: '',
    to: '',
    toCode: '',
    departDate: '',
    returnDate: '',
    class: 'economy',
    adults: 1,
    children: 0,
    infants: 0
  });

  const handleSearch = async () => {
    if (!searchParams.fromCode || !searchParams.toCode || !searchParams.departDate) {
      alert('Please fill in all required fields');
      return;
    }

    const flightSearchParams: FlightSearchParams = {
      from: searchParams.fromCode,
      to: searchParams.toCode,
      departDate: searchParams.departDate,
      returnDate: searchParams.returnDate,
      adults: searchParams.adults,
      children: searchParams.children,
      infants: searchParams.infants,
      class: searchParams.class,
    };

    await searchFlights(flightSearchParams);
  };

  const handleInputChange = (field: string, value: string | number) => {
    setSearchParams(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAirportChange = (field: 'from' | 'to', value: string, airport?: any) => {
    setSearchParams(prev => ({
      ...prev,
      [field]: value,
      [`${field}Code`]: airport?.code || value,
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
              <AirportAutocomplete
                value={searchParams.from}
                onChange={(value, airport) => handleAirportChange('from', value, airport)}
                placeholder="Departure city or airport"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">To</label>
              <AirportAutocomplete
                value={searchParams.to}
                onChange={(value, airport) => handleAirportChange('to', value, airport)}
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
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 bg-red-900 border border-red-700 rounded-lg p-4"
          >
            <p className="text-red-200">{error}</p>
          </motion.div>
        )}

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
                  <div className="text-3xl font-bold text-white">${flight.price}</div>
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