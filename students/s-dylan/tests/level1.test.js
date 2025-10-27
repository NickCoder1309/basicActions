const { isPalindrome, sumArray, countVowels,findLargestNum } = require('../src/level1');

describe('Level 1 – Basic Functions', () => {
  // -----------------------------
  test('isPalindrome: additional cases', () => {
    expect(isPalindrome('madam')).toBe(true);
    expect(isPalindrome('JavaScript')).toBe(false);
    expect(() => isPalindrome(null)).toThrow('Input must be a string');
  });

  // -----------------------------
  test('sumArray: additional cases', () => {
    expect(sumArray([10, 20, 30])).toBe(60);
    expect(sumArray([0, 0, 0])).toBe(0);
    expect(sumArray([100, -50, 25])).toBe(75);
    expect(() => sumArray([1, 'a', 3])).toThrow('Array must contain only numbers');
  });

  // -----------------------------
  test('countVowels: additional cases', () => {
    expect(countVowels('banana')).toBe(3);
    expect(countVowels('WHY')).toBe(0);
    expect(countVowels('Programming')).toBe(3);
    expect(() => countVowels(42)).toThrow('Input must be a string');
  });
  test('findLargestNum: additional cases', () => {
  expect(findLargestNum([1, 2, 3, 4, 5])).toBe(5);
  expect(findLargestNum([100, 50, 200, 150])).toBe(200);
  expect(() => findLargestNum([])).toThrow('Array must have at least one element');
});
});
