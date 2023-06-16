/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {

  const normalizedStr1 = str1.toLowerCase();
  const normalizedStr2 = str2.toLowerCase();
  const chars1 = normalizedStr1.split('');
  const chars2 = normalizedStr2.split('');

  // Store ASCII values in arrays
  const ascii1 = chars1.map((c) => c.charCodeAt(0));
  const ascii2 = chars2.map((c) => c.charCodeAt(0));

  // Sort the ASCII arrays
  const sortedAscii1 = ascii1.sort();
  const sortedAscii2 = ascii2.sort();

  // Compare the sorted arrays for equality
  if (sortedAscii1.length !== sortedAscii2.length) {
    return false;
  }

  for (let i = 0; i < sortedAscii1.length; i++) {
    if (sortedAscii1[i] !== sortedAscii2[i]) {
      return false;
    }
  }

  return true;
}


module.exports = isAnagram;
