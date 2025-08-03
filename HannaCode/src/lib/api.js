import axios from 'axios';

// Use the correct base URL for the API
const API_URL = process.env.REACT_APP_API_URL 

console.log('API URL:', API_URL); // Log the API URL being used

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  timeout: 30000, // 30 seconds timeout for code execution
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for logging
api.interceptors.request.use(
  (config) => {
    console.log('API Request:', {
      method: config.method,
      url: config.url,
      data: config.data,
    });
    return config;
  },
  (error) => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for logging
api.interceptors.response.use(
  (response) => {
    console.log('API Response:', {
      status: response.status,
      data: response.data,
    });
    return response;
  },
  (error) => {
    console.error('API Response Error:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
    });
    return Promise.reject(error);
  }
);

// Course API calls
export const courseApi = {
  // Get all courses
  getAllCourses: async () => {
    try {
      const response = await api.get('/courses');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get course by slug
  getCourseBySlug: async (slug) => {
    try {
      const response = await api.get(`/courses/slug/${slug}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get lessons by language
  getLessonsByLanguage: async (language) => {
    try {
      const response = await api.get(`/courses/language/${language}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get courses by level
  getCoursesByLevel: async (level) => {
    try {
      const response = await api.get(`/courses/level/${level}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

// Code execution API
export const codeApi = {
  executeJavaScript: async (code) => {
    try {
      const response = await api.post('/code/javascript', { code });
      return response.data;
    } catch (error) {
      console.error('JavaScript execution error:', error);
      throw {
        message: error.response?.data?.error || error.message || 'Error executing JavaScript code'
      };
    }
  },

  executeCpp: async (code) => {
    try {
      const response = await api.post('/code/cpp', { code });
      return response.data;
    } catch (error) {
      console.error('C++ execution error:', error);
      throw {
        message: error.response?.data?.error || error.message || 'Error executing C++ code'
      };
    }
  },

   executePython: async (code) => {
    try {
      const response = await api.post('/code/python', { code });
      return response.data;
    } catch (error) {
      console.error('Python execution error:', error);
      throw {
        message: error.response?.data?.error || error.message || 'Error executing Python code'
      };
    }
  }
};

export default api; 