
import { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import { useNavigate, useParams } from "react-router-dom"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import { Badge } from "../../components/ui/badge"
import { Calendar, ArrowLeft, ExternalLink, Clock, CheckCircle } from "lucide-react"
import { useToast } from "../../hooks/useToast"
import CalendlyEmbed from "../../components/CalendlyEmbed"


const API_URL = process.env.REACT_APP_API_URL 


export default function BookingPage() {
  const navigate = useNavigate();
  const params = useParams();
  const { toast } = useToast();
  const [mentor, setMentor] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check authentication and premium access on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    
    if (!token || !storedUser) {
      navigate("/login");
      return;
    }

    const userData = JSON.parse(storedUser);
    setUser(userData);

    // Check if user has premium access for mentorship
    if (!userData.role || (userData.role !== "premium" && userData.role !== "admin")) {
      navigate("/pricing", { 
        state: { 
          message: "Premium subscription required to book mentorship sessions. Please upgrade your plan to access this feature.",
          redirectTo: `/mentorship/book/${params.id}`
        }
      });
      return;
    }
  }, [navigate, params.id]);

  // Fetch mentor data from backend
  useEffect(() => {
    if (!user) return;
    
    const token = localStorage.getItem("token");
    const apiUrl = `${API_URL}/mentorship/mentors/${params.id}`;
    
    console.log("Fetching mentor data from:", apiUrl); // Debug log
    console.log("API_URL env var:", API_URL); // Debug log
    console.log("Mentor ID param:", params.id); // Debug log
    
    fetch(apiUrl, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log("API Response:", data); // Debug log
        if (data.success) {
          console.log("Mentor data:", data.data || data); // Debug log
          console.log("Calendly URL:", (data.data || data)?.calendlyUrl); // Debug log
          setMentor(data.data || data);
        } else {
          setMentor(data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log("API call failed, using fallback data:", error); // Debug log
        // fallback if backend fails
        setMentor({
          id: Number.parseInt(params.id),
          name: "David Wilson",
          role: "Senior JavaScript Developer",
          specialties: ["JavaScript", "React", "Node.js"],
          bio: "David has over 10 years of experience in web development and has worked with companies like Google and Facebook. He specializes in modern JavaScript frameworks and best practices.",
          rating: 4.9,
          reviewCount: 127,
          availability: "Weekdays, 2PM - 6PM EST",
          avatar: "/placeholder.svg?height=100&width=100",
          calendlyUrl: "https://calendly.com/david-wilson-mentor", // Added for testing
        });
        setLoading(false);
      });
  }, [params.id, user]);

  const handleExternalBooking = () => {
    if (mentor?.calendlyUrl) {
      window.open(mentor.calendlyUrl, '_blank');
      toast({
        title: "Redirecting to Calendly",
        description: "Opening the mentor's booking page in a new tab.",
      });
    }
  };

  if (loading) return <div className="container py-8"><div>Loading...</div></div>;

  if (!mentor) return <div className="container py-8"><div>Mentor not found</div></div>;

  // Debug log to see mentor data
  console.log("Current mentor state:", mentor);
  console.log("Has calendlyUrl?", !!mentor.calendlyUrl);
  console.log("CalendlyUrl value:", mentor.calendlyUrl);

  return (
    <div className="container py-8">
      <Link to="/mentorship" className="flex items-center text-primary hover:underline mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Mentors
      </Link>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Book a Session with {mentor.name}</CardTitle>
              <CardDescription>
                Schedule a one-on-one mentorship session using {mentor.name}'s calendar
              </CardDescription>
            </CardHeader>
            <CardContent>
              {mentor.calendlyUrl ? (
                <div className="space-y-6">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-blue-900 dark:text-blue-100 mb-1">
                          Easy Booking with Calendly
                        </h3>
                        <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                          Select a time that works for both you and {mentor.name}. You'll receive a meeting link after booking.
                        </p>
                        <Button 
                          onClick={handleExternalBooking}
                          size="sm"
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Open in New Tab
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Calendly Embed */}
                  <div className="border rounded-lg overflow-hidden">
                    <CalendlyEmbed 
                      url={mentor.calendlyUrl} 
                      mentorName={mentor.name}
                    />
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="mx-auto w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
                    <Calendar className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                    Booking Temporarily Unavailable
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
                    {mentor.name} hasn't set up their calendar booking system yet. You can still reach out to them directly.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link to={`/mentorship/chat/${params.id}`}>
                      <Button variant="outline">
                        Send Message
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button>
                        Contact Support
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {mentor.calendlyUrl && (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                  What to Expect
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-primary">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Choose Your Time</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Select a time slot that works best for your schedule from {mentor.name}'s available times.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-primary">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Get Your Meeting Link</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        After booking, you'll receive a confirmation email with your video meeting link and calendar invitation.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-primary">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Join Your Session</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Join the video call at your scheduled time for personalized mentorship and guidance.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Your Mentor</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={mentor.profileImage || mentor.avatar || "/placeholder.svg"} alt={mentor.name} />
                  <AvatarFallback>
                    {mentor.name
                      ? mentor.name.split(" ")
                          .map((n) => n[0])
                          .join("")
                      : "?"}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-bold text-lg">{mentor.name}</h3>
                  <p className="text-muted-foreground">{mentor.role}</p>
                  {mentor.status && (
                    <div className="flex items-center mt-1">
                      <div
                        className={`h-2 w-2 rounded-full mr-2 ${
                          mentor.status === "online" ? "bg-green-500" : "bg-gray-400"
                        }`}
                      ></div>
                      <span className="text-xs text-muted-foreground capitalize">
                        {mentor.status}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {mentor.specialties && mentor.specialties.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {mentor.specialties.map((specialty, index) => (
                    <Badge key={index} variant="secondary">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              )}

              {mentor.bio && (
                <p className="text-sm">{mentor.bio}</p>
              )}

              <div className="pt-4 border-t">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Clock className="mr-2 h-4 w-4" />
                  <span>Session Duration: 30-60 minutes</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Premium Feature</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Having trouble booking a session? Our support team is here to help.
              </p>
              <Link to="/contact">
                <Button variant="outline" className="w-full">
                  Contact Support
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
