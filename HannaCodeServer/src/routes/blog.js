const express = require('express');
const { BlogAggregatorService } = require('../services/blogAggregatorService');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();
const blogService = new BlogAggregatorService();

// Apply authentication middleware to all blog routes
router.use(authenticateToken);

// @desc    Get featured articles
// @route   GET /api/v1/blog/featured  
// @access  Private (requires authentication)
router.get('/featured', async (req, res) => {
  try {
    const articles = await blogService.getFeaturedArticles();
    
    res.status(200).json({
      success: true,
      count: articles.length,
      data: articles
    });
  } catch (error) {
    console.error('Error fetching featured articles:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching featured articles'
    });
  }
});

// @desc    Get latest articles
// @route   GET /api/v1/blog/latest
// @access  Public
router.get('/latest', async (req, res) => {
  try {
    const articles = await blogService.getLatestArticles();
    
    res.status(200).json({
      success: true,
      count: articles.length,
      data: articles
    });
  } catch (error) {
    console.error('Error fetching latest articles:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching latest articles'
    });
  }
});

// @desc    Get articles by category
// @route   GET /api/v1/blog/category/:category
// @access  Public
router.get('/category/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const articles = await blogService.getArticlesByCategory(category);
    
    res.status(200).json({
      success: true,
      count: articles.length,
      category: category,
      data: articles
    });
  } catch (error) {
    console.error(`Error fetching articles for category ${req.params.category}:`, error);
    res.status(500).json({
      success: false,
      message: `Error fetching articles for category ${req.params.category}`
    });
  }
});

// @desc    Search articles
// @route   GET /api/v1/blog/search
// @access  Public
router.get('/search', async (req, res) => {
  try {
    const { 
      q: query, 
      source, 
      category, 
      minReadTime, 
      maxReadTime,
      sortBy = 'date' 
    } = req.query;
    
    if (!query) {
      return res.status(400).json({
        success: false,
        message: 'Search query is required'
      });
    }

    // Get all latest articles and filter by search query
    let allArticles = await blogService.getLatestArticles();
    
    // Filter by search query
    let filteredArticles = allArticles.filter(article => 
      article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.description.toLowerCase().includes(query.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())) ||
      article.author.name.toLowerCase().includes(query.toLowerCase())
    );

    // Filter by source
    if (source) {
      filteredArticles = filteredArticles.filter(article => 
        article.source.toLowerCase().includes(source.toLowerCase())
      );
    }

    // Filter by category
    if (category) {
      filteredArticles = filteredArticles.filter(article => 
        article.tags.some(tag => tag.toLowerCase().includes(category.toLowerCase()))
      );
    }

    // Filter by reading time
    if (minReadTime) {
      filteredArticles = filteredArticles.filter(article => 
        (article.readingTime || 0) >= parseInt(minReadTime)
      );
    }

    if (maxReadTime) {
      filteredArticles = filteredArticles.filter(article => 
        (article.readingTime || 0) <= parseInt(maxReadTime)
      );
    }

    // Sort results
    switch (sortBy) {
      case 'popularity':
        filteredArticles.sort((a, b) => (b.positive_reactions_count || 0) - (a.positive_reactions_count || 0));
        break;
      case 'readTime':
        filteredArticles.sort((a, b) => (a.readingTime || 0) - (b.readingTime || 0));
        break;
      case 'date':
      default:
        filteredArticles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
        break;
    }
    
    res.status(200).json({
      success: true,
      count: filteredArticles.length,
      query: query,
      filters: { source, category, minReadTime, maxReadTime, sortBy },
      data: filteredArticles
    });
  } catch (error) {
    console.error('Error searching articles:', error);
    res.status(500).json({
      success: false,
      message: 'Error searching articles'
    });
  }
});

// @desc    Get all available categories
// @route   GET /api/v1/blog/categories
// @access  Public
router.get('/categories', async (req, res) => {
  try {
    const categories = [
      'JavaScript',
      'React',
      'Node.js',
      'CSS',
      'HTML',
      'Web Development',
      'Frontend',
      'Backend',
      'Full Stack',
      'DevOps',
      'Python',
      'PHP',
      'TypeScript',
      'Vue',
      'Angular',
      'Database',
      'API',
      'Testing',
      'Performance',
      'Security',
      'Career',
      'Tutorial',
      'Tips',
      'Best Practices',
      'Programming',
      'Web Design',
      'Web Standards'
    ];
    
    res.status(200).json({
      success: true,
      count: categories.length,
      data: categories
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching categories'
    });
  }
});

// @desc    Get all available sources
// @route   GET /api/v1/blog/sources
// @access  Public
router.get('/sources', async (req, res) => {
  try {
    const sources = [
      'dev.to',
      'CSS-Tricks',
      'Smashing Magazine',
      'David Walsh Blog',
      'Kent C. Dodds',
      'Dan Abramov (Overreacted)',
      'freeCodeCamp',
      'A List Apart',
      'MDN Blog',
      'web.dev',
      'LogRocket Blog',
      'Scotch.io',
      'CSS Weekly',
      'Stack Overflow Blog'
    ];
    
    res.status(200).json({
      success: true,
      count: sources.length,
      data: sources
    });
  } catch (error) {
    console.error('Error fetching sources:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching sources'
    });
  }
});

module.exports = router;
