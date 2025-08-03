"use client"

import { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import { useNavigate, useParams } from "react-router-dom"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import { Badge } from "../../components/ui/badge"
import { Calendar, Clock, ArrowLeft, CheckCircle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group"
import { Label } from "../../components/ui/label"
import { Textarea } from "../../components/ui/textarea"
import { useToast } from "../../hooks/useToast"


const API_URL = process.env.REACT_APP_API_URL 


export default function BookingPage() {
  const navigate = useNavigate();
  const params = useParams();
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState("30");
  const [topic, setTopic] = useState("");
  const [isBooking, setIsBooking] = useState(false);
  const [mentor, setMentor] = useState(null);

  // Fetch mentor data from backend
  useEffect(() => {
    fetch(`${API_URL}/mentors/${params.id}`)
      .then(res => res.json())
      .then(data => setMentor(data))
      .catch(() => {
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
        });
      });
  }, [params.id]);

  // Generate available dates (next 14 days)
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      // Skip weekends for this example
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push({
          value: date.toISOString().split("T")[0],
          label: date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }),
        });
      }
    }
    return dates;
  };

  // Generate time slots
  const generateTimeSlots = () => [
    { value: "14:00", label: "2:00 PM" },
    { value: "14:30", label: "2:30 PM" },
    { value: "15:00", label: "3:00 PM" },
    { value: "15:30", label: "3:30 PM" },
    { value: "16:00", label: "4:00 PM" },
    { value: "16:30", label: "4:30 PM" },
    { value: "17:00", label: "5:00 PM" },
    { value: "17:30", label: "5:30 PM" },
  ];

  const availableDates = generateDates();
  const timeSlots = generateTimeSlots();

  // Send booking data to backend
  const handleBookSession = async () => {
    if (!selectedDate || !selectedTime) {
      toast({
        title: "Missing information",
        description: "Please select a date and time for your session",
        variant: "destructive",
      });
      return;
    }

    setIsBooking(true);

    try {
      const response = await fetch(`${API_URL}/mentorship/book`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mentorId: mentor.id,
          date: selectedDate,
          time: selectedTime,
          duration: selectedDuration,
          topic,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Booking failed. Please try again.");
      }

      toast({
        title: "Session booked!",
        description: `Your ${selectedDuration}-minute session with ${mentor.name} has been scheduled.`,
      });

      // Redirect to dashboard or confirmation page
      navigate("/dashboard");
    } catch (err) {
      toast({
        title: "Booking failed",
        description: err instanceof Error ? err.message : "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsBooking(false);
    }
  };

  if (!mentor) return <div>Loading...</div>;

  return (
    <div className="container py-8">
      <Link to="/mentorship" className="flex items-center text-primary hover:underline mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Mentors
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Book a Mentorship Session</CardTitle>
              <CardDescription>Schedule a one-on-one session with your mentor</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="date" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="date">1. Select Date & Time</TabsTrigger>
                  <TabsTrigger value="duration">2. Session Details</TabsTrigger>
                  <TabsTrigger value="confirm">3. Confirm</TabsTrigger>
                </TabsList>

                <TabsContent value="date" className="space-y-4 mt-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Select a Date</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                      {availableDates.map((date) => (
                        <Button
                          key={date.value}
                          variant={selectedDate === date.value ? "default" : "outline"}
                          className={`h-auto py-3 ${
                            selectedDate === date.value ? "bg-primary hover:bg-primary/90" : ""
                          }`}
                          onClick={() => setSelectedDate(date.value)}
                        >
                          {date.label}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {selectedDate && (
                    <div>
                      <h3 className="text-lg font-medium mb-4">Select a Time</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {timeSlots.map((time) => (
                          <Button
                            key={time.value}
                            variant={selectedTime === time.value ? "default" : "outline"}
                            className={`h-auto py-3 ${
                              selectedTime === time.value ? "bg-primary hover:bg-primary/90" : ""
                            }`}
                            onClick={() => setSelectedTime(time.value)}
                          >
                            {time.label}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="duration" className="space-y-6 mt-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Session Duration</h3>
                    <RadioGroup
                      defaultValue="30"
                      value={selectedDuration}
                      onValueChange={setSelectedDuration}
                      className="flex flex-col space-y-3"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="30" id="duration-30" />
                        <Label htmlFor="duration-30" className="flex items-center">
                          <Clock className="mr-2 h-4 w-4" /> 30 minutes
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="60" id="duration-60" />
                        <Label htmlFor="duration-60" className="flex items-center">
                          <Clock className="mr-2 h-4 w-4" /> 60 minutes
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">What would you like to discuss?</h3>
                    <Textarea
                      placeholder="Describe what you'd like to cover in this session..."
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="min-h-[120px]"
                    />
                    <p className="text-sm text-muted-foreground mt-2">
                      This helps your mentor prepare for the session and make the most of your time together.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="confirm" className="space-y-6 mt-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Review Your Booking</h3>

                    <div className="space-y-3 border rounded-md p-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Mentor:</span>
                        <span className="font-medium">{mentor.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Date:</span>
                        <span className="font-medium">
                          {selectedDate
                            ? new Date(selectedDate).toLocaleDateString("en-US", {
                                weekday: "long",
                                month: "long",
                                day: "numeric",
                              })
                            : "Not selected"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Time:</span>
                        <span className="font-medium">
                          {selectedTime
                            ? new Date(`2000-01-01T${selectedTime}`).toLocaleTimeString("en-US", {
                                hour: "numeric",
                                minute: "2-digit",
                              })
                            : "Not selected"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-medium">{selectedDuration} minutes</span>
                      </div>
                    </div>

                    {topic && (
                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2">Discussion Topic:</h4>
                        <p className="text-muted-foreground">{topic}</p>
                      </div>
                    )}

                    <div className="bg-lavender/30 dark:bg-primary/5 rounded-md p-4">
                      <h4 className="font-medium flex items-center mb-2">
                        <CheckCircle className="mr-2 h-4 w-4 text-primary" /> What happens next:
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <span className="mr-2">1.</span>
                          <span>
                            You'll receive a confirmation email with the session details and a calendar invitation.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">2.</span>
                          <span>
                            A video conference link will be provided 15 minutes before your scheduled session.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">3.</span>
                          <span>If you need to reschedule or cancel, please do so at least 24 hours in advance.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button
                onClick={handleBookSession}
                className="bg-primary hover:bg-primary/90"
                disabled={!selectedDate || !selectedTime || isBooking}
              >
                {isBooking ? "Booking..." : "Book Session"}
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Your Mentor</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={mentor.avatar || "/placeholder.svg"} alt={mentor.name} />
                  <AvatarFallback>
                    {mentor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-bold text-lg">{mentor.name}</h3>
                  <p className="text-muted-foreground">{mentor.role}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {mentor.specialties.map((specialty, index) => (
                  <Badge key={index} variant="secondary">
                    {specialty}
                  </Badge>
                ))}
              </div>

              <p className="text-sm">{mentor.bio}</p>

              <div className="text-sm">
                <div className="flex items-center mb-1">
                  <Calendar className="mr-2 h-4 w-4 text-primary" />
                  <span>Availability: {mentor.availability}</span>
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
                If you have any questions about booking a mentorship session, please contact our support team.
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
