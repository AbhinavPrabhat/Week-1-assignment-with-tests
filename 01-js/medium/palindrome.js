/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const caseSen = str.toLowerCase();
  const chars = caseSen.split('');

  const alphanumericChars = chars.filter((char) => /[a-zA-Z0-9]/.test(char));

  let start =0;
  let end = alphanumericChars.length-1;

  while(start<end){
    if(alphanumericChars[start]!== alphanumericChars[end]){
      return false;
    }
    start++;
    end--;
  }
  return true;
}

module.exports = isPalindrome;
