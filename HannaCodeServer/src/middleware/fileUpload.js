const multer = require('multer')
const path = require('path')
const ErrorResponse = require('../utils/errorResponse')

// Configure storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
  }
})

// File filter
const fileFilter = (req, file, cb) => {
  // Allow audio files for voice messages
  if (file.mimetype.startsWith('audio/')) {
    cb(null, true)
  } else {
    cb(new ErrorResponse('Only audio files are allowed', 400), false)
  }
}

// Configure upload
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB max file size
  }
})

module.exports = upload 