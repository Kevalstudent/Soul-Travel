import { useState, useCallback } from 'react';
import { bookingAPI, AccommodationSearchParams, AccommodationResult } from '../services/api';

export const useAccommodationSearch = () => {
  const [accommodations, setAccommodations] = useState<AccommodationResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchAccommodations = useCallback(async (params: AccommodationSearchParams) => {
    setLoading(true);
    setError(null);
    
    try {
      // Get destination ID first
      const destinationId = await bookingAPI.getDestinationId(params.destination);
      const searchParams = { ...params, destinationId };
      
      const results = await bookingAPI.searchHotels(searchParams);
      setAccommodations(results);
    } catch (err) {
      setError('Failed to search accommodations. Please try again.');
      console.error('Accommodation search error:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    accommodations,
    loading,
    error,
    searchAccommodations,
  };
};