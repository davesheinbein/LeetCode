/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isSubsequence = function(s, t) {
    let i = 0, j = 0;
    
    // Traverse string t to find characters of string s in order
    while (i < s.length && j < t.length) {
        console.log(`Comparing s[${i}] = '${s[i]}' with t[${j}] = '${t[j]}'`);
        
        if (s[i] === t[j]) {
            console.log(`Match found! Incrementing i to ${i + 1}`);
            i++; // Move pointer for s when there's a match
        }
        
        // Always move pointer for t
        j++; 
        console.log(`Incrementing j to ${j}`);
    }
    
    // If all characters in s are found in order in t, return true
    console.log(`Final value of i: ${i}, length of s: ${s.length}`);
    return i === s.length;
};

/*
Explanation:

- We start by initializing two pointers: `i` for string `s` and `j` for string `t`.
- We loop through string `t` using the pointer `j`. For each character in `t`, we check if it matches the current character in `s` (pointed to by `i`).
- If a match is found (`s[i] === t[j]`), we increment `i` to check the next character in `s`.
- Regardless of a match, we always increment `j` to continue traversing `t`.
- If we manage to find all characters of `s` in order within `t`, `i` will reach the end of `s`, and we return `true`.
- If not, we return `false`.

Time Complexity:
- The time complexity is O(n), where `n` is the length of string `t`, since we only traverse string `t` once.

Space Complexity:
- The space complexity is O(1), since we only use a few variables (`i` and `j`) for the pointers.
*/

// Optimized solution
// Preprocess t and store the positions of each character
// var preprocess = function(t) {
//     const positions = new Map();
//     for (let i = 0; i < t.length; i++) {
//         if (!positions.has(t[i])) {
//             positions.set(t[i], []);
//         }
//         positions.get(t[i]).push(i);
//     }
//     return positions;
// };

// // Check if s is a subsequence of t using binary search
// var isSubsequence = function(s, t) {
//     const positions = preprocess(t);
//     let prevIndex = -1;

//     // Traverse each character in s
//     for (let char of s) {
//         if (!positions.has(char)) {
//             return false; // If t doesn't contain this character, return false
//         }

//         const indices = positions.get(char);
        
//         // Use binary search to find the smallest index in indices that is greater than prevIndex
//         let left = 0, right = indices.length - 1;
//         let found = false;
        
//         while (left <= right) {
//             const mid = Math.floor((left + right) / 2);
//             if (indices[mid] > prevIndex) {
//                 found = true;
//                 prevIndex = indices[mid];
//                 right = mid - 1;
//             } else {
//                 left = mid + 1;
//             }
//         }

//         // If no valid index is found, return false
//         if (!found) {
//             return false;
//         }
//     }

//     return true;
// };

/*
Explanation:
1. We preprocess `t` into a map where the key is the character and the value is a list of indices where that character appears in `t`.
2. For each string `s`, we use binary search to find the next available position in `t` where each character in `s` appears after the previously found character.
3. If we can't find a character in the required order, return `false`.
4. If we find all characters of `s` in order, return `true`.

Time Complexity:
- Preprocessing `t`: O(n), where `n` is the length of `t`.
- For each string `s`, checking if it’s a subsequence takes O(m * log n), where `m` is the length of `s` and `n` is the length of `t`. This is because we use binary search on the list of indices for each character of `s`.

Space Complexity:
- O(n), where `n` is the length of `t`, for storing the positions of characters.
*/

