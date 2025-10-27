function calculator(expression) {
  const parts = expression.trim().split(' ');
  const operator = parts[0];
  const a = Number(parts[1]);
  const b = Number(parts[2]);

  if (isNaN(a) || isNaN(b)) {
    throw new Error('Invalid operands');
  }

  const operations = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
    '/': (x, y) => {
      if (y === 0) {
        throw new Error('Division by zero');
      }
      return x / y;
    },
  };

  const operation = operations[operator];
  if (!operation) {
    throw new Error('Invalid operator');
  }

  return operation(a, b);
}

function isValidPassword(text) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  return passwordRegex.test(text);
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function findDuplicates(text) {
  const words = text.split(' ');
  const wordCounts = new Map();

  for (const word of words) {
    wordCounts.set(word, (wordCounts.get(word) || 0) + 1);
  }

  const duplicates = [];
  for (const [word, count] of wordCounts.entries()) {
    if (count > 1) {
      duplicates.push(word);
    }
  }

  return duplicates;
}

function fibonacci(n) {
  if (n <= 0) {
    return [];
  }
  if (n === 1) {
    return [0];
  }

  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}

module.exports = { calculator, isValidPassword, factorial, findDuplicates, fibonacci };
