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
import CheckoutPage from "./Pages/Payment/checkout";
import PaymentVerification from "./Pages/Payment/verification";
import PaymentSuccessPage from "./Pages/Payment/success";
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
import VerifyEmailSent from "./Pages/VerifyEmailSent";
import VerifyEmail from "./Pages/VerifyEmail";
import ResendVerification from "./Pages/ResendVerification";
import CertificatePage from "./Pages/Certificates/CertificatePage";
import Certificates from "./Pages/Certificates/Certificates";
import VerifyCertificate from "./Pages/Certificates/VerifyCertificate";
import MasterCertificatePage from "./Pages/Certificates/MasterCertificatePage";
import ScrollToTop from "./components/ui/ScrollToTop.jsx";
import HannaAIBubble from "./components/HannaBubble/HannaBubble";

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
        <ScrollToTop />
        <ToastContainer />
        <Layout>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/verify-email-sent" element={<VerifyEmailSent />} />
            <Route path="/verify-email/:token" element={<VerifyEmail />} />
            <Route path="/resend-verification" element={<ResendVerification />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:slug" element={<CourseDetail />} />
            <Route path="/courses/:slug/lessons/:lessonId" element={<LessonDetailPage />} />
            <Route path="/courses/:slug/playground" element={<CoursePlaygroundPage />} />
            <Route path="/playground" element={<PlaygroundPage />} />
            <Route path="/mentorship" element={<MentorshipPage />} />
            <Route path="/mentorship/book/:id" element={<BookMentorship />} />
            <Route path="/mentorship/chat/:mentorshipId" element={<ChatPage />} />
           
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
            
            {/* Certificate Routes */}
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/certificate/:certificateId" element={<CertificatePage />} />
            <Route path="/master-certificate/:certificateId" element={<MasterCertificatePage />} />
            <Route path="/verify-certificate" element={<VerifyCertificate />} />
            <Route path="/verify-certificate/:verificationCode" element={<VerifyCertificate />} />
            <Route path="/verify-master-certificate/:verificationCode" element={<VerifyCertificate />} />

            {/* New routes */}
            <Route path="/courses/:courseId" element={<CourseDetailPage />} />
            <Route path="/courses/:courseId/lessons/:lessonId" element={<LessonDetailPage />} />
            <Route path="/courses/:courseId/playground" element={<Playground />} />
            <Route path="/courses/:courseId/resources" element={<Resources />} />

            {/* Payment Routes */}
            <Route path="/payment/verify" element={<PaymentVerification />} />
            <Route path="/payment/success" element={<PaymentSuccessPage />} />

            {/* 404 Not Found */}
            <Route path="*" element={<NotFound />} />
             <Route path="/hannaaibubble" element={<HannaAIBubble />} />
          </Routes>
              {/* Floating bubble (render once) */}
        <HannaAIBubble />
        </Layout>
      </Router>
    </ThemeProvider>
  );
}