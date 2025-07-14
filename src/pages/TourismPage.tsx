import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, Camera, Clock, Users, Mountain, Building, Sun, Trees } from 'lucide-react';

const TourismPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');

  const categories = [
    { id: 'all', label: 'All Attractions', icon: MapPin },
    { id: 'nature', label: 'Nature', icon: Trees },
    { id: 'culture', label: 'Culture', icon: Building },
    { id: 'adventure', label: 'Adventure', icon: Mountain },
    { id: 'beaches', label: 'Beaches', icon: Sun },
  ];

  const regions = [
    { id: 'all', label: 'All Regions' },
    { id: 'europe', label: 'Europe' },
    { id: 'asia', label: 'Asia' },
    { id: 'americas', label: 'Americas' },
    { id: 'africa', label: 'Africa' },
    { id: 'oceania', label: 'Oceania' },
  ];

  const attractions = [
    {
      id: 1,
      name: 'Santorini, Greece',
      category: 'beaches',
      region: 'europe',
      rating: 4.9,
      reviews: 2456,
      price: 89,
      duration: '3 days',
      image: 'https://images.pexels.com/photos/161815/santorini-oia-greece-island-161815.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Experience the stunning sunsets and whitewashed buildings of this Greek island paradise.',
      highlights: ['Sunset Views', 'Traditional Architecture', 'Wine Tasting', 'Volcanic Beaches'],
      bestTime: 'April - October'
    },
    {
      id: 2,
      name: 'Machu Picchu, Peru',
      category: 'culture',
      region: 'americas',
      rating: 4.8,
      reviews: 3567,
      price: 145,
      duration: '2 days',
      image: 'https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Discover the ancient Incan citadel high in the Andes Mountains.',
      highlights: ['Ancient Ruins', 'Mountain Views', 'Hiking Trails', 'Cultural Heritage'],
      bestTime: 'May - September'
    },
    {
      id: 3,
      name: 'Mount Fuji, Japan',
      category: 'nature',
      region: 'asia',
      rating: 4.7,
      reviews: 1234,
      price: 67,
      duration: '1 day',
      image: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Witness the iconic sacred mountain and symbol of Japan.',
      highlights: ['Sacred Mountain', 'Cherry Blossoms', 'Hot Springs', 'Traditional Culture'],
      bestTime: 'March - May'
    },
    {
      id: 4,
      name: 'Great Barrier Reef, Australia',
      category: 'nature',
      region: 'oceania',
      rating: 4.9,
      reviews: 1897,
      price: 199,
      duration: '4 days',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Explore the world\'s largest coral reef system with incredible marine life.',
      highlights: ['Coral Reefs', 'Marine Life', 'Snorkeling', 'Diving'],
      bestTime: 'June - October'
    },
    {
      id: 5,
      name: 'Swiss Alps, Switzerland',
      category: 'adventure',
      region: 'europe',
      rating: 4.8,
      reviews: 1567,
      price: 234,
      duration: '5 days',
      image: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Experience breathtaking alpine scenery and world-class skiing.',
      highlights: ['Mountain Peaks', 'Skiing', 'Hiking', 'Alpine Lakes'],
      bestTime: 'December - March'
    },
    {
      id: 6,
      name: 'Sahara Desert, Morocco',
      category: 'adventure',
      region: 'africa',
      rating: 4.6,
      reviews: 987,
      price: 156,
      duration: '3 days',
      image: 'https://images.pexels.com/photos/1578662/pexels-photo-1578662.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Journey through the vast sand dunes and experience nomadic culture.',
      highlights: ['Sand Dunes', 'Camel Trekking', 'Desert Camping', 'Star Gazing'],
      bestTime: 'October - April'
    }
  ];

  const filteredAttractions = attractions.filter(attraction => {
    const matchesCategory = activeCategory === 'all' || attraction.category === activeCategory;
    const matchesRegion = selectedRegion === 'all' || attraction.region === selectedRegion;
    return matchesCategory && matchesRegion;
  });

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Tourism & Attractions</h1>
          <p className="text-gray-400">Discover the world's most incredible destinations and experiences</p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 space-y-4"
        >
          {/* Category Filters */}
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Region Filter */}
          <div className="flex items-center gap-4">
            <span className="text-gray-400">Region:</span>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              {regions.map((region) => (
                <option key={region.id} value={region.id}>
                  {region.label}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Attractions Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredAttractions.map((attraction) => (
            <div key={attraction.id} className="bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800 transition-all duration-300 hover:transform hover:scale-105">
              <div className="relative">
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                  {categories.find(cat => cat.id === attraction.category)?.label}
                </div>
                <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                  ${attraction.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{attraction.name}</h3>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{attraction.rating}</span>
                    </div>
                    <span className="text-gray-400 text-sm">({attraction.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <Clock className="w-4 h-4" />
                    {attraction.duration}
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4">{attraction.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {attraction.highlights.map((highlight, index) => (
                      <span key={index} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-400 text-sm">
                    <strong>Best Time to Visit:</strong> {attraction.bestTime}
                  </p>
                </div>
                
                <div className="flex gap-3">
                  <button className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                    Book Tour
                  </button>
                  <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {filteredAttractions.length === 0 && (
          <div className="text-center py-12">
            <MapPin className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">No attractions found</h3>
            <p className="text-gray-400">Try adjusting your filters to discover more destinations.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TourismPage;