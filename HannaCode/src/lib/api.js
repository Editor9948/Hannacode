import axios from 'axios';

// Use the correct base URL for the API
const API_URL = process.env.REACT_APP_API_URL 

console.log('API URL:', API_URL); // Log the API URL being used

// Create axios instance with interceptors for logging
const api = axios.create({
  baseURL: API_URL,
  timeout: 30000, // 30 seconds timeout for code execution
  headers: {
    'Content-Type': 'application/json',
  },
});

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

// Code execution API interface
export const codeApi = {
  /**
   * Execute code using the Piston API
   * @param {string} language - The programming language to execute (e.g., 'python', 'javascript', 'cpp')
   * @param {string} code - The source code to execute
   * @returns {Promise<{success: boolean, output: string, error: string|null}>}
   */
  validateCode(language, code) {
    // Common patterns to check for potentially unsafe or non-hardcoded inputs
    const unsafePatterns = {
      cpp: [
        { pattern: /\bcin\b/, message: "Input using 'cin' is not allowed. Please use hardcoded values." },
        { pattern: /\bgetline\b/, message: "Input using 'getline' is not allowed. Please use hardcoded values." },
        { pattern: /\bscanf\b/, message: "Input using 'scanf' is not allowed. Please use hardcoded values." },
        { pattern: /\bgetchar\b/, message: "Input using 'getchar' is not allowed. Please use hardcoded values." }
      ],
      javascript: [
        { pattern: /\bprompt\b/, message: "Browser prompts are not allowed. Please use hardcoded values." },
        { pattern: /\bprocess\.stdin\b/, message: "Reading from stdin is not allowed. Please use hardcoded values." },
        { pattern: /\brequire\b|\bimport\b/, message: "Importing modules is not allowed for security reasons." }
      ],
      python: [
        { pattern: /\binput\b/, message: "Input function is not allowed. Please use hardcoded values." },
        { pattern: /\bopen\b/, message: "File operations are not allowed for security reasons." },
        { pattern: /\bimport\s+(?!math|random|datetime)/, message: "Only basic math, random, and datetime imports are allowed." }
      ]
    };

    const patterns = unsafePatterns[language] || [];
    for (const { pattern, message } of patterns) {
      if (pattern.test(code)) {
        return { isValid: false, error: message };
      }
    }
    return { isValid: true };
  },

  async executeCode(language, code) {
    try {
      // Validate code first
      const validation = this.validateCode(language, code);
      if (!validation.isValid) {
        return {
          success: false,
          output: '',
          error: validation.error
        };
      }

      // Decode HTML entities in the code
      const decodedCode = code.replace(/&lt;/g, '<')
                             .replace(/&gt;/g, '>')
                             .replace(/&amp;/g, '&')
                             .replace(/&quot;/g, '"')
                             .replace(/&#39;/g, "'");

      const response = await api.post('/execute', {
        language,
        code: decodedCode,
      });

      const data = response.data;
      return {
        success: true,
        output: data.output,
        error: data.error || null,
      };
    } catch (error) {
      console.error(`Error executing ${language} code:`, error);
      return {
        success: false,
        output: '',
        error: error.response?.data?.error || error.message || `Error executing ${language} code`,
      };
    }
  },

  /**
   * Test API connection
   * @returns {Promise<object>}
   */
  async testConnection() {
    try {
      const response = await api.get('/test');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || error.message || 'Error testing connection');
    }
  }
};

export default api;