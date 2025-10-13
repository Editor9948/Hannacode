import {Link} from "react-router-dom"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { MapPin, Briefcase, Clock, ArrowRight } from 'lucide-react'

export default function CareersPage() {
  const openPositions = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "San Francisco, CA (Remote Available)",
      type: "Full-time",
      description:
        "We're looking for an experienced frontend developer to help build and improve our learning platform. You'll work with our product and design teams to create engaging, accessible, and responsive user interfaces.",
      requirements: [
        "5+ years of experience with modern JavaScript frameworks (React preferred)",
        "Strong understanding of HTML, CSS, and responsive design",
        "Experience with TypeScript and state management libraries",
        "Knowledge of web accessibility standards",
        "Excellent problem-solving skills and attention to detail",
      ],
      posted: "2 weeks ago",
    },
    {
      id: 2,
      title: "Curriculum Developer - JavaScript",
      department: "Education",
      location: "Remote",
      type: "Full-time",
      description:
        "Join our curriculum team to create engaging, practical JavaScript courses. You'll develop lesson plans, coding exercises, projects, and assessments that help students build real-world skills.",
      requirements: [
        "3+ years of professional JavaScript development experience",
        "Experience with modern frameworks like React, Vue, or Angular",
        "Strong written communication skills",
        "Teaching or mentoring experience preferred",
        "Passion for education and helping others learn",
      ],
      posted: "1 week ago",
    },
    {
      id: 3,
      title: "Technical Content Writer",
      department: "Marketing",
      location: "Remote",
      type: "Part-time / Contract",
      description:
        "Create high-quality technical blog posts, tutorials, and documentation for our platform. You'll work closely with our curriculum and marketing teams to produce content that showcases our courses and helps developers learn new skills.",
      requirements: [
        "Strong technical writing skills with a portfolio of published work",
        "Hands-on experience with web development technologies",
        "Ability to explain complex concepts in a clear, approachable way",
        "SEO knowledge is a plus",
        "Self-motivated with excellent time management skills",
      ],
      posted: "3 days ago",
    },
    {
      id: 4,
      title: "UX/UI Designer",
      department: "Design",
      location: "San Francisco, CA (Hybrid)",
      type: "Full-time",
      description:
        "Help shape the user experience of our learning platform. You'll create intuitive, accessible designs that make learning to code enjoyable and effective for students of all skill levels.",
      requirements: [
        "3+ years of UX/UI design experience for web applications",
        "Proficiency with design tools like Figma or Adobe XD",
        "Experience with design systems and component libraries",
        "Understanding of accessibility standards and best practices",
        "Portfolio demonstrating your design process and solutions",
      ],
      posted: "1 month ago",
    },
    {
      id: 5,
      title: "Backend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description:
        "Build and maintain the backend systems that power our learning platform. You'll work on API development, database design, authentication, and ensuring our platform can scale to support thousands of learners.",
      requirements: [
        "4+ years of backend development experience",
        "Proficiency with Node.js and Express or similar frameworks",
        "Experience with SQL and NoSQL databases",
        "Knowledge of API design and RESTful principles",
        "Understanding of security best practices",
      ],
      posted: "2 weeks ago",
    },
  ]

  const benefits = [
    {
      title: "Flexible Work Environment",
      description: "Work remotely or from our offices with flexible hours to maintain a healthy work-life balance.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-home"
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      title: "Competitive Compensation",
      description: "We offer competitive salaries, equity options, and performance bonuses to reward your contributions.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-banknote"
        >
          <rect width="20" height="12" x="2" y="6" rx="2" />
          <circle cx="12" cy="12" r="2" />
          <path d="M6 12h.01M18 12h.01" />
        </svg>
      ),
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs for you and your family.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-heart-pulse"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          <path d="M3.22 12H9.5l.5-1 2 4 .5-2 2 2h5.27" />
        </svg>
      ),
    },
    {
      title: "Professional Development",
      description: "Continuous learning opportunities, conference stipends, and dedicated time for personal projects.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-graduation-cap"
        >
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
    },
    {
      title: "Generous Time Off",
      description: "Unlimited PTO policy, paid holidays, and parental leave to ensure you can recharge and spend time with loved ones.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-palm-tree"
        >
          <path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4" />
          <path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3" />
          <path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35z" />
          <path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14" />
        </svg>
      ),
    },
    {
      title: "Team Building",
      description: "Regular team retreats, virtual social events, and opportunities to connect with colleagues around the world.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-users"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
  ]

  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Help us make programming education accessible to everyone. We're looking for passionate individuals to join our
          mission.
        </p>
      </div>

      {/* Why Work With Us */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Work With Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-2 border-secondary/20">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Our Values */}
      <div className="mb-20 bg-lavender/30 dark:bg-primary/5 rounded-lg p-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Values</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Education for All</h3>
              <p className="text-muted-foreground">
                We believe that quality education should be accessible to everyone, regardless of background or
                financial situation. We're committed to breaking down barriers to learning.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Innovation & Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in everything we do, from our course content to our platform. We embrace
                innovation and are always looking for better ways to help our students learn.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Diversity & Inclusion</h3>
              <p className="text-muted-foreground">
                We celebrate diversity and are committed to creating an inclusive environment where everyone feels
                welcome and valued. Different perspectives make our team and our platform stronger.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Continuous Growth</h3>
              <p className="text-muted-foreground">
                We believe in lifelong learning and personal development. We encourage our team members to grow their
                skills and pursue their passions, both professionally and personally.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
        <div className="space-y-6">
          {openPositions.map((position) => (
            <Card key={position.id} className="border-2 border-secondary/20 hover:border-secondary transition-colors">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <div>
                    <CardTitle className="text-xl">{position.title}</CardTitle>
                    <CardDescription className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="outline" className="bg-secondary/20 text-primary border-secondary">
                        {position.department}
                      </Badge>
                      <div className="flex items-center text-sm">
                        <MapPin className="mr-1 h-3 w-3" /> {position.location}
                      </div>
                      <div className="flex items-center text-sm">
                        <Briefcase className="mr-1 h-3 w-3" /> {position.type}
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="mr-1 h-3 w-3" /> Posted {position.posted}
                      </div>
                    </CardDescription>
                  </div>
                  <Link to={`/careers/${position.id}`}>
                    <Button className="bg-primary hover:bg-primary/90">View Position</Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{position.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Requirements:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    {position.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <div className="flex items-center gap-2">
                  <Link to={`/careers/${position.id}`}>
                    <Button variant="ghost" className="hover:text-primary">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/team/apply" state={{ role: position.title }}>
                    <Button className="bg-primary">Apply</Button>
                  </Link>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Application Process */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Application Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-2 border-secondary/20">
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Application Review</h3>
              <p className="text-muted-foreground">
                Our team reviews your application to assess your qualifications and experience.
              </p>
            </CardContent>
          </Card>
          <Card className="border-2 border-secondary/20">
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Initial Interview</h3>
              <p className="text-muted-foreground">
                A video call with our hiring team to discuss your background and interest in the role.
              </p>
            </CardContent>
          </Card>
          <Card className="border-2 border-secondary/20">
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Skills Assessment</h3>
              <p className="text-muted-foreground">
                A practical task or technical interview relevant to the position you're applying for.
              </p>
            </CardContent>
          </Card>
          <Card className="border-2 border-secondary/20">
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Final Interview</h3>
              <p className="text-muted-foreground">
                Meet with team members and leadership to ensure a mutual fit for the role.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* No Positions? */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">Don't See a Position That Fits?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          We're always looking for talented individuals to join our team. Send us your resume and tell us how you can
          contribute to our mission.
        </p>
        <Link to="/team/apply">
          <Button className="bg-primary hover:bg-primary/90">Submit General Application</Button>
        </Link>
      </div>

      {/* Team Photos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <img
          src="/placeholder.svg?height=200&width=400"
          alt="Team working together"
          className="rounded-lg object-cover w-full h-48"
        />
        <img
          src="/placeholder.svg?height=200&width=400"
          alt="Office environment"
          className="rounded-lg object-cover w-full h-48"
        />
        <img
          src="/placeholder.svg?height=200&width=400"
          alt="Team building activity"
          className="rounded-lg object-cover w-full h-48"
        />
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Join Our Mission?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Explore our open positions and take the first step toward a rewarding career at HannaCode.
        </p>
        <Button className="bg-primary hover:bg-primary/90" onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}>
          View Open Positions
        </Button>
      </div>
    </div>
  )
}
