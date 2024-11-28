/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if (!s || words.length === 0) return []; // Edge case: empty input

    const wordLength = words[0].length; // All words have the same length
    const wordCount = words.length; // Total number of words
    const substringLength = wordLength * wordCount; // Total length of concatenated substring
    const wordMap = new Map(); // Map to store word frequencies

    // Populate the map with the frequency of words in the input array
    for (let word of words) {
        wordMap.set(word, (wordMap.get(word) || 0) + 1);
    }

    const result = []; // Array to store starting indices of valid substrings

    // Iterate through the string up to the point where a substring of the required length can exist
    for (let i = 0; i <= s.length - substringLength; i++) {
        const seen = new Map(); // Map to track words in the current window
        let j = 0;

        // Check if the substring starting at index `i` is a concatenation of all words
        while (j < wordCount) {
            const wordStart = i + j * wordLength; // Starting index of the current word
            const word = s.substring(wordStart, wordStart + wordLength); // Extract the current word

            // If the word is not in the original word list, break
            if (!wordMap.has(word)) break;

            // Update the seen map for the current word
            seen.set(word, (seen.get(word) || 0) + 1);

            // If the frequency of the current word exceeds the required frequency, break
            if (seen.get(word) > wordMap.get(word)) break;

            j++;
        }

        // If all words are seen exactly as required, store the starting index
        if (j === wordCount) result.push(i);
    }

    return result;
};

// Examples:
console.log(findSubstring("barfoothefoobarman", ["foo", "bar"])); // Output: [0, 9]
console.log(findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"])); // Output: []
console.log(findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"])); // Output: [6, 9, 12]

/*
Explanation:

1. **What is the problem asking?**
   - Find all starting indices of substrings in `s` that are concatenations of all strings in `words`.

2. **How do we solve this?**
   - Use a **sliding window** approach:
     - Calculate the total length of the concatenated substring.
     - For each possible starting index `i`, check if the substring is a valid concatenation.
     - Maintain a frequency map of the words in `words` and compare it with the frequency of words in the current substring.

3. **Key steps:**
   - Calculate `wordLength` (length of a single word) and `substringLength` (length of all words concatenated).
   - Slide through `s` in increments of `wordLength`.
   - Use a `seen` map to track the frequency of words in the current window and compare with the `wordMap`.

4. **Complexity Analysis:**
   - **Time Complexity**: \(O(n \cdot k)\), where \(n\) is the length of the string and \(k\) is the number of words.
     - For each starting index, we iterate over all words in `words`.
   - **Space Complexity**: \(O(k)\), where \(k\) is the number of unique words in `words`.

5. **Edge Cases:**
   - Empty string `s` or `words`: Return an empty array.
   - No valid substrings: Return an empty array.
   - Overlapping substrings: The algorithm handles overlapping cases correctly.

6. **Walkthrough with Example:**
   - **Input**: `s = "barfoothefoobarman", words = ["foo", "bar"]`
   - `wordLength = 3`, `substringLength = 6`.
   - Valid substrings:
     - At index `0`: Substring = `"barfoo"`.
     - At index `9`: Substring = `"foobar"`.
   - Result: `[0, 9]`.
*/
