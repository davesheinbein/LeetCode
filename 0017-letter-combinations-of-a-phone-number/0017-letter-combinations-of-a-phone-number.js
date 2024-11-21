/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    // Map of digit to corresponding letters, similar to a phone keypad
    const digitToLetters = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };
    
    // Result array to store all possible letter combinations
    const result = [];
    
    // Base case: If the input digits are empty, return an empty array
    if (digits.length === 0) {
        return result;
    }
    
    /**
     * Backtracking function to generate combinations
     * @param {number} index - The current position in the input digits string
     * @param {string} currentCombination - The combination being formed
     */
    const backtrack = (index, currentCombination) => {
        // If the current combination length equals the number of digits, add it to the result
        if (index === digits.length) {
            result.push(currentCombination); // Valid combination completed
            return;
        }
        
        // Get the letters corresponding to the current digit
        const letters = digitToLetters[digits[index]];
        
        // Loop through each letter for the current digit
        for (const letter of letters) {
            // Add the letter to the current combination and move to the next digit
            backtrack(index + 1, currentCombination + letter);
        }
    };
    
    // Start the backtracking process with index 0 and an empty combination
    backtrack(0, "");
    
    // Return the final list of all combinations
    return result;
};

// Example usage:
const inputDigits = "23";
console.log(letterCombinations(inputDigits)); 
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]


/*
Explanation:
1. `digitToLetters`: Maps digits (2-9) to their corresponding letters. This allows quick lookup for any digit.
2. `result`: Stores all valid letter combinations.
3. Base Case: If the `digits` string is empty, no combinations can be formed, so return an empty array.
4. `backtrack` function:
   - Tracks progress using `index` (current digit position) and `currentCombination` (letters formed so far).
   - Recursion explores all possible paths:
     a. Add a letter to the current combination.
     b. Move to the next digit using `index + 1`.
     c. Stop recursion and add the combination to `result` once all digits are processed.
5. Backtracking starts at index 0 with an empty string.
6. Time Complexity: O(3^n * 4^m), where n is digits mapping to 3 letters (e.g., 2-6, 8), and m maps to 4 letters (e.g., 7, 9).
7. Space Complexity: O(n), due to the recursion stack depth equal to the number of digits.
*/
