import {Link} from "react-router-dom"
import { Button } from "../components/ui/button"

export default function TermsOfServicePage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">Last Updated: May 15, 2025</p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p>
            Welcome to HannaCode. These Terms of Service ("Terms") govern your access to and use of the HannaCode
            website, mobile applications, and services (collectively, the "Services"). Please read these Terms carefully
            before using our Services.
          </p>

          <p>
            By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms,
            you may not access or use the Services.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Account Registration</h2>
          <p>
            To access certain features of our Services, you may be required to register for an account. When you
            register, you agree to provide accurate, current, and complete information about yourself. You are
            responsible for safeguarding your password and for all activities that occur under your account. You agree to
            notify us immediately of any unauthorized use of your account.
          </p>
          <p>
            We reserve the right to disable any user account if, in our opinion, you have violated any provision of these
            Terms.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Subscription and Payments</h2>
          <p>
            HannaCode offers both free and premium subscription plans. By subscribing to a premium plan, you agree to
            pay the applicable fees as they become due. All payments are non-refundable except as expressly set forth in
            these Terms or as required by applicable law.
          </p>
          <p>
            Subscription fees are billed in advance on a recurring basis, depending on the billing cycle you select when
            you subscribe. Your subscription will automatically renew at the end of each billing cycle unless you cancel
            it before the renewal date.
          </p>
          <p>
            We may change our subscription fees at any time. If we change our fees, we will provide notice of the change
            on the website or by email, at our option, at least 14 days before the change is to take effect. Your
            continued use of the Services after the fee change becomes effective constitutes your agreement to pay the
            changed amount.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Content and Intellectual Property</h2>
          <p>
            Our Services contain content owned, operated, licensed, and/or controlled by HannaCode that is protected by
            copyright, trademark, trade secret, or other proprietary rights ("HannaCode Content"). HannaCode grants you
            a limited, non-exclusive, non-transferable, and revocable license to access and use the HannaCode Content
            solely for your personal, non-commercial use in connection with the Services.
          </p>
          <p>
            You may not modify, publish, transmit, participate in the transfer or sale of, reproduce, create derivative
            works based on, distribute, perform, display, or in any way exploit any of the HannaCode Content, in whole
            or in part, without our express prior written consent.
          </p>
          <p>
            You retain ownership of any content you submit, post, or display on or through the Services ("User Content").
            By submitting User Content, you grant HannaCode a worldwide, non-exclusive, royalty-free license to use,
            copy, modify, create derivative works based on, distribute, publicly display, publicly perform, and otherwise
            exploit such User Content in connection with the Services.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Code of Conduct</h2>
          <p>When using our Services, you agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Violate any applicable law, contract, intellectual property right, or other third-party right or commit a
              tort
            </li>
            <li>
              Engage in any harassing, threatening, intimidating, predatory, or stalking conduct, or otherwise use the
              Services in a manner that is invasive of another's privacy
            </li>
            <li>
              Use or attempt to use another user's account without authorization from that user and HannaCode
            </li>
            <li>
              Impersonate or post on behalf of any person or entity or otherwise misrepresent your affiliation with a
              person or entity
            </li>
            <li>
              Sell, resell, or commercially use our Services
            </li>
            <li>
              Copy, reproduce, distribute, publicly perform, or publicly display all or portions of our Services, except
              as expressly permitted by us or our licensors
            </li>
            <li>
              Modify, translate, adapt, merge, make derivative works of, disassemble, decompile, reverse compile or
              reverse engineer any part of our Services, except as expressly permitted by applicable law
            </li>
            <li>
              Use any automated means or interface not provided by us to access our Services or to extract data
            </li>
            <li>
              Use our Services in any manner that could interfere with, disrupt, negatively affect, or inhibit other
              users from fully enjoying our Services
            </li>
            <li>
              Upload or transmit any viruses, malware, or other types of malicious software, or links to such software
            </li>
            <li>
              Engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Services, or which,
              as determined by us, may harm HannaCode or users of the Services or expose them to liability
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Mentorship Services</h2>
          <p>
            HannaCode offers mentorship services as part of its premium subscription plans. Mentorship sessions are
            subject to availability and must be scheduled in advance. You may cancel or reschedule a mentorship session
            up to 24 hours before the scheduled time without penalty. Late cancellations or missed sessions will count
            against your monthly allotment.
          </p>
          <p>
            Mentors are independent contractors and not employees of HannaCode. The views and opinions expressed by
            mentors are their own and do not necessarily reflect the official policy or position of HannaCode.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Termination</h2>
          <p>
            We may terminate or suspend your access to all or part of our Services, with or without notice, for any
            conduct that we, in our sole discretion, believe violates these Terms, is harmful to other users of our
            Services, or is harmful to our business interests.
          </p>
          <p>
            You may terminate your account at any time by contacting us at support@hannacode.com. Upon termination, your
            right to use the Services will immediately cease, but all provisions of these Terms that by their nature
            should survive termination shall survive.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. Disclaimer of Warranties</h2>
          <p>
            THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
            IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
            PURPOSE, TITLE, AND NON-INFRINGEMENT. HANNACODE DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED OR
            ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE SERVICES OR THE SERVERS THAT MAKE THEM AVAILABLE ARE
            FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">8. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL HANNACODE, ITS AFFILIATES, DIRECTORS,
            EMPLOYEES, OR LICENSORS BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
            EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER
            INTANGIBLE LOSSES, THAT RESULT FROM THE USE OF, OR INABILITY TO USE, THE SERVICES.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">9. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless HannaCode, its affiliates, licensors, and service
            providers, and its and their respective officers, directors, employees, contractors, agents, licensors,
            suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards,
            losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your
            violation of these Terms or your use of the Services.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">10. Governing Law and Jurisdiction</h2>
          <p>
            These Terms and your use of the Services shall be governed by and construed in accordance with the laws of
            the State of California, without giving effect to any choice or conflict of law provision or rule. Any legal
            suit, action, or proceeding arising out of, or related to, these Terms or the Services shall be instituted
            exclusively in the federal courts of the United States or the courts of the State of California, in each case
            located in the City of San Francisco and County of San Francisco.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">11. Changes to Terms</h2>
          <p>
            We may revise these Terms from time to time. The most current version will always be posted on our website.
            If a revision, in our sole discretion, is material, we will notify you via email to the email address
            associated with your account or through the Services. By continuing to access or use the Services after those
            revisions become effective, you agree to be bound by the revised Terms.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">12. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p>
            HannaCode<br />
            123 Learning Lane<br />
            San Francisco, CA 94105<br />
            Email: legal@hannacode.com<br />
            Phone: (555) 123-4567
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/privacy">
            <Button variant="outline">Privacy Policy</Button>
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
