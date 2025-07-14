import React, { useState, useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';
import { useFlightSearch } from '../hooks/useFlightSearch';
import { AirportSuggestion } from '../services/api';

interface AirportAutocompleteProps {
  value: string;
  onChange: (value: string, airport?: AirportSuggestion) => void;
  placeholder: string;
  className?: string;
}

const AirportAutocomplete: React.FC<AirportAutocompleteProps> = ({
  value,
  onChange,
  placeholder,
  className = '',
}) => {
  const [suggestions, setSuggestions] = useState<AirportSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);
  const { searchAirports } = useFlightSearch();
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const searchTimeout = setTimeout(async () => {
      if (value.length >= 2) {
        setLoading(true);
        try {
          const results = await searchAirports(value);
          setSuggestions(results);
          setShowSuggestions(true);
        } catch (error) {
          console.error('Airport search failed:', error);
        } finally {
          setLoading(false);
        }
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    }, 300);

    return () => clearTimeout(searchTimeout);
  }, [value, searchAirports]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        suggestionsRef.current &&
        !inputRef.current.contains(event.target as Node) &&
        !suggestionsRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSuggestionClick = (airport: AirportSuggestion) => {
    onChange(`${airport.name} (${airport.code})`, airport);
    setShowSuggestions(false);
  };

  return (
    <div className="relative">
      <div className="relative">
        <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 ${className}`}
          placeholder={placeholder}
          autoComplete="off"
        />
        {loading && (
          <div className="absolute right-3 top-3">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-cyan-500"></div>
          </div>
        )}
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div
          ref={suggestionsRef}
          className="absolute z-50 w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-lg max-h-60 overflow-y-auto"
        >
          {suggestions.map((airport, index) => (
            <div
              key={`${airport.code}-${index}`}
              onClick={() => handleSuggestionClick(airport)}
              className="px-4 py-3 hover:bg-gray-700 cursor-pointer border-b border-gray-700 last:border-b-0"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-medium">{airport.name}</div>
                  <div className="text-gray-400 text-sm">
                    {airport.city}, {airport.country}
                  </div>
                </div>
                <div className="text-cyan-400 font-mono text-sm">
                  {airport.code}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AirportAutocomplete;