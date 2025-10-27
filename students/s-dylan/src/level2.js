function textToTitleCase(text) {
  return text
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

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

function isValidEmail(text) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(text);
}

function reverseWords(text) {
  return text
    .split(' ')
    .map(word => word.split('').reverse().join(''))
    .join(' ');
}

module.exports = {
  textToTitleCase,
  fizzBuzz,
  isIsogram,
  uniqueWordFinder,
  isValidEmail,
  reverseWords,
};
