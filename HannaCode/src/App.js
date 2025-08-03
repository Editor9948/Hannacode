import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile/Profile";
import DashboardPage from "./Pages/Dashboard";
import Courses from "./Pages/Courses/CoursesPage.jsx";
import CourseDetail from "./Pages/Courses/CourseDetailPage.jsx";
import LessonDetailPage from './Pages/Courses/LessonDetailPage';
import PlaygroundPage from "./Pages/playground";
import CoursePlaygroundPage from "./Pages/Courses/Slug/playground";
import BookMentorship from "./Pages/mentorship/book";
import MentorshipPage from "./Pages/mentorship/mentorship";
import ResourcesPage from "./Pages/Courses/Slug/resources";
import CheckoutPage from "./Pages/Payment/checkout";
import AdminUsersPage from "./Pages/Admin/AdminUsersPage";
import AdminCoursesPage from "./Pages/Admin/AdminCoursesPage";
import MentorInbox from "./Pages/mentorship/MentorInbox";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import SettingsPage from "./Pages/setting";
import Pricing from "./Pages/Pricing";
import CareersPage from "./Pages/career";
import PrivacyPolicyPage from "./Pages/privacy";
import TermsOfServicePage from "./Pages/terms";
import CookiePolicyPage from "./Pages/cookies";
import BlogPage from "./Pages/blog";
import { ThemeProvider } from "./components/themeProvider";
import { ToastContainer } from "./hooks/useToast";
import ChatPage from "./Pages/mentorship/chat";
import CourseDetailPage from "./Pages/Courses/CourseDetailPage";
import Playground from "./Pages/Courses/Slug/playground";
import Resources from "./Pages/Courses/Slug/resources";
import ForgotPasswordPage from "./Pages/ForgotPassword";
import ResetPasswordPage from "./Pages/ResetPassword";

// NotFound component
const NotFound = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl">Page not found</p>
    </div>
  </div>
);

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <Router>
        <ToastContainer />
        <Layout>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:slug" element={<CourseDetail />} />
            <Route path="/courses/:slug/lessons/:lessonId" element={<LessonDetailPage />} />
            <Route path="/courses/:slug/playground" element={<CoursePlaygroundPage />} />
            <Route path="/playground" element={<PlaygroundPage />} />
            <Route path="/mentorship" element={<MentorshipPage />} />
            <Route path="/mentorship/book" element={<BookMentorship />} />
            <Route path="/mentorship/chat/:mentorshipId" element={<ChatPage />} />
            <Route path="/resources/:slug" element={<ResourcesPage />} />
            <Route path="/admin/users" element={<AdminUsersPage />} />
            <Route path="/admin/courses" element={<AdminCoursesPage />} />
            <Route path="/mentorship/inbox" element={<MentorInbox />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/career" element={<CareersPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
            <Route path="/cookies" element={<CookiePolicyPage />} />
            <Route path="/blog" element={<BlogPage />} />
            
            {/* User Dashboard & Settings */}
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<SettingsPage />} />

            {/* New routes */}
            <Route path="/courses/:courseId" element={<CourseDetailPage />} />
            <Route path="/courses/:courseId/lessons/:lessonId" element={<LessonDetailPage />} />
            <Route path="/courses/:courseId/playground" element={<Playground />} />
            <Route path="/courses/:courseId/resources" element={<Resources />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password/:token" element={<ResetPasswordPage />} />

            {/* 404 Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}