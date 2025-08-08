"use client"

import React from "react"
import { useState, useEffect, useCallback } from "react"
import {Link} from "react-router-dom"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Label } from "../components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Switch } from "../components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { AlertCircle, CheckCircle } from "lucide-react"
import { Alert, AlertDescription } from "../components/ui/alert"
import { useToast } from "../hooks/useToast"
import CalendlySettings from "../components/CalendlySettings"

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/v1'

export default function SettingsPage() {
  const { toast } = useToast()
  const [user, setUser] = useState(null)
  const [calendlyUrl, setCalendlyUrl] = useState('')
  const [subscription, setSubscription] = useState(null)
  const [loadingSubscription, setLoadingSubscription] = useState(true)

  // Fetch current Calendly URL from backend
  const fetchCalendlyUrl = useCallback(async (userId) => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${API_URL}/mentorship/mentors/${userId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      
      if (response.ok) {
        const data = await response.json()
        if (data.success && data.data.calendlyUrl) {
          setCalendlyUrl(data.data.calendlyUrl)
          // Update localStorage with latest calendly URL
          const userData = JSON.parse(localStorage.getItem('user'))
          const updatedUser = { ...userData, calendlyUrl: data.data.calendlyUrl }
          localStorage.setItem('user', JSON.stringify(updatedUser))
          setUser(updatedUser)
        }
      }
    } catch (error) {
      console.error('Error fetching Calendly URL:', error)
      // Fallback: For testing, if user is admin, provide a default Calendly URL
      const userData = JSON.parse(localStorage.getItem('user'))
      if (userData && userData.role === 'admin' && !calendlyUrl) {
        const defaultCalendlyUrl = 'https://calendly.com/hannah-mentor'
        setCalendlyUrl(defaultCalendlyUrl)
        const updatedUser = { ...userData, calendlyUrl: defaultCalendlyUrl }
        localStorage.setItem('user', JSON.stringify(updatedUser))
        setUser(updatedUser)
      }
    }
  }, [calendlyUrl])

  // Load user data on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      const userData = JSON.parse(storedUser)
      setUser(userData)
      setCalendlyUrl(userData.calendlyUrl || '')
      
      // Fetch latest calendly URL from backend if user is mentor/admin
      if (userData.role === 'admin' || userData.role === 'mentor') {
        fetchCalendlyUrl(userData._id || userData.id)
      }
    }
  }, [fetchCalendlyUrl])

  // Fetch subscription data
  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        const token = localStorage.getItem("token")
        if (!token) return

        const response = await fetch(`${process.env.REACT_APP_API_URL}/subscriptions/current`, {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        })

        const data = await response.json()
        
        if (data.success) {
          setSubscription(data.data)
        }
      } catch (error) {
        console.error("Failed to fetch subscription:", error)
      } finally {
        setLoadingSubscription(false)
      }
    }

    fetchSubscription()
  }, [])

  // Notification settings
  const [notifications, setNotifications] = useState({
    email: true,
    marketing: false,
    newCourses: true,
    mentorMessages: true,
    courseUpdates: true,
  })

  const handleCancelSubscription = async () => {
    // Show confirmation dialog
    if (
      window.confirm(
        "Are you sure you want to cancel your subscription? You will lose access to premium features at the end of your billing period.",
      )
    ) {
      try {
        const token = localStorage.getItem("token")
        const response = await fetch(`${process.env.REACT_APP_API_URL}/subscriptions/cancel`, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        })

        const data = await response.json()
        
        if (data.success) {
          toast({
            title: "Subscription cancelled",
            description: "Your subscription has been cancelled. You will have access until the end of your billing period.",
          })
          // Refresh subscription data
          const updatedResponse = await fetch(`${process.env.REACT_APP_API_URL}/subscriptions/current`, {
            headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json"
            }
          })
          const updatedData = await updatedResponse.json()
          if (updatedData.success) {
            setSubscription(updatedData.data)
          }
        } else {
          toast({
            title: "Error",
            description: data.message || "Failed to cancel subscription",
            variant: "destructive",
          })
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to cancel subscription. Please try again.",
          variant: "destructive",
        })
      }
    }
  }

  return (
    <div className="container py-8">
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl font-bold">Account Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>

      <Tabs defaultValue="notifications" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="calendly">Calendly</TabsTrigger>
          <TabsTrigger value="subscription">Subscription</TabsTrigger>
        </TabsList>

        <TabsContent value="notifications" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Manage how and when you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-notifications">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                  </div>
                  <Switch
                    id="email-notifications"
                    checked={notifications.email}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, email: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="marketing">Marketing Emails</Label>
                    <p className="text-sm text-muted-foreground">Receive marketing and promotional emails</p>
                  </div>
                  <Switch
                    id="marketing"
                    checked={notifications.marketing}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, marketing: checked })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">Notification Types</h3>
                <p className="text-sm text-muted-foreground">Select which types of notifications you want to receive</p>

                <div className="space-y-4 mt-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="new-courses">New Course Releases</Label>
                    <Switch
                      id="new-courses"
                      checked={notifications.newCourses}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, newCourses: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="mentor-messages">Mentor Messages</Label>
                    <Switch
                      id="mentor-messages"
                      checked={notifications.mentorMessages}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, mentorMessages: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="course-updates">Course Updates</Label>
                    <Switch
                      id="course-updates"
                      checked={notifications.courseUpdates}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, courseUpdates: checked })}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => {
                  toast({
                    title: "Notification settings saved",
                    description: "Your notification preferences have been updated.",
                  })
                }}
                className="bg-primary hover:bg-primary/90"
              >
                Save Preferences
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="calendly" className="mt-6">
          <div className="space-y-6">
            {user && (user.role === 'admin' || user.role === 'mentor') ? (
              <CalendlySettings
                mentorId={user._id || user.id}
                currentUrl={calendlyUrl}
                onUpdate={(newUrl) => {
                  setCalendlyUrl(newUrl)
                  // Update user data in localStorage
                  const updatedUser = { ...user, calendlyUrl: newUrl }
                  localStorage.setItem('user', JSON.stringify(updatedUser))
                  setUser(updatedUser)
                }}
              />
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Calendly Integration</CardTitle>
                  <CardDescription>
                    This feature is only available for mentors and administrators
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      To access Calendly integration, you need to have mentor or administrator privileges.
                      Contact support if you believe you should have access to this feature.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="subscription" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Subscription Management</CardTitle>
              <CardDescription>Manage your subscription plan and payment details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {loadingSubscription ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Loading subscription details...</p>
                </div>
              ) : subscription ? (
                <>
                  <div className="bg-lavender/30 dark:bg-primary/5 rounded-md p-4 flex items-start gap-4">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">{subscription.planName} - {subscription.statusDisplay}</h3>
                      <p className="text-sm text-muted-foreground">
                        {subscription.plan === 'lifetime' 
                          ? 'You have lifetime access to all premium features, courses, and mentorship.'
                          : 'You have full access to all premium features, courses, and mentorship.'
                        }
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-1">Current Plan</h3>
                        <p className="font-medium">{subscription.planName}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-1">Status</h3>
                        <p className="font-medium">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            subscription.status === 'active' ? 'bg-green-100 text-green-800' :
                            subscription.status === 'trialing' ? 'bg-blue-100 text-blue-800' :
                            subscription.status === 'past_due' ? 'bg-red-100 text-red-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {subscription.statusDisplay}
                          </span>
                        </p>
                      </div>
                      {subscription.plan !== 'lifetime' && (
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground mb-1">Next Billing Date</h3>
                          <p className="font-medium">
                            {subscription.nextBillingDate 
                              ? new Date(subscription.nextBillingDate).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })
                              : 'N/A'
                            }
                          </p>
                        </div>
                      )}
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-1">
                          {subscription.plan === 'lifetime' ? 'Total Paid' : 'Price'}
                        </h3>
                        <p className="font-medium">
                          {subscription.currency === 'NGN' ? '₦' : '$'}
                          {subscription.price?.toLocaleString() || 'N/A'}
                          {subscription.plan !== 'lifetime' && (
                            <span className="text-sm text-muted-foreground">
                              /{subscription.plan === 'monthly' ? 'month' : 'year'}
                            </span>
                          )}
                        </p>
                      </div>
                    </div>

                    {subscription.plan !== 'lifetime' && (
                      <div className="pt-4 border-t">
                        <h3 className="text-lg font-medium mb-4">Manage Subscription</h3>

                        <div className="space-y-4">
                          {subscription.cancelAtPeriodEnd && (
                            <Alert>
                              <AlertCircle className="h-4 w-4" />
                              <AlertDescription>
                                Your subscription will be cancelled at the end of the current billing period on{' '}
                                {new Date(subscription.currentPeriodEnd).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}.
                              </AlertDescription>
                            </Alert>
                          )}

                          <div className="space-y-2">
                            <Label htmlFor="billing-cycle">Billing Cycle</Label>
                            <Select value={subscription.plan} disabled>
                              <SelectTrigger id="billing-cycle">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="monthly">Monthly (₦30,000/month)</SelectItem>
                                <SelectItem value="annual">Annual (₦288,000/year - Save 20%)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/pricing">
                              <Button className="bg-primary hover:bg-primary/90">
                                Change Plan
                              </Button>
                            </Link>
                            {!subscription.cancelAtPeriodEnd && (
                              <Button variant="outline" onClick={handleCancelSubscription}>
                                Cancel Subscription
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="mx-auto w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
                    <AlertCircle className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                    No Active Subscription
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
                    You don't have an active subscription. Upgrade to premium to access all features.
                  </p>
                  <Link to="/pricing">
                    <Button className="bg-primary hover:bg-primary/90">
                      View Plans
                    </Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
