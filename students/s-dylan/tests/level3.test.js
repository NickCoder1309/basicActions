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
   test('calculator: should handle errors properly', () => {
    expect(() => calculator('/ 10 0')).toThrow('Division by zero');
    expect(() => calculator('^ 4 2')).toThrow('Invalid operator');
    expect(() => calculator('+ a 1')).toThrow('Invalid operands');
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
    expect(factorial(5)).toBe(120);
    expect(factorial(2)).toBe(2);
    expect(factorial(10)).toBe(3628800);
  });

  // -----------------------------
  test('findDuplicates: should find repeated words in text', () => {
    expect(findDuplicates('casa casa caza')).toEqual(['casa']);
    expect(findDuplicates('Perro perro perro')).toEqual(['perro']);
    expect(findDuplicates('a D A b b c a')).toEqual(['a', 'b']);
    expect(findDuplicates('sin duplicados aquí')).toEqual([]);
    expect(findDuplicates('123 123 test')).toEqual(['123']);
  });
});
