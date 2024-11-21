/**
 * @param {string} a - A binary string representing the first number.
 * @param {string} b - A binary string representing the second number.
 * @return {string} - The binary sum of the two input strings.
 */

var addBinary = function(a, b) {
    let result = ""; // To store the resulting binary string, initially empty
    let carry = 0;   // To keep track of carry during addition (like in decimal addition)
    let i = a.length - 1; // Pointer for the last character (bit) in string a
    let j = b.length - 1; // Pointer for the last character (bit) in string b

    // Loop until all bits of both strings are processed, or there is a carry left
    while (i >= 0 || j >= 0 || carry > 0) {
        // Extract the current bit from a or b, or default to 0 if the index is out of bounds
        // parseInt converts the character ('0' or '1') to its integer value (0 or 1)
        const bitA = i >= 0 ? parseInt(a[i]) : 0; // Get the ith bit of a, or 0 if i < 0
        const bitB = j >= 0 ? parseInt(b[j]) : 0; // Get the jth bit of b, or 0 if j < 0
        
        // Sum the current bits and the carry from the previous addition
        const sum = bitA + bitB + carry;

        // Calculate the bit to add to the result
        // Binary addition produces a result bit that is either 0 or 1
        // sum % 2 gives the remainder when sum is divided by 2, which is the current result bit
        result = (sum % 2) + result;

        // Update the carry for the next addition
        // When sum >= 2, there is a carry. For example:
        // - If sum is 2 (1 + 1 + 0), carry = 1 and result bit = 0
        // - If sum is 3 (1 + 1 + 1), carry = 1 and result bit = 1
        carry = Math.floor(sum / 2);

        // Move to the next (previous in the string) bits in a and b
        i--; // Decrement the pointer for string a
        j--; // Decrement the pointer for string b
    }

    // At this point, the entire binary sum is stored in result
    return result;
};

// Example usage:
console.log(addBinary("11", "1"));    // Output: "100"
console.log(addBinary("1010", "1011")); // Output: "10101"

/*
Detailed Explanation:

Why use `sum % 2` for the result bit?
- Binary addition follows modulo-2 arithmetic:
  - 0 + 0 = 0 → result = 0, carry = 0
  - 1 + 0 = 1 → result = 1, carry = 0
  - 1 + 1 = 10 (binary) → result = 0, carry = 1
  - 1 + 1 + 1 = 11 (binary) → result = 1, carry = 1
- `sum % 2` extracts the current result bit because it gives the remainder of sum when divided by 2. This works because binary is base-2 arithmetic.

Why use `Math.floor(sum / 2)` for the carry?
- Dividing the sum by 2 and taking the floor gives the carry:
  - When sum < 2, the result of sum / 2 is < 1, so carry is 0.
  - When sum >= 2, the result of sum / 2 is ≥ 1, so carry is 1.

Why prepend the result bit to the string?
- Since we process the binary strings from the least significant bit (rightmost) to the most significant bit (leftmost), we prepend each result bit to build the final binary sum.

Time Complexity:
- O(n), where n is the length of the longer input string (a or b). We process each bit of the longer string once.

Space Complexity:
- O(n), for storing the result binary string.
*/
