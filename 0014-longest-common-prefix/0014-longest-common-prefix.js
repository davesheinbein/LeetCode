/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
	if (strs.length === 0) return ''; // Handle edge case with empty input.

	// Assume the first string is the initial prefix.
	let prefix = strs[0];

	// Iterate through the remaining strings in the array.
	for (let i = 1; i < strs.length; i++) {
		// While the current string does not start with the prefix, reduce the prefix.
		while (strs[i].indexOf(prefix) !== 0) {
			// Remove the last character from the prefix.
			prefix = prefix.slice(0, -1);

			// If the prefix becomes empty, there is no common prefix.
			if (prefix === '') return '';
		}
	}

	return prefix; // Return the final longest common prefix.
};

// Examples:
console.log(
	longestCommonPrefix(['flower', 'flow', 'flight'])
);
// Output: "fl"

console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
// Output: ""

console.log(
	longestCommonPrefix([
		'interstellar',
		'internet',
		'interval',
	])
);
// Output: "inte"

console.log(longestCommonPrefix(['a']));
// Output: "a"

console.log(longestCommonPrefix(['']));
// Output: ""

console.log(
	longestCommonPrefix(['prefix', 'prefixing', 'prefecture'])
);
// Output: "prefix"

/*
Explanation of Prefix Reduction:

1. Start with the First String:
   - Assume the first string in the array is the longest common prefix.

2. Compare the Prefix with Each String:
   - Use `indexOf(prefix) === 0` to check if the current string starts with the prefix.

3. Adjust the Prefix:
   - If a string does not start with the prefix, remove the last character from the prefix (`prefix.slice(0, -1)`) until a match is found.

4. Stop Early:
   - If the prefix becomes empty during any comparison, return `""`, as there is no common prefix.

Example Walkthrough:

Example 1:
Input: `["flower", "flow", "flight"]`
- Start with `prefix = "flower"`.
  - Compare with `"flow"`. `"flow".indexOf("flower") !== 0`, so reduce:
    - Remove "r" → `prefix = "flowe"`.
    - Remove "e" → `prefix = "flow"`.
  - `"flow".indexOf("flow") === 0`, so keep `"flow"`.
- Compare with `"flight"`. `"flight".indexOf("flow") !== 0`, so reduce:
    - Remove "w" → `prefix = "flo"`.
    - Remove "o" → `prefix = "fl"`.
  - `"flight".indexOf("fl") === 0`, so keep `"fl"`.
Output: `"fl"`.

Example 2:
Input: `["dog", "racecar", "car"]`
- Start with `prefix = "dog"`.
  - Compare with `"racecar"`. `"racecar".indexOf("dog") !== 0`, so reduce:
    - Remove "g" → `prefix = "do"`.
    - Remove "o" → `prefix = "d"`.
    - Remove "d" → `prefix = ""`.
Output: `""`.

Example 3:
Input: `["interstellar", "internet", "interval"]`
- Start with `prefix = "interstellar"`.
  - Compare with `"internet"`. Reduce:
    - Remove "r" → `prefix = "interstella"`.
    - Remove "a" → `prefix = "interstell"`.
    - Continue reducing until `prefix = "inter"`.
  - Compare with `"interval"`. `"interval".indexOf("inter") === 0`, so keep `"inter"`.
Output: `"inter"`.

Complexity:

- Time Complexity: \(O(n \cdot m)\), where \(n\) is the number of strings and \(m\) is the length of the shortest string. Each string may require up to \(m\) reductions.
- Space Complexity: \(O(1)\), as no additional data structures are used.
*/
