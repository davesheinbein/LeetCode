/**
 * Determines if a number is a happy number.
 * @param {number} n - The number to check.
 * @return {boolean} - Returns true if the number is happy, otherwise false.
 */

var isHappy = function(n) {
    // A set to track numbers that have already been seen to detect cycles
    let seen = new Set();

    // Continue the loop until n becomes 1 (happy number) or we detect a cycle
    while (n !== 1) {
        // If we've seen n before, there's a cycle, so it's not a happy number
        if (seen.has(n)) {
            return false;
        }

        // Add the current number to the set
        seen.add(n);

        // Calculate the sum of squares of the digits
        let sumOfSquares = 0;
        while (n > 0) {
            let digit = n % 10;            // Get the last digit
            sumOfSquares += digit * digit; // Square it and add to the sum
            n = Math.floor(n / 10);        // Remove the last digit
        }

        // Update n to be the new sum of squares
        n = sumOfSquares;
    }

    // If we reach 1, it means n is a happy number
    return true;
};

// Example usage:

// Example 1: n = 19, which should return true
console.log("Expected output: true, Ans:", isHappy(19)); // Expected output: true

// Example 2: n = 2, which should return false
console.log("Expected output: false, Ans:", isHappy(2)); // Expected output: false
