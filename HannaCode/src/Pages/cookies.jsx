import {Link} from "react-router-dom"
import { Button } from "../components/ui/button"

export default function CookiePolicyPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-muted-foreground">Last Updated: May 15, 2025</p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p>
            This Cookie Policy explains how HannaCode ("we", "us", or "our") uses cookies and similar technologies to
            recognize you when you visit our website and use our services (collectively, the "Services"). It explains
            what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. What Are Cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website.
            Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well
            as to provide reporting information.
          </p>
          <p>
            Cookies set by the website owner (in this case, HannaCode) are called "first-party cookies". Cookies set by
            parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party
            features or functionality to be provided on or through the website (e.g., advertising, interactive content,
            and analytics). The parties that set these third-party cookies can recognize your computer both when it
            visits the website in question and also when it visits certain other websites.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Why Do We Use Cookies?</h2>
          <p>
            We use first-party and third-party cookies for several reasons. Some cookies are required for technical
            reasons in order for our Services to operate, and we refer to these as "essential" or "strictly necessary"
            cookies. Other cookies also enable us to track and target the interests of our users to enhance the
            experience on our Services. Third parties serve cookies through our Services for advertising, analytics, and
            other purposes.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Types of Cookies We Use</h2>
          <p>The specific types of first and third-party cookies served through our Services and the purposes they perform include:</p>

          <h3 className="text-xl font-bold mt-6 mb-3">3.1 Essential Cookies</h3>
          <p>
            These cookies are strictly necessary to provide you with services available through our Services and to use
            some of its features, such as access to secure areas. Because these cookies are strictly necessary to deliver
            the Services, you cannot refuse them without impacting how our Services function.
          </p>
          <p>Examples of essential cookies we use:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Authentication cookies:</strong> These cookies help us identify our users so that when you're
              logged in, you can access personalized content and experiences.
            </li>
            <li>
              <strong>Security cookies:</strong> These cookies help us detect and prevent security risks.
            </li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-3">3.2 Performance and Functionality Cookies</h3>
          <p>
            These cookies are used to enhance the performance and functionality of our Services but are non-essential to
            their use. However, without these cookies, certain functionality may become unavailable.
          </p>
          <p>Examples of performance and functionality cookies we use:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Preference cookies:</strong> These cookies remember your settings and preferences to enhance your
              experience (e.g., language preference, theme selection).
            </li>
            <li>
              <strong>Session state cookies:</strong> These cookies help our Services remember what you've done on
              previous pages/interactions with the Services so that you can easily pick up where you left off.
            </li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-3">3.3 Analytics and Customization Cookies</h3>
          <p>
            These cookies collect information that is used either in aggregate form to help us understand how our
            Services are being used or how effective our marketing campaigns are, or to help us customize our Services
            for you.
          </p>
          <p>Examples of analytics and customization cookies we use:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Google Analytics:</strong> We use Google Analytics to understand how users interact with our
              Services. This helps us improve the user experience and optimize our website.
            </li>
            <li>
              <strong>Hotjar:</strong> We use Hotjar to understand how users interact with specific pages and features.
            </li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-3">3.4 Advertising Cookies</h3>
          <p>
            These cookies are used to make advertising messages more relevant to you. They perform functions like
            preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for
            advertisers, and in some cases selecting advertisements that are based on your interests.
          </p>
          <p>Examples of advertising cookies we use:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Facebook Pixel:</strong> This helps us measure the effectiveness of our advertising campaigns on
              Facebook.
            </li>
            <li>
              <strong>Google Ads:</strong> These cookies help us show relevant advertisements on Google and measure the
              performance of our ad campaigns.
            </li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-3">3.5 Social Media Cookies</h3>
          <p>
            These cookies are used to enable you to share pages and content that you find interesting on our Services
            through third-party social networking and other websites. These cookies may also be used for advertising
            purposes.
          </p>
          <p>Examples of social media cookies we use:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Twitter:</strong> These cookies enable the "Tweet" button and related functionality.
            </li>
            <li>
              <strong>LinkedIn:</strong> These cookies enable the LinkedIn share button and related functionality.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. How Can You Control Cookies?</h2>
          <p>
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by
            clicking on the appropriate opt-out links provided in the cookie banner on our website.
          </p>
          <p>
            You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject
            cookies, you may still use our Services though your access to some functionality and areas of our Services
            may be restricted. As the means by which you can refuse cookies through your web browser controls vary from
            browser to browser, you should visit your browser's help menu for more information.
          </p>
          <p>
            In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like
            to find out more information, please visit:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <a href="http://www.aboutads.info/choices/" className="text-primary hover:underline">
                Digital Advertising Alliance
              </a>
            </li>
            <li>
              <a href="https://youradchoices.ca/" className="text-primary hover:underline">
                Digital Advertising Alliance of Canada
              </a>
            </li>
            <li>
              <a href="http://www.youronlinechoices.com/" className="text-primary hover:underline">
                European Interactive Digital Advertising Alliance
              </a>
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. How Often Will We Update This Cookie Policy?</h2>
          <p>
            We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies
            we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy
            regularly to stay informed about our use of cookies and related technologies.
          </p>
          <p>
            The date at the top of this Cookie Policy indicates when it was last updated.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Where Can You Get Further Information?</h2>
          <p>
            If you have any questions about our use of cookies or other technologies, please contact us at:
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
          <Link to="/privacy">
            <Button variant="outline">Privacy Policy</Button>
          </Link>
          <Link to="/contact">
            <Button className="bg-primary hover:bg-primary/90">Contact Us</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
