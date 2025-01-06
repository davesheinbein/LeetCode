/**
 * @param {string} beginWord - The starting word in the transformation sequence
 * @param {string} endWord - The target word to be transformed into
 * @param {string[]} wordList - The list of valid words that can be used in the transformation
 * @return {number} - The length of the shortest transformation sequence, or 0 if no valid sequence exists
 */
 
var ladderLength = function (beginWord, endWord, wordList) {
	// Convert the wordList into a Set for fast lookups.
	// Using a Set ensures that checking for word existence is O(1).
	const wordSet = new Set(wordList);

	// If the endWord is not in the wordList, there is no valid transformation sequence.
	// Return 0 in this case, as transformation is impossible.
	if (!wordSet.has(endWord)) return 0;

	// Initialize the BFS queue.
	// Each element in the queue is an array [currentWord, steps]:
	//   - currentWord: The word currently being processed.
	//   - steps: The number of words in the transformation sequence so far.
	const queue = [[beginWord, 1]];

	// Begin the BFS loop.
	while (queue.length > 0) {
		// Dequeue the front element of the queue for processing.
		const [currentWord, steps] = queue.shift();

		// If the currentWord matches the endWord, we have found the shortest transformation sequence.
		// Return the number of steps taken to reach this word.
		if (currentWord === endWord) return steps;

		// Generate all possible valid transformations of the currentWord.
		for (let i = 0; i < currentWord.length; i++) {
			// Iterate over all possible lowercase letters ('a' to 'z').
			for (let charCode = 97; charCode <= 122; charCode++) {
				const char = String.fromCharCode(charCode);

				// Skip the transformation if it results in the same character.
				if (char === currentWord[i]) continue;

				// Replace the character at position i with the new character to create a transformed word.
				const transformedWord =
					currentWord.slice(0, i) +
					char +
					currentWord.slice(i + 1);

				// Check if the transformedWord is in the wordSet.
				if (wordSet.has(transformedWord)) {
					// If it is, enqueue this word along with an incremented step count.
					queue.push([transformedWord, steps + 1]);

					// Remove the word from the wordSet to avoid revisiting it in future iterations.
					wordSet.delete(transformedWord);
				}
			}
		}
	}

	// If the queue is exhausted and we never reached the endWord, return 0.
	// This indicates that there is no valid transformation sequence.
	return 0;
};

/*
Detailed Explanation:

1. Key Concepts:
   - The transformation must occur one letter at a time, and every intermediate word must exist in the wordList.
   - Breadth-First Search (BFS) ensures the shortest path is found.

2. Algorithm Steps:
   - Use BFS to explore all possible transformations level by level.
   - For each word, generate all single-letter transformations.
   - If a transformation matches the `endWord`, return the current step count.
   - Use a Set to store the wordList for fast lookups and to avoid revisiting words.

3. Optimizations:
   - Remove words from the Set once processed to reduce unnecessary checks.
   - Using a queue ensures BFS is implemented efficiently.

4. Edge Cases:
   - If the `endWord` is not in the wordList, return 0 immediately.
   - Handle cases where the `wordList` is empty gracefully.

5. Complexity:
   - Time Complexity: \(O(N \times M \times 26)\), where:
     - \(N\): Number of words in the wordList.
     - \(M\): Length of each word.
     - \(26\): Possible letter transformations for each position.
   - Space Complexity: \(O(N)\), for the wordSet and BFS queue.

6. Example Walkthrough:
   - Input: beginWord = "hit", endWord = "cog", wordList = ["hot", "dot", "dog", "lot", "log", "cog"]
   - BFS explores:
     - "hit" → "hot"
     - "hot" → "dot", "lot"
     - "dot" → "dog"
     - "dog" → "cog"
   - Output: 5 (transformation sequence: "hit" → "hot" → "dot" → "dog" → "cog").

7. Edge Case Example:
   - Input: beginWord = "hit", endWord = "cog", wordList = ["hot", "dot", "dog", "lot", "log"]
   - Since "cog" is not in the wordList, return 0.
*/

/*

Examples:

Example 1:
Input: beginWord = "hit", endWord = "cog", wordList = ["hot", "dot", "dog", "lot", "log", "cog"]
Output: 5
Explanation: The shortest transformation sequence is "hit" → "hot" → "dot" → "dog" → "cog".

Example 2:
Input: beginWord = "hit", endWord = "cog", wordList = ["hot", "dot", "dog", "lot", "log"]
Output: 0
Explanation: The `endWord` "cog" is not in the word list, so no sequence exists.

*/
