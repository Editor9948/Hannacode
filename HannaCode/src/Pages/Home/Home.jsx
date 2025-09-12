import {Link} from "react-router-dom"
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button"
import { ArrowRight, CheckCircle, Code, BookOpen, Users, Star } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"

export default function Home() {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Comprehensive Curriculum",
      description:
        "Learn HTML, CSS, JavaScript, and PHP through structured, progressive lessons designed for all skill levels.",
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Interactive Coding",
      description: "Practice what you learn with interactive coding exercises and real-time feedback on your progress.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Expert Mentorship",
      description: "Get personalized guidance from industry professionals with our premium subscription.",
    },
  ]

  const courses = [
    {
      title: "HTML Fundamentals",
      description: "Learn the building blocks of web development with HTML5",
      level: "Beginner",
      lessons: 24,
      image: "/htmlogo.jpg?height=200&width=300",
      path: "/courses/html-fundamentals",
    },
    {
      title: "CSS Styling Mastery",
      description: "Create beautiful, responsive designs with modern CSS",
      level: "Intermediate",
      lessons: 32,
      image: "/csslogo.jpg?height=200&width=300",
      path: "/courses/css-styling-mastery",
    },
    {
      title: "JavaScript Essentials",
      description: "Build interactive web applications with JavaScript",
      level: "Intermediate",
      lessons: 40,
      image: "/java.jpg?height=200&width=300",
      path: "/courses/javascript-essentials",
    },
    {
      title: "PHP & MySQL",
      description: "Create dynamic, database-driven websites with PHP",
      level: "Advanced",
      lessons: 36,
      image: "/php.jpg?height=200&width=300",
      path: "/courses/php-and-mysql-basics",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Front-end Developer",
      content:
        "HannaCode transformed my career. I went from knowing nothing about coding to landing a job as a front-end developer in just 6 months!",
      avatar: "/sarah.jpg?height=40&width=40",
    },
    {
      name: "Michael Chen",
      role: "Full-stack Engineer",
      content:
        "The premium mentorship was worth every penny. Having an experienced developer review my code and provide guidance accelerated my learning tremendously.",
      avatar: "/testimonial4.jpg?height=40&width=40",
    },
    {
      name: "Jessica Williams",
      role: "Web Designer",
      content:
        "The structured curriculum made learning to code less intimidating. I especially loved the interactive exercises that reinforced each concept.",
      avatar: "/testimonial1.jpg?height=40&width=40",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-lavender to-white dark:from-primary/10 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
                 <div className="relative inline-block">
                   <motion.h1
                     initial={{ opacity: 0, y: 32 }}
                       animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                         className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
                           >
                            Master Programming with{" "}
                           <span className="relative">
                           <span className="relative z-10 bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent">
                            Interactive Learning
                               </span>
                               <motion.span
                               initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                 transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                             className="absolute left-0 bottom-0 h-[10px] rounded-md bg-emerald-300/40 dark:bg-emerald-500/25"
                             />
                           </span>
                           </motion.h1>
                          </div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                 animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.35 }}
                   className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400"
                   >
                    Learn HTML, CSS, JavaScript, and PHP through hands-on exercises, expert guidance, and a supportive community.
                   </motion.p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/courses">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Explore Courses <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="outline">Sign Up Free</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why Choose HannaCode</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400">
                Our platform is designed to make learning programming languages accessible, engaging, and effective.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-2 border-secondary/20 hover:border-secondary transition-colors">
                  <CardHeader>
                    <div className="mb-2">{feature.icon}</div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 md:py-24 bg-lavender/30 dark:bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Courses</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400">
                Start your coding journey with our most popular programming courses.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {courses.map((course, index) => (
                <Link to={course.path} key={index} className="group">
                  <Card className="overflow-hidden course-card h-full">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        className="object-cover w-full h-full transition-transform group-hover:scale-105"
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
                      <CardTitle className="group-hover:text-primary transition-colors">{course.title}</CardTitle>
                      <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button variant="ghost" className="w-full justify-between group-hover:text-primary">
                        View Course <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="mt-10">
              <Link to="/courses">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  View All Courses <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Simple, Transparent Pricing</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400">
                Choose the plan that works best for your learning journey.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <Card className="border-2 border-primary/10">
                <CardHeader>
                  <CardTitle>Free Plan</CardTitle>
                  <div className="mt-4 text-4xl font-bold">
                    #0<span className="text-lg font-normal text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Access to basic courses</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Interactive coding exercises</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Community forum access</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link to="/register" className="w-full">
                    <Button variant="outline" className="w-full hover:bg-primary hover:text-white">
                      Sign Up Free
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="border-2 border-primary relative">
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <Badge className="bg-primary text-white">Popular</Badge>
                </div>
                <CardHeader>
                  <CardTitle>Premium Plan</CardTitle>
                  <div className="mt-4 text-4xl font-bold">
                    #30,000<span className="text-lg font-normal text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Access to all courses</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Advanced coding exercises</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>1-on-1 mentorship sessions</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Code reviews by experts</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Project-based learning</span>
                    </li>
                     <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Progress tracking</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Certification upon completion</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link to="/pricing" className="w-full">
                    <Button className="w-full bg-primary hover:bg-primary/90">Get Premium</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-lavender/30 dark:bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Students Say</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400">
                Hear from developers who transformed their careers with HannaCode.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="text-left">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="rounded-full h-10 w-10 object-cover"
                      />
                      <div>
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        <CardDescription>{testimonial.role}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground">{testimonial.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Start Your Coding Journey?</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400">
                Join thousands of students who are building their future with HannaCode.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link to="/register">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/courses">
                <Button variant="outline">Explore Courses</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
