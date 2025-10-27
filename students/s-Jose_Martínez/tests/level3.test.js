const {
  calculator,
  isValidPassword,
  factorial,
  findDuplicates,
} = require('../src/level3');

describe('Level 3 – Algorithms and Metrics', () => {
  // -----------------------------
  test('calculator: should perform operations and handle errors', () => {
    expect(calculator('+ 5 3')).toBe(8);
    expect(calculator('- 10 5')).toBe(5);
    expect(calculator('* 4 5')).toBe(20);
    expect(calculator('/ 10 2')).toBe(5);
    expect(() => calculator('/ 10 0')).toThrow('Division by zero');
    expect(() => calculator('^ 5 2')).toThrow('Invalid operator');
    expect(() => calculator('+ abc 3')).toThrow('Invalid operands');
  });

  // -----------------------------
  test('isValidPassword: should validate password strength', () => {
    expect(isValidPassword('Pass1234!')).toBe(true);
    expect(isValidPassword('Secure@2023')).toBe(true);
    expect(isValidPassword('PASSWORD1!')).toBe(false);
    expect(isValidPassword('password1!')).toBe(false);
    expect(isValidPassword('Password!')).toBe(false);
    expect(isValidPassword('Password1')).toBe(false);
    expect(isValidPassword('Pass1!')).toBe(false);
  });

  // -----------------------------
  test('factorial: should calculate factorials correctly', () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
    expect(factorial(3)).toBe(6);
    expect(factorial(5)).toBe(120);
    expect(factorial(10)).toBe(3628800);
  });

  // -----------------------------
  test('findDuplicates: should find repeated words in text', () => {
    expect(findDuplicates('hello world hello')).toEqual(['hello']);
    expect(findDuplicates('apple banana apple banana')).toEqual(['apple', 'banana']);
    expect(findDuplicates('hello world')).toEqual([]);
    expect(findDuplicates('test test test')).toEqual(['test']);
    expect(findDuplicates('Hello hello HELLO')).toEqual([]);
  });
});
