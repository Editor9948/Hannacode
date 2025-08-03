import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Button } from "../../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card"
import { Badge } from "../../../components/ui/badge"
import { Clock, BookOpen, Users, Star, CheckCircle, X } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar"
import { useCourses } from "../../../hooks/useCourses"

export default function CoursePage() {
  const { slug } = useParams();
  const { loading, error, fetchCourseBySlug } = useCourses();
  const [courseData, setCourseData] = useState(null);
  const [errorState, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const loadCourse = async () => {
      try {
        console.log('Loading course with slug:', slug);
        const response = await fetchCourseBySlug(slug);
        console.log('Course data received:', response);
        
        if (response && response.data) {
          console.log('Setting course data:', response.data);
          setCourseData(response.data);
          setError(null);
          setRetryCount(0);
        } else {
          console.error('Invalid course data structure:', response);
          setError('Invalid course data received from server');
          if (retryCount < 3) {
            setTimeout(() => {
              setRetryCount(prev => prev + 1);
            }, 2000);
          }
        }
      } catch (err) {
        console.error('Error loading course:', err);
        setError(err.message || 'Failed to load course');
        if (retryCount < 3) {
          setTimeout(() => {
            setRetryCount(prev => prev + 1);
          }, 2000);
        }
      }
    };
    loadCourse();
  }, [slug, fetchCourseBySlug, retryCount]);

  useEffect(() => {
    console.log('Current courseData:', courseData);
  }, [courseData]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (errorState) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-500">
          <p>Error: {errorState}</p>
          <p className="text-sm mt-2">Please check if the course exists and try again.</p>
          {retryCount < 3 && (
            <p className="text-sm mt-2">Retrying in 2 seconds...</p>
          )}
        </div>
      </div>
    );
  }

  if (!courseData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-gray-500">
          <p>Course not found</p>
          <p className="text-sm mt-2">The course you're looking for doesn't exist or has been removed.</p>
        </div>
      </div>
    );
  }

  console.log('Rendering course with data:', courseData);

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">{courseData.title}</h1>
            <p className="text-xl text-muted-foreground mb-4">{courseData.description}</p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center">
                <Badge variant="outline" className="bg-secondary/20 text-primary border-secondary">
                  {courseData.level}
                </Badge>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Clock className="mr-1 h-4 w-4" />
                {courseData.duration}
              </div>
              <div className="flex items-center text-muted-foreground">
                <BookOpen className="mr-1 h-4 w-4" />
                {courseData.lessonCount} lessons
              </div>
              <div className="flex items-center text-muted-foreground">
                <Users className="mr-1 h-4 w-4" />
                {courseData.enrolledStudents?.toLocaleString() || 0} students
              </div>
              {courseData.rating && (
                <div className="flex items-center">
                  <div className="flex mr-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(courseData.rating) ? "fill-primary text-primary" : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-muted-foreground">
                    {courseData.rating} ({courseData.reviews || 0} reviews)
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
            <img
              src={courseData.coverImage || "/placeholder.svg"}
              alt={courseData.title}
              className="object-cover w-full h-full"
            />
          </div>

          <Tabs defaultValue="overview" className="w-full mb-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">About This Course</h2>
                  <p className="text-muted-foreground">{courseData.longDescription || courseData.description}</p>
                </div>

                {courseData.prerequisites && courseData.prerequisites.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Prerequisites</h2>
                    <div className="grid grid-cols-1 gap-3">
                      {courseData.prerequisites.map((prerequisite, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0" />
                          <span>{prerequisite}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {courseData.instructor && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Meet Your Instructor</h2>
                    <div className="flex flex-col md:flex-row gap-4 items-start">
                      <Avatar className="h-20 w-20">
                        <AvatarImage
                          src={courseData.instructor.avatar || "/placeholder.svg"}
                          alt={courseData.instructor.name}
                        />
                        <AvatarFallback>
                          {courseData.instructor.name
                            ?.split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-xl font-bold">{courseData.instructor.name}</h3>
                        <p className="text-muted-foreground mb-2">{courseData.instructor.role}</p>
                        <p>{courseData.instructor.bio}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>
            <TabsContent value="curriculum" className="mt-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Course Content</h2>
                <div className="text-sm text-muted-foreground mb-6">
                  {courseData.modules?.length || 0} modules • {courseData.lessonCount} lessons • {courseData.duration} total
                </div>

                {courseData.modules && courseData.modules.length > 0 ? (
                <div className="space-y-4">
                  {courseData.modules.map((module, moduleIndex) => (
                    <Card key={moduleIndex} className="overflow-hidden">
                      <CardHeader className="py-4 bg-secondary/10">
                        <div className="flex justify-between items-center">
                          <div>
                            <CardTitle className="text-lg">Module {moduleIndex + 1}: {module.title}</CardTitle>
                            {module.description && (
                              <CardDescription className="mt-2">{module.description}</CardDescription>
                            )}
                          </div>
                          <Badge variant="outline" className="bg-background">
                            {module.lessons?.length || 0} lessons
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="p-0">
                        <div className="divide-y divide-border">
                          {module.lessons?.map((lesson, lessonIndex) => (
                            <div
                              key={lessonIndex}
                              className="p-4 hover:bg-secondary/5 transition-colors"
                            >
                              <div className="flex items-start gap-4">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="font-medium">Lesson {lessonIndex + 1}:</span>
                                    <span className="font-semibold">{lesson.title}</span>
                                    {lesson.isFree && (
                                      <Badge
                                        variant="outline"
                                        className="bg-secondary/20 text-primary border-secondary"
                                      >
                                        Free
                                      </Badge>
                                    )}
                                  </div>
                                  {lesson.description && (
                                    <p className="text-sm text-muted-foreground mb-2">
                                      {lesson.description}
                                    </p>
                                  )}
                                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                    <div className="flex items-center">
                                      <Clock className="mr-1 h-4 w-4" />
                                      {lesson.duration} min
                                    </div>
                                    {lesson.resources && lesson.resources.length > 0 && (
                                      <div className="flex items-center">
                                        <BookOpen className="mr-1 h-4 w-4" />
                                        {lesson.resources.length} resources
                                      </div>
                                    )}
                                    {lesson.quiz && (
                                      <div className="flex items-center">
                                        <CheckCircle className="mr-1 h-4 w-4" />
                                        Quiz available
                                      </div>
                                    )}
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  {lesson.isPublished ? (
                                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                      Published
                                    </Badge>
                                  ) : (
                                    <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                                      Draft
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                ) : (
                  <p className="text-muted-foreground">No curriculum available yet.</p>
                )}
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Student Reviews</h2>
                {courseData.reviews && courseData.reviews.length > 0 ? (
                  <div className="space-y-6">
                    {courseData.reviews.map((review) => (
                      <Card key={review.id}>
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-4">
                            <Avatar>
                              <AvatarImage src={review.avatar} alt={review.name} />
                              <AvatarFallback>
                                {review.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <div>
                                  <h3 className="font-semibold">{review.name}</h3>
                                  <p className="text-sm text-muted-foreground">{review.date}</p>
                                </div>
                                <div className="flex items-center">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
                                        i < review.rating ? "fill-primary text-primary" : "text-muted-foreground"
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                              <p className="text-muted-foreground">{review.comment}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">No reviews yet.</p>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <CardHeader>
              <CardTitle>Course Price</CardTitle>
              <CardDescription>
                {courseData.isPremium ? "Premium Course" : "Free Course"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-4">
                {courseData.isPremium ? `$${courseData.price || 0}` : "Free"}
              </div>
              <Button className="w-full" size="lg">
                {courseData.isPremium ? "Enroll Now" : "Start Learning"}
              </Button>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Full lifetime access</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Certificate of completion</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Downloadable resources</span>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
