// Define a function to merge two strings in an alternating fashion
function mergeAlternately(word1, word2) {
	// Get the lengths of both input strings
	let m = word1.length; // Length of word1
	let n = word2.length; // Length of word2

	// Initialize indices for both strings
	let i = 0; // Index for word1
	let j = 0; // Index for word2

	// Initialize an empty array to hold the merged characters
	let result = [];

	// Continue merging while there are characters left in either string
	while (i < m || j < n) {
		// If there are remaining characters in word1, add the next character to result
		if (i < m) {
			result.push(word1[i]); // Add the character from word1 at index i
			i++; // Move to the next character in word1
		}
		// If there are remaining characters in word2, add the next character to result
		if (j < n) {
			result.push(word2[j]); // Add the character from word2 at index j
			j++; // Move to the next character in word2
		}
	}

	// Join the array of characters into a single string and return it
	return result.join("");
}

// Example usage
const word1 = "abc"; // First input string
const word2 = "pqr"; // Second input string

// Call the function to merge the two words and store the result
const mergedString = mergeAlternately(word1, word2);

// Output the merged string to the console
console.log(mergedString); // Output: "apbqcr"

// Additional examples to illustrate functionality
const word3 = "ab"; // First input string for the second example
const word4 = "pqrs"; // Second input string for the second example

// Merging "ab" and "pqrs" should give us "apbqrs"
console.log(mergeAlternately(word3, word4)); // Output: "apbqrs"

const word5 = "abcd"; // First input string for the third example
const word6 = "pq"; // Second input string for the third example

// Merging "abcd" and "pq" should give us "apbqcd"
console.log(mergeAlternately(word5, word6)); // Output: "apbqcd"

/*
Explanation of the Code:

1. **Function Definition**: The `mergeAlternately` function is defined to accept two strings, `word1` and `word2`.

2. **Length Variables**: The lengths of the two input strings are stored in `m` and `n` for easy access.

3. **Index Initialization**: Two indices, `i` and `j`, are initialized to track the current position in `word1` and `word2`, respectively.

4. **Result Array**: An empty array `result` is created to hold the merged characters.

5. **Merging Loop**: A `while` loop runs as long as there are characters left in either string:
   - **Adding from `word1`**: If there are characters left in `word1` (i.e., `i < m`), the character at index `i` is added to `result`, and `i` is incremented.
   - **Adding from `word2`**: If there are characters left in `word2` (i.e., `j < n`), the character at index `j` is added to `result`, and `j` is incremented.

6. **Returning the Merged String**: After the loop completes, the characters in `result` are joined into a single string with `join("")`, and the merged string is returned.

7. **Example Usage**: The function is tested with examples to demonstrate its functionality, with results printed to the console for verification.
*/
