const axios = require('axios');

const PISTON_API = 'https://emkc.org/api/v2/piston';

const decodeHtmlEntities = (text) => {
    const entities = {
        '&lt;': '<',
        '&gt;': '>',
        '&amp;': '&',
        '&quot;': '"',
        '&#39;': "'",
        '&nbsp;': ' '
    };
    return text.replace(/&[^;]+;/g, entity => entities[entity] || entity);
};

const validateCode = (language, code) => {
    const unsafePatterns = {
        cpp: [
            /\bcin\b/,
            /\bgetline\b/,
            /\bscanf\b/,
            /\bgetchar\b/,
            /\bfopen\b/,
            /\bifstream\b/,
            /\bofstream\b/
        ],
        javascript: [
            /\bprocess\b/,
            /\brequire\b/,
            /\bimport\b/,
            /\beval\b/,
            /\bnew\s+Function\b/,         // Block Function constructor but allow normal functions
            /\bfs\b/,
            /\bchild_process\b/,
            /\bdocument\b/,               // Block browser APIs
            /\bwindow\b/,
            /\blocalStorage\b/,
            /\bnavigator\b/,
            /\bfetch\b/,                  // Block network requests
            /\bXMLHttpRequest\b/,
            /\bWebSocket\b/
        ],
        python: [
            /\binput\b/,
            /\bopen\b/,
            /\bos\b/,
            /\bsys\b/,
            /\bsubprocess\b/,
            /\bimport\s+(?!math|random|datetime)\w+/,
            /\bexec\b/,
            /\beval\b/
        ]
    };

    const patterns = unsafePatterns[language] || [];
    for (const pattern of patterns) {
        if (pattern.test(code)) {
            return {
                isValid: false,
                error: `Code contains unsafe operations. Only hardcoded values are allowed.`
            };
        }
    }
    return { isValid: true };
};

const runCode = async (language, code, input = '') => {
    try {
        // First validate the code
        const validation = validateCode(language, code);
        if (!validation.isValid) {
            return {
                success: false,
                error: validation.error
            };
        }

        // Decode any remaining HTML entities in the code
        const decodedCode = decodeHtmlEntities(code);
        console.log('Decoded code on server:', decodedCode);

        const response = await axios.post(`${PISTON_API}/execute`, {
            language,
            version: '*', // Latest version
            files: [{
                content: decodedCode
            }],
            stdin: input
        });

        return {
            success: true,
            output: response.data.run.output,
            error: response.data.run.stderr,
            language: response.data.language,
            version: response.data.version
        };
    } catch (error) {
        return {
            success: false,
            error: error.response?.data?.message || error.message
        };
    }
};

const getSupportedLanguages = async () => {
    try {
        const response = await axios.get(`${PISTON_API}/runtimes`);
        return {
            success: true,
            languages: response.data
        };
    } catch (error) {
        return {
            success: false,
            error: error.response?.data?.message || error.message
        };
    }
};

module.exports = {
    runCode,
    getSupportedLanguages
};
