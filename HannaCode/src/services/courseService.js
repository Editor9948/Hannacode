import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL 

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  // Add timeout
  timeout: 10000,
  // Remove withCredentials as it's causing CORS issues
  withCredentials: false,
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add response interceptor for better error handling
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Log the error for debugging
    console.error('API Error:', {
      url: originalRequest?.url,
      method: originalRequest?.method,
      status: error.response?.status,
      message: error.message,
      response: error.response?.data
    });

    // Handle network errors
    if (!error.response) {
      console.error('Network Error:', error.message);
      throw new Error('Unable to connect to the server. Please check your internet connection.');
    }

    // If the error is due to rate limiting and we haven't retried yet
    if (error.response?.status === 429 && !originalRequest._retry) {
      originalRequest._retry = true;

      // Wait for 2 seconds before retrying
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Retry the request
      return api(originalRequest);
    }

    return Promise.reject(error);
  }
);

// Helper function to handle API calls with retry
const makeRequest = async (requestFn, maxRetries = 3) => {
  let lastError;
  
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await requestFn();
    } catch (error) {
      lastError = error;
      
      // If it's a rate limit error, wait before retrying
      if (error.response?.status === 429) {
        const waitTime = Math.min(2000 * Math.pow(2, i), 10000); // Exponential backoff with max 10s
        console.log(`Rate limited, waiting ${waitTime}ms before retry ${i + 1}/${maxRetries}`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
        continue;
      }
      
      // For network errors, retry with increasing delay
      if (!error.response) {
        const waitTime = Math.min(1000 * Math.pow(2, i), 5000); // Shorter delay for network errors
        console.log(`Network error, waiting ${waitTime}ms before retry ${i + 1}/${maxRetries}`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
        continue;
      }
      
      // For other errors, throw immediately
      throw error;
    }
  }
  
  throw lastError;
};

// Course Service
const courseService = {
  // Get all courses
  getAllCourses: async (params = {}) => {
    // Disable pagination by default to fetch all courses
    const queryParams = { noPagination: true, ...params };
    return makeRequest(async () => {
      const response = await api.get('/courses', { params: queryParams });
      return response.data;
    });
  },

  // Get course by slug
// ...existing code...

getCourseBySlug: async (slug) => {
  return makeRequest(async () => {
    const endpoint = `/courses/slug/${slug}`;
    // Add timestamp to prevent caching
    const timestamp = new Date().getTime();
    const response = await api.get(endpoint, {
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      },
      params: {
        _t: timestamp
      }
    });

    if (!response.data) {
      throw new Error('No data received from the server');
    }

    if (!response.data.success) {
      throw new Error(response.data.message || 'Failed to fetch course');
    }

    return response.data;
  });
},
     
  // Get courses by language
  getCoursesByLanguage: async (language) => {
    return makeRequest(async () => {
      const response = await api.get(`/courses/language/${language}`);
      return response.data;
    });
  },

  // Get lessons by language
  getLessonsByLanguage: async (language) => {
    return makeRequest(async () => {
      const response = await api.get(`/courses/language/${language}/lessons`);
      return response.data;
    });
  },

  // Get courses by level
  getCoursesByLevel: async (level) => {
    return makeRequest(async () => {
      const response = await api.get(`/courses/level/${level}`);
      return response.data;
    });
  },

 getCourseById: async (id) => {
  return makeRequest(async () => {
    const endpoint = `/courses/${id}`;
    // Add timestamp to prevent caching
    const timestamp = new Date().getTime();
    const response = await api.get(endpoint, {
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      },
      params: {
        _t: timestamp
      }
    });

    if (!response.data) {
      throw new Error('No data received from the server');
    }

    if (!response.data.success) {
      throw new Error(response.data.message || 'Failed to fetch course');
    }

    return response.data;
  });
}, 

  // Get premium courses
  getPremiumCourses: async () => {
    return makeRequest(async () => {
      const response = await api.get('/courses/premium');
      return response.data;
    });
  },
};

export default courseService; 