const { reverseString, capitalizeString, isPalindrome } = require('../src/stringHelper');

describe('String Helper - Reverse', () => {
  test('should reverse a simple string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('should reverse an empty string', () => {
    expect(reverseString('')).toBe('');
  });

  test('should reverse a single character', () => {
    expect(reverseString('a')).toBe('a');
  });
});

describe('String Helper - Capitalize', () => {
  test('should capitalize first letter', () => {
    expect(capitalizeString('hello')).toBe('Hello');
  });

  test('should handle already capitalized string', () => {
    expect(capitalizeString('Hello')).toBe('Hello');
  });

  test('should throw error for non-string input', () => {
    expect(() => capitalizeString(123)).toThrow('Input must be a string');
  });
});

describe('String Helper - Palindrome', () => {
  test('should identify valid palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  test('should identify palindrome with spaces', () => {
    expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
  });

  test('should identify non-palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
  });
});
