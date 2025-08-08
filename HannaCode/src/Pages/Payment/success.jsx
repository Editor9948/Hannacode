import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { Button } from "../../components/ui/button"
import { useToast } from "../../hooks/useToast"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"


const API_URL = process.env.REACT_APP_API_URL 

export default function PaymentSuccessPage() {
  const [subscription, setSubscription] = useState(null);
  const { toast } = useToast();
  const location = useLocation();

  useEffect(() => {
    const fetchSubscriptionDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_URL}/payments/history`, {
          headers: {
            "Authorization": `Bearer ${token}`,
          }
        });
        const data = await response.json();
        
        if (data.success && data.data.length > 0) {
          setSubscription(data.data[0]); // Get the most recent subscription
          
          // Update user role in localStorage to ensure premium access
          const currentUser = JSON.parse(localStorage.getItem('user') || '{}');
          if (currentUser && currentUser.role !== 'premium') {
            currentUser.role = 'premium';
            localStorage.setItem('user', JSON.stringify(currentUser));
            console.log('User role updated to premium in localStorage');
          }
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "Could not fetch subscription details",
          variant: "error",
        });
      }
    };

    fetchSubscriptionDetails();
  }, [toast]);

  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-4rem)] py-12">
      <Card className="w-full max-w-md border-2 border-primary/20">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-2xl">Payment Successful!</CardTitle>
          <CardDescription>
            {subscription ? `Thank you for choosing our ${subscription.plan} plan` : 'Thank you for upgrading to Premium'}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <p>
            Your payment has been processed successfully. You now have full access to all premium features, including:
          </p>
          <ul className="space-y-2 text-left mx-auto max-w-xs">
            <li className="flex items-start">
              <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0" />
              <span>Access to all courses and content</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0" />
              <span>1-on-1 mentorship sessions</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0" />
              <span>Code reviews by experts</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0" />
              <span>Project-based learning resources</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0" />
              <span>Certification upon completion</span>
            </li>
          </ul>
          <div className="rounded-md bg-primary/5 p-4 mt-6">
            <p className="text-sm text-muted-foreground">
              A receipt has been sent to your email. You can also view your subscription details in your account
              settings.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button asChild className="w-full bg-primary hover:bg-primary/90">
            <Link to="/dashboard">
              Go to Dashboard <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link to="/courses">Browse Courses</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
