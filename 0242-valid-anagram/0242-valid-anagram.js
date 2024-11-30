/**
 * @param {string} firstString
 * @param {string} secondString
 * @return {boolean}
 */
var isAnagram = function(firstString, secondString) {
    // Step 1: Check if the strings have the same length
    // - If the lengths of the two strings are not equal, they cannot be anagrams,
    //   since anagrams must use the exact same characters in the same quantities.
    if (firstString.length !== secondString.length) {
        return false; // Immediately return false if the lengths differ.
    }

    // Step 2: Create a frequency map to count characters in the first string
    // - The map will store each character as a key and its frequency as the value.
    // - For example, for the string "anagram", the map would look like: 
    //   { 'a': 3, 'n': 1, 'g': 1, 'r': 1, 'm': 1 }.
    const charFrequency = new Map();

    // Step 3: Populate the frequency map with characters from firstString
    for (const char of firstString) {
        // If the character is already in the map, increment its count by 1.
        // If it's not in the map, add it with an initial count of 1.
        charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
    }

    // Step 4: Verify characters in secondString against the frequency map
    for (const char of secondString) {
        // If a character in secondString does not exist in the map,
        // it means the character is not present in firstString or has already been used up.
        if (!charFrequency.has(char)) {
            return false; // Return false because the strings are not anagrams.
        }

        // Decrement the frequency of the character in the map.
        charFrequency.set(char, charFrequency.get(char) - 1);

        // If the frequency becomes zero, remove the character from the map.
        // This helps optimize space usage and ensures we only track characters with non-zero counts.
        if (charFrequency.get(char) === 0) {
            charFrequency.delete(char);
        }
    }

    // Step 5: Check the map size
    // - After processing both strings, if the map is empty, it means all characters matched perfectly,
    //   and their frequencies were balanced. The strings are anagrams.
    return charFrequency.size === 0;
};

// Examples
// Example 1: "anagram" and "nagaram" should return true
console.log(isAnagram("anagram", "nagaram")); // Output: true

// Example 2: "rat" and "car" should return false
console.log(isAnagram("rat", "car")); // Output: false

/*
Explanation:
- Two strings are anagrams if they contain the same characters with the same frequencies, regardless of order.
- The function implements the following steps:
  1. Check if the lengths of the two strings are equal. If not, return false immediately.
  2. Use a frequency map to count the occurrences of each character in the first string.
  3. Traverse the second string and verify if each character exists in the map with a sufficient count:
     - Decrement the count for each matching character.
     - Remove a character from the map if its count reaches zero.
  4. After processing both strings, check if the map is empty. If it is, the strings are anagrams.

Time Complexity:
- O(n), where `n` is the length of the strings. Each character in both strings is processed once.

Space Complexity:
- O(1), because the map size is limited to 26 entries (one for each lowercase English letter).
*/
