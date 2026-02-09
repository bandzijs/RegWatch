/**
 * HeroSection Component
 *
 * Displays the main hero section with:
 * - Value proposition headline
 * - Call-to-action email subscription form
 * - Newsletter preview mockup
 *
 * @component
 * @example
 * return <HeroSection />
 *
 * @returns {ReactElement} Hero section with form and mockup
 */
import SubscribeForm from '@/app/components/SubscribeForm';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-left">
            <h1 className="hero-title">Stay ahead of regulatory changes in Latvia.</h1>
            <p className="hero-description">
              Regulatory updates with direct links to official sources. Delivered to your inbox.
            </p>

            <SubscribeForm />

            <p className="form-note">No spam, <span className="underline">unsubscribe</span> anytime.</p>
          </div>

          <div className="hero-right">
            <div className="mockup-container">
              <div className="newsletter-preview">
                <div className="preview-header">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" fill="#DC2626" />
                  </svg>
                  <span className="preview-title">Weekly Regulatory Update</span>
                </div>
                <div className="preview-date">January 6, 2026</div>
                <div className="preview-items">
                  <div className="preview-item">
                    <div className="item-badge">New</div>
                    <div className="item-title">Data Protection Amendment</div>
                    <div className="item-source">→ likumi.lv</div>
                  </div>
                  <div className="preview-item">
                    <div className="item-badge">Updated</div>
                    <div className="item-title">Labor Law Changes</div>
                    <div className="item-source">→ Saeima</div>
                  </div>
                  <div className="preview-item">
                    <div className="item-badge">EU</div>
                    <div className="item-title">GDPR Enforcement Guidelines</div>
                    <div className="item-source">→ EUR-Lex</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
