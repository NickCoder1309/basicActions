const {
  textToTitleCase,
  fizzBuzz,
  isIsogram,
  uniqueWordFinder,
  isValidEmail,
  mostFrequentWords,
} = require('../src/level2');

describe('Level 2 – Logic and Conditions', () => {
  // -----------------------------
  test('textToTitleCase: should convert text to title case', () => {
    expect(textToTitleCase('anita lava la tina')).toBe('Anita Lava La Tina');
    expect(textToTitleCase('HELLO WORLD')).toBe('Hello World');
    expect(textToTitleCase('javaScript is fun')).toBe('Javascript Is Fun');
  });

  // -----------------------------
  test('fizzBuzz: should return Fizz, Buzz, or FizzBuzz accordingly', () => {
    expect(fizzBuzz(5)).toEqual(['1', '2', 'Fizz', '4', 'Buzz']);
    expect(fizzBuzz(3)).toEqual(['1', '2', 'Fizz']);
    expect(fizzBuzz(15).slice(-3)).toEqual(['13', '14', 'FizzBuzz']);
  });

  // -----------------------------
  test('isIsogram: should detect words with or without repeated letters', () => {
    expect(isIsogram('machine')).toBe(true);
    expect(isIsogram('isogram')).toBe(true);
    expect(isIsogram('hello')).toBe(false);
    expect(isIsogram('Alphabet')).toBe(false);
  });

  // -----------------------------
  test('uniqueWordFinder: should return unique words from the text', () => {
    expect(uniqueWordFinder('la vaca canta')).toEqual(['la', 'vaca', 'canta']);
    expect(uniqueWordFinder('la vaca vaca canta')).toEqual([
      'la',
      'vaca',
      'canta',
    ]);
    expect(uniqueWordFinder('sol luna estrella sol luna')).toEqual([
      'sol',
      'luna',
      'estrella',
    ]);
    expect(uniqueWordFinder('uno dos tres cuatro')).toEqual([
      'uno',
      'dos',
      'tres',
      'cuatro',
    ]);
  });

  // -----------------------------
  test('isValidEmail: should correctly validate email formats', () => {
    expect(isValidEmail('user@example.com')).toBe(true);
    expect(isValidEmail('user.name@domain.io')).toBe(true);
    expect(isValidEmail('user@domain')).toBe(false);
    expect(isValidEmail('invalid@@mail.com')).toBe(false);
    expect(isValidEmail('noatsymbol.com')).toBe(false);
  });
});
test('mostFrequentWords returns top words ignoring case and punctuation', () => {
  const text = "Apple, banana! apple. Cherry; banana apple? 'banana' apple";
  expect(mostFrequentWords(text, 2)).toEqual(['apple', 'banana']);
});

test('mostFrequentWords returns [] for empty or non-string input', () => {
  expect(mostFrequentWords('', 1)).toEqual([]);
  expect(mostFrequentWords(null, 1)).toEqual([]);
});

test('mostFrequentWords handles ties deterministically (lexicographic)', () => {
  const text = "b a b a";
  // a and b aparecen 2 veces: se devuelve en orden lexicográfico ['a','b']
  expect(mostFrequentWords(text, 2)).toEqual(['a', 'b']);
});