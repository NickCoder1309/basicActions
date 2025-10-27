const { isPalindrome, sumArray, countVowels, reverseString } = require('../src/level1');

describe('Level 1 – Basic Functions', () => {
  // -----------------------------
  test('isPalindrome: should detect palindromes and handle errors', () => {
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('a man a plan a canal panama')).toBe(true);
    expect(isPalindrome('hello')).toBe(false);
    expect(() => isPalindrome(123)).toThrow('Input must be a string');
  });

  // -----------------------------
  test('sumArray: should sum numbers and handle errors', () => {
    expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
    expect(sumArray([-1, -2, -3])).toBe(-6);
    expect(sumArray([])).toBe(0);
    expect(() => sumArray('not array')).toThrow('Input must be an array');
  });

  // -----------------------------
  test('countVowels: should count vowels and handle errors', () => {
    expect(countVowels('hello')).toBe(2);
    expect(countVowels('AEIOU')).toBe(5);
    expect(countVowels('xyz')).toBe(0);
    expect(() => countVowels(123)).toThrow('Input must be a string');
  });

  // -----------------------------
  test('reverseString: should reverse strings and handle errors', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('JavaScript')).toBe('tpircSavaJ');
    expect(reverseString('12345')).toBe('54321');
    expect(() => reverseString(123)).toThrow('Input must be a string');
  });
});
