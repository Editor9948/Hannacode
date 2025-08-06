const express = require('express');
const router = express.Router();
const { runCode, getSupportedLanguages } = require('../services/pistonService');

// Get supported languages 
router.get('/languages', async (req, res) => {
    try {
        const result = await getSupportedLanguages();
        if (result.success) {
            res.json(result.languages);
        } else {
            res.status(500).json({ error: result.error });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Execute code
router.post('/execute', async (req, res) => {
    try {
        const { language, code, input } = req.body;
        console.log('Received code execution request:', {
            language,
            code: code.substring(0, 100) + '...', // Log first 100 chars for debugging
            input
        });

        if (!language || !code) {
            return res.status(400).json({
                error: 'Language and code are required'
            });
        }

        const result = await runCode(language, code, input);
        
        if (result.success) {
            res.json(result);
        } else {
            res.status(500).json({ error: result.error });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
