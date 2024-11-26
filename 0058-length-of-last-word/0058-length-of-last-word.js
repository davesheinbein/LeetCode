/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function(s) {
    // Trim any trailing spaces from the string to handle cases with extra spaces at the end.
    s = s.trim(); // "   Hello world!   " ==> "Hello world!"

    // Find the last space in the trimmed string.
    let lastSpaceIndex = s.lastIndexOf(' ');

    // The length of the last word is the difference between the string length and the index of the last space.
    return s.length - lastSpaceIndex - 1;
};

// Examples
console.log(lengthOfLastWord(" Hello World ")); 
// Output: 5
// Explanation: Last word is "World", length = 5.

console.log(lengthOfLastWord("   fly me   to   the moon  ")); 
// Output: 4
// Explanation: Last word is "moon", length = 4.

console.log(lengthOfLastWord("luffy is still joyboy")); 
// Output: 6
// Explanation: Last word is "joyboy", length = 6.

console.log(lengthOfLastWord("a")); 
// Output: 1
// Explanation: Single word "a", length = 1.

console.log(lengthOfLastWord("a ")); 
// Output: 1
// Explanation: Last word is "a", trailing space is ignored.

/*
Explanation:

1. Trim the String:
   - Use `s.trim()` to remove leading and trailing spaces, ensuring we only consider meaningful content.

2. Find the Last Space:
   - Use `s.lastIndexOf(' ')` to locate the position of the last space in the string. If no space is found, it returns `-1`.

3. Calculate the Last Word's Length:
   - Subtract the index of the last space (`lastSpaceIndex`) from the total string length (`s.length`) and subtract one more to exclude the space itself.

4. Return the Result:
   - The result represents the length of the last word.

Complexity:

- Time Complexity: \(O(n)\), where \(n\) is the length of the string. The `trim` and `lastIndexOf` operations both iterate through the string.
- Space Complexity: \(O(1)\), as no additional data structures are used.
*/
