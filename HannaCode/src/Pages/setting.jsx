"use client"

import React from "react"

import { useState } from "react"
import {Link} from "react-router-dom"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Switch } from "../components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { AlertCircle, CheckCircle, Upload } from "lucide-react"
import { Alert, AlertDescription } from "../components/ui/alert"
import { useToast } from "../hooks/useToast"

export default function SettingsPage() {
  const { toast } = useToast()
  const [isUpdating, setIsUpdating] = useState(false)
  const [isChangingPassword, setIsChangingPassword, confirm] = useState(false)
  const [profileImage, setProfileImage] = useState(null)

  // Profile form state
  const [profileForm, setProfileForm] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    username: "johndoe",
    bio: "Web developer passionate about learning new technologies.",
  })

  // Password form state
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  // Notification settings
  const [notifications, setNotifications] = useState({
    email: true,
    marketing: false,
    newCourses: true,
    mentorMessages: true,
    courseUpdates: true,
  })

  // Subscription info
  const subscriptionInfo = {
    plan: "Premium",
    status: "Active",
    renewalDate: "June 15, 2025",
    paymentMethod: "Visa ending in 4242",
  }

  const handleProfileUpdate = (e) => {
    e.preventDefault()
    setIsUpdating(true)

    // Simulate API call
    setTimeout(() => {
      setIsUpdating(false)
      toast({
        title: "Profile updated",
        description: "Your profile information has been updated successfully.",
      })
    }, 1000)
  }

  const handlePasswordChange = (e) => {
    e.preventDefault()

    // Validate passwords
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "New password and confirmation password must match.",
        variant: "destructive",
      })
      return
    }

    setIsChangingPassword(true)

    // Simulate API call
    setTimeout(() => {
      setIsChangingPassword(false)
      setPasswordForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      })
      toast({
        title: "Password changed",
        description: "Your password has been changed successfully.",
      })
    }, 1000)
  }

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      // In a real app, you would upload the file to a server
      // Here we're just creating a local URL for preview
      const imageUrl = URL.createObjectURL(file)
      setProfileImage(imageUrl)

      toast({
        title: "Image uploaded",
        description: "Your profile image has been updated.",
      })
    }
  }

  const handleCancelSubscription = () => {
    // Show confirmation dialog
    if (
      confirm (
        "Are you sure you want to cancel your subscription? You will lose access to premium features at the end of your billing period.",
      )
    ) {
      toast({
        title: "Subscription cancelled",
        description: "Your subscription has been cancelled. You will have access until the end of your billing period.",
      })
    }
  }

  return (
    <div className="container py-8">
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl font-bold">Account Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="subscription">Subscription</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal information and public profile</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex flex-col items-center gap-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={profileImage || "/placeholder.svg?height=96&width=96"} alt="Profile" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-center gap-2">
                    <Label
                      htmlFor="picture"
                      className="cursor-pointer text-sm font-medium text-primary hover:underline flex items-center"
                    >
                      <Upload className="mr-2 h-4 w-4" /> Upload Photo
                    </Label>
                    <Input id="picture" type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                    <p className="text-xs text-muted-foreground">JPG, GIF or PNG. Max size 2MB.</p>
                  </div>
                </div>

                <form onSubmit={handleProfileUpdate} className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={profileForm.name}
                        onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input
                        id="username"
                        value={profileForm.username}
                        onChange={(e) => setProfileForm({ ...profileForm, username: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileForm.email}
                      onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <textarea
                      id="bio"
                      className="w-full min-h-[100px] p-3 rounded-md border border-input bg-background"
                      value={profileForm.bio}
                      onChange={(e) => setProfileForm({ ...profileForm, bio: e.target.value })}
                    />
                  </div>

                  <Button type="submit" className="bg-primary hover:bg-primary/90" disabled={isUpdating}>
                    {isUpdating ? "Updating..." : "Update Profile"}
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="password" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
              <CardDescription>Update your password to keep your account secure</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePasswordChange} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input
                    id="current-password"
                    type="password"
                    value={passwordForm.currentPassword}
                    onChange={(e) => setPasswordForm({ ...passwordForm, currentPassword: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input
                    id="new-password"
                    type="password"
                    value={passwordForm.newPassword}
                    onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    value={passwordForm.confirmPassword}
                    onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
                    required
                  />
                </div>

                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Password must be at least 8 characters and include a mix of letters, numbers, and symbols.
                  </AlertDescription>
                </Alert>

                <Button type="submit" className="bg-primary hover:bg-primary/90" disabled={isChangingPassword}>
                  {isChangingPassword ? "Changing Password..." : "Change Password"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

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

        <TabsContent value="subscription" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Subscription Management</CardTitle>
              <CardDescription>Manage your subscription plan and payment details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-lavender/30 dark:bg-primary/5 rounded-md p-4 flex items-start gap-4">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Premium Plan - Active</h3>
                  <p className="text-sm text-muted-foreground">
                    You have full access to all premium features, courses, and mentorship.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Current Plan</h3>
                    <p className="font-medium">{subscriptionInfo.plan}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Status</h3>
                    <p className="font-medium">{subscriptionInfo.status}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Next Billing Date</h3>
                    <p className="font-medium">{subscriptionInfo.renewalDate}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Payment Method</h3>
                    <p className="font-medium">{subscriptionInfo.paymentMethod}</p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h3 className="text-lg font-medium mb-4">Manage Subscription</h3>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="billing-cycle">Billing Cycle</Label>
                      <Select defaultValue="monthly">
                        <SelectTrigger id="billing-cycle">
                          <SelectValue placeholder="Select billing cycle" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="monthly">Monthly ($29/month)</SelectItem>
                          <SelectItem value="annual">Annual ($290/year - Save 20%)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild className="bg-primary hover:bg-primary/90">
                        <Link href="/settings/payment">Update Payment Method</Link>
                      </Button>
                      <Button variant="outline" onClick={handleCancelSubscription}>
                        Cancel Subscription
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h3 className="text-lg font-medium mb-4">Billing History</h3>
                <div className="rounded-md border">
                  <div className="grid grid-cols-3 p-4 font-medium border-b">
                    <div>Date</div>
                    <div>Amount</div>
                    <div>Status</div>
                  </div>
                  <div className="grid grid-cols-3 p-4 border-b">
                    <div>May 15, 2025</div>
                    <div>$29.00</div>
                    <div className="text-green-600">Paid</div>
                  </div>
                  <div className="grid grid-cols-3 p-4 border-b">
                    <div>Apr 15, 2025</div>
                    <div>$29.00</div>
                    <div className="text-green-600">Paid</div>
                  </div>
                  <div className="grid grid-cols-3 p-4">
                    <div>Mar 15, 2025</div>
                    <div>$29.00</div>
                    <div className="text-green-600">Paid</div>
                  </div>
                </div>
                <div className="mt-2 text-right">
                  <Button variant="link" className="text-primary">
                    View All Invoices
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
