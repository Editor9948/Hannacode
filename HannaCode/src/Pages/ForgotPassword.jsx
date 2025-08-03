"use client"

import React, { useState } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { AlertCircle, CheckCircle } from "lucide-react"
import { Alert, AlertDescription } from "../components/ui/alert"
import { Link } from "react-router-dom"

const API_URL = process.env.REACT_APP_API_URL

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setMessage("")
    setIsLoading(true)

    try {
      // API call to the backend to request password reset
      const response = await fetch(`${API_URL}/auth/forgotpassword`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      // Check if the response is JSON before parsing
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Something went wrong.");
        }
      } else {
        if (!response.ok) {
          // The response is not JSON, so we can't parse it for a specific message.
          // This usually indicates a server-level error (e.g., 500 Internal Server Error).
          throw new Error(`Server error: ${response.status} ${response.statusText}. Please check the backend configuration.`);
        }
      }

      setMessage("If an account with that email exists, a password reset link has been sent.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred.");
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-4rem)] py-12">
      <div className="w-full max-w-md">
        <Card className="border-2 border-secondary/20">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Forgot Password</CardTitle>
            <CardDescription className="text-center">Enter your email to receive a reset link</CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {message && (
              <Alert variant="success" className="mb-4 bg-green-100 border-green-300 text-green-800 dark:bg-green-900/50 dark:border-green-700 dark:text-green-200">
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>{message}</AlertDescription>
              </Alert>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send Reset Link"}
              </Button>
            </form>
            <div className="mt-4 text-center text-sm">
              Remembered your password?{" "}
              <Link to="/login" className="text-primary hover:underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 