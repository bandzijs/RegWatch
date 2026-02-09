/**
 * BenefitsSection Component
 *
 * Highlights the key benefits for legal professionals:
 * - Clear, plain-language summaries
 * - Direct citations to official sources
 * - Time-saving delivery to inbox
 *
 * @component
 * @example
 * return <BenefitsSection />
 *
 * @returns {ReactElement} Benefits grid with feature cards
 */
export default function BenefitsSection() {
  return (
    <section className="benefits" id="about">
      <div className="container">
        <h2 className="section-title">Built for professionals</h2>

        <div className="benefits-grid">
          <div className="benefit">
            <h3 className="benefit-title">Clear summaries</h3>
            <p className="benefit-text">Plain-language explanations of what changed, why it matters, and who it affects.</p>
          </div>
          <div className="benefit">
            <h3 className="benefit-title">Direct citations</h3>
            <p className="benefit-text">Every update includes links to official texts from likumi.lv, Saeima, and EUR-Lex.</p>
          </div>
          <div className="benefit">
            <h3 className="benefit-title">Save time</h3>
            <p className="benefit-text">Stop manually scanning multiple legal websites. Get updates delivered to your inbox.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
