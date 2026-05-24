// String utility functions for testing

function reverseString(str) {
  return str.split('').reverse().join('');
}

function capitalizeString(str) {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/\s/g, '');
  return cleaned === reverseString(cleaned);
}

module.exports = {
  reverseString,
  capitalizeString,
  isPalindrome
};
