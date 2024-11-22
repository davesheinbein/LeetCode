/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
    // Negative numbers are not palindromes as they have a minus sign at the front
    if (x < 0) {
        return false;
    }

    // Convert the number to a string and check if it reads the same forwards and backwards
    const str = x.toString();
    return str === str.split('').reverse().join('');
};

console.log(isPalindrome(121));  // true: 121 reads the same forwards and backwards
console.log(isPalindrome(-121)); // false: negative number, cannot be a palindrome
console.log(isPalindrome(10));   // false: reads 01 from right to left
console.log(isPalindrome(12321)); // true: 12321 reads the same forwards and backwards
console.log(isPalindrome(12345)); // false: 12345 does not read the same backwards

/*
Explanation:

1. Negative Numbers:
   - If the number is negative, it cannot be a palindrome because the minus sign will only appear at the beginning, not at the end. So, we return `false` immediately for negative numbers.

2. String Comparison:
   - We convert the number `x` to a string with `x.toString()`.
   - The string is then split into an array of characters using `split('')`.
   - The array is reversed with `reverse()` and joined back into a string with `join('')`.
   - We compare the original string with its reversed version. If they are the same, the number is a palindrome.

3. Time Complexity:
   - The time complexity is O(n), where `n` is the number of digits in `x`. This is due to the string conversion, splitting, reversing, and joining operations.

4. Space Complexity:
   - The space complexity is O(n) because we are creating a new string for the reversed version of the number.
*/
