const API_URL = process.env.REACT_APP_API_URL 

export const codeApi = {
  // Execute code using Piston API
  decodeHtmlEntities: (text) => {
    const entities = {
      '&lt;': '<',
      '&gt;': '>',
      '&amp;': '&',
      '&quot;': '"',
      '&#39;': "'",
      '&nbsp;': ' '
    };
    return text.replace(/&[^;]+;/g, entity => entities[entity] || entity);
  },

  executeCode: async (language, code, input = '') => {
    try {
      // First decode any HTML entities in the code
      const decodedCode = codeApi.decodeHtmlEntities(code);
      console.log('Decoded code:', decodedCode); // For debugging

      const response = await fetch(`${API_URL}/compiler/execute`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          language,
          code: decodedCode,
          input
        }),
      });
      console.log('API Response status:', response.status); // For debugging

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error executing code:', error);
      throw error;
    }
  },

  // Get supported languages
  getSupportedLanguages: async () => {
    try {
      const response = await fetch(`${API_URL}/compiler/languages`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error getting languages:', error);
      throw error;
    }
  }
};
