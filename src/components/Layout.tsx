import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Plane, Globe, Sun, Moon, Home } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/flights', label: 'Flights', icon: Plane },
    { path: '/accommodation', label: 'Accommodation', icon: Globe },
    { path: '/connect', label: 'Connect', icon: Globe },
    { path: '/entertainment', label: 'Entertainment', icon: Globe },
    { path: '/support', label: 'Support', icon: Globe },
    { path: '/tourism', label: 'Tourism', icon: Globe },
    { path: '/transport', label: 'Transport', icon: Globe },
    { path: '/travel', label: 'Travel', icon: Globe },
    { path: '/book-now', label: 'Book Now', icon: Globe },
    { path: '/map', label: 'Map', icon: Globe },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'
    }`}>
      <header className={`fixed top-0 w-full backdrop-blur-md z-50 border-b transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-black bg-opacity-90 border-gray-800' 
          : 'bg-white bg-opacity-90 border-gray-200'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className={`text-2xl font-bold tracking-wider transition-colors ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Soul Travel
            </Link>
            
            <div className="flex items-center gap-4">
              <nav className="hidden lg:flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-sm font-medium transition-colors duration-200 hover:text-cyan-400 ${
                      location.pathname === item.path 
                        ? 'text-cyan-400' 
                        : isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  isDarkMode 
                    ? 'hover:bg-gray-800 text-gray-300' 
                    : 'hover:bg-gray-100 text-gray-600'
                }`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button
                onClick={toggleMenu}
                className={`lg:hidden p-2 rounded-md transition-colors ${
                  isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                }`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className={`lg:hidden mt-4 pb-4 border-t transition-colors ${
              isDarkMode ? 'border-gray-800' : 'border-gray-200'
            }`}>
              <nav className="flex flex-col space-y-3 pt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-sm font-medium transition-colors duration-200 hover:text-cyan-400 ${
                      location.pathname === item.path 
                        ? 'text-cyan-400' 
                        : isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      <main>{children}</main>

      <footer className={`border-t py-8 transition-colors ${
        isDarkMode 
          ? 'bg-black border-gray-800' 
          : 'bg-gray-50 border-gray-200'
      }`}>
        <div className="container mx-auto px-4 text-center">
          <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
            &copy; 2025 Soul Travel. All rights reserved. Trademark property of Soul Travel™.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;