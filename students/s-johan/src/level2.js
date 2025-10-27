// --- Function 1 ---
// Convert a string to Title Case
function textToTitleCase(text) {
  return text
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// --- Function 2 ---
// FizzBuzz implementation
// def: For numbers from 1 to n, return "Fizz" for multiples of 3, "Buzz" for multiples of 5, 
// and "FizzBuzz" for multiples of both
function fizzBuzz(n) {
  const output = [];

  for (let i = 1; i <= n; i++) {
    let result = '';

    if (i % 3 === 0) {
      result += 'Fizz';
    }
    if (i % 5 === 0) {
      result += 'Buzz';
    }

    output.push(result || i.toString());
  }

  return output;
}

// --- Function 3 ---
// Check if a word is an isogram (no repeating letters)
// def: An isogram is a word with no repeating letters, consecutive or non-consecutive
function isIsogram(word) {
  const str = word.toLowerCase();
  const len = str.length;
  const arr = str.split('').sort();

  for (let i = 0; i < len - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      return false;
    }
  }

  return true;
}

// --- Function 4 ---
// Find unique words in a string
function uniqueWordFinder(text) {
  const arr = text.split(' ');
  const uniqueWords = [];

  for (const word of arr) {
    if (!uniqueWords.includes(word)) {
      uniqueWords.push(word);
    }
  }

  return uniqueWords;
}

// --- Function 5 ---
// Validate email format
function isValidEmail(text) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(text);
}


// --- Function 6 ---
// Find the most frequent word(s) in a string (case-insensitive)
// def: Returns an array of the word(s) that appear the most times.
// If multiple words tie for most frequent, returns all of them in the
// order they first appear. Non-string input returns an empty array.
function mostFrequentWords(text) {
  if (typeof text !== 'string') {return [];}
  if (text.trim() === '') {return [];}

  const words = text.split(' ').map((w) => w.toLowerCase());
  const counts = new Map();
  const order = [];

  for (const w of words) {
    if (!counts.has(w)) {
      counts.set(w, 0);
      order.push(w);
    }
    counts.set(w, counts.get(w) + 1);
  }

  let max = 0;
  for (const v of counts.values()) {
    if (v > max) {max = v;}
  }

  const result = [];
  for (const w of order) {
    if (counts.get(w) === max) {result.push(w);}
  }

  return result;
}

// Export so Jest can use them
module.exports = {
  textToTitleCase,
  fizzBuzz,
  isIsogram,
  uniqueWordFinder,
  isValidEmail,
  mostFrequentWords,
};