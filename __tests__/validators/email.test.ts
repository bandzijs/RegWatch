import { describe, it, expect } from 'vitest';

// Email validation utility test
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

describe('Email Validation', () => {
  it('should validate correct email format', () => {
    expect(validateEmail('test@example.com')).toBe(true);
    expect(validateEmail('user.name@company.co.uk')).toBe(true);
    expect(validateEmail('hello+tag@domain.org')).toBe(true);
  });

  it('should reject invalid email formats', () => {
    expect(validateEmail('invalid')).toBe(false);
    expect(validateEmail('user@')).toBe(false);
    expect(validateEmail('@domain.com')).toBe(false);
    expect(validateEmail('user@domain')).toBe(false);
    expect(validateEmail('user @domain.com')).toBe(false);
  });

  it('should reject edge cases', () => {
    expect(validateEmail('')).toBe(false);
    expect(validateEmail('   ')).toBe(false);
  });
});
