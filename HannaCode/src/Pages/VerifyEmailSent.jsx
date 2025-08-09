import React, { useState } from "react"
import { useLocation, Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Mail, ArrowLeft, RefreshCw } from "lucide-react"
import { useToast } from "../hooks/useToast"

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/v1'

export default function VerifyEmailSent() {
  const location = useLocation()
  const { email, message } = location.state || {}
  const { toast } = useToast()
  const [isResending, setIsResending] = useState(false)
  const [resendCooldown, setResendCooldown] = useState(0)

  const handleResendEmail = async () => {
    if (!email) {
      toast({
        title: "Error",
        description: "Email address not available. Please register again.",
        variant: "error"
      })
      return
    }

    setIsResending(true)
    try {
      const response = await fetch(`${API_URL}/auth/resendverification/email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      })

      const data = await response.json()

      if (response.ok) {
        toast({
          title: "Email Sent",
          description: data.message || "Verification email sent successfully!",
          variant: "success"
        })
        
        // Start cooldown timer (60 seconds)
        setResendCooldown(60)
        const timer = setInterval(() => {
          setResendCooldown(prev => {
            if (prev <= 1) {
              clearInterval(timer)
              return 0
            }
            return prev - 1
          })
        }, 1000)
      } else {
        toast({
          title: "Error",
          description: data.message || "Failed to resend verification email",
          variant: "error"
        })
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Please check your connection and try again",
        variant: "error"
      })
    } finally {
      setIsResending(false)
    }
  }

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
              
              <Button 
                variant="outline" 
                className="w-full"
                onClick={handleResendEmail}
                disabled={isResending || resendCooldown > 0}
              >
                {isResending ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Resending...
                  </>
                ) : resendCooldown > 0 ? (
                  `Resend in ${resendCooldown}s`
                ) : (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Resend Email
                  </>
                )}
              </Button>
              
              <Button variant="ghost" asChild className="w-full">
                <Link to="/register" className="flex items-center justify-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Registration
                </Link>
              </Button>
            </div>

            <div className="text-center text-xs text-muted-foreground">
              <p>Didn't receive the email? Check your spam folder or use the resend button above.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
