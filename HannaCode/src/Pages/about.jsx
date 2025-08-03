import {Link} from "react-router-dom"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Code, BookOpen, Users, Award, ArrowRight } from "lucide-react"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Oladapo Ayomide.O",
      role: "Founder & Lead Instructor",
      bio: "Oladapo has over 2 years of experience in web development and has worked with companies like Google and Facebook. He founded HannaCode to make programming education accessible to everyone.",
      avatar: "/dapo.jpg?height=200&width=200",
    },
    {
      name: "Sarah Johnson",
      role: "Frontend Development Lead",
      bio: "Sarah is a frontend specialist with expertise in creating beautiful, responsive websites. She has worked with major brands and has a passion for teaching web design principles.",
      avatar: "/sara.jpg?height=200&width=200",
    },
    {
      name: "Michael Chen",
      role: "Backend Development Lead",
      bio: "Michael is a full stack developer with a strong background in both frontend and backend technologies. He loves helping students build complete web applications from scratch.",
      avatar: "/micheal.jpg?height=200&width=200",
    },
    {
      name: "Jessica Williams",
      role: "UX Design & Education Director",
      bio: "Jessica bridges the gap between design and development. With a background in both fields, she helps students create visually stunning and highly functional websites.",
      avatar: "/placeholder.svg?height=200&width=200",
    },
  ]

  const values = [
    {
      icon: <BookOpen className="h-12 w-12 text-primary" />,
      title: "Accessible Education",
      description:
        "We believe that quality programming education should be accessible to everyone, regardless of their background or financial situation.",
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Community-Driven",
      description:
        "Our community of learners and mentors is at the heart of everything we do. We foster a supportive environment where everyone can grow together.",
    },
    {
      icon: <Award className="h-12 w-12 text-primary" />,
      title: "Practical Excellence",
      description:
        "We focus on practical, real-world skills that prepare our students for success in their careers or personal projects.",
    },
    {
      icon: <Code className="h-12 w-12 text-primary" />,
      title: "Continuous Innovation",
      description:
        "The tech world evolves rapidly, and so do we. We continuously update our curriculum to reflect the latest industry trends and best practices.",
    },
  ]

  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">Our Mission</h1>
        <p className="mx-auto max-w-[800px] text-xl text-muted-foreground">
          To empower individuals with the skills and knowledge they need to succeed in the digital world through
          accessible, high-quality programming education.
        </p>
      </div>

      {/* Story Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              HannaCode was founded in 2025 with a simple idea: make programming education accessible, engaging, and
              effective for everyone. Our founder, Oladapo Olotu.A, experienced firsthand the challenges of learning to
              code through fragmented online resources and expensive bootcamps.
            </p>
            <p>
              He envisioned a platform that would combine the best aspects of self-paced learning with the guidance and
              support of experienced mentors. A place where students could not only learn theory but also apply their
              knowledge through practical exercises and real-world projects.
            </p>
            <p>
              Today, HannaCode has grown into a thriving community of learners and educators, all united by a passion
              for coding and a belief in the power of education to transform lives.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-lavender rounded-full opacity-50 dark:bg-primary/20"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-lavender rounded-full opacity-50 dark:bg-primary/20"></div>
          <img
            src="/team.png?height=400&width=600"
            alt="Team working together"
            className="rounded-lg relative z-10 w-full"
          /> 
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground">
            These core principles guide everything we do at HannaCode, from curriculum development to community
            engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="border-2 border-secondary/20">
              <CardHeader className="pb-2">
                <div className="mb-4">{value.icon}</div>
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground">
            Our team of experienced developers and educators is passionate about helping you succeed in your coding
            journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.avatar || "/placeholder.svg"}
                  alt={member.name}
                  className="object-cover w-full h-full transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-lavender/30 dark:bg-primary/5 rounded-lg p-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground">
            We're proud of the difference we've made in our students' lives and careers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
            <div className="text-muted-foreground">Students Worldwide</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">200+</div>
            <div className="text-muted-foreground">Expert Mentors</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Comprehensive Courses</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">85%</div>
            <div className="text-muted-foreground">Job Placement Rate</div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Student Success Stories</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground">
            Hear from some of our students who have transformed their careers with HannaCode.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Alex Johnson" />
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">Alex Johnson</CardTitle>
                  <CardDescription>Frontend Developer at TechCorp</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                "Before HannaCode, I was working in retail with no tech background. The structured curriculum and
                mentorship helped me land my first developer job within 6 months. It completely changed my life."
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Maria Garcia" />
                  <AvatarFallback>MG</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">Maria Garcia</CardTitle>
                  <CardDescription>Full Stack Developer at StartupX</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                "The premium mentorship was invaluable. Having an experienced developer review my code and provide
                guidance accelerated my learning tremendously. I'm now leading projects at my company."
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="James Wilson" />
                  <AvatarFallback>JW</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">James Wilson</CardTitle>
                  <CardDescription>Freelance Web Developer</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                "As someone who wanted to start a freelance business, HannaCode gave me both the technical skills and
                the confidence to take on clients. I'm now running my own successful web development business."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Coding Journey?</h2>
        <p className="mx-auto max-w-[600px] text-muted-foreground mb-8">
          Join thousands of students who are building their future with HannaCode.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/register">
            <Button className="bg-primary hover:bg-primary/90">
              Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/courses">
            <Button variant="outline">Explore Our Courses</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
