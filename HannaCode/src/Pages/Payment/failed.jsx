import {Link} from "react-router-dom"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { AlertCircle, ArrowLeft, RefreshCw } from "lucide-react"

export default function PaymentFailedPage() {
  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-4rem)] py-12">
      <Card className="w-full max-w-md border-2 border-destructive/20">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
            <AlertCircle className="h-10 w-10 text-destructive" />
          </div>
          <CardTitle className="text-2xl">Payment Failed</CardTitle>
          <CardDescription>We couldn't process your payment</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center">Unfortunately, your payment could not be processed. This could be due to:</p>
          <ul className="space-y-2 text-left mx-auto max-w-xs">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Insufficient funds in your account</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Incorrect card information</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Your card was declined by the issuing bank</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>A temporary issue with our payment processor</span>
            </li>
          </ul>
          <div className="rounded-md bg-muted p-4 mt-6">
            <p className="text-sm text-muted-foreground">
              No charges have been made to your account. You can try again with the same or a different payment method.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button asChild className="w-full bg-primary hover:bg-primary/90">
            <Link href="/pricing">
              <RefreshCw className="mr-2 h-4 w-4" /> Try Again
            </Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/contact">Contact Support</Link>
          </Button>
          <Button asChild variant="link" className="w-full">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Return to Home
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
