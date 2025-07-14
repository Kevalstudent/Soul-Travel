import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Star, Route, Camera, Coffee, Mountain } from 'lucide-react';

const TravelPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('itineraries');

  const travelPackages = [
    {
      id: 1,
      title: 'European Adventure',
      duration: '14 days',
      countries: ['France', 'Italy', 'Spain'],
      price: 2499,
      rating: 4.9,
      reviews: 156,
      image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Discover the best of Europe with guided tours through historic cities, beautiful landscapes, and cultural experiences.',
      includes: ['Hotels', 'Meals', 'Transportation', 'Tours'],
      highlights: ['Eiffel Tower', 'Colosseum', 'Sagrada Familia', 'Vatican City']
    },
    {
      id: 2,
      title: 'Asian Discovery',
      duration: '10 days',
      countries: ['Japan', 'South Korea', 'Thailand'],
      price: 1899,
      rating: 4.8,
      reviews: 203,
      image: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Experience the rich culture, delicious cuisine, and modern cities of Asia.',
      includes: ['Hotels', 'Breakfast', 'Flights', 'Cultural Tours'],
      highlights: ['Mount Fuji', 'Gyeongbokgung Palace', 'Floating Markets', 'Tokyo Skyline']
    },
    {
      id: 3,
      title: 'American Road Trip',
      duration: '12 days',
      countries: ['USA'],
      price: 1799,
      rating: 4.7,
      reviews: 98,
      image: 'https://images.pexels.com/photos/1578662/pexels-photo-1578662.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Epic road trip through America\'s most iconic national parks and cities.',
      includes: ['Car Rental', 'Hotels', 'Park Passes', 'Route Planning'],
      highlights: ['Grand Canyon', 'Yellowstone', 'Las Vegas', 'San Francisco']
    }
  ];

  const travelTips = [
    {
      id: 1,
      title: 'Packing Essentials',
      category: 'Preparation',
      image: 'https://images.pexels.com/photos/1338504/pexels-photo-1338504.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'Learn how to pack efficiently with our comprehensive guide to travel essentials.',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Budget Travel Tips',
      category: 'Money',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'Discover how to travel the world on a budget without compromising on experiences.',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Cultural Etiquette',
      category: 'Culture',
      image: 'https://images.pexels.com/photos/1529881/pexels-photo-1529881.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'Navigate different cultures with confidence and respect local customs.',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Photography Tips',
      category: 'Skills',
      image: 'https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'Capture stunning travel photos with these professional photography tips.',
      readTime: '8 min read'
    }
  ];

  const customItinerary = [
    {
      day: 1,
      title: 'Arrival in Paris',
      activities: ['Airport pickup', 'Hotel check-in', 'Evening Seine cruise'],
      meals: ['Dinner at traditional bistro']
    },
    {
      day: 2,
      title: 'Explore Central Paris',
      activities: ['Louvre Museum', 'Eiffel Tower', 'Champs-Élysées'],
      meals: ['Breakfast at hotel', 'Lunch at café', 'Dinner at restaurant']
    },
    {
      day: 3,
      title: 'Day trip to Versailles',
      activities: ['Palace of Versailles', 'Gardens tour', 'Return to Paris'],
      meals: ['Breakfast at hotel', 'Lunch at Versailles', 'Dinner in Paris']
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Travel Planning</h1>
          <p className="text-gray-400">Plan your perfect journey with custom itineraries and expert guidance</p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 mb-8">
          <button
            onClick={() => setActiveTab('itineraries')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'itineraries'
                ? 'bg-cyan-500 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Custom Itineraries
          </button>
          <button
            onClick={() => setActiveTab('packages')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'packages'
                ? 'bg-cyan-500 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Travel Packages
          </button>
          <button
            onClick={() => setActiveTab('tips')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'tips'
                ? 'bg-cyan-500 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Travel Tips
          </button>
        </div>

        {/* Custom Itineraries */}
        {activeTab === 'itineraries' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Itinerary Builder */}
            <div className="bg-gray-900 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Build Your Custom Itinerary</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Destination</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="Where do you want to go?"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Travel Dates</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="date"
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Travelers</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <select className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
                      <option>1 Traveler</option>
                      <option>2 Travelers</option>
                      <option>3 Travelers</option>
                      <option>4+ Travelers</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                Create Itinerary
              </button>
            </div>

            {/* Sample Itinerary */}
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Sample 3-Day Paris Itinerary</h3>
              
              <div className="space-y-4">
                {customItinerary.map((day) => (
                  <div key={day.day} className="bg-gray-800 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-white mb-2">Day {day.day}: {day.title}</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-cyan-400 font-medium mb-2">Activities</h5>
                        <ul className="text-gray-300 space-y-1">
                          {day.activities.map((activity, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <Route className="w-4 h-4" />
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-cyan-400 font-medium mb-2">Meals</h5>
                        <ul className="text-gray-300 space-y-1">
                          {day.meals.map((meal, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <Coffee className="w-4 h-4" />
                              {meal}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Travel Packages */}
        {activeTab === 'packages' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {travelPackages.map((pkg) => (
              <div key={pkg.id} className="bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800 transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                    {pkg.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{pkg.title}</h3>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{pkg.rating}</span>
                      <span className="text-gray-400 text-sm">({pkg.reviews} reviews)</span>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <span className="text-gray-400 text-sm">Countries: </span>
                    <span className="text-white">{pkg.countries.join(', ')}</span>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4">{pkg.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Includes:</h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.includes.map((item, index) => (
                        <span key={index} className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.highlights.map((highlight, index) => (
                        <span key={index} className="bg-cyan-500 bg-opacity-20 text-cyan-300 px-2 py-1 rounded text-xs">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-white">${pkg.price}</span>
                      <span className="text-gray-400 text-sm">/person</span>
                    </div>
                    <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Travel Tips */}
        {activeTab === 'tips' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {travelTips.map((tip) => (
              <div key={tip.id} className="bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800 transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative">
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                    {tip.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{tip.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{tip.content}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{tip.readTime}</span>
                    <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TravelPage;