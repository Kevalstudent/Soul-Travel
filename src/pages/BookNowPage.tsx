import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Plane, Hotel, Car, Star, Plus, Minus } from 'lucide-react';

const BookNowPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    destination: '',
    dates: {
      start: '',
      end: ''
    },
    travelers: {
      adults: 2,
      children: 0,
      infants: 0
    },
    preferences: {
      budget: 'medium',
      accommodation: 'hotel',
      activities: []
    }
  });

  const [selectedPackage, setSelectedPackage] = useState(null);

  const recommendedPackages = [
    {
      id: 1,
      title: 'Paris Getaway',
      duration: '5 days',
      price: 1299,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=600',
      includes: ['Flights', 'Hotel', 'Breakfast', 'City Tour'],
      highlights: ['Eiffel Tower', 'Louvre Museum', 'Seine Cruise']
    },
    {
      id: 2,
      title: 'Tokyo Adventure',
      duration: '7 days',
      price: 1899,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600',
      includes: ['Flights', 'Hotel', 'JR Pass', 'Cultural Tours'],
      highlights: ['Mount Fuji', 'Shibuya Crossing', 'Traditional Temples']
    },
    {
      id: 3,
      title: 'Bali Retreat',
      duration: '6 days',
      price: 999,
      rating: 4.7,
      image: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=600',
      includes: ['Flights', 'Villa', 'Spa', 'Island Tours'],
      highlights: ['Rice Terraces', 'Beach Relaxation', 'Spa Treatments']
    }
  ];

  const steps = [
    { id: 1, title: 'Trip Details', description: 'Where and when' },
    { id: 2, title: 'Travelers', description: 'Who\'s going' },
    { id: 3, title: 'Preferences', description: 'Your style' },
    { id: 4, title: 'Package Selection', description: 'Choose your trip' },
    { id: 5, title: 'Booking', description: 'Complete your order' }
  ];

  const handleInputChange = (field, value) => {
    setBookingData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleTravelersChange = (type, increment) => {
    setBookingData(prev => ({
      ...prev,
      travelers: {
        ...prev.travelers,
        [type]: Math.max(0, prev.travelers[type] + increment)
      }
    }));
  };

  const handleNextStep = () => {
    if (activeStep < steps.length) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
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
          <h1 className="text-4xl font-bold text-white mb-4">Book Your Dream Trip</h1>
          <p className="text-gray-400">Let us create the perfect itinerary for you</p>
        </motion.div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  activeStep === step.id
                    ? 'bg-cyan-500 text-white'
                    : activeStep > step.id
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-700 text-gray-400'
                }`}>
                  {step.id}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-1 mx-2 ${
                    activeStep > step.id ? 'bg-green-500' : 'bg-gray-700'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-2">{steps[activeStep - 1].title}</h2>
            <p className="text-gray-400">{steps[activeStep - 1].description}</p>
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-gray-900 rounded-xl p-8 mb-8">
          {/* Step 1: Trip Details */}
          {activeStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-lg font-medium text-white mb-3">Where would you like to go?</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-4 h-6 w-6 text-gray-400" />
                  <input
                    type="text"
                    value={bookingData.destination}
                    onChange={(e) => handleInputChange('destination', e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-lg"
                    placeholder="Enter destination (e.g., Paris, Tokyo, Bali)"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-medium text-white mb-3">Departure Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-4 h-6 w-6 text-gray-400" />
                    <input
                      type="date"
                      value={bookingData.dates.start}
                      onChange={(e) => handleInputChange('dates', { ...bookingData.dates, start: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 text-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-medium text-white mb-3">Return Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-4 h-6 w-6 text-gray-400" />
                    <input
                      type="date"
                      value={bookingData.dates.end}
                      onChange={(e) => handleInputChange('dates', { ...bookingData.dates, end: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 text-lg"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2: Travelers */}
          {activeStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-lg font-medium text-white mb-3">How many travelers?</label>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-gray-800 rounded-lg p-4">
                    <div>
                      <h3 className="text-white font-semibold">Adults</h3>
                      <p className="text-gray-400 text-sm">Ages 12+</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => handleTravelersChange('adults', -1)}
                        className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white transition-colors"
                      >
                        <Minus className="w-5 h-5" />
                      </button>
                      <span className="text-white font-semibold text-lg w-8 text-center">
                        {bookingData.travelers.adults}
                      </span>
                      <button
                        onClick={() => handleTravelersChange('adults', 1)}
                        className="w-10 h-10 bg-cyan-500 hover:bg-cyan-600 rounded-full flex items-center justify-center text-white transition-colors"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-gray-800 rounded-lg p-4">
                    <div>
                      <h3 className="text-white font-semibold">Children</h3>
                      <p className="text-gray-400 text-sm">Ages 2-11</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => handleTravelersChange('children', -1)}
                        className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white transition-colors"
                      >
                        <Minus className="w-5 h-5" />
                      </button>
                      <span className="text-white font-semibold text-lg w-8 text-center">
                        {bookingData.travelers.children}
                      </span>
                      <button
                        onClick={() => handleTravelersChange('children', 1)}
                        className="w-10 h-10 bg-cyan-500 hover:bg-cyan-600 rounded-full flex items-center justify-center text-white transition-colors"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-gray-800 rounded-lg p-4">
                    <div>
                      <h3 className="text-white font-semibold">Infants</h3>
                      <p className="text-gray-400 text-sm">Under 2</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => handleTravelersChange('infants', -1)}
                        className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white transition-colors"
                      >
                        <Minus className="w-5 h-5" />
                      </button>
                      <span className="text-white font-semibold text-lg w-8 text-center">
                        {bookingData.travelers.infants}
                      </span>
                      <button
                        onClick={() => handleTravelersChange('infants', 1)}
                        className="w-10 h-10 bg-cyan-500 hover:bg-cyan-600 rounded-full flex items-center justify-center text-white transition-colors"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Preferences */}
          {activeStep === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-lg font-medium text-white mb-3">What's your budget range?</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {['budget', 'medium', 'luxury'].map((budget) => (
                    <button
                      key={budget}
                      onClick={() => handleInputChange('preferences', { ...bookingData.preferences, budget })}
                      className={`p-4 rounded-lg border-2 transition-colors ${
                        bookingData.preferences.budget === budget
                          ? 'border-cyan-500 bg-cyan-500 bg-opacity-20'
                          : 'border-gray-700 hover:border-gray-600'
                      }`}
                    >
                      <h3 className="text-white font-semibold capitalize">{budget}</h3>
                      <p className="text-gray-400 text-sm">
                        {budget === 'budget' && '$500-1000'}
                        {budget === 'medium' && '$1000-2500'}
                        {budget === 'luxury' && '$2500+'}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-lg font-medium text-white mb-3">Accommodation preference</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {['hotel', 'resort', 'villa'].map((accommodation) => (
                    <button
                      key={accommodation}
                      onClick={() => handleInputChange('preferences', { ...bookingData.preferences, accommodation })}
                      className={`p-4 rounded-lg border-2 transition-colors ${
                        bookingData.preferences.accommodation === accommodation
                          ? 'border-cyan-500 bg-cyan-500 bg-opacity-20'
                          : 'border-gray-700 hover:border-gray-600'
                      }`}
                    >
                      <div className="flex items-center justify-center mb-2">
                        <Hotel className="w-8 h-8 text-cyan-400" />
                      </div>
                      <h3 className="text-white font-semibold capitalize">{accommodation}</h3>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 4: Package Selection */}
          {activeStep === 4 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-lg font-medium text-white mb-4">Recommended packages based on your preferences</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recommendedPackages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className={`bg-gray-800 rounded-xl overflow-hidden cursor-pointer transition-all hover:transform hover:scale-105 ${
                        selectedPackage?.id === pkg.id ? 'ring-2 ring-cyan-500' : ''
                      }`}
                      onClick={() => setSelectedPackage(pkg)}
                    >
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="text-white font-semibold text-lg mb-2">{pkg.title}</h4>
                        <div className="flex items-center gap-2 mb-2">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white">{pkg.rating}</span>
                          <span className="text-gray-400">• {pkg.duration}</span>
                        </div>
                        <p className="text-2xl font-bold text-white mb-2">${pkg.price}</p>
                        <div className="flex flex-wrap gap-2">
                          {pkg.includes.map((item, index) => (
                            <span key={index} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 5: Booking */}
          {activeStep === 5 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Complete Your Booking</h3>
                <p className="text-gray-400">You're almost there! Just a few more details to finalize your trip.</p>
              </div>

              {selectedPackage && (
                <div className="bg-gray-800 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-white mb-4">Trip Summary</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-400 mb-2">Package</p>
                      <p className="text-white font-semibold">{selectedPackage.title}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 mb-2">Duration</p>
                      <p className="text-white font-semibold">{selectedPackage.duration}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 mb-2">Travelers</p>
                      <p className="text-white font-semibold">
                        {bookingData.travelers.adults} Adults
                        {bookingData.travelers.children > 0 && `, ${bookingData.travelers.children} Children`}
                        {bookingData.travelers.infants > 0 && `, ${bookingData.travelers.infants} Infants`}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 mb-2">Total Price</p>
                      <p className="text-white font-semibold text-2xl">${selectedPackage.price}</p>
                    </div>
                  </div>
                </div>
              )}

              <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors">
                Complete Booking
              </button>
            </motion.div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            onClick={handlePreviousStep}
            disabled={activeStep === 1}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeStep === 1
                ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
          >
            Previous
          </button>
          
          <button
            onClick={handleNextStep}
            disabled={activeStep === steps.length}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeStep === steps.length
                ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                : 'bg-cyan-500 text-white hover:bg-cyan-600'
            }`}
          >
            {activeStep === steps.length ? 'Complete' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookNowPage;