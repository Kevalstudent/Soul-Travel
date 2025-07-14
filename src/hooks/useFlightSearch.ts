import { useState, useCallback } from 'react';
import { amadeusAPI, FlightSearchParams, FlightSearchResult, AirportSuggestion } from '../services/api';

export const useFlightSearch = () => {
  const [flights, setFlights] = useState<FlightSearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchFlights = useCallback(async (params: FlightSearchParams) => {
    setLoading(true);
    setError(null);
    
    try {
      const results = await amadeusAPI.searchFlights(params);
      setFlights(results);
    } catch (err) {
      setError('Failed to search flights. Please try again.');
      console.error('Flight search error:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const searchAirports = useCallback(async (query: string): Promise<AirportSuggestion[]> => {
    if (query.length < 2) return [];
    
    try {
      return await amadeusAPI.getAirportSuggestions(query);
    } catch (err) {
      console.error('Airport search error:', err);
      return [];
    }
  }, []);

  return {
    flights,
    loading,
    error,
    searchFlights,
    searchAirports,
  };
};