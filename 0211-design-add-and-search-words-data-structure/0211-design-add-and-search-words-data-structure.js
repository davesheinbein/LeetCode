var WordDictionary = function () {
	this.root = {}; // The root of the Trie, starting point for all words
};

/**
 * Adds a word to the WordDictionary data structure.
 * 
 * @param {string} word - The word to be added to the dictionary.
 * @return {void}
 * 
 * This function inserts each character of the word into the Trie, creating new nodes as necessary.
 * The last node is marked as the end of the word using the `isEnd` flag.
 */
WordDictionary.prototype.addWord = function (word) {
	let currentNode = this.root;

	// Insert each character of the word into the Trie
	for (const char of word) {
		// If the current character doesn't exist in the Trie, create a new node
		if (!currentNode[char]) {
			currentNode[char] = {}; // Create an empty object for the character node
		}
		// Move to the next node in the Trie (the current character's child)
		currentNode = currentNode[char];
	}

	// After inserting all characters of the word, mark the last node as the end of the word
	// This flag indicates that this node completes a valid word in the Trie
	currentNode.isEnd = true;
};

/**
 * Searches for a word in the WordDictionary, where dots (.) can match any letter.
 * 
 * @param {string} word - The word to be searched, may contain dots (.) to match any character.
 * @return {boolean} - Returns true if the word or pattern is found, false otherwise.
 * 
 * This function uses a helper function for recursive backtracking to search for the word,
 * supporting wildcard dots (.) that can match any character in the Trie.
 */
WordDictionary.prototype.search = function (word) {
	// Helper function to perform recursive search, starting from the root
	const searchHelper = (node, index) => {
		// If we've reached the end of the word, check if the current node represents the end of a valid word
		if (index === word.length) {
			return node.isEnd === true; // Return true if this node is the end of a valid word
		}

		const char = word[index]; // Get the current character to search for

		// If the current character is a dot, we need to explore all possible children at this level
		if (char === '.') {
			// Iterate through all child nodes (i.e., all possible characters that could match the dot)
			for (const key in node) {
				// We skip the `isEnd` property since it is not a child node and avoid infinite recursion
				if (key !== 'isEnd' && searchHelper(node[key], index + 1)) {
					return true; // If any child node matches, return true
				}
			}
		} else {
			// If the character is a regular letter, check if it exists in the current node
			if (node[char] && searchHelper(node[char], index + 1)) {
				return true; // If the character exists and the rest of the word matches, return true
			}
		}

		return false; // If no match is found, return false
	};

	// Start the search from the root of the Trie, at the beginning of the word
	return searchHelper(this.root, 0);
};

/*
Explanation:

- The Trie is a tree-like structure where each node represents a character in the word.
- Each word is added by inserting its characters as nodes into the Trie.
- The `isEnd` flag marks the end of a valid word.
- The `search` function uses a recursive helper function (`searchHelper`) to search for a word.
- The recursive function handles both regular characters and wildcard dots (`.`) by checking possible children nodes or directly matching characters.

Examples:
var obj = new WordDictionary();
obj.addWord("bad");
obj.addWord("dad");
obj.addWord("mad");
console.log(obj.search("pad")); // Output: false (no word "pad" in the dictionary)
console.log(obj.search("bad")); // Output: true (word "bad" exists in the dictionary)
console.log(obj.search(".ad")); // Output: true (matches "bad", "dad", "mad")
console.log(obj.search("b..")); // Output: true (matches "bad")

Explanation of each search:
1. `search("pad")`: The word "pad" doesn't exist in the Trie, so it returns `false`.
2. `search("bad")`: The exact match of "bad" exists, so it returns `true`.
3. `search(".ad")`: The dot can match any letter, so it matches "bad", "dad", and "mad", returning `true`.
4. `search("b..")`: The first character "b" matches "bad", and the two dots match any characters, returning `true`.

Key Points:
- The Trie is constructed where each node corresponds to a character.
- We mark the end of a word by setting `isEnd = true` at the last character node.
- During search, the dot (`.`) wildcard allows us to match any character, and we recursively explore all possible matches at each position in the word.
*/