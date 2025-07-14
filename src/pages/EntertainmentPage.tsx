import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Star, Filter, Music, Film, Palette, Users } from 'lucide-react';

const EntertainmentPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedCity, setSelectedCity] = useState('all');

  const categories = [
    { id: 'all', label: 'All Events', icon: Calendar },
    { id: 'music', label: 'Music', icon: Music },
    { id: 'theater', label: 'Theater', icon: Film },
    { id: 'art', label: 'Art & Culture', icon: Palette },
    { id: 'social', label: 'Social Events', icon: Users },
  ];

  const cities = [
    { id: 'all', label: 'All Cities' },
    { id: 'new-york', label: 'New York' },
    { id: 'london', label: 'London' },
    { id: 'paris', label: 'Paris' },
    { id: 'tokyo', label: 'Tokyo' },
    { id: 'sydney', label: 'Sydney' },
  ];

  const events = [
    {
      id: 1,
      title: 'Jazz Night at Blue Note',
      category: 'music',
      city: 'new-york',
      date: '2025-02-15',
      time: '20:00',
      location: 'Blue Note Jazz Club, NYC',
      price: 45,
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Experience the best of jazz music with renowned artists in an intimate setting.',
      rating: 4.8,
      attendees: 156
    },
    {
      id: 2,
      title: 'Broadway Musical: The Lion King',
      category: 'theater',
      city: 'new-york',
      date: '2025-02-18',
      time: '19:30',
      location: 'Minskoff Theatre, NYC',
      price: 89,
      image: 'https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Disney\'s award-winning musical comes to life with stunning visuals and unforgettable songs.',
      rating: 4.9,
      attendees: 1200
    },
    {
      id: 3,
      title: 'Modern Art Exhibition',
      category: 'art',
      city: 'paris',
      date: '2025-02-20',
      time: '10:00',
      location: 'Louvre Museum, Paris',
      price: 25,
      image: 'https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Explore contemporary masterpieces from renowned artists around the world.',
      rating: 4.7,
      attendees: 89
    },
    {
      id: 4,
      title: 'International Food Festival',
      category: 'social',
      city: 'london',
      date: '2025-02-22',
      time: '12:00',
      location: 'Hyde Park, London',
      price: 15,
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Taste cuisines from around the world and meet fellow food enthusiasts.',
      rating: 4.6,
      attendees: 567
    },
    {
      id: 5,
      title: 'Electronic Music Festival',
      category: 'music',
      city: 'tokyo',
      date: '2025-02-25',
      time: '18:00',
      location: 'Tokyo Dome, Tokyo',
      price: 75,
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Dance the night away with top DJs and electronic music producers.',
      rating: 4.8,
      attendees: 2500
    },
    {
      id: 6,
      title: 'Opera at Sydney Opera House',
      category: 'theater',
      city: 'sydney',
      date: '2025-02-28',
      time: '19:00',
      location: 'Sydney Opera House, Sydney',
      price: 95,
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Experience world-class opera in one of the world\'s most iconic venues.',
      rating: 4.9,
      attendees: 890
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesCategory = activeCategory === 'all' || event.category === activeCategory;
    const matchesCity = selectedCity === 'all' || event.city === selectedCity;
    return matchesCategory && matchesCity;
  });

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : Calendar;
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Entertainment & Events</h1>
          <p className="text-gray-400">Discover amazing events and entertainment around the world</p>
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

          {/* City Filter */}
          <div className="flex items-center gap-4">
            <span className="text-gray-400">City:</span>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              {cities.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.label}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800 transition-all duration-300 hover:transform hover:scale-105">
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                    {categories.find(cat => cat.id === event.category)?.label}
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                  ${event.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                
                <div className="flex items-center gap-4 mb-3 text-gray-400 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(event.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {event.time}
                  </div>
                </div>
                
                <div className="flex items-center gap-1 mb-3 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4" />
                  {event.location}
                </div>
                
                <p className="text-gray-300 text-sm mb-4">{event.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{event.rating}</span>
                    </div>
                    <span className="text-gray-400 text-sm">({event.attendees} attending)</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                    Book Tickets
                  </button>
                  <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">No events found</h3>
            <p className="text-gray-400">Try adjusting your filters to find more events.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EntertainmentPage;