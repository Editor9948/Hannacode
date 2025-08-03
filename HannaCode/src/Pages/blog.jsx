import {Link} from "react-router-dom"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Input } from "../components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Search, Calendar, Clock, ArrowRight } from 'lucide-react'

export default function BlogPage() {
  const featuredPosts = [
    {
      id: 1,
      title: "10 JavaScript Concepts Every Web Developer Should Know",
      excerpt:
        "Master these essential JavaScript concepts to level up your web development skills and build more robust applications.",
      coverImage: "/placeholder.svg?height=400&width=800",
      date: "May 10, 2025",
      readTime: "8 min read",
      category: "JavaScript",
      author: {
        name: "David Wilson",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Senior JavaScript Developer",
      },
      slug: "javascript-concepts-web-developers",
    },
    {
      id: 2,
      title: "Building Responsive Layouts with CSS Grid",
      excerpt:
        "Learn how to create complex, responsive layouts using CSS Grid Layout. This comprehensive guide covers everything from basic concepts to advanced techniques.",
      coverImage: "/placeholder.svg?height=400&width=800",
      date: "May 5, 2025",
      readTime: "12 min read",
      category: "CSS",
      author: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Frontend Developer & CSS Expert",
      },
      slug: "responsive-layouts-css-grid",
    },
    {
      id: 3,
      title: "Getting Started with PHP 8: New Features and Improvements",
      excerpt:
        "Explore the powerful new features in PHP 8 including union types, named arguments, attributes, and more. See how these changes can improve your code.",
      coverImage: "/placeholder.svg?height=400&width=800",
      date: "April 28, 2025",
      readTime: "10 min read",
      category: "PHP",
      author: {
        name: "Michael Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Full Stack Developer",
      },
      slug: "getting-started-php-8",
    },
  ]

  const recentPosts = [
    {
      id: 4,
      title: "Web Accessibility: Making Your Sites Inclusive for Everyone",
      excerpt:
        "Learn how to make your websites accessible to all users, including those with disabilities. This guide covers WCAG guidelines, ARIA attributes, and best practices.",
      coverImage: "/placeholder.svg?height=300&width=600",
      date: "April 20, 2025",
      readTime: "15 min read",
      category: "Accessibility",
      author: {
        name: "Emma Rodriguez",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Web Accessibility Specialist",
      },
      slug: "web-accessibility-inclusive-sites",
    },
    {
      id: 5,
      title: "Understanding React Hooks: A Comprehensive Guide",
      excerpt:
        "Dive deep into React Hooks and learn how to use useState, useEffect, useContext, and custom hooks to build powerful, functional React components.",
      coverImage: "/placeholder.svg?height=300&width=600",
      date: "April 15, 2025",
      readTime: "14 min read",
      category: "React",
      author: {
        name: "David Wilson",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Senior JavaScript Developer",
      },
      slug: "understanding-react-hooks",
    },
    {
      id: 6,
      title: "Introduction to API Design: RESTful Principles and Best Practices",
      excerpt:
        "Learn the fundamentals of designing clean, efficient, and developer-friendly APIs following RESTful principles and industry best practices.",
      coverImage: "/placeholder.svg?height=300&width=600",
      date: "April 10, 2025",
      readTime: "11 min read",
      category: "API",
      author: {
        name: "Michael Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Full Stack Developer",
      },
      slug: "api-design-restful-principles",
    },
    {
      id: 7,
      title: "Mastering CSS Flexbox: A Complete Guide",
      excerpt:
        "Everything you need to know about CSS Flexbox, from basic concepts to advanced layout techniques. Learn with practical examples and interactive demos.",
      coverImage: "/placeholder.svg?height=300&width=600",
      date: "April 5, 2025",
      readTime: "13 min read",
      category: "CSS",
      author: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Frontend Developer & CSS Expert",
      },
      slug: "mastering-css-flexbox",
    },
    {
      id: 8,
      title: "Securing Your Web Applications: Essential Security Practices",
      excerpt:
        "Learn how to protect your web applications from common security threats with these essential security practices and techniques.",
      coverImage: "/placeholder.svg?height=300&width=600",
      date: "March 30, 2025",
      readTime: "16 min read",
      category: "Security",
      author: {
        name: "Alex Taylor",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Security Specialist",
      },
      slug: "securing-web-applications",
    },
    {
      id: 9,
      title: "Introduction to TypeScript for JavaScript Developers",
      excerpt:
        "A beginner-friendly guide to TypeScript for JavaScript developers. Learn how to add static typing to your JavaScript projects and improve code quality.",
      coverImage: "/placeholder.svg?height=300&width=600",
      date: "March 25, 2025",
      readTime: "9 min read",
      category: "TypeScript",
      author: {
        name: "David Wilson",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Senior JavaScript Developer",
      },
      slug: "typescript-for-javascript-developers",
    },
  ]

  const categories = [
    { name: "JavaScript", count: 12 },
    { name: "CSS", count: 8 },
    { name: "HTML", count: 6 },
    { name: "PHP", count: 5 },
    { name: "React", count: 7 },
    { name: "TypeScript", count: 4 },
    { name: "Accessibility", count: 3 },
    { name: "Security", count: 2 },
    { name: "API", count: 3 },
  ]

  const popularTags = [
    "JavaScript",
    "CSS",
    "HTML",
    "React",
    "PHP",
    "TypeScript",
    "Web Development",
    "Frontend",
    "Backend",
    "Accessibility",
    "Performance",
    "Security",
  ]

  return (
    <div className="container py-12">
      <div className="space-y-4 mb-12">
        <h1 className="text-4xl font-bold">HannaCode Blog</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Insights, tutorials, and resources to help you master programming and web development.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search articles..." className="pl-10" />
        </div>
      </div>

      {/* Featured Posts */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featuredPosts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden border-2 border-secondary/20 hover:border-secondary transition-colors h-full flex flex-col"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={post.coverImage || "/placeholder.svg"}
                  alt={post.title}
                  className="object-cover w-full h-full transition-transform hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="outline" className="bg-secondary/20 text-primary border-secondary">
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="mr-1 h-3 w-3" /> {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="flex items-center text-sm">
                  <Calendar className="mr-1 h-3 w-3" /> {post.date}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2 flex-grow">
                <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2">
                  <Avatar className="h-7 w-7">
                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                    <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm font-medium">{post.author.name}</div>
                    <div className="text-xs text-muted-foreground">{post.author.role}</div>
                  </div>
                </div>
                <Link to={`/blog/${post.slug}`}>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
 
      {/* Blog Tabs: Recent, Categories, Tags */}
      <Tabs defaultValue="recent" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="recent">Recent Posts</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="tags">Popular Tags</TabsTrigger>
        </TabsList>
        <TabsContent value="recent">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <Card key={post.id} className="flex flex-col h-full">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={post.coverImage || "/placeholder.svg"}
                    alt={post.title}
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant="outline" className="bg-secondary/20 text-primary border-secondary">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" /> {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="flex items-center text-sm">
                    <Calendar className="mr-1 h-3 w-3" /> {post.date}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2 flex-grow">
                  <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-7 w-7">
                      <AvatarImage src={post.author.avatar} alt={post.author.name} />
                      <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-sm font-medium">{post.author.name}</div>
                      <div className="text-xs text-muted-foreground">{post.author.role}</div>
                    </div>
                  </div>
                  <Link to={`/blog/${post.slug}`}>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="categories">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Card key={cat.name} className="flex flex-col items-center justify-center p-6">
                <CardTitle className="mb-2">{cat.name}</CardTitle>
                <Badge variant="secondary" className="text-primary">{cat.count} posts</Badge>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="tags">
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-secondary/20 text-primary border-secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}