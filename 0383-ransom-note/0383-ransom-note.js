/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

var canConstruct = function(ransomNote, magazine) {
    // Step 1: Create a frequency count for the letters in the magazine
    const letterCount = new Array(26).fill(0);  // Array to store the count of each letter (a to z)
    
    // Count the frequency of each letter in the magazine
    for (let char of magazine) {
        letterCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    
    // Step 2: Check if we can construct the ransomNote using letters from the magazine
    for (let char of ransomNote) {
        const index = char.charCodeAt(0) - 'a'.charCodeAt(0);  // Find the index of the letter
        
        // If the letter is not available or exhausted in the magazine, return false
        if (letterCount[index] === 0) {
            return false;  // Not enough letters to form the ransom note
        }
        
        // Decrease the count for the letter in the magazine as we use it
        letterCount[index]--;
    }
    
    // If we successfully go through all characters in the ransom note, return true
    return true;
};

/*
Explanation:
- The function `canConstruct` checks whether the ransom note can be formed by using letters from the magazine.
- A frequency count of the letters in the magazine is created using an array where each index represents a letter from 'a' to 'z'.
- The function then iterates over the characters of the ransomNote and checks if there are enough available letters in the magazine (i.e., if the frequency count is greater than 0).
- If any letter from the ransomNote can't be matched by a letter from the magazine (due to insufficient count), the function returns `false`. Otherwise, it returns `true`.

Time Complexity:
- Counting the letters in the magazine takes O(m), where m is the length of the magazine.
- Checking the ransomNote takes O(n), where n is the length of the ransomNote.
- Overall time complexity is O(m + n), which is efficient for the input size constraints.

Space Complexity:
- The space complexity is O(1) as the letterCount array always has a fixed size of 26, regardless of the input size.
*/
