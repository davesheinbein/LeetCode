// Function to reverse the words in a given string
var reverseWords = function(s) {
    // Step 1: Trim the string to remove leading and trailing spaces
    // This ensures we don't have extra spaces that could affect our word separation.
    // Example: "  hello world  " becomes "hello world"
    const trimmedString = s.trim();

    // Step 2: Split the string into words based on spaces
    // We use the split() method with a regular expression that matches one or more whitespace characters.
    // The regex /\s+/ will handle multiple spaces and convert them into an array of words,
    // effectively filtering out empty strings that might result from consecutive spaces.
    // Example: "a good   example" becomes ["a", "good", "example"]
    const words = trimmedString.split(/\s+/);

    // Step 3: Reverse the array of words
    // By calling reverse(), we change the order of elements in the array,
    // so the last word becomes the first and vice versa.
    // Example: ["a", "good", "example"] becomes ["example", "good", "a"]
    const reversedWords = words.reverse();

    // Step 4: Join the reversed array back into a string with a single space
    // Using join(" "), we concatenate the elements of the array into a single string,
    // ensuring that words are separated by exactly one space.
    // Example: ["example", "good", "a"] becomes "example good a"
    return reversedWords.join(" ");
};

// Example usage:
const input1 = "the sky is blue";
const output1 = reverseWords(input1);
console.log(output1); // Output: "blue is sky the"

const input2 = "  hello world  ";
const output2 = reverseWords(input2);
console.log(output2); // Output: "world hello"

const input3 = "a good   example";
const output3 = reverseWords(input3);
console.log(output3); // Output: "example good a"

// ### Detailed Explanation of the Code:
// - **Function Definition**: The function `reverseWords` takes a single parameter `s`, which is the input string containing words separated by spaces.

// - **Trimming the String**: 
//   - We use the `trim()` method to remove any extra spaces from the start and end of the string. 
//   - This is crucial because leading or trailing spaces do not contribute to the meaningful content of the string and would result in incorrect word splitting.

// - **Splitting into Words**:
//   - The `split(/\s+/)` method takes advantage of a regular expression that matches one or more whitespace characters.
//   - This means that any sequence of spaces (including tabs or multiple spaces) between words is treated as a single delimiter.
//   - The result is an array of words, with no empty strings, even if there were multiple spaces between them.

// - **Reversing the Words**:
//   - The `reverse()` method modifies the original array in place, reversing the order of its elements.
//   - This effectively turns the last word into the first one, aligning with the requirement of returning the words in reverse order.

// - **Joining the Words**:
//   - Finally, we use `join(" ")` to combine the elements of the reversed array into a single string, inserting a single space between each word.
//   - This ensures that the output format is correct, with only one space separating the words and no extra spaces at the beginning or end.

// ### Example Cases:
// - For the input `"the sky is blue"`, the function first trims the string (no change here), splits it into `["the", "sky", "is", "blue"]`, reverses it to `["blue", "is", "sky", "the"]`, and joins it to form `"blue is sky the"`.
  
// - For the input `"  hello world  "`, trimming results in `"hello world"`, which splits into `["hello", "world"]`, reverses to `["world", "hello"]`, and finally joins to produce `"world hello"`.

// - For the input `"a good   example"`, trimming yields `"a good   example"`, which splits into `["a", "good", "example"]`, reverses to `["example", "good", "a"]`, and joins to give `"example good a"`.

// This approach is efficient, leveraging built-in JavaScript methods to manipulate strings and arrays while maintaining clarity and conciseness in the code.