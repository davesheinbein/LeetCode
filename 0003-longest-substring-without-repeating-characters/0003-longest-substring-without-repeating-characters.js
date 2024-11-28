/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	// Initialize a set to store unique characters in the current substring
	let charSet = new Set();

	// The left pointer of the sliding window
	let left = 0;

	// Variable to track the maximum length of a substring without repeating characters
	let maxLength = 0;

	// Iterate through the string with the right pointer
	for (let right = 0; right < s.length; right++) {
		// If the character at `right` already exists in the set,
		// shrink the window by moving the `left` pointer
		while (charSet.has(s[right])) {
			// Remove the character at the `left` pointer from the set
			charSet.delete(s[left]);
			// Move the `left` pointer one step to the right
			left++;
		}

		// Add the character at the `right` pointer to the set
		charSet.add(s[right]);

		// Calculate the length of the current substring and update `maxLength` if it's larger
		maxLength = Math.max(maxLength, right - left + 1);
	}

	// Return the maximum length of a substring without repeating characters
	return maxLength;
};

// Examples:
console.log(lengthOfLongestSubstring('abcabcbb')); // Output: 3
console.log(lengthOfLongestSubstring('bbbbb')); // Output: 1
console.log(lengthOfLongestSubstring('pwwkew')); // Output: 3
console.log(lengthOfLongestSubstring('')); // Output: 0
console.log(lengthOfLongestSubstring('au')); // Output: 2

/*
Explanation for a coding interview:

1. What is the problem asking?
   - The task is to find the longest substring in a given string `s` where no characters repeat.

2. How are we solving this?
   - We'll use the sliding window technique:
     - Two pointers (`left` and `right`) represent the boundaries of a window.
     - A set (`charSet`) keeps track of the unique characters in the current window.
     - Expand the window by moving the `right` pointer.
     - If a duplicate is encountered, shrink the window by moving the `left` pointer.

3. Why does this work?
   - By maintaining a set of unique characters in the current window, we ensure that each substring between the `left` and `right` pointers contains no duplicates.
   - The window is adjusted efficiently, ensuring that each character is processed at most twice (once when added and once when removed).

4. Complexity Analysis:
   - Time Complexity: \(O(n)\), where \(n\) is the length of the string. Each character is added and removed from the set at most once.
   - Space Complexity: \(O(k)\), where \(k\) is the size of the character set (for ASCII, at most 128).

5. Example Walkthroughs:

   Example 1: `s = "abcabcbb"`
   - `left = 0`, `right = 0`, `charSet = {}`
   - Add `"a"`, `"b"`, `"c"` -> Current substring: `"abc"`, length = 3.
   - Duplicate `"a"` is found. Shrink window: Remove characters until `"a"` is removed.
   - Continue expanding the window.
   - Max length = 3.

   Example 2: `s = "bbbbb"`
   - Window always contains one `"b"`.
   - Max length = 1.

   Example 3: `s = "pwwkew"`
   - Expand the window to `"pw"`, then `"wke"`.
   - Duplicate `"w"` is found. Shrink and continue.
   - Max length = 3.

6. Edge Cases:
   - Empty string: `""` -> Output: `0`.
   - Single character: `"a"` -> Output: `1`.
*/
