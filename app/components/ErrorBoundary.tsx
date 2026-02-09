'use client';

import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error details for debugging
    console.error('Error caught by boundary:', error);
    console.error('Error info:', errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            padding: '2rem',
            textAlign: 'center',
            minHeight: '400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h2 style={{ color: '#1F2937', marginBottom: '0.5rem' }}>
            Something went wrong
          </h2>
          <p style={{ color: '#6B7280', marginBottom: '1.5rem' }}>
            We apologize for the inconvenience. Please try refreshing the page.
          </p>
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details
              style={{
                marginBottom: '1.5rem',
                textAlign: 'left',
                background: '#F3F4F6',
                padding: '1rem',
                borderRadius: '0.375rem',
                maxWidth: '600px',
                overflow: 'auto',
              }}
            >
              <summary style={{ cursor: 'pointer', fontWeight: '500' }}>
                Error details (development only)
              </summary>
              <pre
                style={{
                  marginTop: '0.5rem',
                  fontSize: '0.875rem',
                  color: '#DC2626',
                }}
              >
                {this.state.error.toString()}
              </pre>
            </details>
          )}
          <button
            onClick={this.handleReset}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#DC2626',
              color: 'white',
              border: 'none',
              borderRadius: '0.375rem',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '500',
            }}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
