import React, { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { CheckCircle, XCircle, Loader2, RefreshCw } from "lucide-react"
import { Alert, AlertDescription } from "../components/ui/alert"
import { useToast } from "../hooks/useToast"

const API_URL = process.env.REACT_APP_API_URL 

export default function VerifyEmail() {
  const { token } = useParams()
  const navigate = useNavigate()
  const { toast } = useToast()
  const [status, setStatus] = useState("verifying") // "verifying", "success", "error"
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [isResending, setIsResending] = useState(false)
  const [userEmail, setUserEmail] = useState("")

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`${API_URL}/auth/verifyemail/${token}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })

        const data = await response.json()

        if (response.ok) {
          setStatus("success")
          setMessage(data.message || "Email verified successfully!")
          
          // Redirect to login after 3 seconds
          setTimeout(() => {
            navigate("/login", { 
              state: { 
                message: "Email verified! You can now login with your credentials." 
              }
            })
          }, 3000)
        } else {
          setStatus("error")
          setMessage(data.message || "Email verification failed")
        }
      } catch (error) {
        setStatus("error")
        setMessage("Network error. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    if (token) {
      verifyEmail()
    }
  }, [token, navigate])

  const handleResendEmail = async () => {
    if (!userEmail) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to resend verification",
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
        body: JSON.stringify({ email: userEmail })
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
            email: userEmail,
            message: "New verification email sent successfully!"
          }
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
      setIsResending(false)
    }
  }

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`${API_URL}/auth/verifyemail/${token}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })

        const data = await response.json()

        if (response.ok) {
          setStatus("success")
          setMessage(data.message || "Email verified successfully!")
          
          setTimeout(() => {
            navigate("/login", { 
              state: { 
                message: "Email verified! You can now login with your credentials." 
              }
            })
          }, 3000)
        } else {
          setStatus("error")
          setMessage(data.message || "Email verification failed")
        }
      } catch (error) {
        setStatus("error")
        setMessage("Network error. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    if (token) {
      verifyEmail()
    } else {
      setStatus("error")
      setMessage("Invalid verification token")
      setIsLoading(false)
    }
  }, [token, navigate])

  const getStatusIcon = () => {
    switch (status) {
      case "verifying":
        return <Loader2 className="h-6 w-6 text-primary animate-spin" />
      case "success":
        return <CheckCircle className="h-6 w-6 text-green-600" />
      case "error":
        return <XCircle className="h-6 w-6 text-red-600" />
      default:
        return null
    }
  }

  const getStatusTitle = () => {
    switch (status) {
      case "verifying":
        return "Verifying your email..."
      case "success":
        return "Email verified!"
      case "error":
        return "Verification failed"
      default:
        return "Email verification"
    }
  }

  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-4rem)] py-12">
      <div className="w-full max-w-md">
        <Card className="border-2 border-secondary/20">
          <CardHeader className="space-y-1 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              {getStatusIcon()}
            </div>
            <CardTitle className="text-2xl font-bold">{getStatusTitle()}</CardTitle>
            <CardDescription>
              {status === "verifying" && "Please wait while we verify your email address..."}
              {status === "success" && "Your account has been successfully verified"}
              {status === "error" && "There was an issue verifying your email"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {message && (
              <Alert variant={status === "error" ? "destructive" : "default"}>
                <AlertDescription>{message}</AlertDescription>
              </Alert>
            )}

            {status === "success" && (
              <div className="text-center text-sm text-muted-foreground">
                <p>You will be redirected to the login page in a few seconds...</p>
              </div>
            )}

            {status === "error" && (
              <div className="space-y-3">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Resend verification email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Button 
                    onClick={handleResendEmail} 
                    className="w-full"
                    disabled={isResending || !userEmail}
                  >
                    {isResending ? (
                      <>
                        <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                        Resending...
                      </>
                    ) : (
                      <>
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Resend Verification Email
                      </>
                    )}
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" asChild className="w-full">
                    <Link to="/register">
                      Create New Account
                    </Link>
                  </Button>
                  
                  <Button variant="outline" asChild className="w-full">
                    <Link to="/login">
                      Try Login Anyway
                    </Link>
                  </Button>
                </div>
              </div>
            )}

            {(status === "success" || isLoading) && (
              <Button asChild className="w-full" disabled={isLoading}>
                <Link to="/login">
                  Continue to Login
                </Link>
              </Button>
            )}

            <div className="text-center">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
                Back to Home
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
