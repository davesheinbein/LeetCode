/**
 * Determines whether a number is a happy number.
 * A happy number is a number that eventually reaches 1 when replaced by the sum of the squares of its digits.
 * If the number enters a cycle that does not include 1, it is not a happy number.
 * @param {number} n - The number to check.
 * @return {boolean} - Returns true if the number is happy, otherwise false.
 */

var isHappy = function(n) {
    // A set to track previously encountered numbers to detect cycles
    let seen = new Set();

    // Loop until n becomes 1 (happy) or we detect a cycle (repeated number)
    while (n !== 1) {
        console.log(`Current number: ${n}`);

        // If the number has been seen before, it means we're in a cycle
        if (seen.has(n)) {
            console.log(`Cycle detected: ${n} has already been seen.`);
            return false;
        }

        // Add the current number to the set to track it
        seen.add(n);

        // Calculate the sum of the squares of the digits of n
        let sumOfSquares = 0;
        let temp = n; // Temporary variable to calculate sum of squares
        while (temp > 0) {
            let digit = temp % 10;            // Extract the last digit of n
            sumOfSquares += digit * digit;    // Add the square of the digit to the sum
            temp = Math.floor(temp / 10);     // Remove the last digit from n
        }

        // Log the sum of squares of digits
        console.log(`Sum of squares of digits: ${sumOfSquares}`);

        // Update n to the sum of the squares of its digits
        n = sumOfSquares;
    }

    // If n reaches 1, it's a happy number
    console.log(`Happy number found: ${n}`);
    return true;
};

// Example usage:

// Example 1: n = 19 (expected output: true)
console.log("Expected output: true, Ans:", isHappy(19)); // Expected output: true

// Example 2: n = 2 (expected output: false)
console.log("Expected output: false, Ans:", isHappy(2)); // Expected output: false

/*
Explanation:
- The set `seen` is used to track numbers we've already encountered, allowing us to detect cycles.
- The number `n` is repeatedly replaced with the sum of the squares of its digits.
- If n becomes 1, the function returns true, indicating it is a happy number.
- If n repeats (cycle detected), the function returns false, indicating it's not a happy number.
*/
