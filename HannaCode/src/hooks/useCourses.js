import { useState, useEffect, useCallback } from 'react';
import courseService from '../services/courseService';

export const useCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const [isFetching, setIsFetching] = useState(false);
  const [lastFetchTime, setLastFetchTime] = useState(0);

  const handleError = (err, defaultMessage) => {
    if (err.response?.status === 429) {
      const waitTime = Math.min(2000 * Math.pow(2, retryCount), 10000);
      setError(`Server is busy. Retrying in ${waitTime/1000} seconds...`);
      setRetryCount(prev => prev + 1);
    } else {
      setError(err.message || defaultMessage);
      setRetryCount(0);
    }
  };

  const fetchCourses = useCallback(async (params = {}) => {
    if (isFetching) return;

    setIsFetching(true);
    try {
      setLoading(true);
      setError(null);
      const response = await courseService.getAllCourses(params);
      setCourses(response.data);
      setRetryCount(0);
    } catch (err) {
      handleError(err, 'Failed to fetch courses');
    } finally {
      setLoading(false);
      setIsFetching(false);
    }
  }, [isFetching]);

  const fetchCourseBySlug = useCallback(async (slug) => {
    if (isFetching) return;

    const now = Date.now();
    if (now - lastFetchTime < 2000) {
      console.log('Debouncing request...');
      return;
    }

    setIsFetching(true);
    setLastFetchTime(now);

    try {
      setLoading(true);
      setError(null);
      console.log('Fetching course with slug:', slug);
      
      const response = await courseService.getCourseBySlug(slug);
      console.log('Raw API response:', response);
      
      if (!response) {
        throw new Error('No response received from server');
      }
      
      setRetryCount(0);
      return response;
    } catch (err) {
      console.error('Error in fetchCourseBySlug:', err);
      handleError(err, 'Failed to fetch course');
      return null;
    } finally {
      setLoading(false);
      setIsFetching(false);
    }
  }, [isFetching, lastFetchTime]);

  const fetchCoursesByLanguage = useCallback(async (language) => {
    if (isFetching) return;

    setIsFetching(true);
    try {
      setLoading(true);
      setError(null);
      const response = await courseService.getCoursesByLanguage(language);
      setCourses(response.data);
      setRetryCount(0);
    } catch (err) {
      handleError(err, 'Failed to fetch courses by language');
    } finally {
      setLoading(false);
      setIsFetching(false);
    }
  }, [isFetching]);

  const fetchLessonsByLanguage = useCallback(async (language) => {
    if (isFetching) return;

    setIsFetching(true);
    try {
      setLoading(true);
      setError(null);
      const response = await courseService.getLessonsByLanguage(language);
      setRetryCount(0);
      return response.data;
    } catch (err) {
      handleError(err, 'Failed to fetch lessons by language');
      return null;
    } finally {
      setLoading(false);
      setIsFetching(false);
    }
  }, [isFetching]);

  const fetchCoursesByLevel = useCallback(async (level) => {
    if (isFetching) return;

    setIsFetching(true);
    try {
      setLoading(true);
      setError(null);
      const response = await courseService.getCoursesByLevel(level);
      setCourses(response.data);
      setRetryCount(0);
    } catch (err) {
      handleError(err, 'Failed to fetch courses by level');
    } finally {
      setLoading(false);
      setIsFetching(false);
    }
  }, [isFetching]);

  const fetchPremiumCourses = useCallback(async () => {
    if (isFetching) return;

    setIsFetching(true);
    try {
      setLoading(true);
      setError(null);
      const response = await courseService.getPremiumCourses();
      setCourses(response.data);
      setRetryCount(0);
    } catch (err) {
      handleError(err, 'Failed to fetch premium courses');
    } finally {
      setLoading(false);
      setIsFetching(false);
    }
  }, [isFetching]);

  return {
    courses,
    loading,
    error,
    retryCount,
    fetchCourses,
    fetchCourseBySlug,
    fetchCoursesByLanguage,
    fetchLessonsByLanguage,
    fetchCoursesByLevel,
    fetchPremiumCourses,
  };
}; 