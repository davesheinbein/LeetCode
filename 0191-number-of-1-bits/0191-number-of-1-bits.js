/**
 * @param {number} n - a positive integer
 * @return {number} - the number of set bits in the binary representation of n
 */
var hammingWeight = function(n) {
    // Log the input number 'n' to the console
    console.log(n);

    // Convert the number 'n' to its binary string representation and log it
    console.log(n.toString(2));

    // Split the binary string by the character '1' and log the resulting array
    console.log(n.toString(2).split('1'));

    // Log the length of the array obtained by splitting by '1' (which will be one more than the count of '1's)
    console.log(n.toString(2).split('1').length);

    // Log the result of subtracting 1 from the length of the array to get the actual count of '1's
    console.log(n.toString(2).split('1').length - 1);

    // Return the final Hamming weight (the count of '1's)
    return n.toString(2).split('1').length - 1;
};


// Example usage:
console.log(hammingWeight(11)); // Output: 3
console.log(hammingWeight(128)); // Output: 1
console.log(hammingWeight(2147483645)); // Output: 30

/*
Explanation:

Definition of Hamming Weight:
The Hamming weight of a number is the total count of `1`s in its binary representation. It is also known as the population count or the number of set bits. For example:
   - Binary representation of `11` is `1011`, and its Hamming weight is `3` (three `1`s).
   - Binary representation of `128` is `10000000`, and its Hamming weight is `1` (one `1`).

1. Convert the number `n` to its binary string representation using `n.toString(2)`.
   - The `toString(2)` method converts a number to its binary representation as a string. The argument `2` specifies that the base for conversion is binary (base 2).
   - We use base 2 because binary is the fundamental language of computers, representing numbers using only `0` and `1`. Each `1` in the binary representation corresponds to a "set bit" or an active bit in the number.
   - This is necessary because the problem requires us to count the number of `1`s in the binary form of the number.
   - Example: `11.toString(2)` => `'1011'`.

2. Split the string by the character `'1'`.
   - The `.split('1')` method breaks the binary string into an array of substrings wherever the character `'1'` occurs.
   - Each `'1'` in the binary string represents a set bit. By splitting at `'1'`, we count how many times it occurs indirectly through the length of the resulting array.
   - Example: `'1011'.split('1')` => `['', '0', '', '']`.

3. Subtract 1 from the length of the array to get the count of `'1'`s.
   - The length of the array returned by `.split('1')` is always one more than the total number of `'1'`s in the binary string. This is because there is always an "extra" empty string or substring at the start or end of the array, depending on the placement of the `'1'`s.
   - Subtracting 1 adjusts for this and gives the accurate count of `'1'`s.
   - Example: `['', '0', '', ''].length - 1` => `4 - 1 = 3`.

Time Complexity: O(k), where `k` is the number of bits in the binary representation of `n`.
   - The operations of converting to a string and splitting the string both iterate over the binary representation of `n`.

Space Complexity: O(k), due to the binary string and the array created by `.split()`.
*/
