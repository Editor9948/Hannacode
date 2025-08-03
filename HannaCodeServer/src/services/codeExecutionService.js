const { exec } = require('child_process');
const fs = require('fs').promises;
const path = require('path');
const os = require('os');
const logger = require('../utils/logger');

// Create temp directory if it doesn't exist
const tempDir = path.join(os.tmpdir(), 'hannacode');
fs.mkdir(tempDir, { recursive: true }).catch(console.error);

// Check if a command is available
const isCommandAvailable = (command) => {
  return new Promise((resolve) => {
    exec(`where ${command}`, (error) => {
      resolve(!error);
    });
  });
};

// Ensure temp directory exists
const ensureTempDir = async () => {
  try {
    await fs.mkdir(tempDir, { recursive: true });
  } catch (error) {
    logger.error('Error creating temp directory:', error);
    throw error;
  }
};

// Execute JavaScript code
async function executeJavaScript(code) {
  const tempFile = path.join(tempDir, `script_${Date.now()}.js`);
  
  try {
    // Check if Node.js is available
    const hasNode = await isCommandAvailable('node');
    if (!hasNode) {
      return {
        output: '',
        error: 'Node.js is not installed or not in PATH. Please install Node.js to run JavaScript code.'
      };
    }

    // Write code to temporary file
    await fs.writeFile(tempFile, code);
    
    return new Promise((resolve, reject) => {
      exec(`node "${tempFile}"`, (error, stdout, stderr) => {
        // Clean up temp file
        fs.unlink(tempFile).catch(console.error);
        
        if (error) {
          console.error('JavaScript execution error:', error);
          resolve({
            output: '',
            error: stderr || error.message
          });
        } else {
          resolve({
            output: stdout,
            error: ''
          });
        }
      });
    });
  } catch (error) {
    console.error('JavaScript file operation error:', error);
    return {
      output: '',
      error: error.message
    };
  }
}

// Execute C++ code
async function executeCpp(code) {
  // Replace HTML entities with actual characters
  const cleanCode = code
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

  const tempFile = path.join(tempDir, `program_${Date.now()}.cpp`);
  const executable = tempFile.replace('.cpp', os.platform() === 'win32' ? '.exe' : '');
  
  try {
    // Check if g++ is available
    const hasGpp = await isCommandAvailable('g++');
    if (!hasGpp) {
      return {
        output: '',
        error: 'g++ compiler is not installed or not in PATH. Please install MinGW or another C++ compiler to run C++ code.\n\n' +
               'To install MinGW on Windows:\n' +
               '1. Download MinGW installer from https://sourceforge.net/projects/mingw/\n' +
               '2. Run the installer and select the "mingw32-gcc-g++" package\n' +
               '3. Add MinGW\\bin to your system PATH\n' +
               '4. Restart your computer'
      };
    }

    // Write code to temporary file
    await fs.writeFile(tempFile, cleanCode);
    
    return new Promise((resolve, reject) => {
      // First compile the code
      const compileCmd = os.platform() === 'win32' 
        ? `g++ "${tempFile}" -o "${executable}"`
        : `g++ "${tempFile}" -o "${executable}"`;
      
      exec(compileCmd, (compileError, compileStdout, compileStderr) => {
        if (compileError) {
          console.error('C++ compilation error:', compileError);
          // Clean up temp files
          Promise.all([
            fs.unlink(tempFile).catch(console.error),
            fs.unlink(executable).catch(console.error)
          ]).catch(console.error);
          
          resolve({
            output: '',
            error: compileStderr || compileError.message
          });
          return;
        }
        
        // If compilation successful, run the executable
        exec(`"${executable}"`, (runError, runStdout, runStderr) => {
          // Clean up temp files
          Promise.all([
            fs.unlink(tempFile).catch(console.error),
            fs.unlink(executable).catch(console.error)
          ]).catch(console.error);
          
          if (runError) {
            console.error('C++ execution error:', runError);
            resolve({
              output: '',
              error: runStderr || runError.message
            });
          } else {
            resolve({
              output: runStdout,
              error: ''
            });
          }
        });
      });
    });
  } catch (error) {
    console.error('C++ file operation error:', error);
    return {
      output: '',
      error: error.message
    };
  }
}





// Execute Python code
async function executePython(code) {
  // Replace HTML entities with actual characters
  const cleanCode = code
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

  const tempFile = path.join(tempDir, `program_${Date.now()}.py`);
  
  try {
    // Check if Python is available
    const hasPython = await isCommandAvailable('python') || await isCommandAvailable('python3');
    if (!hasPython) {
      return {
        output: '',
        error: 'Python interpreter is not installed or not in PATH. Please install Python to run Python code.\n\n' +
               'To install Python:\n' +
               '1. Download Python from https://python.org/downloads/\n' +
               '2. Run the installer and make sure to check "Add Python to PATH"\n' +
               '3. Restart your computer\n' +
               '4. Verify installation by running "python --version" in terminal'
      };
    }

    // Write code to temporary file
    await fs.writeFile(tempFile, cleanCode);
    
    return new Promise((resolve, reject) => {
      // Determine Python command
      const pythonCmd = os.platform() === 'win32' ? 'python' : 'python3';
      const executeCmd = `"${pythonCmd}" "${tempFile}"`;
      
      exec(executeCmd, { timeout: 30000 }, (error, stdout, stderr) => {
        // Clean up temp file
        fs.unlink(tempFile).catch(console.error);
        
        if (error) {
          console.error('Python execution error:', error);
          
          let errorMessage = stderr || error.message;
          
          // Handle timeout
          if (error.killed && error.signal === 'SIGTERM') {
            errorMessage = `Code execution timed out after 30 seconds`;
          }
          
          // Clean up file paths in error messages for security
          errorMessage = errorMessage.replace(new RegExp(tempFile.replace(/\\/g, '\\\\'), 'g'), 'program.py');
          
          resolve({
            output: '',
            error: errorMessage
          });
        } else {
          resolve({
            output: stdout,
            error: stderr || ''
          });
        }
      });
    });
  } catch (error) {
    console.error('Python file operation error:', error);
    return {
      output: '',
      error: error.message
    };
  }
}


module.exports = {
  executeJavaScript,
  executeCpp,
  executePython
}; 