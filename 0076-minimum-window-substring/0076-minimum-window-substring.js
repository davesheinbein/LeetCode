/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
	if (s.length < t.length) return ''; // If `s` is shorter than `t`, no solution is possible.

	// Step 1: Create a frequency map for characters in `t`
	const tMap = new Map();
	for (let char of t) {
		tMap.set(char, (tMap.get(char) || 0) + 1);
	}

	// Step 2: Initialize variables for sliding window
	let left = 0,
		right = 0; // Sliding window pointers
	let required = tMap.size; // Number of unique characters in `t` that need to be matched
	let formed = 0; // Number of characters in the current window that satisfy the frequency requirement
	const windowCounts = new Map(); // Frequency map for characters in the current window
	let minLength = Infinity; // Length of the smallest valid window found
	let result = [0, 0]; // Indices of the smallest valid window

	// Step 3: Expand the sliding window by moving the `right` pointer
	while (right < s.length) {
		const char = s[right];
		windowCounts.set(
			char,
			(windowCounts.get(char) || 0) + 1
		);

		// If the frequency of the current character matches that in `tMap`, update `formed`
		if (
			tMap.has(char) &&
			windowCounts.get(char) === tMap.get(char)
		) {
			formed++;
		}

		// Step 4: Shrink the window from the left while it's valid
		while (formed === required) {
			const windowSize = right - left + 1;
			if (windowSize < minLength) {
				minLength = windowSize;
				result = [left, right];
			}

			// Remove the character at `left` from the window
			const leftChar = s[left];
			windowCounts.set(
				leftChar,
				windowCounts.get(leftChar) - 1
			);
			if (
				tMap.has(leftChar) &&
				windowCounts.get(leftChar) < tMap.get(leftChar)
			) {
				formed--;
			}
			left++; // Move the left pointer forward
		}

		right++; // Expand the window by moving the right pointer
	}

	// Step 5: Return the result
	return minLength === Infinity
		? ''
		: s.slice(result[0], result[1] + 1);
};

// Examples:
console.log(minWindow('ADOBECODEBANC', 'ABC')); // Output: "BANC"
console.log(minWindow('a', 'a')); // Output: "a"
console.log(minWindow('a', 'aa')); // Output: ""

// Explanation:

/*
1. Key Insight:
   - The goal is to find the smallest substring in `s` that contains all characters in `t` (including duplicates).

2. Approach:
   - Use a sliding window technique with two pointers (`left` and `right`).
   - Maintain a `tMap` for the frequency of characters in `t`.
   - Track the number of unique characters in the current window that meet the required frequency.

3. Steps:
   - Expand the window by moving `right` and adding characters to a `windowCounts` map.
   - Shrink the window by moving `left` when all characters in `t` are covered (`formed === required`).
   - Update the minimum window size whenever the window is valid.

4. Time Complexity:
   - \(O(m + n)\): We iterate over `s` once with the `right` pointer and at most once with the `left` pointer.
   - Constructing the `tMap` also takes \(O(n)\).

5. Space Complexity:
   - \(O(m + n)\): Space for `tMap` and `windowCounts`.

6. Edge Cases:
   - If `s` is shorter than `t`, return an empty string.
   - If `t` contains characters not in `s`, return an empty string.
   - Handle case sensitivity if needed.

7. Walkthrough:
   - Input: `s = "ADOBECODEBANC", t = "ABC"`
   - Initial `tMap`: `{A: 1, B: 1, C: 1}`
   - Sliding window:
     - Expand: `ADOBE` (not valid)
     - Expand: `ADOBEC` (valid, size = 6)
     - Shrink: `DOBEC` (still valid, size = 5)
     - Expand: Continue until finding `BANC` (size = 4).
   - Result: `"BANC"`.
*/
