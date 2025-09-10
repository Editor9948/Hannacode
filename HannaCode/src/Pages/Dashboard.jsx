
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { ArrowRight, BookOpen, Clock, Award, BarChart, BookMarked, CheckCircle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Input } from "../components/ui/input"
import { ShieldCheck, UserX, Crown, BadgeCheck } from "lucide-react"

const API_URL = process.env.REACT_APP_API_URL 
export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("in-progress")
  const [inProgressCourses, setInProgressCourses] = useState([])
  const [completedCourses, setCompletedCourses] = useState([])
  const [certificates, setCertificates] = useState([])
  const [recommendedCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [isPremium, setIsPremium] = useState(false)
  const [premiumFeatures, setPremiumFeatures] = useState(null)
  const [upgradeMessage, setUpgradeMessage] = useState("")
  // const navigate = useNavigate(); // not used
   const location = useLocation();
   const [stats, setStats] = useState({
  totalUsers: 0,
  totalCourses: 0,
  activeMentors: 0,
  recentUsers: [],
});

const user = JSON.parse(localStorage.getItem("user"));
const role = user?.role;

  // Fetch user courses from backend
 useEffect(() => {
    const fetchProgress = async () => {
      setLoading(true);
      setError("");
      try {
        const token = localStorage.getItem("token");
        console.log("Fetching progress from:", `${API_URL}/progress/overview`);
        console.log("Token exists:", !!token);
        
        const res = await fetch(`${API_URL}/progress/overview`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        console.log("Progress response status:", res.status);
        const data = await res.json();
        console.log("Progress response data:", data);
        
        if (!data.success) throw new Error(data.message || "Failed to fetch progress");
        
        // Check if user has premium access
        setIsPremium(data.data.isPremium);
        
        if (data.data.isPremium) {
          // Premium user - set actual progress data
          setInProgressCourses(data.data.inProgress || []);
          setCompletedCourses(data.data.completed || []);
        } else {
          // Non-premium user - set enrolled courses with premium prompts
          setInProgressCourses(data.data.coursesData || []);
          setCompletedCourses([]);
          setPremiumFeatures(data.data.premiumFeatures);
          setUpgradeMessage(data.data.upgradeMessage);
        }
      } catch (err) {
        console.error("Progress fetch error:", err);
        
        // Check if it's a premium access error
        if (err.message.includes("Premium subscription required")) {
          setIsPremium(false);
          setUpgradeMessage("Upgrade to Premium to unlock progress tracking, certificates, and advanced learning features!");
          // Optionally fetch basic course info for non-premium users
          setInProgressCourses([]);
          setCompletedCourses([]);
        } else {
          setError(err.message || "Failed to load dashboard.");
        }
      } finally {
        setLoading(false);
      }
    };

    const fetchCertificates = async () => {
      // Only fetch certificates for premium users
      if (!isPremium && user?.role !== 'admin' && user?.role !== 'mentor') {
        return;
      }
      
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`${API_URL}/progress/certificates`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        if (res.ok) {
          const data = await res.json();
          if (data.success) {
            setCertificates(data.data || []);
          }
        }
      } catch (err) {
        console.error("Certificates fetch error:", err);
        // Don't set error state for certificates, just log it
      }
    };

    fetchProgress();
    fetchCertificates();
    
    // Fetch mentorship sessions for premium users
    if (user?.role === "premium" || user?.role === "admin") {
      fetchMentorshipSessions();
    }
  }, [location.pathname, user?.role, isPremium]);

  // Fetch mentorship sessions
  const fetchMentorshipSessions = async () => {
    setMentorshipLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_URL}/mentorship/sessions`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          // Filter for upcoming sessions and format for display
          const upcoming = data.data
            .filter(session => 
              (session.status === 'pending' || session.status === 'confirmed') &&
              new Date(session.scheduledDate) > new Date()
            )
            .slice(0, 3) // Show only next 3 sessions
            .map(session => ({
              id: session._id,
              mentor: session.mentorId?.name || "Unknown Mentor",
              role: session.mentorId?.role || "Mentor",
              date: new Date(session.scheduledDate).toLocaleDateString(),
              time: new Date(session.scheduledDate).toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit',
                hour12: true 
              }),
              avatar: session.mentorId?.profileImage || "/placeholder.svg?height=40&width=40",
              meetingUrl: session.meetingUrl,
              topic: session.topic
            }));
          setUpcomingMentorships(upcoming);
        }
      }
    } catch (error) {
      console.error("Error fetching mentorship sessions:", error);
    } finally {
      setMentorshipLoading(false);
    }
  };

  // Fetch real mentorship sessions
  const [upcomingMentorships, setUpcomingMentorships] = useState([])
  const [mentorshipLoading, setMentorshipLoading] = useState(false)
useEffect(() => {
  if (role === "admin") {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`${API_URL}/admin/stats`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (data.success) setStats(data.data);
      } catch (err) {
        // Optionally handle error
      }
    };
    fetchStats();
  }
}, [role]);

if (role === "admin") {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p className="mb-6">Welcome, Admin! Manage users, courses, and view platform stats.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
          </CardHeader>
          <CardContent>
           <div className="text-2xl font-bold">{stats.totalUsers}</div>
       </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalCourses}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Active Mentors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.activeMentors}</div>
          </CardContent>
        </Card>

      </div>
      {/* Admin Controls: Grant/Revoke Roles */}
      <div className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Admin Controls</CardTitle>
            <CardDescription>Grant or revoke Premium and Mentor roles by User ID</CardDescription>
          </CardHeader>
          <CardContent>
            <AdminRoleManager />
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent User Signups</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
             {stats.recentUsers.map((u) => (
               <li key={u._id}>{u.name} ({u.email})</li>
               ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      <div className="flex gap-2">
        <Link to="/admin/users">
          <Button >Manage Users</Button>
        </Link>
        <Link to="/admin/courses">
          <Button>Manage Courses</Button>
        </Link>
         <Link to="/admin/submissions">
          <Button>Review Submissions</Button>
        </Link>

        <Link to="/mentorship">
          <Button className="bg-primary hover:bg-primary/90">Mentorship Home</Button>
          </Link>
      </div>
    </div>
  );
}

if (role === "mentor") {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-4">Mentor Dashboard</h1>
      <p className="mb-6">Welcome, Mentor! See your mentees, upcoming sessions, and feedback.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Mentorship Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li>June 15, 2025 - 3:00 PM with Alice</li>
              <li>June 16, 2025 - 5:00 PM with Bob</li>
              {/* ...map real sessions here... */}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Your Mentees</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li>Alice Johnson</li>
              <li>Bob Lee</li>
              {/* ...map real mentees here... */}
            </ul>
          </CardContent>
        </Card>
      </div>
      <div>
        <Link to="/mentorship/schedule">
          <Button className="mr-2">Schedule Session</Button>
        </Link>
       <Link to="/mentorship/inbox">
      <Button>Inbox</Button>
      </Link>
      </div>
    </div>
  );
}

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Continue your learning journey.</p>
        </div>
        <div className="flex gap-2">
          <Link to="/courses">
            <Button className="bg-primary hover:bg-primary/90">Browse All Courses</Button>
          </Link>
          <Link to="/mentorship">
          <Button className="bg-primary hover:bg-primary/90">Mentorship Home</Button>
          </Link>
         <Link to="/mentorship/book">
         <Button className="bg-primary hover:bg-primary/90">Book a Session</Button>
         </Link> 

        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Courses in Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{inProgressCourses.length}</div>
            {!isPremium && (
              <p className="text-xs text-muted-foreground mt-1">
                Progress tracking requires Premium
              </p>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Completed Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedCourses.length}</div>
            {!isPremium && (
              <p className="text-xs text-muted-foreground mt-1">
                Completion tracking requires Premium
              </p>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Certificates Earned</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{certificates.length}</div>
            {!isPremium && (
              <p className="text-xs text-muted-foreground mt-1">
                Certificates require Premium
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {!isPremium && (
            <Card className="mb-6 border-yellow-200 bg-yellow-50">
              <CardHeader>
                <CardTitle className="flex items-center text-yellow-800">
                  <Award className="mr-2 h-5 w-5" />
                  Unlock Premium Features
                </CardTitle>
                <CardDescription className="text-yellow-700">
                  {upgradeMessage}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {premiumFeatures && Object.entries(premiumFeatures).map(([key, feature]) => (
                    <div key={key} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-yellow-800">{feature.description}</p>
                        <p className="text-sm text-yellow-700">{feature.benefit}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/pricing">
                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">
                    Upgrade to Premium
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}
          
          <Tabs defaultValue="in-progress" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="in-progress" className={!isPremium ? "opacity-50" : ""}>
                In Progress {!isPremium && "🔒"}
              </TabsTrigger>
              <TabsTrigger value="completed" className={!isPremium ? "opacity-50" : ""}>
                Completed {!isPremium && "🔒"}
              </TabsTrigger>
              <TabsTrigger value="certificates" className={!isPremium ? "opacity-50" : ""}>
                Certificates {!isPremium && "🔒"}
              </TabsTrigger>
            </TabsList>
            <TabsContent value="in-progress" className="space-y-4">
              {!isPremium ? (
                <Card className="p-6 text-center border-dashed border-2 border-muted">
                  <CardContent className="pt-6">
                    <BookMarked className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="text-xl font-bold mb-2">Progress Tracking Available with Premium</h3>
                    <p className="text-muted-foreground mb-4">
                      Upgrade to Premium to track your learning progress, see completion percentages, and get personalized recommendations.
                    </p>
                    <div className="space-y-2 mb-4">
                      {inProgressCourses.map((course) => (
                        <div key={course._id} className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
                          <div className="flex items-center space-x-3">
                            <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-10 h-10 rounded object-cover" />
                            <div>
                              <p className="font-medium">{course.title}</p>
                              <p className="text-sm text-muted-foreground">Progress tracking locked</p>
                            </div>
                          </div>
                          <Badge variant="secondary">Premium Required</Badge>
                        </div>
                      ))}
                    </div>
                    <Link to="/pricing">
                      <Button className="bg-primary hover:bg-primary/90">Unlock Progress Tracking</Button>
                    </Link>
                  </CardContent>
                </Card>
              ) : loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p className="text-red-500">{error}</p>
              ) : inProgressCourses.length > 0 ? (
                inProgressCourses.map((course) => (
                  <Card key={course.id || course._id } className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/4 p-4">
                        <img
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          className="rounded-md object-cover w-full h-full"
                        />
                      </div>
                      <div className="md:w-3/4 p-4">
                        <div className="mb-2">
                          <h3 className="text-xl font-bold">{course.title}</h3>
                          <p className="text-muted-foreground">{course.description}</p>
                        </div>
                        <div className="mb-4">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">{course.progress || 0}% complete</span>
                            <span className="text-sm text-muted-foreground">
                              <Clock className="inline-block mr-1 h-4 w-4" />
                              Last lesson: {course.lastLesson || "N/A"}
                            </span>
                          </div>
                         <div className="h-2 bg-gray-200 rounded">
                        <div
                          className="h-2 bg-primary rounded"
                          style={{ width: `${course.progress || 0}%` }}
                        />
                      </div>
                        </div>
                        <Link to={course.path || `/courses/${course._id || course.id}`}>
                          <Button className="w-full md:w-auto bg-primary hover:bg-primary/90">Continue Learning</Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                ))
              ) : (
                <Card className="p-6 text-center">
                  <CardContent className="pt-6">
                    <BookMarked className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="text-xl font-bold mb-2">No courses in progress</h3>
                    <p className="text-muted-foreground mb-4">
                      You haven't started any courses yet. Browse our catalog to find something you're interested in.
                    </p>
                    <Link to="/courses">
                      <Button className="bg-primary hover:bg-primary/90">Browse Courses</Button>
                    </Link>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
            <TabsContent value="completed" className="space-y-4">
              {!isPremium ? (
                <Card className="p-6 text-center border-dashed border-2 border-muted">
                  <CardContent className="pt-6">
                    <Award className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="text-xl font-bold mb-2">Course Completion Tracking with Premium</h3>
                    <p className="text-muted-foreground mb-4">
                      Mark courses as completed, track completion dates, and earn certificates with Premium.
                    </p>
                    <Link to="/pricing">
                      <Button className="bg-primary hover:bg-primary/90">Unlock Completion Tracking</Button>
                    </Link>
                  </CardContent>
                </Card>
              ) : loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p className="text-red-500">{error}</p>
              ) : completedCourses.length > 0 ? (
                completedCourses.map((course) => (
                  <Card key={course.id || course._id} className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/4 p-4">
                        <img
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          className="rounded-md object-cover w-full h-full"
                        />
                      </div>
                      <div className="md:w-3/4 p-4">
                        <div className="mb-2">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-xl font-bold">{course.title}</h3>
                            <Badge className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                              <CheckCircle className="mr-1 h-3 w-3" /> Completed
                            </Badge>
                          </div>
                          <p className="text-muted-foreground">{course.description}</p>
                        </div>
                        <div className="mb-4">
                          <span className="text-sm text-muted-foreground">
                            Completed on: {course.completedDate || "N/A"}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          {course.certificate && course.certificate.certificateId ? (
                            <Link to={`/certificate/${course.certificate.certificateId}`}>
                              <Button variant="outline">
                                <Award className="mr-2 h-4 w-4" /> View Certificate
                              </Button>
                            </Link>
                          ) : (
                            <Button 
                              variant="outline"
                              onClick={async () => {
                                try {
                                  const token = localStorage.getItem("token");
                                  const response = await fetch(`${API_URL}/progress/${course._id}/certificate`, {
                                    headers: { Authorization: `Bearer ${token}` }
                                  });
                                  
                                  if (response.ok) {
                                    const data = await response.json();
                                    if (data.success && data.data.certificateId) {
                                      // Navigate to certificate page
                                      window.location.href = `/certificate/${data.data.certificateId}`;
                                    }
                                  } else {
                                    alert('Failed to get certificate. Please try again.');
                                  }
                                } catch (error) {
                                  console.error('Certificate error:', error);
                                  alert('Error getting certificate. Please try again.');
                                }
                              }}
                            >
                              <Award className="mr-2 h-4 w-4" /> Get Certificate
                            </Button>
                          )}
                          <Link to={`${course.path || `/courses/${course._id || course.id}`}/review`}>
                            <Button variant="ghost">Review Course</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))
              ) : (
                <Card className="p-6 text-center">
                  <CardContent className="pt-6">
                    <Award className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="text-xl font-bold mb-2">No completed courses yet</h3>
                    <p className="text-muted-foreground mb-4">
                      Keep learning and you'll earn your first certificate soon!
                    </p>
                    <Link to="/courses">
                      <Button className="bg-primary hover:bg-primary/90">Browse Courses</Button>
                    </Link>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
            <TabsContent value="certificates" className="space-y-4">
              {!isPremium ? (
                <Card className="p-6 text-center border-dashed border-2 border-muted">
                  <CardContent className="pt-6">
                    <Award className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="text-xl font-bold mb-2">Professional Certificates with Premium</h3>
                    <p className="text-muted-foreground mb-4">
                      Earn verifiable completion certificates, download them as PDFs, and share them on LinkedIn with Premium.
                    </p>
                    <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center justify-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Professional PDF certificates</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Unique verification codes</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>LinkedIn sharing capability</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Master certificate for completing all courses</span>
                      </div>
                    </div>
                    <Link to="/pricing">
                      <Button className="bg-primary hover:bg-primary/90">Unlock Certificates</Button>
                    </Link>
                  </CardContent>
                </Card>
              ) : loading ? (
                <p>Loading...</p>
              ) : certificates.length > 0 ? (
                certificates.map((certificate) => (
                  <Card key={certificate._id} className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-24 md:h-24 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                        <Award className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-lg font-semibold mb-1">{certificate.course.title}</h3>
                            <p className="text-sm text-muted-foreground mb-2">{certificate.course.category}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>Grade: {certificate.grade}</span>
                              <span>Issued: {new Date(certificate.issuedAt).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            Certified
                          </Badge>
                        </div>
                        <div className="flex gap-2">
                          <Link to={`/certificate/${certificate.certificateId}`}>
                            <Button size="sm">
                              <Award className="mr-2 h-4 w-4" /> View Certificate
                            </Button>
                          </Link>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => {
                              const url = `${window.location.origin}/certificate/${certificate.certificateId}`;
                              import('../lib/utils').then(m=>m.safeCopy(url)).then(ok=>{
                                if(!ok) alert('Copy failed'); else alert('Certificate link copied to clipboard!');
                              });
                            }}
                          >
                            Share
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))
              ) : (
                <Card className="p-6 text-center">
                  <CardContent className="pt-6">
                    <Award className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="text-xl font-bold mb-2">No certificates yet</h3>
                    <p className="text-muted-foreground mb-4">
                      Complete a course to earn your first certificate!
                    </p>
                    <Link to="/courses">
                      <Button className="bg-primary hover:bg-primary/90">Browse Courses</Button>
                    </Link>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>

          {activeTab === "in-progress" && (
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">Recommended Next</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {loading ? (
                  <p>Loading...</p>
                ) : error ? (
                  <p className="text-red-500">{error}</p>
                ) : recommendedCourses.length > 0 ? (
                  recommendedCourses.map((course) => (
                    <Card key={course.id || course._id} className="overflow-hidden course-card">
                      <div className="aspect-video w-full overflow-hidden">
                        <img
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-center mb-2">
                          <Badge variant="outline" className="bg-secondary/20 text-primary border-secondary">
                            {course.level}
                          </Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <BookOpen className="mr-1 h-4 w-4" /> {course.lessons} lessons
                          </div>
                        </div>
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                        <CardDescription>{course.description}</CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Link to={course.path || `/courses/${course._id || course.id}`} className="w-full">
                          <Button variant="ghost" className="w-full justify-between">
                            Start Course <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))
                ) : (
                  <p>No recommendations found.</p>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Learning Progress</CardTitle>
              <CardDescription>Your activity over the last 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] flex items-center justify-center">
                <BarChart className="h-24 w-24 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Mentorship</CardTitle>
              <CardDescription>Your scheduled sessions</CardDescription>
            </CardHeader>
            <CardContent>
              {mentorshipLoading ? (
                <div className="text-center py-4">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Loading sessions...</p>
                </div>
              ) : upcomingMentorships.length > 0 ? (
                <div className="space-y-4">
                  {upcomingMentorships.map((session) => (
                    <div key={session.id} className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src={session.avatar || "/placeholder.svg"} alt={session.mentor} />
                        <AvatarFallback>
                          {session.mentor
                            ? session.mentor.split(" ")
                                .map((n) => n[0])
                                .join("")
                            : "?"}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-medium">{session.mentor}</h4>
                        <p className="text-sm text-muted-foreground">{session.role}</p>
                        {session.topic && (
                          <p className="text-xs text-muted-foreground mt-1">Topic: {session.topic}</p>
                        )}
                        <div className="mt-2 text-sm">
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-calendar mr-2 h-4 w-4 text-muted-foreground"
                            >
                              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                              <line x1="16" x2="16" y1="2" y2="6" />
                              <line x1="8" x2="8" y1="2" y2="6" />
                              <line x1="3" x2="21" y1="10" y2="10" />
                            </svg>
                            {session.date}
                          </div>
                          <div className="flex items-center mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-clock mr-2 h-4 w-4 text-muted-foreground"
                            >
                              <circle cx="12" cy="12" r="10" />
                              <polyline points="12 6 12 12 16 14" />
                            </svg>
                            {session.time}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="pt-2">
                    {upcomingMentorships[0]?.meetingUrl ? (
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => window.open(upcomingMentorships[0].meetingUrl, '_blank')}
                      >
                        Join Next Meeting
                      </Button>
                    ) : (
                      <Button variant="outline" className="w-full" asChild>
                        <Link to="/mentorship">View All Sessions</Link>
                      </Button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="text-center py-4">
                  <p className="text-muted-foreground mb-4">No upcoming sessions</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/mentorship">Schedule Session</Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Shortcuts to important features</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link to="/certificates" className="block">
                <Button variant="outline" className={`w-full justify-start ${!isPremium ? 'opacity-50' : ''}`} disabled={!isPremium}>
                  <Award className="mr-2 h-4 w-4" />
                  View My Certificates ({certificates.length}) {!isPremium && "🔒"}
                </Button>
              </Link>
              <Link to="/courses" className="block">
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Browse Courses
                </Button>
              </Link>
              <Link to="/mentorship" className="block">
                <Button variant="outline" className={`w-full justify-start ${user?.role !== 'premium' && user?.role !== 'admin' ? 'opacity-50' : ''}`} disabled={user?.role !== 'premium' && user?.role !== 'admin'}>
                  <Clock className="mr-2 h-4 w-4" />
                  Book Mentorship {user?.role !== 'premium' && user?.role !== 'admin' && "🔒"}
                </Button>
              </Link>
              {!isPremium && (
                <Link to="/pricing" className="block">
                  <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white">
                    <Award className="mr-2 h-4 w-4" />
                    Upgrade to Premium
                  </Button>
                </Link>
              )}
            </CardContent>
          </Card>

          {!isPremium ? (
            <Card>
              <CardHeader>
                <CardTitle>Premium Benefits</CardTitle>
                <CardDescription>Unlock advanced learning features</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Progress Tracking</span>
                      <p className="text-sm text-muted-foreground">Track completion percentages and learning streaks</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Completion Certificates</span>
                      <p className="text-sm text-muted-foreground">Earn professional certificates for completed courses</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">1-on-1 Mentorship</span>
                      <p className="text-sm text-muted-foreground">Get personalized guidance from expert mentors</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Master Certificate</span>
                      <p className="text-sm text-muted-foreground">Earn prestige certification by completing all courses</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link to="/pricing" className="w-full">
                  <Button className="w-full bg-primary hover:bg-primary/90">Upgrade to Premium</Button>
                </Link>
              </CardFooter>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Premium Status</CardTitle>
                <CardDescription>You have access to all premium features</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">Premium Active</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Enjoy full access to progress tracking, certificates, mentorship, and all advanced features.
                </p>
              </CardContent>
              <CardFooter>
                <Link to="/setting" className="w-full">
                  <Button variant="outline" className="w-full">Manage Subscription</Button>
                </Link>
              </CardFooter>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

// Inline component for admin role management
function AdminRoleManager() {
  const [userId, setUserId] = useState("")
  const [email, setEmail] = useState("")
  const [foundUser, setFoundUser] = useState(null)
  const [status, setStatus] = useState("")
  const [busy, setBusy] = useState(false)
  const API_URL = process.env.REACT_APP_API_URL

  const search = async () => {
    if (!email && !userId) { setStatus("Enter email or user ID"); return }
    setBusy(true); setStatus("")
    try {
      const token = localStorage.getItem("token")
      const params = email ? `email=${encodeURIComponent(email)}` : `id=${encodeURIComponent(userId)}`
      const res = await fetch(`${API_URL}/admin/users/search?${params}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      const data = await res.json()
      if (!res.ok || data?.success === false) throw new Error(data?.message || `Search failed: ${res.status}`)
      setFoundUser(data.data)
      setUserId(data.data._id || userId)
      setStatus("User found and ID filled")
    } catch (e) {
      setFoundUser(null)
      setStatus(e.message || "Search failed")
    } finally { setBusy(false) }
  }

  const call = async (path) => {
    if (!userId) { setStatus("Enter a user ID"); return }
    setBusy(true); setStatus("")
    try {
      const token = localStorage.getItem("token")
      const res = await fetch(`${API_URL}/admin/users/${userId}/${path}`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      })
      const data = await res.json().catch(()=>({}))
      if (!res.ok || data?.success === false) throw new Error(data?.message || `Request failed: ${res.status}`)
      setStatus(data?.message || "Success")
    } catch (e) {
      setStatus(e.message || "Request failed")
    } finally { setBusy(false) }
  }

  return (
    <div className="space-y-3">
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Input placeholder="Enter Email (optional)" value={email} onChange={e=>setEmail(e.target.value)} />
          <Input placeholder="Enter User ID (ObjectId)" value={userId} onChange={e=>setUserId(e.target.value)} />
          <Button disabled={busy} onClick={search} variant="outline">Lookup</Button>
        </div>
        {busy && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
            <span className="inline-block h-4 w-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></span>
            Searching…
          </div>
        )}
        {foundUser && !busy && (
          <div className="text-xs text-muted-foreground">
            Found: {foundUser.name} ({foundUser.email}) • Role: {foundUser.role}
          </div>
        )}
        <div className="flex flex-wrap gap-2">
          <Button disabled={busy} onClick={()=>call('grant-premium')} className="bg-amber-600 hover:bg-amber-700">
            <Crown className="h-4 w-4 mr-1"/> Grant Premium
          </Button>
          <Button disabled={busy} onClick={()=>call('revoke-premium')} variant="outline">
            <UserX className="h-4 w-4 mr-1"/> Revoke Premium
          </Button>
          <Button disabled={busy} onClick={()=>call('grant-mentor')} className="bg-emerald-600 hover:bg-emerald-700">
            <ShieldCheck className="h-4 w-4 mr-1"/> Grant Mentor
          </Button>
          <Button disabled={busy} onClick={()=>call('revoke-mentor')} variant="outline">
            <BadgeCheck className="h-4 w-4 mr-1"/> Revoke Mentor
          </Button>
        </div>
      </div>
      {status && (
        <div className="text-sm mt-1">
          {status}
        </div>
      )}
    </div>
  )
}
