const {
  textToTitleCase,
  fizzBuzz,
  isIsogram,
  uniqueWordFinder,
  isValidEmail,
} = require('../src/level2');

describe('Level 2 – Logic and Conditions (New Tests)', () => {
  // -----------------------------
  describe('textToTitleCase', () => {
    test('should capitalize each word correctly regardless of input case', () => {
      expect(textToTitleCase('tHe quIck BROWN fOx')).toBe(
        'The Quick Brown Fox'
      );
      expect(textToTitleCase('javaScript rocks')).toBe('Javascript Rocks');
    });

    test('should return an empty string when input is empty', () => {
      expect(textToTitleCase('')).toBe('');
    });
  });

  // -----------------------------
  describe('fizzBuzz', () => {
    test('should return proper FizzBuzz sequence for small ranges', () => {
      expect(fizzBuzz(1)).toEqual(['1']);
      expect(fizzBuzz(3)).toEqual(['1', '2', 'Fizz']);
    });

    test('should correctly mark multiples of 3, 5, and both', () => {
      const result = fizzBuzz(15);
      expect(result[2]).toBe('Fizz');
      expect(result[4]).toBe('Buzz');
      expect(result[14]).toBe('FizzBuzz');
    });

    test('should produce strings, not numbers', () => {
      const output = fizzBuzz(5);
      output.forEach((item) => {
        expect(typeof item).toBe('string');
      });
    });
  });

  // -----------------------------
  describe('isIsogram', () => {
    test('should return true for isograms (no repeated letters)', () => {
      expect(isIsogram('background')).toBe(true);
      expect(isIsogram('lamp')).toBe(true);
      expect(isIsogram('Dermatoglyphics')).toBe(true);
    });

    test('should return false for words with repeating letters', () => {
      expect(isIsogram('letter')).toBe(false);
      expect(isIsogram('Mississippi')).toBe(false);
      expect(isIsogram('apple')).toBe(false);
    });
  });

  // -----------------------------
  describe('uniqueWordFinder', () => {
    test('should return only unique words preserving order', () => {
      expect(uniqueWordFinder('one two two three one')).toEqual([
        'one',
        'two',
        'three',
      ]);
    });

    test('should return all words when there are no repeats', () => {
      expect(uniqueWordFinder('alpha beta gamma')).toEqual([
        'alpha',
        'beta',
        'gamma',
      ]);
    });

    test('should handle single-word input', () => {
      expect(uniqueWordFinder('unique')).toEqual(['unique']);
    });
  });

  // -----------------------------
  describe('isValidEmail', () => {
    test('should return true for valid email formats', () => {
      expect(isValidEmail('name.lastname@company.org')).toBe(true);
      expect(isValidEmail('simple+alias@gmail.com')).toBe(true);
    });

    test('should return false for invalid email formats', () => {
      expect(isValidEmail('missingatsign.com')).toBe(false);
      expect(isValidEmail('wrong@domain,com')).toBe(false);
      expect(isValidEmail('space @mail.com')).toBe(false);
      expect(isValidEmail('name@.com')).toBe(false);
    });
  });
});
