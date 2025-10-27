const {
  isPalindrome,
  sumArray,
  countVowels,
  findLargestNum,
} = require('../src/level1');

describe('Level 1 – Basic Functions', () => {
  // -----------------------------
  test('isPalindrome: should handle empty and invalid input', () => {
    expect(isPalindrome('')).toBe(true);
    expect(() => isPalindrome(123)).toThrow('Input must be a string');
  });

  // -----------------------------
  test('sumArray: should handle single-element and invalid input', () => {
    expect(sumArray([5])).toBe(5);
    expect(() => sumArray('not array')).toThrow('Input must be an array');
  });

  // -----------------------------
  test('countVowels: should handle empty and invalid input', () => {
    expect(countVowels('')).toBe(0);
    expect(() => countVowels(42)).toThrow('Input must be a string');
  });

  // -----------------------------
  test('findLargestNum: should handle an empty array and negative numbers', () => {
    expect(findLargestNum([-2, -6, -1, -1])).toBe(-1);
    expect(() => findLargestNum([])).toThrow(
      'Array must have at least one element'
    );
  });
});
