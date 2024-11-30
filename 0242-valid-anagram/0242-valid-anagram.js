/**
 * @param {string} firstString
 * @param {string} secondString
 * @return {boolean}
 */

var isAnagram = function(firstString, secondString) {
    // Check if the strings have the same length
    if (firstString.length !== secondString.length) {
        return false; // If lengths differ, they cannot be anagrams
    }

    // Create a frequency map to count characters in firstString
    const charFrequency = new Map();

    // Count occurrences of each character in firstString
    for (const char of firstString) {
        charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
    }

    // Verify characters in secondString against the frequency map
    for (const char of secondString) {
        if (!charFrequency.has(char)) {
            return false; // If a character in secondString is not in firstString, return false
        }

        charFrequency.set(char, charFrequency.get(char) - 1);

        if (charFrequency.get(char) === 0) {
            charFrequency.delete(char); // Remove the character if count reaches zero
        }
    }

    // If all counts are zero, the strings are anagrams
    return charFrequency.size === 0;
};

// Examples
// Example 1: "anagram" and "nagaram" should return true
console.log(isAnagram("anagram", "nagaram")); // Output: true

// Example 2: "rat" and "car" should return false
console.log(isAnagram("rat", "car")); // Output: false

/*
Explanation:
- Two strings are anagrams if they contain the same characters with the same frequency, but in any order.
- The algorithm uses a frequency map to count character occurrences in `firstString` and validate them against `secondString`.
- Key steps:
  1. Check if the strings have equal length.
  2. Use a `Map` to store character frequencies from `firstString`.
  3. Traverse `secondString` to decrement the counts in the map.
  4. If any character's count becomes negative or a character is missing, return `false`.
  5. After processing both strings, check that all counts are zero (i.e., the map is empty).
  
Time Complexity:
- O(n), where `n` is the length of the strings. We traverse each string once.

Space Complexity:
- O(1), as the map's size is limited to the number of unique lowercase English letters (26).
*/
