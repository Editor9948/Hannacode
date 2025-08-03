import {Link} from "react-router-dom"
import { Button } from "../components/ui/button"

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last Updated: May 15, 2025</p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p>
            At HannaCode, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you visit our website, use our mobile application, or use our services
            (collectively, the "Services").
          </p>

          <p>
            Please read this Privacy Policy carefully. By accessing or using our Services, you acknowledge that you have
            read, understood, and agree to be bound by all the terms of this Privacy Policy. If you do not agree with our
            policies and practices, please do not use our Services.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
          <p>We collect several types of information from and about users of our Services, including:</p>

          <h3 className="text-xl font-bold mt-6 mb-3">1.1 Personal Information</h3>
          <p>
            Personal information is data that can be used to identify you individually, such as:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name</li>
            <li>Email address</li>
            <li>Postal address</li>
            <li>Phone number</li>
            <li>Billing information and payment details</li>
            <li>Profile information (such as profile pictures, biography, etc.)</li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-3">1.2 Usage Information</h3>
          <p>
            We may also collect information about how you access and use our Services, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Log data (IP address, browser type, pages visited, time spent, etc.)</li>
            <li>Device information (hardware model, operating system, unique device identifiers)</li>
            <li>Learning progress and course completion data</li>
            <li>Interaction with course content, quizzes, and exercises</li>
            <li>Communication with mentors and other users</li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-3">1.3 Cookies and Similar Technologies</h3>
          <p>
            We use cookies and similar tracking technologies to track activity on our Services and hold certain
            information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
            For more information about the cookies we use, please see our Cookie Policy.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Collect Information</h2>
          <p>We collect information in the following ways:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Direct collection:</strong> Information you provide to us when you register for an account,
              subscribe to our services, fill out forms, or communicate with us.
            </li>
            <li>
              <strong>Automated collection:</strong> As you navigate through and interact with our Services, we may use
              automatic data collection technologies to collect certain information about your equipment, browsing
              actions, and patterns.
            </li>
            <li>
              <strong>Third-party sources:</strong> We may receive information about you from third parties, such as
              social media platforms, payment processors, and analytics providers.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
          <p>We may use the information we collect about you for various purposes, including to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, maintain, and improve our Services</li>
            <li>Process transactions and send related information, including confirmations and receipts</li>
            <li>Send administrative information, such as updates to our terms, conditions, and policies</li>
            <li>Personalize your experience and deliver content and product offerings relevant to your interests</li>
            <li>Track your learning progress and provide appropriate course recommendations</li>
            <li>Facilitate communication between students and mentors</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our Services</li>
            <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. How We Share Your Information</h2>
          <p>
            We may share your personal information in the following situations:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>With Service Providers:</strong> We may share your information with third-party vendors, service
              providers, contractors, or agents who perform services for us or on our behalf.
            </li>
            <li>
              <strong>With Mentors:</strong> If you participate in our mentorship program, we will share relevant
              information with your assigned mentor to facilitate the mentorship relationship.
            </li>
            <li>
              <strong>Business Transfers:</strong> We may share or transfer your information in connection with, or
              during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion
              of our business to another company.
            </li>
            <li>
              <strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with
              your consent.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose your information where we believe it is necessary to
              comply with a legal obligation, protect and defend our rights or property, prevent fraud, or protect the
              safety of our users or the public.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Data Retention</h2>
          <p>
            We will retain your personal information only for as long as is necessary for the purposes set out in this
            Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal
            obligations, resolve disputes, and enforce our policies.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Data Security</h2>
          <p>
            We have implemented appropriate technical and organizational security measures designed to protect the
            security of any personal information we process. However, please also remember that we cannot guarantee that
            the internet itself is 100% secure. Although we will do our best to protect your personal information,
            transmission of personal information to and from our Services is at your own risk.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. Your Data Protection Rights</h2>
          <p>
            Depending on your location, you may have the following data protection rights:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The right to access, update, or delete the information we have on you</li>
            <li>The right of rectification - the right to have your information corrected if it is inaccurate or incomplete</li>
            <li>The right to object to our processing of your personal data</li>
            <li>The right of restriction - the right to request that we restrict the processing of your personal information</li>
            <li>The right to data portability - the right to receive a copy of your personal data in a structured, machine-readable format</li>
            <li>The right to withdraw consent at any time where we relied on your consent to process your personal information</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at privacy@hannacode.com.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">8. Children's Privacy</h2>
          <p>
            Our Services are not intended for children under the age of 13. We do not knowingly collect personal
            information from children under 13. If you are a parent or guardian and you are aware that your child has
            provided us with personal information, please contact us. If we become aware that we have collected personal
            information from children without verification of parental consent, we take steps to remove that information
            from our servers.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">9. Third-Party Websites</h2>
          <p>
            Our Services may contain links to other websites that are not operated by us. If you click on a third-party
            link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of
            every site you visit. We have no control over and assume no responsibility for the content, privacy policies,
            or practices of any third-party sites or services.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">10. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy. You are
            advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are
            effective when they are posted on this page.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">11. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <p>
            HannaCode<br />
            123 Learning Lane<br />
            San Francisco, CA 94105<br />
            Email: privacy@hannacode.com<br />
            Phone: (555) 123-4567
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/terms">
            <Button variant="outline">Terms of Service</Button>
          </Link>
          <Link to="/cookies">
            <Button variant="outline">Cookie Policy</Button>
          </Link>
          <Link to="/contact">
            <Button className="bg-primary hover:bg-primary/90">Contact Us</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
