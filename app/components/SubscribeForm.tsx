'use client';

import { useState } from 'react';

/**
 * SubscribeForm Component
 *
 * Email subscription form with client-side validation and success modal.
 * Sends subscription request to `/api/subscribe` endpoint.
 *
 * @component
 * Features:
 * - Real-time email validation
 * - Loading state during submission
 * - Error messages displayed inline
 * - Success modal confirmation
 * - Accessible form inputs with aria-labels
 *
 * @example
 * return <SubscribeForm />
 *
 * Accessibility:
 * - Form inputs have aria-label attributes
 * - Success modal can be dismissed by clicking outside or Close button
 * - Error messages are visible inline
 * - Button disabled state during submission
 *
 * @returns {ReactElement} Email subscription form with modal
 */
export default function SubscribeForm() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    const emailInput = formElement.querySelector('input[type="email"]') as HTMLInputElement;
    const email = emailInput.value;

    // Clear previous errors
    setError(null);

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    try {
      // Call the API endpoint
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Error subscribing. Please try again.');
        return;
      }

      // Show success modal
      setShowModal(true);
      document.body.style.overflow = 'hidden';

      // Reset form
      formElement.reset();
    } catch (error) {
      console.error('Subscription error:', error);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <form
      className="email-form"
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your work email"
        required
        aria-label="Email address"
        className="email-input"
      />
      <button
        type="submit"
        className="cta-button"
        disabled={loading}
      >
        {loading ? 'Subscribing...' : 'Subscribe'}
      </button>

      {/* Error message */}
      {error && (
        <p className="error-message" style={{ color: '#DC2626', marginTop: '0.5rem', fontSize: '0.875rem' }}>
          {error}
        </p>
      )}

      {/* Success Modal */}
      {showModal && (
        <div
          className="modal active"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              handleCloseModal();
            }
          }}
        >
          <div className="modal-content">
            <div className="modal-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="modal-title">You&apos;re subscribed!</h3>
            <p className="modal-text">
              Thank you for subscribing. You&apos;ll receive regulatory updates directly to your inbox.
            </p>
            <button className="modal-button" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
