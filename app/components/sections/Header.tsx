/**
 * Header Component
 *
 * Main navigation header with logo and menu links:
 * - RegPulss branding
 * - Navigation to About, Sources, and Contact sections
 *
 * @component
 * @example
 * return <Header />
 *
 * Accessibility:
 * - Semantic HTML5 (header element)
 * - Proper link structure with section anchors
 *
 * @returns {ReactElement} Navigation header with logo and menu
 */
export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" fill="#DC2626" />
            </svg>
            <span className="logo-text">RegPulss</span>
          </div>
          <nav className="nav">
            <a href="#about" className="nav-link">About</a>
            <a href="#sources" className="nav-link">Sources</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
