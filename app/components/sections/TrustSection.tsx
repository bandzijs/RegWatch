/**
 * TrustSection Component
 *
 * Displays the list of official sources being monitored:
 * - likumi.lv (Latvian legal information system)
 * - Saeima (Latvian Parliament)
 * - EUR-Lex (EU legal database)
 * - Official regulators
 *
 * @component
 * @example
 * return <TrustSection />
 *
 * @returns {ReactElement} Trust section with source list
 */
export default function TrustSection() {
  return (
    <section className="trust" id="sources">
      <div className="container">
        <p className="trust-label">Monitoring official sources</p>
        <div className="sources-list">
          <span className="source">likumi.lv</span>
          <span className="source">Saeima</span>
          <span className="source">EUR-Lex</span>
          <span className="source">Official regulators</span>
        </div>
      </div>
    </section>
  );
}
