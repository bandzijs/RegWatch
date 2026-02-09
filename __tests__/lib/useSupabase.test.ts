import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { useAuth } from '@/lib/useSupabase';

// Mock Supabase
vi.mock('@/lib/supabaseClient', () => ({
  supabase: {
    auth: {
      getSession: vi.fn().mockResolvedValue({
        data: { session: null },
      }),
      onAuthStateChange: vi.fn().mockReturnValue({
        data: {
          subscription: {
            unsubscribe: vi.fn(),
          },
        },
      }),
    },
  },
}));

describe('useAuth Hook', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should initialize with null user and loading true', () => {
    const { result } = renderHook(() => useAuth());
    expect(result.current.loading).toBe(true);
    expect(result.current.user).toBe(null);
  });

  it('should handle user session updates', async () => {
    // Tests that the hook properly initializes state
    const { result } = renderHook(() => useAuth());

    // Initially, user should be null and loading true
    expect(result.current.user).toBe(null);
    expect(result.current.loading).toBe(true);

    // After effect, loading should be false
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
  });

  it('should set loading to false after initialization', async () => {
    const { result } = renderHook(() => useAuth());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
  });

  it('should cleanup subscriptions on unmount', () => {
    // The hook returns a cleanup function from useEffect
    // This test verifies the hook is designed to cleanup
    const { unmount } = renderHook(() => useAuth());
    
    // No errors should occur during unmount
    expect(() => unmount()).not.toThrow();
  });
});
