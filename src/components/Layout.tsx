import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Plane, Globe } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
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
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 w-full bg-black bg-opacity-90 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-white tracking-wider">
              Soul Travel
            </Link>
            
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-cyan-400 ${
                    location.pathname === item.path ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-800">
              <nav className="flex flex-col space-y-3 pt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-sm font-medium transition-colors duration-200 hover:text-cyan-400 ${
                      location.pathname === item.path ? 'text-cyan-400' : 'text-gray-300'
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

      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2025 Soul Travel. All rights reserved. Trademark property of Soul Travel™.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;