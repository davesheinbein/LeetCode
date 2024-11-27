/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
    console.log("strs", strs);
    if (strs.length === 0) return ""; // Handle edge case with empty input.

    // Start by assuming the first string is the common prefix.
    let prefix = strs[0];
    console.log("prefix", prefix);

    // Iterate through the rest of the strings in the array.
    for (let i = 1; i < strs.length; i++) {
        // Reduce the prefix by comparing it with the current string.
        console.log("strs[i]", strs[i]);
        console.log("strs[i].indexOf(prefix)", strs[i].indexOf(prefix));
        while (strs[i].indexOf(prefix) !== 0) {
            // Remove the last character from the prefix until it matches.
            prefix = prefix.slice(0, -1);
            console.log("prefix", prefix);

            // If the prefix becomes empty, there is no common prefix.
            if (prefix === "") return "";
        }
    }

    return prefix; // Return the longest common prefix.
};

// Examples:
console.log(longestCommonPrefix(["flower", "flow", "flight"])); 
// Output: "fl"

console.log(longestCommonPrefix(["dog", "racecar", "car"])); 
// Output: ""

console.log(longestCommonPrefix(["interstellar", "internet", "interval"])); 
// Output: "inte"

console.log(longestCommonPrefix(["a"])); 
// Output: "a"

console.log(longestCommonPrefix([""])); 
// Output: ""

console.log(longestCommonPrefix(["prefix", "prefixing", "prefecture"])); 
// Output: "prefix"


/*
Explanation:

1. Start with the First String:
   - Assume the first string in the array is the longest common prefix.

2. Compare with Other Strings:
   - For each subsequent string in the array, check if it starts with the current prefix using `indexOf(prefix) === 0`.

3. Adjust the Prefix:
   - If a string does not start with the current prefix, reduce the prefix by removing the last character until a match is found.

4. Stop Early:
   - If at any point the prefix becomes an empty string, return "" immediately as there is no common prefix.

5. Return the Result:
   - After comparing all strings, the remaining prefix is the longest common prefix.

### Example Walkthrough:

Example 1:
Input: `["flower","flow","flight"]`
- Start with prefix = `"flower"`.
- Compare with `"flow"`. Reduce to `"flow"`.
- Compare with `"flight"`. Reduce to `"fl"`.
Output: `"fl"`.

Example 2:
Input: `["dog","racecar","car"]`
- Start with prefix = `"dog"`.
- Compare with `"racecar"`. Reduce to `""`.
Output: `""`.

### Complexity:

- Time Complexity: \(O(n \cdot m)\), where \(n\) is the number of strings and \(m\) is the length of the shortest string. Each string is compared against the prefix.
- Space Complexity: \(O(1)\), as no additional data structures are used.


*/
