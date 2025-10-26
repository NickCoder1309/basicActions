// Function 1
// Text to Title Case: takes a string and converts it to title case

function textToTitleCase(text) {
  return text
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Function 2
// FizzBuzz: takes a number n and returns an array of strings representing the FizzBuzz sequence up to n
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

// Function 3
// Isogram: takes a word and returns true if it has no repeating letters, false otherwise
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


// Function 4
// Unique Word Finder: takes a string of text and returns an array of unique words
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

// Function 5
// Valid Email Checker: takes a string and returns true if it is a valid email format, false otherwise  
function isValidEmail(text) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(text);
}

module.exports = {
  textToTitleCase,
  fizzBuzz,
  isIsogram,
  uniqueWordFinder,
  isValidEmail,
};
