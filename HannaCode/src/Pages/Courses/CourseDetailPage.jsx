import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { ArrowLeft, BookOpen, Clock, Users, Star, CheckCircle, Trash } from "lucide-react";

const DEFAULT_PLACEHOLDER = "/placeholder.svg";
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/v1'; 

export default function CourseDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [lessons, setLessons] = useState([]);
  const [imageLoadError, setImageLoadError] = useState(false);
  // Reviews state
  const [reviewsList, setReviewsList] = useState([]);
  const [reviewsLoading, setReviewsLoading] = useState(false);
  const [reviewError, setReviewError] = useState("");
  const [form, setForm] = useState({ rating: 5, title: "", comment: "" });
  const [myReviewId, setMyReviewId] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  const isAdminOrMentor = user && (user.role === "admin" || user.role === "mentor");

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        setError("");

        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error("Please login to view course details");
        }

        // Debug: Log the API URL and slug
        console.log('Fetching course:', `${API_URL}/courses/slug/${slug}`);

        const response = await fetch(`${API_URL}/courses/slug/${slug}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        // Debug: Log the response status
        console.log('Response status:', response.status);

        if (!response.ok) {
          if (response.status === 401) {
            localStorage.removeItem('token');
            throw new Error("Please login to view course details");
          }
          if (response.status === 404) {
            throw new Error("Course not found. Please check the URL and try again.");
          }
          throw new Error(`Failed to fetch course: ${response.status}`);
        }

        const data = await response.json();
        
        // Debug: Log the response data
        console.log('Course data:', data);

        if (!data.success) {
          throw new Error(data.message || "Failed to fetch course");
        }

        const courseData = data.data;
        if (!courseData || !courseData._id) {
          throw new Error("Invalid course data");
        }

        // Debug: Log the original coverImage value
        console.log('Original coverImage:', courseData.coverImage);
      

        // Transform the course data with improved image handling
        const transformedCourse = {
          id: courseData._id,
           slug: courseData.slug,
          title: courseData.title || 'Untitled Course',
          description: courseData.description || 'No description available',
          shortDescription: courseData.shortDescription || courseData.description || 'No description available',
          level: courseData.level || 'Beginner',
          category: courseData.category || 'General',
          duration: courseData.duration ? `${Math.round(courseData.duration / 60)} min` : "Duration not specified",
          coverImage: courseData.coverImage 
            ? courseData.coverImage.startsWith('http') 
                ? courseData.coverImage 
                  : courseData.coverImage.startsWith('/images/')
                  ? courseData.coverImage // use as-is
                  : `/images/courses/${courseData.coverImage.replace(/^\/+/, '')}`
                  : DEFAULT_PLACEHOLDER,
          lessonCount: courseData.lessonCount || 0,
          enrolledStudents: courseData.enrolledStudents || 0,
          rating: courseData.rating || 0,
          reviews: courseData.reviews || 0,
          isPremium: courseData.isPremium || false,
          price: courseData.price || 29,
          isPublished: courseData.isPublished || false,
          tags: courseData.tags || [],
          prerequisites: courseData.prerequisites || [],
          instructor: (courseData.instructor || courseData.mentor) ? (() => {
            const instructorObj = courseData.instructor || courseData.mentor;
            console.log("Instructor object:", instructorObj); // Debug log
            return {
              name: instructorObj.name || (instructorObj.firstName && instructorObj.lastName ? instructorObj.firstName + ' ' + instructorObj.lastName : null) || 'Unknown Instructor',
              role: instructorObj.role || instructorObj.title || 'Course Instructor',
              bio: instructorObj.bio || instructorObj.description || 'Experienced instructor passionate about teaching and helping students succeed.',
              avatar: instructorObj.avatar || instructorObj.profileImage || instructorObj.photo
                ? (instructorObj.avatar || instructorObj.profileImage || instructorObj.photo).startsWith('http')
                  ? (instructorObj.avatar || instructorObj.profileImage || instructorObj.photo)
                  : (instructorObj.avatar || instructorObj.profileImage || instructorObj.photo).startsWith('/')
                    ? `${API_URL}${instructorObj.avatar || instructorObj.profileImage || instructorObj.photo}`
                    : `${API_URL}/uploads/images/instructors/${(instructorObj.avatar || instructorObj.profileImage || instructorObj.photo).replace(/^\/+/, '')}`
                : DEFAULT_PLACEHOLDER,
              email: instructorObj.email || null,
              experience: instructorObj.experience || null,
              specialization: instructorObj.specialization || instructorObj.specialties?.join(', ') || instructorObj.expertise || null
            };
          })() : {
            name: 'HannaCode Team',
            role: 'Course Instructor',
            bio: 'Expert instructors from the HannaCode team with years of industry experience.',
            avatar: DEFAULT_PLACEHOLDER,
            email: null,
            experience: null,
            specialization: null
          },
          modules: courseData.modules || []
        };

        // Debug: Log the transformed image URL
        console.log('Transformed coverImage URL:', transformedCourse.coverImage);

        setCourse(transformedCourse);
        setLessons(transformedCourse.modules.flatMap(module => module.lessons || []));
      } catch (err) {
        console.error("Error fetching course:", err);
        setError(err.message || "Failed to load course. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [slug]);

  // Fetch course reviews (public endpoint) once course is loaded
  useEffect(() => {
    const fetchReviews = async () => {
      if (!course?.id) return;
      try {
        setReviewsLoading(true);
        setReviewError("");
        const resp = await fetch(`${API_URL}/courses/${course.id}/reviews`);
        if (!resp.ok) throw new Error(`Failed to load reviews (${resp.status})`);
        const json = await resp.json();
        const arr = Array.isArray(json.data) ? json.data : [];
        setReviewsList(arr);
        // Determine if current user already has a review
        const currentUserId = user?._id || user?.id;
        const mine = currentUserId ? arr.find(r => (r.user?._id || r.user?.id) === currentUserId) : null;
        if (mine) {
          setMyReviewId(mine._id || mine.id);
          setForm({ rating: mine.rating || 5, title: mine.title || "", comment: mine.comment || "" });
        } else {
          setMyReviewId(null);
          setForm({ rating: 5, title: "", comment: "" });
        }
      } catch (e) {
        setReviewError(e.message || "Failed to load reviews");
      } finally {
        setReviewsLoading(false);
      }
    };
    fetchReviews();
  }, [course?.id]);

  useEffect(() => {
    const startProgress = async () => {
      if (!course?.id) return;
      const token = localStorage.getItem('token');
      try {
        await fetch(`${API_URL}/progress/${course.id}/start`, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        });
      } catch (err) {
        // Optionally handle error
      }
    };
    if (course?.id) startProgress();
  }, [course?.id]);

  const submitReview = async (e) => {
    e?.preventDefault?.();
    if (!course?.id) return;
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please login to post a review.');
      return;
    }
    const payload = { rating: Number(form.rating), title: form.title?.trim(), comment: form.comment?.trim() };
    if (!payload.title || !payload.comment) {
      alert('Please provide both title and comment.');
      return;
    }
    try {
      setReviewsLoading(true);
      setReviewError("");
      const url = myReviewId
        ? `${API_URL}/courses/${course.id}/reviews/${myReviewId}`
        : `${API_URL}/courses/${course.id}/reviews`;
      const method = myReviewId ? 'PUT' : 'POST';
      const resp = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(payload)
      });
      const json = await resp.json();
      if (!resp.ok || !json.success) {
        throw new Error(json.message || `Failed to ${myReviewId ? 'update' : 'create'} review`);
      }
      // Refresh list
      const listResp = await fetch(`${API_URL}/courses/${course.id}/reviews`);
      const listJson = await listResp.json();
      setReviewsList(Array.isArray(listJson.data) ? listJson.data : []);
      const currentUserId = user?._id || user?.id;
      const mine = currentUserId ? (listJson.data || []).find(r => (r.user?._id || r.user?.id) === currentUserId) : null;
      setMyReviewId(mine ? (mine._id || mine.id) : null);
    } catch (e) {
      setReviewError(e.message || 'Review failed');
    } finally {
      setReviewsLoading(false);
    }
  };

  const deleteMyReview = async () => {
    if (!course?.id || !myReviewId) return;
    const token = localStorage.getItem('token');
    if (!token) return alert('Please login.');
    try {
      setReviewsLoading(true);
      const resp = await fetch(`${API_URL}/courses/${course.id}/reviews/${myReviewId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      const json = await resp.json();
      if (!resp.ok || !json.success) throw new Error(json.message || 'Delete failed');
      // Refresh
      const listResp = await fetch(`${API_URL}/courses/${course.id}/reviews`);
      const listJson = await listResp.json();
      setReviewsList(Array.isArray(listJson.data) ? listJson.data : []);
      setMyReviewId(null);
      setForm({ rating: 5, title: "", comment: "" });
    } catch (e) {
      setReviewError(e.message || 'Delete failed');
    } finally {
      setReviewsLoading(false);
    }
  };

  useEffect(() => {
    // Subscribe to SSE metrics when course is loaded
    if (!course?.id) return;

    const url = `${API_URL}/courses/${course.id}/stream`;
    const es = new EventSource(url, { withCredentials: true });

    es.addEventListener('metrics', (evt) => {
      try {
        const data = JSON.parse(evt.data);
        setCourse((prev) => prev ? ({
          ...prev,
          enrolledStudents: typeof data.enrolledStudents === 'number' ? data.enrolledStudents : prev.enrolledStudents,
          rating: typeof data.rating === 'number' ? data.rating : prev.rating,
          reviews: typeof data.reviews === 'number' ? data.reviews : prev.reviews,
        }) : prev);
      } catch (e) {
        // ignore
      }
    });

    es.onerror = () => {
      // Let browser auto-reconnect; nothing to do
    };

    return () => {
      es.close();
    };
  }, [course?.id]);

  const handleImageError = (e) => {
    console.error('Image load error:', e);
    console.error('Failed image URL:', e.target.src);
    console.error('Original image value:', course?.coverImage);
    setImageLoadError(true);
  };

  if (loading) {
    return (
      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
              <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
          </div>
          <div className="animate-pulse">
            <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Error Loading Course</h1>
          <p className="text-red-500 mb-4">{error}</p>
          <Button onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="container py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
          <Button onClick={() => navigate('/courses')}>
            Back to Courses
          </Button>
        </div>
      </div>
    );
  }

  const renderExercises = (lesson) => {
  if (!lesson.exercises || lesson.exercises.length === 0) return null;
  return (
    <div className="exercise-block my-2 p-4 rounded bg-gray-100 dark:bg-gray-800 border-l-4 border-primary">
      <h4 className="font-semibold mb-2 text-primary">Exercises</h4>
      <ol className="list-decimal ml-6 space-y-1">
        {lesson.exercises.map((ex, idx) => (
          <li key={idx}>{ex}</li>
        ))}
      </ol>
    </div>
  );
};


