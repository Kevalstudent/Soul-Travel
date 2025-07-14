import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Star, Clock, MapPin, User, Heart, Coffee, Car, Baby, Dumbbell } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const serviceCategories = [
    { id: 'all', label: 'All Services', icon: User },
    { id: 'cleaning', label: 'Cleaning', icon: Heart },
    { id: 'childcare', label: 'Childcare', icon: Baby },
    { id: 'cooking', label: 'Cooking', icon: Coffee },
    { id: 'transport', label: 'Transport', icon: Car },
    { id: 'fitness', label: 'Fitness', icon: Dumbbell },
  ];

  const services = [
    {
      id: 1,
      name: 'Maria Santos',
      service: 'Professional Housekeeper',
      category: 'cleaning',
      location: 'New York, NY',
      rating: 4.9,
      reviews: 156,
      price: 25,
      availability: 'Available now',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Experienced housekeeper with 8+ years of professional cleaning experience. Eco-friendly products available.',
      skills: ['Deep Cleaning', 'Laundry', 'Organization', 'Eco-friendly']
    },
    {
      id: 2,
      name: 'James Wilson',
      service: 'Certified Babysitter',
      category: 'childcare',
      location: 'Los Angeles, CA',
      rating: 4.8,
      reviews: 98,
      price: 18,
      availability: 'Available today',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Certified childcare professional with CPR training. Great with kids of all ages and experienced with special needs.',
      skills: ['CPR Certified', 'First Aid', 'Special Needs', 'Educational Activities']
    },
    {
      id: 3,
      name: 'Chef Antoine',
      service: 'Personal Chef',
      category: 'cooking',
      location: 'Miami, FL',
      rating: 4.9,
      reviews: 203,
      price: 45,
      availability: 'Book 24h ahead',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'French-trained chef specializing in Mediterranean cuisine. Custom menus available for dietary restrictions.',
      skills: ['Mediterranean', 'French Cuisine', 'Dietary Restrictions', 'Meal Prep']
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      service: 'Pet Sitter & Walker',
      category: 'pet-care',
      location: 'Chicago, IL',
      rating: 4.7,
      reviews: 124,
      price: 20,
      availability: 'Available now',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Loving pet sitter with experience caring for dogs, cats, and exotic pets. Overnight sitting available.',
      skills: ['Dog Walking', 'Pet Sitting', 'Overnight Care', 'Pet Grooming']
    },
    {
      id: 5,
      name: 'Mike Rodriguez',
      service: 'Personal Trainer',
      category: 'fitness',
      location: 'Austin, TX',
      rating: 4.8,
      reviews: 87,
      price: 35,
      availability: 'Available tomorrow',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Certified personal trainer specializing in weight loss and strength training. In-home and virtual sessions available.',
      skills: ['Weight Loss', 'Strength Training', 'Virtual Training', 'Nutrition Coaching']
    },
    {
      id: 6,
      name: 'David Chen',
      service: 'Private Driver',
      category: 'transport',
      location: 'San Francisco, CA',
      rating: 4.9,
      reviews: 145,
      price: 30,
      availability: 'Available now',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Professional driver with luxury vehicle. Airport transfers, city tours, and long-distance trips available.',
      skills: ['Airport Transfer', 'City Tours', 'Long Distance', 'Luxury Vehicle']
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.service.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (categoryId: string) => {
    const category = serviceCategories.find(cat => cat.id === categoryId);
    return category ? category.icon : User;
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Support Services</h1>
          <p className="text-gray-400">Hire trusted professionals for all your travel and daily needs</p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Search for services or providers..."
            />
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-4">
            {serviceCategories.map((category) => {
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
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-start space-x-4 mb-4">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg">{service.name}</h3>
                  <p className="text-cyan-400 text-sm font-medium">{service.service}</p>
                  <div className="flex items-center text-gray-400 text-sm mt-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    {service.location}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">{service.rating}</span>
                  </div>
                  <span className="text-gray-400 text-sm">({service.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-1 text-green-400 text-sm">
                  <Clock className="w-4 h-4" />
                  {service.availability}
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-4">{service.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {service.skills.map((skill, index) => (
                  <span key={index} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-white">
                  ${service.price}
                  <span className="text-sm text-gray-400 font-normal">/hour</span>
                </div>
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </motion.div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <User className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
            <p className="text-gray-400">Try adjusting your search or category filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SupportPage;