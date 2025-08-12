import { useState, useEffect } from 'react';
import { apiCall } from '../lib/api';

export const useBlogData = () => {
  const [featuredArticles, setFeaturedArticles] = useState([]);
  const [latestArticles, setLatestArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sources, setSources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  // Fetch featured articles
  const fetchFeaturedArticles = async () => {
    try {
      setError(null);
      const data = await apiCall('/blog/featured');
      if (data.success) {
        setFeaturedArticles(data.data);
        setLastUpdated(new Date().toISOString());
      } else {
        throw new Error(data.message || 'Failed to fetch featured articles');
      }
    } catch (err) {
      console.error('Error fetching featured articles:', err);
      if (err.message?.includes('401') || err.message?.includes('Access denied')) {
        setError('Please sign in to access blog content.');
      } else {
        setError('Failed to load featured articles. Please try again later.');
      }
      setFeaturedArticles([]);
    }
  };

  // Fetch latest articles
  const fetchLatestArticles = async () => {
    try {
      setError(null);
      const data = await apiCall('/blog/latest');
      if (data.success) {
        setLatestArticles(data.data);
        setLastUpdated(new Date().toISOString());
      } else {
        throw new Error(data.message || 'Failed to fetch latest articles');
      }
    } catch (err) {
      console.error('Error fetching latest articles:', err);
      if (err.message?.includes('401') || err.message?.includes('Access denied')) {
        setError('Please sign in to access blog content.');
      } else {
        setError('Failed to load latest articles. Please try again later.');
      }
      setLatestArticles([]);
    }
  };

  // Fetch categories
  const fetchCategories = async () => {
    try {
      const data = await apiCall('/blog/categories');
      if (data.success) {
        setCategories(data.data);
      }
    } catch (err) {
      console.error('Error fetching categories:', err);
      setCategories([]);
    }
  };

  // Fetch sources
  const fetchSources = async () => {
    try {
      const data = await apiCall('/blog/sources');
      if (data.success) {
        setSources(data.data);
      }
    } catch (err) {
      console.error('Error fetching sources:', err);
      setSources([]);
    }
  };

  // Search articles with advanced filters
  const searchArticles = async (searchParams = {}) => {
    try {
      setLoading(true);
      setError(null);
      
      const queryParams = new URLSearchParams();
      if (searchParams.query) queryParams.append('query', searchParams.query);
      if (searchParams.source) queryParams.append('source', searchParams.source);
      if (searchParams.category) queryParams.append('category', searchParams.category);
      if (searchParams.readingTime) queryParams.append('readingTime', searchParams.readingTime);
      if (searchParams.sortBy) queryParams.append('sortBy', searchParams.sortBy);
      if (searchParams.limit) queryParams.append('limit', searchParams.limit);
      
      const data = await apiCall(`/blog/search?${queryParams.toString()}`);
      if (data.success) {
        setLastUpdated(new Date().toISOString());
        return data.data;
      } else {
        throw new Error(data.message || 'Search failed');
      }
    } catch (err) {
      console.error('Error searching articles:', err);
      if (err.message?.includes('401') || err.message?.includes('Access denied')) {
        setError('Please sign in to access blog content.');
      } else {
        setError('Failed to search articles. Please try again later.');
      }
      return [];
    } finally {
      setLoading(false);
    }
  };

  // Get articles by category
  const getArticlesByCategory = async (category) => {
    return searchArticles({ category });
  };

  // Get articles by source
  const getArticlesBySource = async (source) => {
    return searchArticles({ source });
  };

  // Clear error
  const clearError = () => {
    setError(null);
  };

  // Refresh all data
  const refreshData = async () => {
    setLoading(true);
    await Promise.all([
      fetchFeaturedArticles(),
      fetchLatestArticles(),
      fetchCategories(),
      fetchSources()
    ]);
    setLoading(false);
  };

  // Initial data fetch
  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      await Promise.all([
        fetchFeaturedArticles(),
        fetchLatestArticles(),
        fetchCategories(),
        fetchSources()
      ]);
      setLoading(false);
    };

    fetchAllData();
  }, []);

  // Utility function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Utility function to get reading time text
  const getReadingTimeText = (minutes) => {
    if (!minutes) return 'Quick read';
    return `${minutes} min read`;
  };

  // Utility function to get article tags/categories
  const getArticleTags = (article) => {
    return article.tags || [];
  };

  return {
    // Data
    featuredArticles,
    latestArticles,
    categories,
    sources,
    loading,
    error,
    lastUpdated,
    
    // Actions
    searchArticles,
    getArticlesByCategory,
    getArticlesBySource,
    clearError,
    refreshData,
    
    // Utility functions
    formatDate,
    getReadingTimeText,
    getArticleTags,
    
    // Legacy support
    refetch: refreshData
  };
};

export default useBlogData;
