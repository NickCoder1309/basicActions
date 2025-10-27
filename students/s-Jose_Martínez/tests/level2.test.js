const {
  textToTitleCase,
  fizzBuzz,
  isIsogram,
  uniqueWordFinder,
  isValidEmail,
  isPrime,
} = require('../src/level2');

describe('Level 2 – Logic and Conditions', () => {
  // -----------------------------
  test('textToTitleCase: should convert text to title case', () => {
    expect(textToTitleCase('hello world')).toBe('Hello World');
    expect(textToTitleCase('HELLO WORLD')).toBe('Hello World');
    expect(textToTitleCase('the quick brown fox')).toBe('The Quick Brown Fox');
  });

  // -----------------------------
  test('fizzBuzz: should return Fizz, Buzz, or FizzBuzz accordingly', () => {
    const result = fizzBuzz(15);
    expect(result).toEqual([
      '1', '2', 'Fizz', '4', 'Buzz',
      'Fizz', '7', '8', 'Fizz', 'Buzz',
      '11', 'Fizz', '13', '14', 'FizzBuzz'
    ]);
    expect(result[2]).toBe('Fizz');
    expect(result[4]).toBe('Buzz');
    expect(result[14]).toBe('FizzBuzz');
  });

  // -----------------------------
  test('isIsogram: should detect words with or without repeated letters', () => {
    expect(isIsogram('dermatoglyphics')).toBe(true);
    expect(isIsogram('background')).toBe(true);
    expect(isIsogram('eleven')).toBe(false);
    expect(isIsogram('Hello')).toBe(false);
  });

  // -----------------------------
  test('uniqueWordFinder: should return unique words from text', () => {
    expect(uniqueWordFinder('cat dog bird')).toEqual(['cat', 'dog', 'bird']);
    expect(uniqueWordFinder('apple banana apple')).toEqual(['apple', 'banana']);
    expect(uniqueWordFinder('sun moon sun star moon')).toEqual(['sun', 'moon', 'star']);
  });

  // -----------------------------
  test('isValidEmail: should validate email formats correctly', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('user.name@domain.co')).toBe(true);
    expect(isValidEmail('invalidemail.com')).toBe(false);
    expect(isValidEmail('user@domain')).toBe(false);
    expect(isValidEmail('user@@example.com')).toBe(false);
  });

  // -----------------------------
  test('isPrime: should detect prime numbers correctly', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(17)).toBe(true);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(1)).toBe(false);
    expect(isPrime(0)).toBe(false);
    expect(isPrime(100)).toBe(false);
  });
});
