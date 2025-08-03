const express = require('express');
const router = express.Router();
const { executeJavaScript, executeCpp, executePython } = require('../services/codeExecutionService');

// Test endpoint
router.get('/test', (req, res) => {
  res.json({ message: 'Code execution service is working!' });
});

// Execute JavaScript code
router.post('/javascript', async (req, res) => {
  try {
    const { code } = req.body;
    
    if (!code) {
      return res.status(400).json({ 
        success: false, 
        error: "No code provided" 
      });
    }

    console.log("Executing JavaScript code:", code);
    const result = await executeJavaScript(code);
    console.log("JavaScript execution result:", result);
    
    res.json({ 
      success: true, 
      output: result.output,
      error: result.error 
    });
  } catch (error) {
    console.error("JavaScript execution error:", error);
    res.status(500).json({ 
      success: false, 
      error: error.message || "Error executing JavaScript code" 
    });
  }
});

// Execute C++ code
router.post('/cpp', async (req, res) => {
  try {
    const { code } = req.body;
    
    if (!code) {
      return res.status(400).json({ 
        success: false, 
        error: "No code provided" 
      });
    }

    console.log("Executing C++ code:", code);
    const result = await executeCpp(code);
    console.log("C++ execution result:", result);
    
    res.json({ 
      success: true, 
      output: result.output,
      error: result.error 
    });
  } catch (error) {
    console.error("C++ execution error:", error);
    res.status(500).json({ 
      success: false, 
      error: error.message || "Error executing C++ code" 
    });
  }
});

// Execute python code
router.post('/python', async (req, res) => {
  try {
    const { code } = req.body;
    
    if (!code) {
      return res.status(400).json({ 
        success: false, 
        error: "No code provided" 
      });
    }

    console.log("Executing python code:", code);
    const result = await executePython(code);
    console.log("python execution result:", result);
    
    res.json({ 
      success: true, 
      output: result.output,
      error: result.error 
    });
  } catch (error) {
    console.error("python execution error:", error);
    res.status(500).json({ 
      success: false, 
      error: error.message || "Error executing python code" 
    });
  }
});

module.exports = router; 