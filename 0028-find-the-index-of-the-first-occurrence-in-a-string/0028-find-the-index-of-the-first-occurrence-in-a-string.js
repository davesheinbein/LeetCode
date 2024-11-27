/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    const haystackLength = haystack.length;
    const needleLength = needle.length;

    // If needle is empty, return 0 as per the problem's assumption.
    if (needleLength === 0) return 0;

    // Iterate through haystack to find the first occurrence of needle.
    for (let i = 0; i <= haystackLength - needleLength; i++) {
        // Check if the substring of haystack starting at i matches needle.
        if (haystack.substring(i, i + needleLength) === needle) {
            return i; // Return the index of the first occurrence.
        }
    }

    // If needle is not found, return -1.
    return -1;
};

// Examples:
console.log(strStr("sadbutsad", "sad")); 
// Output: 0

console.log(strStr("leetcode", "leeto")); 
// Output: -1

console.log(strStr("hello", "ll")); 
// Output: 2

console.log(strStr("aaaaa", "bba")); 
// Output: -1

console.log(strStr("a", "a")); 
// Output: 0

/*
Explanation:

1. Length Variables:
   - Define `haystackLength` and `needleLength` to avoid redundant `length` property calls.

2. Edge Case:
   - If `needle` is empty, return `0` as per the problem description.

3. Iterate Through `haystack`:
   - Start from index `0` and go up to `haystackLength - needleLength` because a valid `needle` cannot exist beyond this range.

4. Substring Comparison:
   - Use the `substring` method to extract a substring from `haystack` with the same length as `needle` and compare it to `needle`.

5. Return the Index:
   - If a match is found, return the starting index `i`.

6. Return `-1`:
   - If the loop completes without finding a match, return `-1`.

Complexity:
- Time Complexity: \(O(n \cdot m)\), where \(n\) is `haystackLength` and \(m\) is `needleLength`. For each position in `haystack`, a substring of length \(m\) is compared to `needle`.
- Space Complexity: \(O(1)\), as no additional space is used beyond the variables.
*/
