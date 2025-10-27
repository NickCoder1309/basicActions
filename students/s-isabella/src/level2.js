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

function mostFrequentWords(text, topN = 1) {
  if (typeof text !== 'string' || topN <= 0) {return [];}

 
  const words = (text.toLowerCase().match(/\b[\w']+\b/g) || []);

  if (words.length === 0) {return [];}

  const counts = Object.create(null);
  for (const w of words) {
    counts[w] = (counts[w] || 0) + 1;
  }

  const sorted = Object.entries(counts)
    .sort((a, b) => {
      
      if (b[1] !== a[1]) {return b[1] - a[1];}
      return a[0].localeCompare(b[0]);
    })
    .slice(0, topN)
    .map(([word]) => word);

  return sorted;
}


module.exports = {
  textToTitleCase,
  fizzBuzz,
  isIsogram,
  uniqueWordFinder,
  isValidEmail,
  mostFrequentWords,
};


