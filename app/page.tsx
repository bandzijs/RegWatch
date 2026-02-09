import CookieConsent from '@/app/components/CookieConsent';
import { ErrorBoundary } from '@/app/components/ErrorBoundary';
import Header from '@/app/components/sections/Header';
import HeroSection from '@/app/components/sections/HeroSection';
import TrustSection from '@/app/components/sections/TrustSection';
import BenefitsSection from '@/app/components/sections/BenefitsSection';
import Footer from '@/app/components/sections/Footer';

/**
 * Home Page Component
 *
 * Main landing page for RegPulss newsletter signup.
 * Displays sections for value proposition, social proof, benefits, and footer.
 *
 * @component
 * Structure:
 * - CookieConsent banner
 * - Header with navigation
 * - Hero section with signup form
 * - Trust section showing data sources
 * - Benefits section highlighting features
 * - Footer
 *
 * All content is wrapped with ErrorBoundary for production error handling.
 *
 * @returns {ReactElement} Complete landing page
 */
export default function Home() {
  return (
    <ErrorBoundary>
      <>
        <CookieConsent />
        <Header />
        <HeroSection />
        <TrustSection />
        <BenefitsSection />
        <Footer />
      </>
    </ErrorBoundary>
  );
}
