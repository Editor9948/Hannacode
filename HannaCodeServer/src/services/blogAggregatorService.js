const axios = require('axios');
const Parser = require('rss-parser');
const parser = new Parser();

// Dev.to API service
class DevToService {
  constructor() {
    this.baseURL = 'https://dev.to/api';
  }

  async getLatestArticles(tag = null, perPage = 20) {
    try {
      let url = `${this.baseURL}/articles/latest?per_page=${perPage}`;
      if (tag) {
        url += `&tag=${tag}`;
      }
      
      const response = await axios.get(url);
      return response.data.map(article => ({
        id: article.id,
        title: article.title,
        description: article.description,
        url: article.url,
        coverImage: article.cover_image || article.social_image,
        publishedAt: article.published_at,
        tags: article.tag_list,
        readingTime: article.reading_time_minutes,
        author: {
          name: article.user.name,
          username: article.user.username,
          avatar: article.user.profile_image,
          twitter: article.user.twitter_username
        },
        source: 'dev.to',
        positive_reactions_count: article.positive_reactions_count,
        comments_count: article.comments_count
      }));
    } catch (error) {
      console.error('Error fetching Dev.to articles:', error);
      return [];
    }
  }

  async getTopArticles(timeframe = 'week', perPage = 20) {
    try {
      const url = `${this.baseURL}/articles?top=${timeframe}&per_page=${perPage}`;
      const response = await axios.get(url);
      return response.data.map(article => ({
        id: article.id,
        title: article.title,
        description: article.description,
        url: article.url,
        coverImage: article.cover_image || article.social_image,
        publishedAt: article.published_at,
        tags: article.tag_list,
        readingTime: article.reading_time_minutes,
        author: {
          name: article.user.name,
          username: article.user.username,
          avatar: article.user.profile_image,
          twitter: article.user.twitter_username
        },
        source: 'dev.to',
        positive_reactions_count: article.positive_reactions_count,
        comments_count: article.comments_count
      }));
    } catch (error) {
      console.error('Error fetching top Dev.to articles:', error);
      return [];
    }
  }
}

// RSS Feed service for aggregating multiple developer blogs
class RSSService {
  constructor() {
    this.feedUrls = [
      {
        url: 'https://css-tricks.com/feed/',
        name: 'CSS-Tricks',
        category: 'CSS'
      },
      {
        url: 'https://www.smashingmagazine.com/feed/',
        name: 'Smashing Magazine',
        category: 'Web Development'
      },
      {
        url: 'https://davidwalsh.name/feed',
        name: 'David Walsh Blog',
        category: 'JavaScript'
      },
      {
        url: 'https://kentcdodds.com/blog/rss.xml',
        name: 'Kent C. Dodds',
        category: 'React'
      },
      {
        url: 'https://overreacted.io/rss.xml',
        name: 'Dan Abramov (Overreacted)',
        category: 'React'
      },
      {
        url: 'https://www.freecodecamp.org/news/rss/',
        name: 'freeCodeCamp',
        category: 'Programming'
      },
      {
        url: 'https://alistapart.com/main/feed/',
        name: 'A List Apart',
        category: 'Web Design'
      },
      {
        url: 'https://developer.mozilla.org/en-US/blog/rss.xml',
        name: 'MDN Blog',
        category: 'Web Standards'
      },
      {
        url: 'https://web.dev/feed.xml',
        name: 'web.dev',
        category: 'Performance'
      },
      {
        url: 'https://blog.logrocket.com/feed/',
        name: 'LogRocket Blog',
        category: 'Frontend'
      },
      {
        url: 'https://scotch.io/feed',
        name: 'Scotch.io',
        category: 'Full Stack'
      },
      {
        url: 'https://css-weekly.com/feed/',
        name: 'CSS Weekly',
        category: 'CSS'
      },
      {
        url: 'https://stackoverflow.blog/feed/',
        name: 'Stack Overflow Blog',
        category: 'Programming'
      }
    ];
  }

