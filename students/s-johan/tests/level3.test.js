const {
  calculator,
  isValidPassword,
  factorial,
  findDuplicates,
} = require('../src/level3');

describe('Level 3 – Algorithms and Metrics', () => {
  // -----------------------------
  test('calculator: should perform basic arithmetic operations', () => {
    expect(calculator('+ 3 5')).toBe(8);
    expect(calculator('- 10 4')).toBe(6);
    expect(calculator('* 2 6')).toBe(12);
    expect(calculator('/ 8 2')).toBe(4);
  });

  test('calculator: should handle errors properly', () => {
    expect(() => calculator('/ 5 0')).toThrow('Division by zero');
    expect(() => calculator('% 5 2')).toThrow('Invalid operator');
    expect(() => calculator('+ a 3')).toThrow('Invalid operands');
  });

  // -----------------------------
  test('isValidPassword: should validate password strength', () => {
    expect(isValidPassword('Aa1!abcd')).toBe(true);
    expect(isValidPassword('aa1!abcd')).toBe(false);
    expect(isValidPassword('AA1!ABCD')).toBe(false);
    expect(isValidPassword('Aa!abcdE')).toBe(false);
    expect(isValidPassword('Aa1abcdE')).toBe(false);
    expect(isValidPassword('Aa1!a')).toBe(false);
  });

  // -----------------------------
  test('factorial: should correctly compute factorials', () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
    expect(factorial(3)).toBe(6);
    expect(factorial(5)).toBe(120);
    expect(factorial(7)).toBe(5040);
  });

  // -----------------------------
  test('findDuplicates: should return repeated words in text', () => {
    expect(findDuplicates('la vaca canta la vaca salta')).toEqual([
      'la',
      'vaca',
    ]);
    expect(findDuplicates('uno dos tres cuatro')).toEqual([]);
    expect(findDuplicates('hola hola hola mundo mundo')).toEqual([
      'hola',
      'mundo',
    ]);
    expect(findDuplicates('hola')).toEqual([]);
    expect(findDuplicates('sol luna sol')).toEqual(['sol']);
    expect(findDuplicates('Perro perro Gato gato')).toEqual([]);
  });
});