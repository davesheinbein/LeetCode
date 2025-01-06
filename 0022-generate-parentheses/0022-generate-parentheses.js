/**
 * @param {number} n - The number of pairs of parentheses
 * @return {string[]} - An array of all combinations of well-formed parentheses
 */
 
var generateParenthesis = function(n) {
    const result = []; // This will store all valid combinations

    // Recursive helper function to generate combinations
    const backtrack = (current, open, close) => {
        // Base case: if the current string has 2n characters, it's a valid combination
        if (current.length === 2 * n) {
            result.push(current); // Add the valid combination to the result
            return;
        }

        // If there are still open parentheses left to add, add one and recurse
        if (open < n) {
            backtrack(current + '(', open + 1, close);
        }

        // If there are more open parentheses than close ones, add a close parenthesis and recurse
        if (close < open) {
            backtrack(current + ')', open, close + 1);
        }
    };

    // Start backtracking with an empty string and zero open and close parentheses
    backtrack('', 0, 0);

    return result; // Return all valid combinations
};

/*
Explanation:
1. The function uses recursion and backtracking to generate all valid combinations of parentheses.
2. The `backtrack` function tracks the current string, the number of open parentheses, and the number of close parentheses.
3. An open parenthesis can be added if the total number of open parentheses used is less than `n`.
4. A close parenthesis can be added if it doesn't exceed the number of open parentheses used so far.
5. Once the string reaches a length of `2n`, it is added to the result array.

Example:

Input: n = 3
Output: ["((()))", "(()())", "(())()", "()(())", "()()()"]

For n = 3, the function generates all valid combinations of 3 pairs of parentheses.

Time Complexity:
- The time complexity is O(4^n / √n), derived from the Catalan number for generating parentheses.

Space Complexity:
- The space complexity is O(n), due to the recursion stack used during backtracking.

*/
