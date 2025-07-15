import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plane, Hotel, Users, Film, HelpCircle, Globe, Bus, Route, Ticket, MapPin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const HomePage: React.FC = () => {
  const { isDarkMode } = useTheme();

  const features = [
    {
      icon: Plane,
      title: 'Flights',
      description: 'Book affordable and flexible flights to any destination.',
      link: '/flights'
    },
    {
      icon: Hotel,
      title: 'Accommodation',
      description: 'Find places to stay that feel like home, wherever you are.',
      link: '/accommodation'
    },
    {
      icon: Users,
      title: 'Connect',
      description: 'Meet other travelers and share your journey with new friends.',
      link: '/connect'
    },
    {
      icon: Film,
      title: 'Entertainment',
      description: 'Discover what\'s happening around you—from concerts to street art.',
      link: '/entertainment'
    },
    {
      icon: HelpCircle,
      title: 'Support',
      description: 'Hire professional services like maids, babysitters, chefs, and more.',
      link: '/support'
    },
    {
      icon: Globe,
      title: 'Tourism',
      description: 'Explore cultural highlights and hidden gems globally.',
      link: '/tourism'
    },
    {
      icon: Bus,
      title: 'Transport',
      description: 'Get around with ease using our partnered transport options.',
      link: '/transport'
    },
    {
      icon: Route,
      title: 'Travel',
      description: 'Plan your itinerary with custom travel routes and tips.',
      link: '/travel'
    },
    {
      icon: Ticket,
      title: 'Book Now',
      description: 'Secure your next adventure in just a few clicks.',
      link: '/book-now'
    },
    {
      icon: MapPin,
      title: 'Map',
      description: 'Navigate your journey visually with our integrated map tool.',
      link: '/map'
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section with Split Video Layout */}
      <div className="relative h-screen w-full overflow-hidden flex">
        {/* Ocean Video - Left Half */}
        <div className="relative w-1/2 h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(0.4)' }}
          >
            <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent" />
        </div>

        {/* Island Video - Right Half */}
        <div className="relative w-1/2 h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(0.4)' }}
          >
            <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4" />
            <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-l from-green-900/50 to-transparent" />
        </div>

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl"
            >
              Explore the World with Soul
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow-lg"
            >
              Your journey begins here. Flights, stays, adventures, and unforgettable memories all in one place.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/flights"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started
              </Link>
              <Link
                to="/connect"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-200"
              >
                Discover More
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className={`py-20 transition-colors duration-300 ${
        isDarkMode ? 'bg-black' : 'bg-gray-50'
      }`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Why Choose Soul Travel?
            </h2>
            <p className={`text-xl max-w-3xl mx-auto transition-colors ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              We're not just another travel site. We're your journey companion, your inspiration, and your ticket to the best experiences around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-xl p-6 transition-all duration-300 hover:transform hover:scale-105 group ${
                  isDarkMode 
                    ? 'bg-gray-900 hover:bg-gray-800' 
                    : 'bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl'
                }`}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-cyan-500 rounded-lg mb-4 group-hover:bg-cyan-400 transition-colors">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-semibold mb-3 transition-colors ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{feature.title}</h3>
                <p className={`mb-4 transition-colors ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>{feature.description}</p>
                <Link
                  to={feature.link}
                  className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center group"
                >
                  Explore {feature.title}
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;