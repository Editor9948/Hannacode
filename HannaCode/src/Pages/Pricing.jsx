import {Link} from "react-router-dom"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { CheckCircle, X } from "lucide-react"
import { Badge } from "../components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"

export default function PricingPage() {
  const freePlanFeatures = [
    { name: "Access to basic courses", included: true },
    { name: "Interactive coding exercises", included: true },
    { name: "Community forum access", included: true },
    { name: "Progress tracking", included: true },
    { name: "Course completion certificates", included: false },
    { name: "Advanced courses", included: false },
    { name: "1-on-1 mentorship", included: false },
    { name: "Code reviews", included: false },
    { name: "Project-based learning", included: false },
  ]

  const premiumPlanFeatures = [
    { name: "Access to ALL courses", included: true },
    { name: "Interactive coding exercises", included: true },
    { name: "Community forum access", included: true },
    { name: "Progress tracking", included: true },
    { name: "Course completion certificates", included: true },
    { name: "Advanced courses", included: true },
    { name: "1-on-1 mentorship (2 sessions/month)", included: true },
    { name: "Code reviews by experts", included: true },
    { name: "Project-based learning", included: true },
  ]

  const faqs = [
    {
      question: "Can I switch between plans?",
      answer:
        "Yes, you can upgrade from the Free plan to the Premium plan at any time. If you decide to downgrade from Premium to Free, the change will take effect at the end of your current billing cycle.",
    },
    {
      question: "How do the mentorship sessions work?",
      answer:
        "Premium plan members get two 30-minute 1-on-1 mentorship sessions per month with experienced developers. These sessions can be used for code reviews, career advice, or help with specific programming challenges. You can schedule these sessions through our platform's calendar system.",
    },
    {
      question: "Are there any refunds if I'm not satisfied?",
      answer:
        "Yes, we offer a 14-day money-back guarantee for our Premium plan. If you're not satisfied with your subscription within the first 14 days, you can request a full refund, no questions asked.",
    },
    {
      question: "Can I download course materials for offline use?",
      answer:
        "Premium members can download video lessons, code examples, and course materials for offline use. Free plan users can only access the content online.",
    },
    {
      question: "Do you offer team or enterprise plans?",
      answer:
        "Yes, we offer special pricing for teams and enterprises. Please contact our sales team at sales@hannacode.com for more information about our team plans and enterprise solutions.",
    },
  ]

  return (
    <div className="container py-12 md:py-16">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple, Transparent Pricing</h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Choose the plan that works best for your learning journey.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Free Plan */}
        <Card className="border-2 border-secondary/20">
          <CardHeader>
            <CardTitle className="text-2xl">Free Plan</CardTitle>
            <CardDescription>Perfect for beginners and casual learners</CardDescription>
            <div className="mt-4 text-4xl font-bold">
              $0<span className="text-lg font-normal text-muted-foreground">/month</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {freePlanFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  {feature.included ? (
                    <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0" />
                  ) : (
                    <X className="mr-2 h-5 w-5 text-muted-foreground shrink-0" />
                  )}
                  <span className={feature.included ? "" : "text-muted-foreground"}>{feature.name}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Link to="/register" className="w-full">
              <Button variant="outline" className="w-full">
                Sign Up Free
              </Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Premium Plan */}
        <Card className="border-2 border-primary relative">
          <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
            <Badge className="bg-primary text-white">Most Popular</Badge>
          </div>
          <CardHeader>
            <CardTitle className="text-2xl">Premium Plan</CardTitle>
            <CardDescription>For serious learners and career changers</CardDescription>
            <div className="mt-4 text-4xl font-bold">
              $29<span className="text-lg font-normal text-muted-foreground">/month</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {premiumPlanFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0" />
                  <span>{feature.name}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Link to="/register?plan=premium" className="w-full">
              <Button className="w-full bg-primary hover:bg-primary/90">Get Premium</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      {/* Annual Plan Callout */}
      <div className="mt-12 bg-lavender/50 dark:bg-primary/10 rounded-lg p-6 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">Save 20% with annual billing</h3>
            <p className="text-muted-foreground">Get 12 months for the price of 10 when you choose annual billing.</p>
          </div>
          <Link to="/register?plan=premium-annual">
            <Button className="bg-primary hover:bg-primary/90">Get Annual Plan</Button>
          </Link>
        </div>
      </div>

      {/* FAQs */}
      <div className="mt-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to start your learning journey?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Join thousands of students who are building their future with HannaCode.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/register">
            <Button className="bg-primary hover:bg-primary/90">Get Started Today</Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline">Contact Sales</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
