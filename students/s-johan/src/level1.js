// Function 1
// Palindrome: a word, phrase, or number that reads
//  the same from left to right as it does from right to left

function isPalindrome(text) {
    if (typeof text !== 'string') {
        throw new Error('Input must be a string');
    }
    const clean = text.toLowerCase().replace(/\s+/g, '');
    return clean === clean.split('').reverse().join('');
}

// Function 2
// Sum Array: takes an array of numbers and returns the sum of all the numbers

function sumArray(numbers) {
    if (!Array.isArray(numbers) || !numbers.every(num => typeof num === 'number')) {
        throw new Error('Input must be an array of numbers');
    }
    return numbers.reduce((sum, num) => sum + num, 0);
}

// Function 3
// Factorial: takes a non-negative integer and returns its factorial

function factorial(n) {
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
        throw new Error('Input must be a non-negative integer');
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Function 4
// Find Duplicates: takes a string of text and returns an array of duplicate words

function findDuplicates(text) {
    if (typeof text !== 'string') {
        throw new Error('Input must be a string');
    }
    const words = text.split(/\s+/);
    const wordCount = {};
    const duplicates = new Set();

    for (const word of words) {
        const lowerWord = word.toLowerCase();
        if (wordCount[lowerWord]) {
            duplicates.add(lowerWord);
        } else {
            wordCount[lowerWord] = 1;
        }
    }

    return Array.from(duplicates);
}

// Exporting functions for use in other modules
module.exports = {
    isPalindrome,
    sumArray,
    factorial,
    findDuplicates
};  