const renderQuiz = (lesson) => {
  if (!lesson.quiz || lesson.quiz.length === 0) return null;
  return (
    <div className="quiz-block my-2 p-4 rounded bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-400 dark:border-yellow-500">
      <h4 className="font-semibold mb-2 text-yellow-700 dark:text-yellow-300">Quiz</h4>
      <ol className="list-decimal ml-6 space-y-4">
        {lesson.quiz.map((q, idx) => (
          <li key={idx}>
            <div className="font-medium">{q.question}</div>
            <ul className="list-disc ml-6">
              {q.options.map((opt, i) => (
                <li
                  key={i}
                  className={
                    i === q.correctAnswer
                      ? "font-semibold text-green-600 dark:text-green-400"
                      : ""
                  }
                >
                  {opt}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
};


 const renderCurriculumContent = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Course Content</h2>
    <div className="text-sm text-muted-foreground mb-6">
      {course.modules.length} modules • {lessons.length} lessons • {course.duration} total
    </div>
    <div className="space-y-4">
      {course.modules.map((module, moduleIndex) => (
        <Card key={moduleIndex}>
          <CardHeader className="py-4">
            <CardTitle className="text-lg flex justify-between">
              <span>{module.title}</span>
              <span className="text-muted-foreground text-sm">
                {(module.lessons || []).length} lessons
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-4">
            <ul className="space-y-2">
              {(module.lessons || []).map((lesson, lessonIndex) => (
                <li
                  key={lesson.id || lesson._id}
                  className="flex flex-col py-2 border-b last:border-0"
                >
                    <Link to={`/courses/${course.slug}/lessons/${lesson._id}`}
                       className="flex items-center mb-2 hover:underline">           
                          <BookOpen className="mr-2 h-4 w-4 text-primary" />
                          <span>{lesson.title}</span>
                          {lesson.isFree && (
                      <Badge
                        variant="outline"
                        className="ml-2 bg-secondary/20 text-primary border-secondary"
                      >
                        Free
                      </Badge>
                    )}
                  </Link>
                  {/* Markdown content */}
                  <div  className="markdown-content mb-2">
                  <ReactMarkdown>
                    {lesson.content ? lesson.content.slice(0, 400) + "..." : ""}
                  </ReactMarkdown>
                  </div>
                  {/* Exercises */}
                  {renderExercises(lesson)}
                  {/* Quiz */}
                  {renderQuiz(lesson)}
                  <div className="flex items-center text-muted-foreground text-sm mt-2">
                    <Clock className="mr-1 h-4 w-4" />
                    {lesson.duration}
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
  
);

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-6">
            <Button
              variant="ghost"
              className="mb-4"
              onClick={() => navigate('/courses')}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Courses
            </Button>
            <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
            <p className="text-xl text-muted-foreground mb-4">{course.description}</p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center">
                <Badge variant="outline" className="bg-secondary/20 text-primary border-secondary">
                  {course.level}
                </Badge>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Clock className="mr-1 h-4 w-4" />
                {course.duration}
              </div>
              <div className="flex items-center text-muted-foreground">
                <BookOpen className="mr-1 h-4 w-4" />
                {course.lessonCount} lessons
              </div>
              <div className="flex items-center text-muted-foreground">
                <Users className="mr-1 h-4 w-4" />
                {course.enrolledStudents.toLocaleString()} students
              </div>
              <div className="flex items-center">
                <div className="flex mr-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(course.rating) ? "fill-primary text-primary" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  {course.rating} ({course.reviews} reviews)
                </span>
              </div>
            </div>
          </div>

          <div className="aspect-video w-full overflow-hidden rounded-lg mb-8 relative">
            {!imageLoadError ? (
              <img
                src={course.coverImage}
                alt={course.title}
                className="w-full h-48 object-cover rounded-t-lg"
                onError={handleImageError}
                loading="lazy"
                crossOrigin="anonymous"
                onLoad={() => console.log('Image loaded successfully:', course.coverImage)}
              />
            ) : (
              <div className="w-full h-48 bg-gray-100 dark:bg-gray-800 rounded-t-lg flex items-center justify-center">
                <p className="text-sm text-gray-500">Image not available</p>
              </div>
            )}
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
                  <p className="text-muted-foreground">{course.shortDescription}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.prerequisites.map((prerequisite, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                        <span>{prerequisite}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Meet Your Instructor</h2>
                  <div className="flex flex-col md:flex-row gap-4 items-start">
                    <Avatar className="h-20 w-20">
                      <AvatarImage
                        src={course.instructor?.avatar}
                        alt={course.instructor?.name || 'Instructor'}
                        onError={(e) => {
                          e.target.src = DEFAULT_PLACEHOLDER;
                        }}
                      />
                      <AvatarFallback className="text-lg font-bold">
                        {(course.instructor?.name || 'HT')
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold">{course.instructor?.name}</h3>
                      <p className="text-primary font-medium mb-2">{course.instructor?.role}</p>
                      {course.instructor?.specialization && (
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Specialization:</strong> {course.instructor.specialization}
                        </p>
                      )}
                      {course.instructor?.experience && (
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Experience:</strong> {course.instructor.experience}
                        </p>
                      )}
                      <p className="text-muted-foreground leading-relaxed">{course.instructor?.bio}</p>
                      {course.instructor?.email && (
                        <p className="text-sm text-primary mt-2">
                          📧 {course.instructor.email}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="curriculum" className="mt-6">
              {renderCurriculumContent()}
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Student Reviews</h2>
                <div className="flex items-center mb-6">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < Math.floor(course.rating) ? 'fill-primary text-primary' : 'text-muted-foreground'}`}
                      />
                    ))}
                  </div>
                  <span className="text-xl font-bold">{course.rating}</span>
                  <span className="text-muted-foreground ml-2">({course.reviews} reviews)</span>
                </div>

                {/* Review form */}
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>{myReviewId ? 'Update your review' : 'Write a review'}</CardTitle>
                    {reviewError && <CardDescription className="text-red-600">{reviewError}</CardDescription>}
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={submitReview} className="space-y-3">
                      <div className="flex items-center gap-3">
                        <label className="text-sm w-24">Rating</label>
                        <select
                          className="border rounded px-2 py-1 bg-background"
                          value={form.rating}
                          onChange={(e) => setForm((f) => ({ ...f, rating: Number(e.target.value) }))}
                        >
                          {[5,4,3,2,1].map(v => (
                            <option key={v} value={v}>{v}</option>
                          ))}
                        </select>
                      </div>
                      <div className="flex items-center gap-3">
                        <label className="text-sm w-24">Title</label>
                        <input
                          type="text"
                          className="flex-1 border rounded px-3 py-2 bg-background"
                          placeholder="Great course!"
                          value={form.title}
                          onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                          maxLength={100}
                          required
                        />
                      </div>
                      <div className="flex items-start gap-3">
                        <label className="text-sm w-24 mt-2">Comment</label>
                        <textarea
                          className="flex-1 border rounded px-3 py-2 bg-background"
                          rows={4}
                          placeholder="Share your experience..."
                          value={form.comment}
                          onChange={(e) => setForm((f) => ({ ...f, comment: e.target.value }))}
                          maxLength={1000}
                          required
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button type="submit" disabled={reviewsLoading}>
                          {myReviewId ? 'Update Review' : 'Post Review'}
                        </Button>
                        {myReviewId && (
                          <Button type="button" variant="destructive" onClick={deleteMyReview} disabled={reviewsLoading}>
                            <Trash className="h-4 w-4 mr-2" /> Delete
                          </Button>
                        )}
                      </div>
                    </form>
                  </CardContent>
                </Card>

                {/* Reviews list */}
                <div className="space-y-4">
                  {reviewsLoading && reviewsList.length === 0 && (
                    <div className="text-muted-foreground">Loading reviews...</div>
                  )}
                  {!reviewsLoading && reviewsList.length === 0 && (
                    <div className="text-muted-foreground">No reviews yet. Be the first to review!</div>
                  )}
                  {reviewsList.map((rev) => (
                    <Card key={rev._id || rev.id}>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold">{rev.title}</div>
                            <div className="text-sm text-muted-foreground">
                              {rev.user?.name || 'Anonymous'} • {new Date(rev.createdAt || rev.updatedAt || Date.now()).toLocaleDateString()}
                            </div>
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`h-4 w-4 ${i < Math.floor(rev.rating || 0) ? 'fill-primary text-primary' : 'text-muted-foreground'}`} />
                            ))}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm leading-relaxed">{rev.comment}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <CardHeader>
              <CardTitle>Course Price</CardTitle>
              <CardDescription>
                {(() => {
                  const isPremiumUser = user && user.role === "premium";
                  if (course.isPremium && !isAdminOrMentor && !isPremiumUser) {
                    return <span className="text-2xl font-bold">₦30,000</span>;
                  } else if (course.isPremium && isPremiumUser) {
                    return <span className="text-2xl font-bold text-green-600">Included in Premium</span>;
                  } else {
                    return <span className="text-2xl font-bold text-primary">Free</span>;
                  }
                })()}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span>Full lifetime access</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span>All future updates</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span>Certificate of completion</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span>1-on-1 instructor support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full transition-transform duration-200 hover:scale-105" size="lg"
                 onClick={() => {
    console.log("lessons:", lessons);
    console.log("course.isPremium:", course.isPremium);
    console.log("isAdminOrMentor:", isAdminOrMentor);
    console.log("user:", user);
    
    // Check if user is premium
    const isPremiumUser = user && user.role === "premium";
    
    if (course.isPremium && !isAdminOrMentor && !isPremiumUser) {
      // User needs to subscribe for premium course
      console.log("Redirecting to pricing page for premium course");
      navigate("/pricing");
    } else if (lessons.length > 0) {
      // User can access the course (either free course, admin/mentor, or premium user)
      const lessonId = lessons[0].id || lessons[0]._id;
      console.log("Navigating to:", `/courses/${course.slug}/lessons/${lessonId}`);
      if (lessonId) {
        navigate(`/courses/${course.slug}/lessons/${lessonId}`);
      } else {
        alert("First lesson is missing an ID.");
      }
    } else {
      alert("No lessons available for this course.");
    }
  }}
>
  {(() => {
    const isPremiumUser = user && user.role === "premium";
    if (course.isPremium && !isAdminOrMentor && !isPremiumUser) {
      return "Enroll Now";
    }
    return "Start Learning";
  })()}


              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
