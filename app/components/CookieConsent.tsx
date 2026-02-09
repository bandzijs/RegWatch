'use client';

import { useEffect } from 'react';

interface CookieConsentWindow extends Window {
  cookieconsent?: {
    initialise: (options: unknown) => void;
  };
}

/**
 * CookieConsent Component
 *
 * Initializes the CookieConsent banner by Osano.
 * Handles cookie preferences and policy link.
 *
 * @component
 * - Appears at bottom of page
 * - Themed to match RegPulss branding (dark background, red accent)
 * - Dismissible with Accept button
 * - Link to privacy policy
 *
 * @example
 * return <CookieConsent />
 *
 * Dependencies:
 * - Requires CDN script loaded in layout.tsx:
 *   https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js
 *
 * @returns {null} Component returns null (CDN script handles rendering)
 */
export default function CookieConsent() {
  useEffect(() => {
    // Initialize CookieConsent by Osano
    const w = window as CookieConsentWindow;
    if (w.cookieconsent) {
      w.cookieconsent.initialise({
        palette: {
          popup: { background: '#1f2937', text: '#ffffff' },
          button: { background: '#dc2626', text: '#ffffff' },
        },
        content: {
          message: 'We use cookies to enhance your experience and analyze site usage.',
          dismiss: 'Accept',
          link: 'Privacy Policy',
          href: '#',
        },
        theme: 'dark',
        position: 'bottom',
      });
    }
  }, []);

  return null;
}
