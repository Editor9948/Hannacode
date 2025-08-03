import { Button } from "../../components/ui/button"
import React, { useEffect, useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Input } from "../../components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Search, Calendar, MessageCircle, CheckCircle } from "lucide-react"
import {Link} from "react-router-dom"
import MentorCard from "../../components/mentor-card/mentorCard"


const API_URL = process.env.REACT_APP_API_URL

export default function MentorshipPage() {
  // Sample mentors data
  const [mentors, setMentors] = useState([]);
     useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    fetch(`${API_URL}/mentors`, {
      headers: {
        "Authorization": `Bearer ${user?.token}`,
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch mentors');
        }
        return res.json();
      })
      .then(data => {
        if (data.success) {
          setMentors(data.data);
        } else {
          console.error('Error fetching mentors:', data.message);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
}, []);
  return (
    <div className="container py-12">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Expert Mentorship</h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Connect with experienced developers for personalized guidance and accelerate your learning journey.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <TabsList className="grid w-full md:w-auto grid-cols-4 md:grid-cols-4">
            <TabsTrigger value="all">All Mentors</TabsTrigger>
            <TabsTrigger value="javascript">JavaScript</TabsTrigger>
            <TabsTrigger value="html-css">HTML/CSS</TabsTrigger>
            <TabsTrigger value="php">PHP</TabsTrigger>
          </TabsList>

          <div className="flex w-full md:w-auto gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search mentors..." className="pl-10" />
            </div>
            <Select defaultValue="availability">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="availability">Availability</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="experience">Most Experienced</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {mentors.map(mentor => (
              <MentorCard key={mentor._id} {...mentor} id={mentor._id} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="javascript" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {mentors
              .filter((mentor) => mentor.specialties.includes("JavaScript"))
              .map((mentor) => (
                <MentorCard key={mentor._id} {...mentor} id={mentor._id} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="html-css" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors
              .filter((mentor) => mentor.specialties.includes("HTML") || mentor.specialties.includes("CSS"))
              .map((mentor) => (
                <MentorCard key={mentor._id} {...mentor} id={mentor._id} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="php" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mentors
              .filter((mentor) => mentor.specialties.includes("PHP"))
              .map((mentor) => (
                <MentorCard key={mentor._id} {...mentor} id={mentor._id} />
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12 space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">How Mentorship Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Our mentorship program connects you with industry professionals who can provide personalized guidance and
            feedback to accelerate your learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-primary" /> Book a Session
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Choose a mentor based on your learning needs and schedule a 30-minute or 60-minute session at a time
                that works for you.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageCircle className="mr-2 h-5 w-5 text-primary" /> Connect and Learn
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Meet with your mentor via video call to discuss your questions, get code reviews, or work through
                challenging concepts together.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-primary" /> Accelerate Your Growth
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Receive personalized feedback, industry insights, and practical advice to help you overcome obstacles
                and advance your skills faster.
              </p>
            </CardContent>
          </Card>
          <CardFooter className="text-center">
            <Button asChild variant="outline" className="w-full sm:w-auto">
                 <Link to="#mentors-list">
              <MessageCircle className="mr-2 h-4 w-4" /> View Mentors
              </Link>
              </Button>
          </CardFooter>
        </div>

        <div className="bg-lavender/30 dark:bg-primary/5 rounded-lg p-8 text-center mt-12">
          <h2 className="text-2xl font-bold mb-4">Ready to Accelerate Your Learning?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Mentorship is available exclusively to our Premium members. Upgrade today to connect with expert mentors and
            take your skills to the next level.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/pricing">
              <Button className="bg-primary hover:bg-primary/90">Upgrade to Premium</Button>
            </Link>
            <Link to="/courses">
              <Button variant="outline">Explore Courses</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
