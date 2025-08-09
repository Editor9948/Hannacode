import React from "react"
import { useLocation, Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Mail, ArrowLeft } from "lucide-react"

export default function VerifyEmailSent() {
  const location = useLocation()
  const { email, message } = location.state || {}

  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-4rem)] py-12">
      <div className="w-full max-w-md">
        <Card className="border-2 border-secondary/20">
          <CardHeader className="space-y-1 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-2xl font-bold">Check your email</CardTitle>
            <CardDescription>
              {message || "We've sent a verification link to your email address"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {email && (
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  We sent a verification link to:
                </p>
                <p className="font-medium text-primary">{email}</p>
              </div>
            )}
            
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Please check your email and click the verification link to activate your account.</p>
              <p>If you don't see the email, check your spam folder.</p>
            </div>

            <div className="space-y-2">
              <Button asChild className="w-full">
                <Link to="/login">
                  Continue to Login
                </Link>
              </Button>
              
              <Button variant="outline" asChild className="w-full">
                <Link to="/register" className="flex items-center justify-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Registration
                </Link>
              </Button>
            </div>

            <div className="text-center text-xs text-muted-foreground">
              <p>Didn't receive the email? Contact support for assistance.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
