/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer with reversed bits
 */
var reverseBits = function(n) {
    let reversed = 0; // Initialize the result to store the reversed bits

    // Loop through all 32 bits of the integer
    for (let i = 0; i < 32; i++) {
        // Extract the least significant bit (rightmost bit) of `n`
        const bit = n & 1; // Use bitwise AND with 1 to isolate the last bit

        // Shift the reversed result left to make room for the new bit
        reversed = (reversed << 1) | bit; // Add the current bit to the reversed result
        
        // Shift the input `n` right to process the next bit
        n = n >> 1; // Discard the processed bit by shifting right
    }

    // Return the reversed result as an unsigned 32-bit integer
    return reversed >>> 0; // Use >>> 0 to ensure the result is treated as unsigned
};

// Example usage:
console.log(reverseBits(0b00000010100101000001111010011100)); // Output: 964176192
console.log(reverseBits(0b11111111111111111111111111111101)); // Output: 3221225471

/*
Explanation:

- The goal is to reverse the bits of a 32-bit unsigned integer.
- To achieve this, we use bitwise operations to extract, shift, and build the reversed number.

Steps:
1. Extract the least significant bit: 
   - `n & 1` extracts the least significant bit (rightmost bit) of `n`. For example:
     - If `n` is `5` (binary: `101`), `n & 1` results in `1` (the rightmost bit).
     - If `n` is `4` (binary: `100`), `n & 1` results in `0` (the rightmost bit).
   
2. Shift the result to the left:
   - `reversed << 1` shifts the `reversed` number one bit to the left, making room for the next bit. For example:
     - If `reversed` was `0b0` (no bits yet), shifting it left results in `0b0`.
     - If `reversed` was `0b10` (binary `2`), shifting it left results in `0b100`.

3. Combine the bit into the result:
   - The `|` (bitwise OR) operation is used to append the extracted bit to the result. For example:
     - If the current bit is `1`, `reversed = (reversed << 1) | 1` adds `1` to the least significant bit of `reversed`.

4. Shift the input number to the right:
   - `n >> 1` shifts the input number one bit to the right, effectively removing the least significant bit. For example:
     - If `n` was `0b101`, shifting it right results in `0b10`.

5. Final result:
   - After processing all 32 bits, the reversed bits are stored in `reversed`.
   - The `>>> 0` operator is used to convert the result to an unsigned 32-bit integer, ensuring the result is correctly represented.

Why is the result shifted left and right?
- The left shift (`<<`) is necessary to build the reversed result by progressively moving bits to higher positions.
- The right shift (`>>`) on the original number `n` allows us to extract each bit from right to left, one bit at a time.

Time Complexity:
- O(32) since we loop through all 32 bits of the integer, regardless of the input value.

Space Complexity:
- O(1) since we only use a constant amount of space for the result, no matter the input value.

This approach ensures that the bits are reversed correctly and returns the result as an unsigned 32-bit integer.
*/
