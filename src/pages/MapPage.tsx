import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search, Filter, Navigation, Plane, Hotel, Camera, Coffee } from 'lucide-react';

const MapPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All', icon: MapPin },
    { id: 'attractions', label: 'Attractions', icon: Camera },
    { id: 'hotels', label: 'Hotels', icon: Hotel },
    { id: 'restaurants', label: 'Restaurants', icon: Coffee },
    { id: 'airports', label: 'Airports', icon: Plane },
  ];

  const locations = [
    {
      id: 1,
      name: 'Eiffel Tower',
      type: 'attractions',
      city: 'Paris',
      country: 'France',
      rating: 4.8,
      reviews: 25467,
      coordinates: { lat: 48.8584, lng: 2.2945 },
      image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: 'Hotel Plaza Athénée',
      type: 'hotels',
      city: 'Paris',
      country: 'France',
      rating: 4.9,
      reviews: 1234,
      coordinates: { lat: 48.8655, lng: 2.3034 },
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      name: 'Le Comptoir du Relais',
      type: 'restaurants',
      city: 'Paris',
      country: 'France',
      rating: 4.7,
      reviews: 567,
      coordinates: { lat: 48.8506, lng: 2.3387 },
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      name: 'Charles de Gaulle Airport',
      type: 'airports',
      city: 'Paris',
      country: 'France',
      rating: 4.2,
      reviews: 8934,
      coordinates: { lat: 49.0097, lng: 2.5479 },
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const filteredLocations = locations.filter(location => {
    const matchesFilter = selectedFilter === 'all' || location.type === selectedFilter;
    const matchesSearch = location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         location.city.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getLocationIcon = (type: string) => {
    switch (type) {
      case 'attractions': return Camera;
      case 'hotels': return Hotel;
      case 'restaurants': return Coffee;
      case 'airports': return Plane;
      default: return MapPin;
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
          <h1 className="text-4xl font-bold text-white mb-4">Interactive Travel Map</h1>
          <p className="text-gray-400">Explore destinations and find points of interest around the world</p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 space-y-4"
        >
          <div className="relative">
            <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Search for destinations, attractions, hotels..."
            />
          </div>

          <div className="flex flex-wrap gap-4">
            {filters.map((filter) => {
              const IconComponent = filter.icon;
              return (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                    selectedFilter === filter.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {filter.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-gray-900 rounded-xl p-6 h-96 lg:h-[600px] flex items-center justify-center">
              <div className="text-center">
                <Navigation className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-2">Interactive Map</h3>
                <p className="text-gray-400">Map integration would be implemented here</p>
                <p className="text-gray-500 text-sm mt-2">
                  This would typically use Google Maps, Mapbox, or similar service
                </p>
              </div>
            </div>
          </motion.div>

          {/* Location List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white mb-4">Nearby Locations</h3>
            
            <div className="space-y-4 max-h-[500px] overflow-y-auto">
              {filteredLocations.map((location) => {
                const IconComponent = getLocationIcon(location.type);
                return (
                  <div key={location.id} className="bg-gray-900 rounded-xl p-4 hover:bg-gray-800 transition-colors cursor-pointer">
                    <div className="flex items-start space-x-4">
                      <img
                        src={location.image}
                        alt={location.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <IconComponent className="w-4 h-4 text-cyan-400" />
                          <h4 className="text-white font-semibold">{location.name}</h4>
                        </div>
                        <p className="text-gray-400 text-sm">{location.city}, {location.country}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                            <span className="text-white text-sm font-medium">{location.rating}</span>
                          </div>
                          <span className="text-gray-400 text-sm">({location.reviews} reviews)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredLocations.length === 0 && (
              <div className="text-center py-8">
                <MapPin className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400">No locations found matching your criteria</p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Map Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 bg-gray-900 rounded-xl p-6"
        >
          <h3 className="text-xl font-bold text-white mb-4">Map Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Navigation className="w-6 h-6 text-cyan-400" />
                <h4 className="text-white font-semibold">Navigation</h4>
              </div>
              <p className="text-gray-400 text-sm">Get directions between locations</p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Filter className="w-6 h-6 text-cyan-400" />
                <h4 className="text-white font-semibold">Filters</h4>
              </div>
              <p className="text-gray-400 text-sm">Filter by type, rating, and price</p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-6 h-6 text-cyan-400" />
                <h4 className="text-white font-semibold">Bookmarks</h4>
              </div>
              <p className="text-gray-400 text-sm">Save favorite locations</p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Search className="w-6 h-6 text-cyan-400" />
                <h4 className="text-white font-semibold">Search</h4>
              </div>
              <p className="text-gray-400 text-sm">Find specific places quickly</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MapPage;