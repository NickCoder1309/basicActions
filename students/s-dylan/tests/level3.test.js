const {
  calculator,
  isValidPassword,
  factorial,
  findDuplicates,
} = require('../src/level3');

describe('Level 3 – Algorithms and Metrics (Extra Tests)', () => {
  // -----------------------------
  test('calculator: extra valid arithmetic operations', () => {
    expect(calculator('+ 0 0')).toBe(0);
    expect(calculator('- 20 30')).toBe(-10);
    expect(calculator('* -3 4')).toBe(-12);
    expect(calculator('/ 9 3')).toBe(3);
  });

  test('calculator: edge-case errors', () => {
    expect(() => calculator('')).toThrow('Invalid input format');
    expect(() => calculator('+ 5')).toThrow('Invalid input format');
    expect(() => calculator('+ 5 x')).toThrow('Invalid operands');
    expect(() => calculator('= 5 5')).toThrow('Invalid operator');
  });

  // -----------------------------
  test('isValidPassword: advanced strength validation', () => {
    expect(isValidPassword('Zx9$Hello')).toBe(true); 
    expect(isValidPassword('NoNum!PW')).toBe(false); 
    expect(isValidPassword('noncapital1!')).toBe(false); 
    expect(isValidPassword('Short1!')).toBe(false); 
  });

  // -----------------------------
  test('factorial: extended cases and errors', () => {
    expect(factorial(10)).toBe(3628800);
    expect(factorial(2)).toBe(2);
    expect(() => factorial(-1)).toThrow('Input must be a non-negative integer');
    expect(() => factorial(1.5)).toThrow('Input must be a non-negative integer');
  });

  // -----------------------------
  test('findDuplicates: case-insensitive and punctuation tests', () => {
    expect(findDuplicates('Casa casa CASA')).toEqual(['casa']);
    expect(findDuplicates('Perro! perro, perro.')).toEqual(['perro']);
    expect(findDuplicates('A A A b B c')).toEqual(['a', 'b']);
    expect(findDuplicates('sin duplicados aquí')).toEqual([]);
    expect(findDuplicates('123 123 test')).toEqual(['123']);
  });
});