  async parseRSSFeed(feedConfig) {
    try {
      // Simple timeout wrapper for RSS parsing
      const parseWithTimeout = (url, timeout = 10000) => {
        return Promise.race([
          parser.parseURL(url),
          new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Timeout')), timeout)
          )
        ]);
      };
      
      const feed = await parseWithTimeout(feedConfig.url, 10000);
      
      return feed.items.slice(0, 5).map(item => ({
        id: `rss-${Buffer.from(item.link).toString('base64').slice(0, 10)}`,
        title: item.title,
        description: item.contentSnippet || item.content,
        url: item.link,
        coverImage: item.enclosure?.url || null,
        publishedAt: item.pubDate,
        tags: [feedConfig.category],
        readingTime: Math.ceil((item.contentSnippet || '').split(' ').length / 200), // Estimate
        author: {
          name: item.creator || feed.title,
          username: feedConfig.name,
          avatar: feed.image?.url || null
        },
        source: feedConfig.name
      }));
    } catch (error) {
      // Only log connection errors, not full stack trace
      if (error.code === 'EAI_AGAIN' || error.code === 'ENOTFOUND') {
        console.log(`⚠️  ${feedConfig.name}: Network connectivity issue, skipping...`);
      } else if (error.message?.includes('404')) {
        console.log(`⚠️  ${feedConfig.name}: Feed not found (404), skipping...`);
      } else if (error.message === 'Timeout') {
        console.log(`⚠️  ${feedConfig.name}: Feed request timed out, skipping...`);
      } else {
        console.log(`⚠️  ${feedConfig.name}: Feed temporarily unavailable, skipping...`);
      }
      return [];
    }
  }

  async getAllRSSArticles() {
    try {
      const promises = this.feedUrls.map(feedConfig => this.parseRSSFeed(feedConfig));
      const results = await Promise.allSettled(promises);
      
      const allArticles = results
        .filter(result => result.status === 'fulfilled')
        .flatMap(result => result.value);

      // Sort by date (newest first)
      return allArticles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
    } catch (error) {
      console.error('Error fetching RSS articles:', error);
      return [];
    }
  }
}

// Combined blog service
class BlogAggregatorService {
  constructor() {
    this.devToService = new DevToService();
    this.rssService = new RSSService();
  }

  async getFeaturedArticles() {
    try {
      // Get top articles from Dev.to
      const topDevTo = await this.devToService.getTopArticles('week', 10);
      
      // Get RSS articles
      const rssArticles = await this.rssService.getAllRSSArticles();
      
      // Combine and sort by reactions/date
      const combined = [...topDevTo, ...rssArticles.slice(0, 10)];
      
      return combined
        .sort((a, b) => {
          const aScore = (a.positive_reactions_count || 0) + (new Date(a.publishedAt).getTime() / 1000000);
          const bScore = (b.positive_reactions_count || 0) + (new Date(b.publishedAt).getTime() / 1000000);
          return bScore - aScore;
        })
        .slice(0, 6);
    } catch (error) {
      console.error('Error getting featured articles:', error);
      return [];
    }
  }

  async getLatestArticles() {
    try {
      // Get latest from Dev.to
      const latestDevTo = await this.devToService.getLatestArticles(null, 15);
      
      // Get RSS articles
      const rssArticles = await this.rssService.getAllRSSArticles();
      
      // Combine and sort by date
      const combined = [...latestDevTo, ...rssArticles];
      
      return combined
        .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
        .slice(0, 20);
    } catch (error) {
      console.error('Error getting latest articles:', error);
      return [];
    }
  }

  async getArticlesByCategory(category) {
    try {
      // Get articles by tag from Dev.to
      const devToArticles = await this.devToService.getLatestArticles(category.toLowerCase(), 10);
      
      // Filter RSS articles by category
      const rssArticles = await this.rssService.getAllRSSArticles();
      const filteredRSS = rssArticles.filter(article => 
        article.tags.some(tag => tag.toLowerCase().includes(category.toLowerCase()))
      );
      
      const combined = [...devToArticles, ...filteredRSS];
      
      return combined
        .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
        .slice(0, 15);
    } catch (error) {
      console.error(`Error getting articles for category ${category}:`, error);
      return [];
    }
  }
}

module.exports = {
  DevToService,
  RSSService,
  BlogAggregatorService
};
