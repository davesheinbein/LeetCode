/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // Initial string
    console.log("string", s);
    
    // Remove non-alphanumeric characters and convert to lowercase
    let cleaned = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    console.log("cleaned", cleaned);
    
    // Check if the cleaned string is the same as its reverse
    return cleaned === cleaned.split('').reverse().join('');
};

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected output: true
// Explanation: After cleaning, the string becomes "amanaplanacanalpanama", which reads the same forwards and backwards.

console.log(isPalindrome("race a car")); // Expected output: false
// Explanation: After cleaning, the string becomes "raceacar", which is not the same forwards and backwards.

console.log(isPalindrome(" ")); // Expected output: true
// Explanation: After removing all non-alphanumeric characters, we get an empty string "", which is considered a palindrome.

console.log(isPalindrome("No 'x' in Nixon")); // Expected output: true
// Explanation: After cleaning, the string becomes "noxinnixon", which reads the same forwards and backwards.

console.log(isPalindrome("Was it a car or a cat I saw?")); // Expected output: true
// Explanation: After cleaning, the string becomes "wasitacaroracatisaw", which reads the same forwards and backwards.

console.log(isPalindrome("12321")); // Expected output: true
// Explanation: The string is already numeric and reads the same forwards and backwards.

console.log(isPalindrome("12345")); // Expected output: false
// Explanation: The string "12345" does not read the same forwards and backwards.


/*
Explanation

1. Initial String Logging:

The input string s is logged using console.log("string", s);.
This helps in debugging by showing the original string before any processing.

2. Cleaning the String:

The function removes all non-alphanumeric characters from the string using the regular expression /[^a-z0-9]/gi with the replace method.

[^a-z0-9]: Matches any character that is not a letter (a-z) or digit (0-9).

g: Global flag ensures all matches are replaced.

i: Case-insensitive flag ensures both uppercase and lowercase characters are matched.

The resulting string is converted to lowercase using toLowerCase() to handle case insensitivity.
The cleaned string is logged using console.log("cleaned", cleaned);.

3. Palindrome Check:

The cleaned string is compared with its reversed version.
cleaned.split(''): Splits the string into an array of characters.

.reverse(): Reverses the order of characters in the array.

.join(''): Joins the reversed characters back into a string.

The function returns true if the cleaned string matches its reverse; otherwise, it returns false.
*/