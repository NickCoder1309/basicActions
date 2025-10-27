// --- Function 1 ---
function isPalindrome(text) {
  if (typeof text !== 'string') {
    throw new Error('Input must be a string');
  }
  const clean = text.toLowerCase().replace(/\s+/g, '');
  return clean === clean.split('').reverse().join('');
}

// --- Function 2 ---
function sumArray(nums) {
  if (!Array.isArray(nums)) {
    throw new Error('Input must be an array');
  }
  return nums.reduce((a, b) => a + b, 0);
}

// --- Function 3 ---
function countVowels(text) {
  if (typeof text !== 'string') {
    throw new Error('Input must be a string');
  }
  const vowels = text.match(/[aeiou]/gi);
  return vowels ? vowels.length : 0;
}

function findLargestNum(nums) {
  if (nums.length === 0) {
    throw new Error('Array must have at least one element.');
  }
  return nums.reduce((max, num) => (num > max ? num : max));
}

// Export so Jest can use them
module.exports = { isPalindrome, sumArray, countVowels, findLargestNum };
