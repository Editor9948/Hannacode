const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware to verify JWT token
const authenticateToken = async (req, res, next) => {
  try {
    console.log('🔐 Auth middleware - Headers:', req.headers.authorization);
    
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
      console.log('❌ Auth middleware - No token provided');
      return res.status(401).json({
        success: false,
        message: 'Access denied. No token provided.'
      });
    }

    console.log('🎫 Auth middleware - Token found:', token.substring(0, 20) + '...');

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('✅ Auth middleware - Token decoded:', decoded);
    
    // Check if user still exists
    const user = await User.findById(decoded.id);
    if (!user) {
      console.log('❌ Auth middleware - User not found:', decoded.id);
      return res.status(401).json({
        success: false,
        message: 'Access denied. User not found.'
      });
    }

    console.log('👤 Auth middleware - User found:', user.username);

    // Check if user is verified (optional for blog access)
    // if (!user.isVerified) {
    //   return res.status(401).json({
    //     success: false,
    //     message: 'Access denied. Please verify your email first.'
    //   });
    // }

    // Add user info to request
    req.user = {
      id: user._id,
      username: user.username,
      email: user.email,
      isVerified: user.isVerified
    };

    console.log('🎉 Auth middleware - Authentication successful for:', user.username);
    next();
  } catch (error) {
    console.log('💥 Auth middleware - Error:', error.message);
    
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({
        success: false,
        message: 'Access denied. Invalid token.'
      });
    }
    
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        message: 'Access denied. Token expired.'
      });
    }

    console.error('Auth middleware error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error during authentication.'
    });
  }
};

// Optional middleware - doesn't block if no token
const optionalAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id);
      
      if (user && user.isVerified) {
        req.user = {
          id: user._id,
          username: user.username,
          email: user.email,
          isVerified: user.isVerified
        };
      }
    }
    
    next();
  } catch (error) {
    // Continue without user info if token is invalid
    next();
  }
};

module.exports = {
  authenticateToken,
  optionalAuth
};
