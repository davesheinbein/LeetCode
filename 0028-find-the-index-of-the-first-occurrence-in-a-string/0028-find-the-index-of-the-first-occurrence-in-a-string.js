/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = function (haystack, needle) {
	// If needle is empty, return 0 as per the problem's assumption.
	if (needle === '') return 0;

	// Iterate through haystack to find the first occurrence of needle.
	for (
		let i = 0;
		i <= haystack.length - needle.length;
		i++
	) {
		// Check if the substring of haystack starting at i matches needle.
		if (
			haystack.substring(i, i + needle.length) === needle
		) {
			return i; // Return the index of the first occurrence.
		}
	}

	// If needle is not found, return -1.
	return -1;
};

// Examples:
console.log(strStr('sadbutsad', 'sad'));
// Output: 0

console.log(strStr('leetcode', 'leeto'));
// Output: -1

console.log(strStr('hello', 'll'));
// Output: 2

console.log(strStr('aaaaa', 'bba'));
// Output: -1

console.log(strStr('a', 'a'));
// Output: 0

/*
Explanation:

1. Edge Case:
   - If `needle` is an empty string, the function returns `0` as per the problem description.

2. Iterate Through `haystack`:
   - Start from index `0` and go up to `haystack.length - needle.length` because a valid `needle` cannot exist beyond this range.

3. Substring Comparison:
   - Use the `substring` method to extract a substring from `haystack` with the same length as `needle` and compare it to `needle`.

4. Return the Index:
   - If a match is found, return the starting index `i`.

5. Return `-1`:
   - If the loop completes without finding a match, return `-1`.

Complexity:
- Time Complexity: \(O(n \cdot m)\), where \(n\) is the length of `haystack` and \(m\) is the length of `needle`. For each position in `haystack`, a substring of length \(m\) is compared to `needle`.
- Space Complexity: \(O(1)\), as no additional space is used beyond the variables.

Example Walkthrough:

Example 1:
Input: `haystack = "sadbutsad"`, `needle = "sad"`
- Substring comparisons:
  - `"sad"` (match at index `0`).
- Output: `0`.

Example 2:
Input: `haystack = "leetcode"`, `needle = "leeto"`
- Substring comparisons:
  - `"leet"` (no match),
  - `"leeto"` exceeds `haystack`.
- Output: `-1`.
*/
