import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Input } from "../components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { 
  Search, 
  Calendar, 
  Clock, 
  ExternalLink, 
  Loader2, 
  RefreshCw, 
  Share2, 
  Download,
  Printer,
  FileText,
  Twitter,
  Linkedin,
  Copy,
  Lock,
  User
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import useBlogData from "../hooks/useBlogData"
import showToast from "../lib/toast"
import "../Styles/print.css"

export default function BlogPage() {
  const navigate = useNavigate();
  const {
    featuredArticles,
    latestArticles,
    categories,
    sources,
    loading,
    error,
    searchArticles,
    getArticlesByCategory,
    getArticlesBySource,
    formatDate,
    getReadingTimeText,
    getArticleTags,
    refreshData
  } = useBlogData();

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSource, setSelectedSource] = useState("all");
  const [selectedReadingTime, setSelectedReadingTime] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [categoryArticles, setCategoryArticles] = useState([]);
  const [sourceArticles, setSourceArticles] = useState([]);
  const [activeTab, setActiveTab] = useState("featured");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [showNewsletterOptions, setShowNewsletterOptions] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [user, setUser] = useState(null);

  // Check authentication status
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      const userData = localStorage.getItem('user');
      
      if (token && userData) {
        try {
          const parsedUser = JSON.parse(userData);
          setUser(parsedUser);
          setIsAuthenticated(true);
        } catch (error) {
          console.error('Error parsing user data:', error);
          // Clear invalid data
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
      setAuthLoading(false);
    };

    checkAuth();
  }, []);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      showToast('Please sign in to access the HannaCode Blog', 'error');
      navigate('/login?redirect=/blog');
    }
  }, [authLoading, isAuthenticated, navigate]);

  const handleSearch = async (e) => {
    e.preventDefault();
    
    setIsSearching(true);
    
    const searchParams = {
      query: searchQuery.trim(),
      source: selectedSource && selectedSource !== "all" ? selectedSource : undefined,
      category: selectedCategory && selectedCategory !== "all" ? selectedCategory : undefined,
      readingTime: selectedReadingTime && selectedReadingTime !== "all" ? selectedReadingTime : undefined,
      sortBy: sortBy || 'date',
      limit: 50
    };
    
    // Remove empty params
    Object.keys(searchParams).forEach(key => 
      searchParams[key] === undefined && delete searchParams[key]
    );
    
    const results = await searchArticles(searchParams);
    setSearchResults(results);
    setActiveTab("search");
    setIsSearching(false);
  };

  const handleCategoryFilter = async (category) => {
    setSelectedCategory(category);
    setActiveTab("category");
    const articles = await getArticlesByCategory(category);
    setCategoryArticles(articles);
  };

  const handleSourceFilter = async (source) => {
    setSelectedSource(source);
    setActiveTab("source");
    const articles = await getArticlesBySource(source);
    setSourceArticles(articles);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedSource("all");
    setSelectedReadingTime("all");
    setSortBy("date");
    setSearchResults([]);
  };

  // Social sharing functions
  const shareToTwitter = (article) => {
    const text = `Check out this article: ${article.title}`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(article.url)}&via=HannaCode`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const shareToLinkedIn = (article) => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(article.url)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const copyArticleLink = async (article) => {
    try {
      await navigator.clipboard.writeText(article.url);
      showToast('Article link copied to clipboard!', 'success');
    } catch (err) {
      console.error('Failed to copy link:', err);
      showToast('Failed to copy link. Please try again.', 'error');
    }
  };

  // Export functions
  const exportToMarkdown = (articles) => {
    try {
      const markdown = articles.map(article => 
        `# ${article.title}\n\n**Author:** ${article.author.name}\n**Source:** ${article.source}\n**Published:** ${formatDate(article.publishedAt)}\n**Reading Time:** ${getReadingTimeText(article.readingTime)}\n\n${article.description}\n\n[Read More](${article.url})\n\n---\n\n`
      ).join('');
      
      const blob = new Blob([markdown], { type: 'text/markdown' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `hannacode-articles-${new Date().toISOString().split('T')[0]}.md`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      showToast(`Exported ${articles.length} article${articles.length > 1 ? 's' : ''} to Markdown!`, 'success');
    } catch (err) {
      console.error('Export failed:', err);
      showToast('Export failed. Please try again.', 'error');
    }
  };

  const printArticles = () => {
    window.print();
  };

  // Newsletter functions (non-database alternatives)
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) {
      showToast('Please enter a valid email address', 'error');
      return;
    }
    setShowNewsletterOptions(true);
  };

  const subscribeViaEmail = () => {
    const subject = 'HannaCode Newsletter Subscription';
    const body = `Hi!%0A%0AI'd like to subscribe to the HannaCode newsletter.%0A%0AEmail: ${newsletterEmail}%0A%0AThanks!`;
    const mailtoLink = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    showToast('Email client opened! Please send the email to complete subscription.', 'success');
    setNewsletterEmail('');
    setShowNewsletterOptions(false);
  };

  const subscribeViaFormspree = async () => {
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: newsletterEmail,
          message: 'Newsletter subscription request from HannaCode blog'
        }),
      });
      
      if (response.ok) {
        showToast('Successfully subscribed! Welcome to HannaCode newsletter.', 'success');
        setNewsletterEmail('');
        setShowNewsletterOptions(false);
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      showToast('Subscription failed. Please try the email option.', 'error');
    }
  };

  const subscribeViaNetlify = async () => {
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "newsletter",
          "email": newsletterEmail
        }).toString()
      });
      
      if (response.ok) {
        showToast('Successfully subscribed! Welcome to HannaCode newsletter.', 'success');
        setNewsletterEmail('');
        setShowNewsletterOptions(false);
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      showToast('Subscription failed. Please try the email option.', 'error');
    }
  };

  const renderArticleCard = (article, featured = false) => (
    <Card key={article.id} className={`group hover:shadow-lg transition-all duration-300 article-card ${featured ? 'border-primary/20' : ''}`}>
      {article.coverImage && (
        <div className="relative overflow-hidden article-image no-print">
          <img
            src={article.coverImage}
            alt={article.title}
            className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
              featured ? 'h-64' : 'h-48'
            }`}
          />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-white/90 text-black">
              {article.source}
            </Badge>
          </div>
        </div>
      )}
      
      {/* Print-only header */}
      <div className="print-only">
        <div className="article-source">Source: {article.source}</div>
        <div className="article-url">URL: {article.url}</div>
      </div>
      
      <CardHeader className={featured ? 'pb-3' : 'pb-2'}>
        <div className={`flex items-center gap-2 text-sm text-muted-foreground mb-2 article-meta ${featured ? '' : 'no-print'}`}>
          <Calendar className="h-4 w-4 no-print" />
          <span>{formatDate(article.publishedAt)}</span>
          <Clock className="h-4 w-4 ml-2 no-print" />
          <span>{getReadingTimeText(article.readingTime)}</span>
        </div>
        <CardTitle className={`group-hover:text-primary transition-colors article-title ${featured ? 'text-xl' : 'text-lg'}`}>
          <a href={article.url} target="_blank" rel="noopener noreferrer" className="hover:underline no-print">
            {article.title}
          </a>
          <span className="print-only">{article.title}</span>
        </CardTitle>
        <CardDescription className={`article-description ${featured ? 'text-base' : ''}`}>
          {article.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center gap-3 mb-3 article-author">
          <Avatar className="h-8 w-8 no-print">
            <AvatarImage src={article.author.avatar} alt={article.author.name} />
            <AvatarFallback>{article.author.name?.charAt(0) || 'A'}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">
              <span className="print-only">Author: </span>
              {article.author.name}
            </p>
            <p className="text-xs text-muted-foreground truncate no-print">
              @{article.author.username}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-1 mb-3 no-print">
          {getArticleTags(article).slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        {article.positive_reactions_count && (
          <div className="flex items-center gap-4 text-sm text-muted-foreground reactions no-print">
            <span>❤️ {article.positive_reactions_count}</span>
            {article.comments_count && <span>💬 {article.comments_count}</span>}
          </div>
        )}
        
        {/* Print-only additional info */}
        <div className="print-only article-meta">
          <div>Published: {formatDate(article.publishedAt)}</div>
          <div>Reading Time: {getReadingTimeText(article.readingTime)}</div>
          {getArticleTags(article).length > 0 && (
            <div>Tags: {getArticleTags(article).slice(0, 5).join(', ')}</div>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-0 flex flex-col gap-2 no-print">
        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read Article
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
        
        {/* Social sharing and export buttons */}
        <div className="flex gap-1 w-full social-buttons">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="flex-1">
                <Share2 className="h-4 w-4 mr-1" />
                Share
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem onClick={() => shareToTwitter(article)}>
                <Twitter className="h-4 w-4 mr-2" />
                Twitter
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => shareToLinkedIn(article)}>
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => copyArticleLink(article)}>
                <Copy className="h-4 w-4 mr-2" />
                Copy Link
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
            onClick={() => exportToMarkdown([article])}
          >
            <FileText className="h-4 w-4 mr-1" />
            Export
          </Button>
        </div>
      </CardFooter>
    </Card>
  );

  // Show loading while checking authentication
  if (authLoading) {
    return (
      <div className="container py-16">
        <div className="flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin mr-3" />
          <span className="text-lg">Checking authentication...</span>
        </div>
      </div>
    );
  }

  // Don't render blog content if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="container py-16">
        <div className="text-center">
          <Lock className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-2xl font-bold mb-4">Blog Access Restricted</h2>
          <p className="text-muted-foreground mb-6">
            Please sign in to access the HannaCode Blog with curated articles from expert developers.
          </p>
          <div className="space-x-4">
            <Button onClick={() => navigate('/login')}>
              Sign In
            </Button>
            <Button variant="outline" onClick={() => navigate('/register')}>
              Create Account
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="container py-16">
        <div className="flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin mr-3" />
          <span className="text-lg">Loading articles from expert developers...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-16">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <Button onClick={refreshData} variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <div className="flex justify-between items-start mb-12">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <h1 className="text-4xl font-bold">HannaCode Blog</h1>
            <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
              <Lock className="h-3 w-3 mr-1" />
              Members Only
            </Badge>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Curated articles from expert developers, software engineers, and tech thought leaders from {sources.length}+ sources.
          </p>
          {user && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="h-4 w-4" />
              <span>Welcome back, <strong>{user.username}</strong>!</span>
            </div>
          )}
        </div>
        
        {/* Export, Print, and User Actions */}
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export All
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => exportToMarkdown(activeTab === 'featured' ? featuredArticles : activeTab === 'latest' ? latestArticles : searchResults.length > 0 ? searchResults : categoryArticles.length > 0 ? categoryArticles : sourceArticles.length > 0 ? sourceArticles : featuredArticles)}>
                <FileText className="h-4 w-4 mr-2" />
                Export as Markdown
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="outline" onClick={printArticles}>
            <Printer className="h-4 w-4 mr-2" />
            Print
          </Button>
        </div>
      </div>

      {/* Enhanced Search Section */}
      <div className="space-y-4 mb-8 search-container no-print">
        <form onSubmit={handleSearch} className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search articles from expert developers..." 
            className="pl-10" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
        
        {/* Advanced Filters */}
        <div className="flex flex-wrap gap-4 filter-container no-print">
          <Select value={selectedSource} onValueChange={setSelectedSource}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by source" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sources</SelectItem>
              {sources.map((source) => (
                <SelectItem key={source} value={source}>
                  {source}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.slice(0, 15).map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={selectedReadingTime} onValueChange={setSelectedReadingTime}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Reading time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any length</SelectItem>
              <SelectItem value="quick">Quick read (&lt; 5 min)</SelectItem>
              <SelectItem value="medium">Medium read (5-10 min)</SelectItem>
              <SelectItem value="long">Long read (&gt; 10 min)</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date">Latest first</SelectItem>
              <SelectItem value="popularity">Most popular</SelectItem>
              <SelectItem value="reading_time">Reading time</SelectItem>
            </SelectContent>
          </Select>
          
          <div className="flex gap-2">
            <Button type="submit" onClick={handleSearch} disabled={isSearching}>
              {isSearching ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Search className="mr-2 h-4 w-4" />
              )}
              Search
            </Button>
            
            <Button 
              type="button" 
              variant="outline" 
              onClick={clearFilters}
              disabled={!searchQuery && 
                       (!selectedSource || selectedSource === "all") && 
                       (!selectedCategory || selectedCategory === "all") && 
                       (!selectedReadingTime || selectedReadingTime === "all")}
            >
              Clear Filters
            </Button>
          </div>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="featured">Featured</TabsTrigger>
          <TabsTrigger value="latest">Latest</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="sources">Sources</TabsTrigger>
        </TabsList>

        <TabsContent value="featured" className="space-y-8">
          {/* Print-only title */}
          <div className="print-only">
            <h1 className="print-title">HannaCode Blog - Featured Articles</h1>
            <p className="print-subtitle">Top articles from the developer community</p>
            <p className="print-info">{featuredArticles.length} featured articles</p>
          </div>
          
          <div className="space-y-4 no-print">
            <h2 className="text-2xl font-bold">Featured Articles</h2>
            <p className="text-muted-foreground">
              Top articles from the developer community this week
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 articles-grid">
            {featuredArticles.map(article => renderArticleCard(article, true))}
          </div>
        </TabsContent>

        <TabsContent value="latest" className="space-y-8">
          {/* Print-only title */}
          <div className="print-only">
            <h1 className="print-title">HannaCode Blog - Latest Articles</h1>
            <p className="print-subtitle">Fresh content from expert developers</p>
            <p className="print-info">{latestArticles.length} latest articles</p>
          </div>
          
          <div className="space-y-4 no-print">
            <h2 className="text-2xl font-bold">Latest Articles</h2>
            <p className="text-muted-foreground">
              Fresh content from expert developers around the world
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 articles-grid">
            {latestArticles.map(article => renderArticleCard(article))}
          </div>
        </TabsContent>

        <TabsContent value="categories" className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Browse by Category</h2>
            <p className="text-muted-foreground">
              Explore articles by programming language and technology
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <Card 
                key={index} 
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handleCategoryFilter(category)}
              >
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold">{category}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="sources" className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Browse by Source</h2>
            <p className="text-muted-foreground">
              Explore articles from {sources.length} expert developer sources
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {sources.map((source, index) => (
              <Card 
                key={index} 
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handleSourceFilter(source)}
              >
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold text-sm">{source}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {searchResults.length > 0 && (
          <TabsContent value="search" className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Search Results</h2>
              <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <span>{searchResults.length} articles found</span>
                {searchQuery && <span>for "{searchQuery}"</span>}
                {selectedSource && selectedSource !== "all" && <Badge variant="outline">Source: {selectedSource}</Badge>}
                {selectedCategory && selectedCategory !== "all" && <Badge variant="outline">Category: {selectedCategory}</Badge>}
                {selectedReadingTime && selectedReadingTime !== "all" && <Badge variant="outline">Reading time: {selectedReadingTime}</Badge>}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map(article => renderArticleCard(article))}
            </div>
          </TabsContent>
        )}

        {activeTab === "category" && (
          <TabsContent value="category" className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">{selectedCategory} Articles</h2>
              <p className="text-muted-foreground">
                {categoryArticles.length} articles about {selectedCategory}
              </p>
            </div>
            {categoryArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryArticles.map(article => renderArticleCard(article))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No articles found for this category.</p>
              </div>
            )}
          </TabsContent>
        )}

        {activeTab === "source" && (
          <TabsContent value="source" className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Articles from {selectedSource}</h2>
              <p className="text-muted-foreground">
                {sourceArticles.length} articles from {selectedSource}
              </p>
            </div>
            {sourceArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sourceArticles.map(article => renderArticleCard(article))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No articles found from this source.</p>
              </div>
            )}
          </TabsContent>
        )}
      </Tabs>

      <div className="mt-16 space-y-8 no-print">
        {/* Newsletter Subscription */}
        <Card className="bg-muted/50 newsletter-section">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">
              Get the latest articles from expert developers delivered to your inbox
            </p>
            
            {!showNewsletterOptions ? (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <Input 
                  placeholder="Enter your email" 
                  type="email" 
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1" 
                  required
                />
                <Button type="submit">Subscribe</Button>
              </form>
            ) : (
              <div className="space-y-4 max-w-md mx-auto">
                <p className="text-sm text-muted-foreground text-center">
                  Choose your preferred subscription method:
                </p>
                <div className="space-y-2">
                  <Button 
                    onClick={subscribeViaEmail} 
                    variant="outline" 
                    className="w-full"
                  >
                    📧 Subscribe via Email
                  </Button>
                  <Button 
                    onClick={subscribeViaFormspree} 
                    variant="outline" 
                    className="w-full"
                  >
                    📝 Subscribe via Formspree (Free)
                  </Button>
                  <Button 
                    onClick={subscribeViaNetlify} 
                    variant="outline" 
                    className="w-full"
                  >
                    🌐 Subscribe via Netlify Forms (Free)
                  </Button>
                </div>
                <Button 
                  onClick={() => setShowNewsletterOptions(false)} 
                  variant="ghost" 
                  size="sm"
                  className="w-full"
                >
                  ← Back
                </Button>
              </div>
            )}
            
            <div className="mt-4 text-center">
              <p className="text-xs text-muted-foreground">
                🔒 We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 stats-section">
          <Card className="text-center p-4">
            <CardContent className="p-0">
              <div className="text-2xl font-bold text-primary">{sources.length}+</div>
              <div className="text-sm text-muted-foreground">Expert Sources</div>
            </CardContent>
          </Card>
          <Card className="text-center p-4">
            <CardContent className="p-0">
              <div className="text-2xl font-bold text-primary">{categories.length}+</div>
              <div className="text-sm text-muted-foreground">Tech Categories</div>
            </CardContent>
          </Card>
          <Card className="text-center p-4">
            <CardContent className="p-0">
              <div className="text-2xl font-bold text-primary">Daily</div>
              <div className="text-sm text-muted-foreground">Fresh Content</div>
            </CardContent>
          </Card>
          <Card className="text-center p-4">
            <CardContent className="p-0">
              <div className="text-2xl font-bold text-primary">Free</div>
              <div className="text-sm text-muted-foreground">Always Free</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
     