import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import { Badge } from "../../components/ui/badge"
import { Calendar, MessageCircle, Star } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

const API_URL = process.env.REACT_APP_API_URL

export default function MentorCard({
  id,
  name,
  role,
  specialties = [],
  status,
  bio,
  rating,
  reviewCount,
  availability,
  avatar,
  isPremium,
}) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    
    if (storedUser && storedToken) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }
    }
    setIsLoading(false);
  }, []);

  const handleMessage = async () => {
    if (isLoading) return;

    if (!user || !localStorage.getItem("token")) {
      alert("You must be logged in to message a mentor.");
      navigate("/login");
      return;
    }

    // Check if user has premium access for mentorship
    if (!user.role || (user.role !== "premium" && user.role !== "admin")) {
      navigate("/pricing", { 
        state: { 
          message: "Premium subscription required to access mentorship features. Please upgrade your plan to chat with mentors.",
          feature: "mentorship"
        }
      });
      return;
    }

    try {
      const token = localStorage.getItem("token");
      
      // For admin users, create a direct chat session
      if (user.role === "admin") {
        console.log("Creating admin chat session with mentor:", id);
        const res = await fetch(`${API_URL}/mentorship/admin/chat`, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ mentorId: id })
        });

        const data = await res.json();
        console.log("Admin chat response:", data);

        if (!res.ok) {
          throw new Error(data.error || "Failed to create chat session");
        }

        if (data && data.data && data.data._id) {
          navigate(`/mentorship/chat/${data.data._id}`);
        } else {
          throw new Error("Invalid response from server");
        }
        return;
      }

      // For regular users, use the existing flow
      console.log("Creating regular chat session with mentor:", id);
      const res = await fetch(`${API_URL}/mentorship/sessions/find-or-create`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ mentorId: id })
      });

      const data = await res.json();
      console.log("Regular chat response:", data);

      if (!res.ok) {
        throw new Error(data.error || "Failed to create chat session");
      }

      if (data && data.data && data.data._id) {
        navigate(`/mentorship/chat/${data.data._id}`);
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (err) {
      console.error("Error starting chat:", err);
      alert(err.message || "Error starting chat session. Please try again.");
    }
  };

  const handleBookSession = () => {
    if (isLoading) return;

    if (!user || !localStorage.getItem("token")) {
      alert("You must be logged in to book a session with a mentor.");
      navigate("/login");
      return;
    }

    // Check if user has premium access for mentorship
    if (!user.role || (user.role !== "premium" && user.role !== "admin")) {
      navigate("/pricing", { 
        state: { 
          message: "Premium subscription required to access mentorship features. Please upgrade your plan to book sessions with mentors.",
          feature: "mentorship"
        }
      });
      return;
    }

    navigate(`/mentorship/book/${id}`);
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={avatar || "/placeholder.svg"} alt={name} />
          <AvatarFallback>
            {name
              ? name.split(" ")
                  .map((n) => n[0])
                  .join("")
              : "?"}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <CardTitle className="text-lg">{name}</CardTitle>
          <CardDescription>{role}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {specialties.map((specialty, index) => (
            <Badge key={index} variant="secondary">
              {specialty}
            </Badge>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mb-4">{bio}</p>
        <div className="flex items-center gap-2 mb-4">
          <Star className="h-4 w-4 text-yellow-500" />
          <span className="text-sm font-medium">{rating}</span>
          <span className="text-sm text-muted-foreground">
            ({reviewCount} reviews)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className={`h-2 w-2 rounded-full ${
              status === "online" ? "bg-primary" : "bg-gray-400"
            }`}
          ></div>
          <span className="text-sm text-muted-foreground">
            {status === "online" ? "Online" : "Offline"}
          </span>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button
          variant="outline"
          className="flex-1"
          onClick={handleMessage}
          disabled={isLoading}
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          Message
        </Button>
        <Button 
          className="flex-1"
          onClick={handleBookSession}
          disabled={isLoading}
        >
          <Calendar className="mr-2 h-4 w-4" />
          Book Session
        </Button>
      </CardFooter>
    </Card>
  );
}