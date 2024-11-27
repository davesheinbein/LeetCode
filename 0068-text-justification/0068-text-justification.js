/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */

var fullJustify = function (words, maxWidth) {
	const result = [];
	let line = [];
	let lineLength = 0;

	for (let word of words) {
		// Check if adding the next word exceeds the maxWidth
		if (lineLength + line.length + word.length > maxWidth) {
			// Distribute spaces for the current line
			for (let i = 0; i < maxWidth - lineLength; i++) {
				line[i % (line.length - 1 || 1)] += ' ';
			}
			result.push(line.join(''));
			line = [];
			lineLength = 0;
		}
		line.push(word);
		lineLength += word.length;
	}

	// Handle the last line: left-justified
	result.push(
		line.join(' ') +
			' '.repeat(maxWidth - lineLength - (line.length - 1))
	);

	return result;
};

// Examples:
console.log(
	fullJustify(
		[
			'This',
			'is',
			'an',
			'example',
			'of',
			'text',
			'justification.',
		],
		16
	)
);
// Output:
// [
//   "This    is    an",
//   "example  of text",
//   "justification.  "
// ]

console.log(
	fullJustify(
		['What', 'must', 'be', 'acknowledgment', 'shall', 'be'],
		16
	)
);
// Output:
// [
//   "What   must   be",
//   "acknowledgment  ",
//   "shall be        "
// ]

console.log(
	fullJustify(
		[
			'Science',
			'is',
			'what',
			'we',
			'understand',
			'well',
			'enough',
			'to',
			'explain',
			'to',
			'a',
			'computer.',
			'Art',
			'is',
			'everything',
			'else',
			'we',
			'do',
		],
		20
	)
);
// Output:
// [
//   "Science  is  what we",
//   "understand      well",
//   "enough to explain to",
//   "a  computer.  Art is",
//   "everything  else  we",
//   "do                  "
// ]

/*
### Explanation:
1. Line Construction:
   - A line consists of as many words as possible, constrained by `maxWidth`.
   - Maintain `lineLength` to track the total characters in the current line (excluding spaces).

2. Space Distribution:
   - For fully justified lines, distribute extra spaces as evenly as possible.
   - If the number of spaces does not divide evenly:
     - The leftmost slots receive more spaces than the rightmost ones.

3. Last Line:
   - The last line must be left-justified:
     - Words are joined with a single space, and trailing spaces are added to match `maxWidth`.

4. Complexity:
   - Time Complexity: \(O(n)\), where \(n\) is the total number of characters in `words`. Each word is processed once.
   - Space Complexity: \(O(1)\) additional space, excluding the output.
*/
