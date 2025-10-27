const { isPalindrome, sumArray, countVowels } = require('../src/level1');

describe('Level 1 – Basic Functions (New Tests)', () => {
  // -----------------------------
  describe('isPalindrome', () => {
    test('should return true for palindromic phrases ignoring spaces and case', () => {
      expect(isPalindrome('Anita lava la tina')).toBe(true);
      expect(isPalindrome('Reconocer')).toBe(true);
    });

    test('should return false for non-palindromic words', () => {
      expect(isPalindrome('Javascript')).toBe(false);
      expect(isPalindrome('OpenAI')).toBe(false);
    });

    test('should throw error when input is not a string', () => {
      expect(() => isPalindrome(null)).toThrow('Input must be a string');
      expect(() => isPalindrome(999)).toThrow('Input must be a string');
    });
  });

  // -----------------------------
  describe('sumArray', () => {
    test('should correctly sum an array of positive and negative numbers', () => {
      expect(sumArray([1, 2, 3, 4])).toBe(10);
      expect(sumArray([-1, -2, 3, 0])).toBe(0);
    });

    test('should return 0 for an empty array', () => {
      expect(sumArray([])).toBe(0);
    });

    test('should throw error if argument is not an array', () => {
      expect(() => sumArray('123')).toThrow('Input must be an array');
      expect(() => sumArray({ a: 1 })).toThrow('Input must be an array');
    });
  });

  // -----------------------------
  describe('countVowels', () => {
    test('should correctly count vowels in mixed-case strings', () => {
      expect(countVowels('OpenAI')).toBe(4);
      expect(countVowels('rhythm')).toBe(0);
    });

    test('should count vowels including repeated and accented characters (only non-accented)', () => {
      expect(countVowels('aeiouAEIOU')).toBe(10);
    });

    test('should throw error when input is not a string', () => {
      expect(() => countVowels(['a', 'e', 'i'])).toThrow(
        'Input must be a string'
      );
      expect(() => countVowels(undefined)).toThrow('Input must be a string');
    });
  });
});
