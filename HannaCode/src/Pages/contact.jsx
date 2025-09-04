
import React, { useEffect } from "react"

import { useState } from "react"
import {Link} from "react-router-dom"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Textarea } from "../components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { CheckCircle, Mail, MessageSquare, Phone } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"
import { useToast } from "../hooks/useToast"

export default function ContactPage() {
  const { toast } = useToast()

  // Hide Tawk widget on page load, even if script loads after React
  useEffect(() => {
    function hideTawk() {
      if (window.Tawk_API && window.Tawk_API.hide) {
        window.Tawk_API.hide();
      }
    }
    // Hide immediately if already loaded
    hideTawk();
    // Also set onLoad callback for late script load
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_API.onLoad = function() {
      hideTawk();
    };
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      toast({
        title: "Message sent",
        description: "We've received your message and will get back to you soon.",
      })
    }, 1500)
  }

  const faqs = [
    {
      question: "How do I get started with HannaCode?",
      answer:
        "Getting started is easy! Simply create a free account and you'll have immediate access to our basic courses. You can explore the platform, try out some lessons, and decide if you'd like to upgrade to our Premium plan for full access to all features.",
    },
    {
      question: "What's the difference between free and premium plans?",
      answer:
        "Our free plan gives you access to basic courses and community forums. The Premium plan includes all courses, 1-on-1 mentorship sessions, code reviews, project-based learning, and certification upon completion. You can compare the plans in detail on our Pricing page.",
    },
    {
      question: "How does the mentorship program work?",
      answer:
        "Premium members can book 30-minute or 60-minute sessions with our expert mentors. During these sessions, you can get personalized guidance, code reviews, or help with specific programming challenges. You can also message mentors directly for quick questions between sessions.",
    },
    {
      question: "Can I switch between plans?",
      answer:
        "Yes, you can upgrade from the Free plan to the Premium plan at any time. If you decide to downgrade from Premium to Free, the change will take effect at the end of your current billing cycle.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Yes, we offer a 14-day money-back guarantee for our Premium plan. If you're not satisfied with your subscription within the first 14 days, you can request a full refund, no questions asked.",
    },
    {
      question: "How long do I have access to the courses?",
      answer:
        "With the free plan, you have unlimited access to the free courses. With the Premium plan, you have access to all courses for as long as your subscription is active.",
    },
    {
      question: "Do you offer certificates of completion?",
      answer:
        "Yes, Premium members receive certificates of completion for each course they finish. These certificates can be added to your LinkedIn profile or resume to showcase your skills to potential employers.",
    },
  ]

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">Get in Touch</h1>
        <p className="mx-auto max-w-[700px] text-xl text-muted-foreground">
          Have questions or feedback? We'd love to hear from you. Our team is here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Mail className="mr-2 h-5 w-5 text-primary" /> Email Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-2">For general inquiries and support:</p>
            <a href="mailto:support@hannacode.com" className="text-primary hover:underline">
              support@hannacode.com
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Phone className="mr-2 h-5 w-5 text-primary" /> Call Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-2">Monday to Friday, 9AM - 5PM EST:</p>
            <a href="tel:+2348136096609" className="text-primary hover:underline">
              +2348136096609
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageSquare className="mr-2 h-5 w-5 text-primary" /> Live Chat
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-2">Chat with our support team:</p>
            <Button className="bg-primary hover:bg-primary/90"
              onClick={() => {
                if (window.Tawk_API && window.Tawk_API.maximize) {
                  window.Tawk_API.maximize();
                }
              }}
            >Start Chat</Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
          {isSubmitted ? (
            <Card className="bg-lavender/30 dark:bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary" /> Message Sent
                </CardTitle>
                <CardDescription>Thank you for reaching out to us!</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  We've received your message and will get back to you as soon as possible, usually within 24-48 hours.
                </p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline">
                  Send Another Message
                </Button>
              </CardContent>
            </Card>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="billing">Billing Question</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                    <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-[150px]"
                  required
                />
              </div>

              <Button type="submit" className="bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-6">
            <p className="text-muted-foreground mb-4">
              Don't see your question here? Check our comprehensive{" "}
              <Link to="/help" className="text-primary hover:underline">
                Help Center
              </Link>{" "}
              or contact us directly.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-lg overflow-hidden h-[400px] mb-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596552044!2d-74.25986548248684!3d40.69714941887058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1620796614526!5m2!1sen!2sca"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="HannaCode Location"
        ></iframe>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
        <p className="mx-auto max-w-[600px] text-muted-foreground mb-6">
          Connect with other learners and mentors in our thriving community.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="outline" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-github mr-2"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            GitHub
          </Button>
          <Button variant="outline" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-twitter mr-2"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
            Twitter
          </Button>
          <Button variant="outline" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-linkedin mr-2"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </Button>
          <Button variant="outline" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-discord mr-2"
            >
              <circle cx="9" cy="12" r="1" />
              <circle cx="15" cy="12" r="1" />
              <path d="M7.5 7.2c.7-.5 1.4-.8 2.2-1.1 1.5-.5 3-.7 4.6-.6 1.6.1 3.1.5 4.4 1.3 1.2.7 2.2 1.7 2.9 2.9" />
              <path d="M7.5 16.8c.7.5 1.4.8 2.2 1.1 1.5.5 3 .7 4.6.6 1.6-.1 3.1-.5 4.4-1.3 1.2-.7 2.2-1.7 2.9-2.9" />
              <path d="M8.9 16.8c.4 1 1.2 1.8 2.2 2.3 1.5.7 3.1.9 4.7.5 1.6-.4 2.9-1.2 4-2.3.9-.9 1.6-2 2-3.2" />
              <path d="M8.9 7.2c.4-1 1.2-1.8 2.2-2.3 1.5-.7 3.1-.9 4.7-.5 1.6.4 2.9 1.2 4 2.3.9.9 1.6 2 2 3.2" />
              <path d="M19 12c0 1.7-.5 3.3-1.5 4.7-1 1.4-2.3 2.4-3.9 3-1.6.6-3.3.6-4.9 0-1.6-.6-2.9-1.6-3.9-3-1-1.4-1.5-3-1.5-4.7 0-1.7.5-3.3 1.5-4.7 1-1.4 2.3-2.4 3.9-3 1.6-.6 3.3-.6 4.9 0 1.6.6 2.9 1.6 3.9 3 1 1.4 1.5 3 1.5 4.7Z" />
            </svg>
            Discord
          </Button>
        </div>
      </div>
    </div>
  )
}
