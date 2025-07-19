import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search, Filter, Navigation, Plane, Hotel, Camera, Coffee, AlertTriangle, Shield, Car, Users } from 'lucide-react';

const MapPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [mapView, setMapView] = useState('safety');

  const filters = [
    { id: 'all', label: 'All', icon: MapPin },
    { id: 'attractions', label: 'Attractions', icon: Camera },
    { id: 'hotels', label: 'Hotels', icon: Hotel },
    { id: 'restaurants', label: 'Restaurants', icon: Coffee },
    { id: 'airports', label: 'Airports', icon: Plane },
  ];

  const mapViews = [
    { id: 'safety', label: 'Safety Zones', icon: Shield },
    { id: 'traffic', label: 'Traffic', icon: Car },
    { id: 'tourist', label: 'Tourist Spots', icon: Camera },
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
      image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=400',
      safetyLevel: 'high',
      trafficLevel: 'medium',
      touristPopularity: 'very-high'
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
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=400',
      safetyLevel: 'high',
      trafficLevel: 'low',
      touristPopularity: 'high'
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
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400',
      safetyLevel: 'medium',
      trafficLevel: 'high',
      touristPopularity: 'medium'
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
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400',
      safetyLevel: 'high',
      trafficLevel: 'very-high',
      touristPopularity: 'low'
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

  const getSafetyColor = (level: string) => {
    switch (level) {
      case 'high': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getTrafficColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'high': return 'text-orange-400';
      case 'very-high': return 'text-red-400';
      default: return 'text-gray-400';
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

          <div className="flex flex-wrap gap-4 mt-4">
            <span className="text-gray-400">Map View:</span>
            {mapViews.map((view) => {
              const IconComponent = view.icon;
              return (
                <button
                  key={view.id}
                  onClick={() => setMapView(view.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    mapView === view.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {view.label}
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
              <div className="w-full h-full relative">
                <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm z-10">
                  {mapViews.find(v => v.id === mapView)?.label} View
                </div>
                
                {/* Mock Map with Data Points */}
                <div className="w-full h-full bg-gray-800 rounded-lg relative overflow-hidden">
                  {/* Background pattern to simulate map */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="grid grid-cols-8 grid-rows-6 h-full">
                      {Array.from({ length: 48 }).map((_, i) => (
                        <div key={i} className="border border-gray-600"></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Data Points */}
                  {filteredLocations.map((location, index) => (
                    <div
                      key={location.id}
                      className={`absolute w-4 h-4 rounded-full cursor-pointer transform -translate-x-2 -translate-y-2 ${
                        mapView === 'safety' ? getSafetyColor(location.safetyLevel) + ' bg-current' :
                        mapView === 'traffic' ? getTrafficColor(location.trafficLevel) + ' bg-current' :
                        'bg-cyan-400'
                      }`}
                      style={{
                        left: `${20 + (index * 15)}%`,
                        top: `${30 + (index * 10)}%`
                      }}
                      title={location.name}
                    />
                  ))}
                  
                  {/* Legend */}
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white p-3 rounded-lg text-xs">
                    {mapView === 'safety' && (
                      <div>
                        <div className="flex items-center gap-2 mb-1"><div className="w-3 h-3 bg-green-400 rounded-full"></div>Safe</div>
                        <div className="flex items-center gap-2 mb-1"><div className="w-3 h-3 bg-yellow-400 rounded-full"></div>Caution</div>
                        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-red-400 rounded-full"></div>Dangerous</div>
                      </div>
                    )}
                    {mapView === 'traffic' && (
                      <div>
                        <div className="flex items-center gap-2 mb-1"><div className="w-3 h-3 bg-green-400 rounded-full"></div>Light</div>
                        <div className="flex items-center gap-2 mb-1"><div className="w-3 h-3 bg-yellow-400 rounded-full"></div>Moderate</div>
                        <div className="flex items-center gap-2 mb-1"><div className="w-3 h-3 bg-orange-400 rounded-full"></div>Heavy</div>
                        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-red-400 rounded-full"></div>Congested</div>
                      </div>
                    )}
                    {mapView === 'tourist' && (
                      <div>
                        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-cyan-400 rounded-full"></div>Tourist Spots</div>
                      </div>
                    )}
                  </div>
                </div>
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
                        
                        {/* Additional Info based on map view */}
                        <div className="mt-2 text-xs">
                          {mapView === 'safety' && (
                            <div className={`flex items-center gap-1 ${getSafetyColor(location.safetyLevel)}`}>
                              <Shield className="w-3 h-3" />
                              Safety: {location.safetyLevel}
                            </div>
                          )}
                          {mapView === 'traffic' && (
                            <div className={`flex items-center gap-1 ${getTrafficColor(location.trafficLevel)}`}>
                              <Car className="w-3 h-3" />
                              Traffic: {location.trafficLevel}
                            </div>
                          )}
                          {mapView === 'tourist' && (
                            <div className="flex items-center gap-1 text-cyan-400">
                              <Users className="w-3 h-3" />
                              Popularity: {location.touristPopularity}
                            </div>
                          )}
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

        {/* Map Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 bg-gray-900 rounded-xl p-6"
        >
          <h3 className="text-xl font-bold text-white mb-4">Live Map Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-6 h-6 text-green-400" />
                <h4 className="text-white font-semibold">Safe Areas</h4>
              </div>
              <p className="text-2xl font-bold text-green-400">85%</p>
              <p className="text-gray-400 text-sm">of monitored locations</p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Car className="w-6 h-6 text-yellow-400" />
                <h4 className="text-white font-semibold">Traffic Flow</h4>
              </div>
              <p className="text-2xl font-bold text-yellow-400">Moderate</p>
              <p className="text-gray-400 text-sm">current conditions</p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Camera className="w-6 h-6 text-cyan-400" />
                <h4 className="text-white font-semibold">Tourist Spots</h4>
              </div>
              <p className="text-2xl font-bold text-cyan-400">247</p>
              <p className="text-gray-400 text-sm">verified locations</p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Coffee className="w-6 h-6 text-orange-400" />
                <h4 className="text-white font-semibold">Restaurants</h4>
              </div>
              <p className="text-2xl font-bold text-orange-400">1,234</p>
              <p className="text-gray-400 text-sm">rated establishments</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MapPage;