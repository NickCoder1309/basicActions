const {
  textToTitleCase,
  fizzBuzz,
  isIsogram,
  uniqueWordFinder,
  isValidEmail,
  reverseWords,
} = require('../src/level2');

describe('Level 2 – Logic and Conditions', () => {
  // -----------------------------
  test('textToTitleCase: extra cases including spacing and punctuation', () => {
    expect(textToTitleCase('hello there')).toBe('Hello There');
    expect(textToTitleCase('the lord of the rings')).toBe('The Lord Of The Rings');
    expect(textToTitleCase('cODe wArS')).toBe('Code Wars');
  });

  // -----------------------------
  test('fizzBuzz: extra logic cases', () => {
    expect(fizzBuzz(1)).toEqual(['1']);
    expect(fizzBuzz(10).slice(8)).toEqual(['Fizz', 'Buzz']); 
    expect(fizzBuzz(20)[14]).toBe('FizzBuzz');
  });

  // -----------------------------
  test('isIsogram: robust edge cases', () => {
    expect(isIsogram('')).toBe(true); 
    expect(isIsogram('Background')).toBe(true);
    expect(isIsogram('repeated')).toBe(false);
    expect(isIsogram('Sixyearold')).toBe(true); 
  });

  // -----------------------------
  test('uniqueWordFinder: punctuation and case-insensitive behavior', () => {
    expect(uniqueWordFinder('Holaa HOLA HOLA')).toEqual(['Holaa','HOLA']);
    expect(uniqueWordFinder('perro gato perro')).toEqual(['perro','gato']);
    expect(uniqueWordFinder('a b a b c')).toEqual(['a', 'b', 'c']);
  });

  // -----------------------------
  test('isValidEmail: more valid/invalid formats', () => {
    expect(isValidEmail('test123@mail.co')).toBe(true);
    expect(isValidEmail('first.last@domain.org')).toBe(true);
    expect(isValidEmail('missing@tld.')).toBe(false);
    expect(isValidEmail('@nouser.com')).toBe(false);
    expect(isValidEmail('wrong space@email.com')).toBe(false);
  });
  test('reverseWords: reverse each word individually', () => {
  expect(reverseWords('hello world')).toBe('olleh dlrow');
  expect(reverseWords('JavaScript Rules')).toBe('tpircSavaJ seluR');
  expect(reverseWords('')).toBe('');
});

});
