import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Mail, RefreshCw, ArrowLeft } from "lucide-react"
import { useToast } from "../hooks/useToast"

const API_URL = process.env.REACT_APP_API_URL 

export default function ResendVerificationPage() {
  const navigate = useNavigate()
  const { toast } = useToast()
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address",
        variant: "error"
      })
      return
    }

    setIsLoading(true)
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
        
        // Redirect to verify email sent page
        navigate("/verify-email-sent", {
          state: {
            email,
            message: "Verification email resent successfully!"
          }
        })
      } else if (response.status === 429) {
        toast({
          title: "Please Wait",
          description: "Please wait before requesting another verification email",
          variant: "warning"
        })
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
      setIsLoading(false)
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
            <CardTitle className="text-2xl font-bold">Resend Verification</CardTitle>
            <CardDescription>
              Enter your email address to receive a new verification link
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Resend Verification Email
                  </>
                )}
              </Button>
            </form>
            
            <div className="mt-6 space-y-2">
              <Button variant="outline" asChild className="w-full">
                <Link to="/login" className="flex items-center justify-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Login
                </Link>
              </Button>
              
              <div className="text-center text-sm text-muted-foreground">
                <p>
                  Don't have an account?{" "}
                  <Link to="/register" className="text-primary hover:underline">
                    Sign up here
                  </Link>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
