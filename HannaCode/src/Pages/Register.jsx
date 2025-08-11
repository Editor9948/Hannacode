"use client"

import  React from "react"

import { useState } from "react"
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Checkbox } from "../components/ui/checkbox"
import { AlertCircle, CheckCircle, XCircle, Eye, EyeOff } from "lucide-react"
import { Alert, AlertDescription } from "../components/ui/alert"

const API_URL = process.env.REACT_APP_API_URL 

export default function RegisterPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user", 
  })
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [passwordValidation, setPasswordValidation] = useState({
    minLength: false,
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    hasSpecialChar: false
  })

  const validatePassword = (password) => {
    const validation = {
      minLength: password.length >= 8,
      hasUppercase: /[A-Z]/.test(password),
      hasLowercase: /[a-z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSpecialChar: /[@$!%*?&]/.test(password)
    }
    setPasswordValidation(validation)
    return Object.values(validation).every(Boolean)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    
    // Validate password when it changes
    if (name === 'password') {
      validatePassword(value)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    // Validate form
    if (!formData.name || !formData.email || !formData.password) {
      setError("All fields are required")
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (!validatePassword(formData.password)) {
      setError("Password does not meet requirements")
      return
    }

    if (!agreedToTerms) {
      setError("You must agree to the terms and conditions")
      return
    }

    setIsLoading(true)

    try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      }),
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || "Registration failed");
    }
    
    const data = await response.json();
    // Registration successful - redirect to verification page
    navigate("/verify-email-sent", { 
      state: { 
        email: formData.email,
        message: data.message || "Registration successful. Please check your email for verification link."
      }
    });
  } catch (err) {
    setError(err instanceof Error ? err.message : "Registration failed. Please try again.");
  } finally {
    setIsLoading(false);
  }

  }

  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-4rem)] py-12">
      <div className="w-full max-w-md">
        <Card className="border-2 border-secondary/20">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
            <CardDescription className="text-center">Enter your information to create your account</CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
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
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="pr-10"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
                {formData.password && (
                  <div className="text-sm space-y-1">
                    <p className="text-muted-foreground mb-2">Password must contain:</p>
                    <div className="grid grid-cols-1 gap-1">
                      <div className={`flex items-center space-x-2 ${passwordValidation.minLength ? 'text-green-600' : 'text-red-600'}`}>
                        {passwordValidation.minLength ? 
                          <CheckCircle className="h-3 w-3" /> : 
                          <XCircle className="h-3 w-3" />
                        }
                        <span>At least 8 characters</span>
                      </div>
                      <div className={`flex items-center space-x-2 ${passwordValidation.hasUppercase ? 'text-green-600' : 'text-red-600'}`}>
                        {passwordValidation.hasUppercase ? 
                          <CheckCircle className="h-3 w-3" /> : 
                          <XCircle className="h-3 w-3" />
                        }
                        <span>One uppercase letter</span>
                      </div>
                      <div className={`flex items-center space-x-2 ${passwordValidation.hasLowercase ? 'text-green-600' : 'text-red-600'}`}>
                        {passwordValidation.hasLowercase ? 
                          <CheckCircle className="h-3 w-3" /> : 
                          <XCircle className="h-3 w-3" />
                        }
                        <span>One lowercase letter</span>
                      </div>
                      <div className={`flex items-center space-x-2 ${passwordValidation.hasNumber ? 'text-green-600' : 'text-red-600'}`}>
                        {passwordValidation.hasNumber ? 
                          <CheckCircle className="h-3 w-3" /> : 
                          <XCircle className="h-3 w-3" />
                        }
                        <span>One number</span>
                      </div>
                      <div className={`flex items-center space-x-2 ${passwordValidation.hasSpecialChar ? 'text-green-600' : 'text-red-600'}`}>
                        {passwordValidation.hasSpecialChar ? 
                          <CheckCircle className="h-3 w-3" /> : 
                          <XCircle className="h-3 w-3" />
                        }
                        <span>One special character (@$!%*?&)</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="pr-10"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={agreedToTerms}
                  onCheckedChange={(checked) => setAgreedToTerms(checked)}
                  required
                />
                <Label htmlFor="terms" className="text-sm font-medium leading-none">
                  I agree to the{" "}
                  <Link to="/terms" className="text-primary hover:underline">
                    terms and conditions
                  </Link>
                </Label>
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>
                {isLoading ? "Creating account..." : "Create account"}
              </Button>
            </form>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline">
                Sign in
              </Link>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <div className="relative my-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-2 w-full">
              <Button variant="outline" className="w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
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
              <Button variant="outline" className="w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail mr-2"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Google
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
