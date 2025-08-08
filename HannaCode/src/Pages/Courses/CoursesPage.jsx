import { Link } from "react-router-dom"
import { useState, useEffect, useMemo } from "react";
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { ArrowRight, BookOpen, Search } from "lucide-react"
import { Input } from "../../components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"

const DEFAULT_PLACEHOLDER = "/placeholder.svg";
const API_URL = process.env.REACT_APP_API_URL 

const levelColors = {
  beginner: "border-primary text-green-700",
  intermediate: "border-primary text-primary",
  advanced: "border-purple-500 text-purple-700",
};

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [search, setSearch] = useState("");
  const [imageLoadErrors, setImageLoadErrors] = useState({});

  const user = JSON.parse(localStorage.getItem("user"));
  const isAdminOrMentor = user && (user.role === "admin" || user.role === "mentor");


  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        setError("");
        
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error("Please login to view courses");
        }

        const response = await fetch(`${API_URL}/courses?noPagination=true`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          if (response.status === 401) {
            localStorage.removeItem('token');
            throw new Error("Please login to view courses");
          }
          throw new Error(`Failed to fetch courses: ${response.status}`);
        }

        const data = await response.json();
        
        if (!data.success) {
          throw new Error(data.message || "Failed to fetch courses");
        }

        if (!Array.isArray(data.data)) {
          throw new Error("Invalid course data format");
        }

        const courseList = data.data.map(course => {
          if (!course || !course._id) return null;
          const isFree = isAdminOrMentor ? true : course.isPremium === false;

          return {
            id: course._id,
            title: course.title || 'Untitled Course',
            description: course.description || 'No description available',
            level: course.level || course.level || 'Beginner',
            category: course.category || 'General',
            duration: course.duration ? `${Math.round(course.duration / 60)} min` : "Duration not specified",
            image: course.coverImage 
              ? course.coverImage.startsWith('http')
               ? course.coverImage
               : course.coverImage.startsWith('/images/')
               ? course.coverImage 
               : `/images/courses/${course.coverImage.replace(/^\/+/, '')}`
               : DEFAULT_PLACEHOLDER,
            // Support both 'lessons' and 'totalLessons'
            lessons: course.lessonCount || 0,
            path: `/courses/${course.slug || course._id}`,
            isFree,
            isPremium: course.isPremium === true,
            isPublished: course.isPublished || false,
            tags: course.tags || [],
            prerequisites: course.prerequisites || [],
            slug: course.slug || course._id
          };
        }).filter(Boolean);

        // Debug: Log all course titles and slugs
        console.log('Course slugs:', courseList.map(c => ({ title: c.title, slug: c.slug })));
        setCourses(courseList);
      } catch (err) {
        console.error("Error fetching courses:", err);
        setError(err.message || "Failed to load courses. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [isAdminOrMentor]);

  const handleImageError = (courseId) => {
    setImageLoadErrors(prev => ({ ...prev, [courseId]: true }));
  };

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      if (!course) return false;

      const categoryMatch = selectedCategory === "all" || 
        course.category.toLowerCase() === selectedCategory.toLowerCase();
      
      const levelMatch = selectedLevel === "all" || 
        course.level.toLowerCase() === selectedLevel.toLowerCase();
      
      const searchMatch = search.trim() === "" || 
        course.title.toLowerCase().includes(search.toLowerCase()) ||
        course.description.toLowerCase().includes(search.toLowerCase());
      
      return categoryMatch && levelMatch && searchMatch;
    });
  }, [courses, selectedCategory, selectedLevel, search]);

  if (loading) {
    return (
      <div className="container py-12 md:py-16">
        <div className="space-y-4 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Explore Our Programming Courses
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Loading courses...
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <Card key={index} className="animate-pulse">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-t-lg" />
              <CardHeader>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2" />
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
              </CardHeader>
              <CardContent>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2" />
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-2/3" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-12 md:py-16">
        <div className="space-y-4 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Explore Our Programming Courses
          </h1>
          <p className="mx-auto max-w-[700px] text-red-500 md:text-xl">
            {error}
          </p>
          <Button onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12 md:py-16">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Explore Our Programming Courses
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Discover our comprehensive collection of programming courses designed for all skill levels.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search courses..."
            className="pl-10"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-4">
          <Select defaultValue="all" onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="html">HTML</SelectItem>
              <SelectItem value="css">CSS</SelectItem>
              <SelectItem value="javascript">JavaScript</SelectItem>
              <SelectItem value="php">PHP</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all" onValueChange={setSelectedLevel}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCourses.length === 0 ? (
          <div className="col-span-full text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">No courses found matching your criteria.</p>
          </div>
        ) : (
          filteredCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden flex flex-col">
              <div className="relative h-48">
                <img
                  src={imageLoadErrors[course.id] ? DEFAULT_PLACEHOLDER : course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                  onError={() => handleImageError(course.id)}
                />
                <Badge
                  className={`absolute top-2 right-2 ${
                    course.isFree
                      ? "bg-primary text-white"
                      : "bg-yellow-500 text-white" 
                  }`}
                >
                  {course.isFree ? "Free" : "Premium"}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">{course.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge
                    variant="outline"
                    className={levelColors[course.level.toLowerCase()] || ""}
                  >
                    {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                  </Badge>
                  <Badge variant="outline">{course.category}</Badge>
                </div>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <BookOpen className="mr-2 h-4 w-4" />
                  {course.lessons} lessons
                </div>
              </CardContent>
              <CardFooter className="mt-auto">
                <Link to={`/courses/${course.slug}`} className="w-full">
                  <Button className="w-full">
                    View Course
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}