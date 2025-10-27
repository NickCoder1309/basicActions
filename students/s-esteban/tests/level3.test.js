const {
  calculator,
  isValidPassword,
  factorial,
  findDuplicates,
  firstNonRepeatingChar,
} = require('../src/level3');

describe('Level 3 – Algorithms and Metrics (New Tests)', () => {
  // -----------------------------
  describe('calculator', () => {
    test('should correctly execute arithmetic operations', () => {
      expect(calculator('+ 10 15')).toBe(25);
      expect(calculator('- 9 4')).toBe(5);
      expect(calculator('* 3 7')).toBe(21);
      expect(calculator('/ 9 3')).toBe(3);
    });

    test('should handle decimals and negative numbers', () => {
      expect(calculator('+ -2 5')).toBe(3);
      expect(calculator('* -3 2')).toBe(-6);
      expect(calculator('/ 7 2')).toBeCloseTo(3.5);
    });

    test('should throw appropriate errors', () => {
      expect(() => calculator('/ 10 0')).toThrow('Division by zero');
      expect(() => calculator('^ 2 3')).toThrow('Invalid operator');
      expect(() => calculator('+ a b')).toThrow('Invalid operands');
    });
  });

  // -----------------------------
  describe('isValidPassword', () => {
    test('should return true for strong passwords', () => {
      expect(isValidPassword('StrongPass1!')).toBe(true);
      expect(isValidPassword('Zz9@abcd')).toBe(true);
    });

    test('should return false for weak passwords', () => {
      expect(isValidPassword('weakpass')).toBe(false);
      expect(isValidPassword('PASSWORD123')).toBe(false);
      expect(isValidPassword('password!1')).toBe(false);
      expect(isValidPassword('Short1!')).toBe(false);
    });
  });

  // -----------------------------
  describe('factorial', () => {
    test('should correctly calculate factorial values', () => {
      expect(factorial(2)).toBe(2);
      expect(factorial(4)).toBe(24);
      expect(factorial(6)).toBe(720);
    });

    test('should return 1 for 0 and 1', () => {
      expect(factorial(0)).toBe(1);
      expect(factorial(1)).toBe(1);
    });
  });

  // -----------------------------
  describe('findDuplicates', () => {
    test('should return a list of duplicated words', () => {
      expect(findDuplicates('dog cat dog mouse cat')).toEqual(['dog', 'cat']);
      expect(findDuplicates('alpha beta gamma beta alpha')).toEqual([
        'alpha',
        'beta',
      ]);
    });

    test('should return an empty array if no duplicates exist', () => {
      expect(findDuplicates('sun moon star')).toEqual([]);
      expect(findDuplicates('hello')).toEqual([]);
    });

    test('should treat words with different case as distinct', () => {
      expect(findDuplicates('Tree tree TREE')).toEqual([]);
    });
  });

  // -----------------------------
  describe('firstNonRepeatingChar', () => {
    test('should return the first non-repeated character', () => {
      expect(firstNonRepeatingChar('aabbcdee')).toBe('c');
      expect(firstNonRepeatingChar('swiss')).toBe('w');
      expect(firstNonRepeatingChar('redivider')).toBe('v');
    });

    test('should return null if all characters repeat', () => {
      expect(firstNonRepeatingChar('aabbcc')).toBeNull();
      expect(firstNonRepeatingChar('')).toBeNull();
    });

    test('should handle mixed characters', () => {
      expect(firstNonRepeatingChar('1122334')).toBe('4');
      expect(firstNonRepeatingChar('aA')).toBe('a');
    });
  });
});
