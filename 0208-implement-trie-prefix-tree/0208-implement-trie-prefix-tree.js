/**
 * Initializes the Trie object.
 */
var Trie = function () {
	this.root = {}; // Root node is an empty object to store the words and prefixes
};

/**
 * Inserts a word into the Trie.
 * @param {string} word - The word to be inserted.
 * @return {void}
 */
Trie.prototype.insert = function (word) {
	let currentNode = this.root; // Start at the root node, which will act as the base for word insertion

	// Iterate through each character in the word
	for (const char of word) {
		// If the character is not already a child of the current node, create a new node for it
		if (!currentNode[char]) {
			currentNode[char] = {}; // Create a new node for the character
		}

		// Move to the next child node in the Trie
		currentNode = currentNode[char];
	}

	// After processing the entire word, mark the final node as the end of the word
	currentNode.isEndOfWord = true;
};

/**
 * Searches for a word in the Trie.
 * @param {string} word - The word to be searched.
 * @return {boolean} - True if the word exists in the Trie, false otherwise.
 */
Trie.prototype.search = function (word) {
	let currentNode = this.root; // Start at the root node

	// Traverse through each character in the word
	for (const char of word) {
		// If the character is not found in the current node's children, the word doesn't exist
		if (!currentNode[char]) {
			return false; // Word not found
		}

		// Move to the child node for the character
		currentNode = currentNode[char];
	}

	// After processing the entire word, check if the final node is marked as the end of a word
	// This confirms that the word exists fully in the Trie
	return currentNode.isEndOfWord === true;
};

/**
 * Checks if there is any word in the Trie that starts with the given prefix.
 * @param {string} prefix - The prefix to be checked.
 * @return {boolean} - True if there is any word with the prefix, false otherwise.
 */
Trie.prototype.startsWith = function (prefix) {
	let currentNode = this.root; // Start at the root node

	// Traverse through each character in the prefix
	for (const char of prefix) {
		// If the character is not found in the current node's children, no word starts with the prefix
		if (!currentNode[char]) {
			return false; // No word starts with the given prefix
		}

		// Move to the child node for the character
		currentNode = currentNode[char];
	}

	// If the entire prefix has been successfully traversed, return true
	// This means there's at least one word in the Trie starting with the prefix
	return true;
};

/*
Explanation:
1. Trie Data Structure:
   - The Trie is a tree-like data structure where each node represents a character from a word, and paths through the tree represent different words or prefixes.
   - The root node is an empty object that doesn’t store a character but acts as the starting point for all word insertions and searches.

2. insert(word):
   - The `insert` method adds a word to the Trie.
   - It traverses each character in the word and creates nodes for any characters that don’t already exist in the Trie.
   - Once the entire word is processed, the last node in the path is marked as `isEndOfWord = true`, indicating that a word ends at this node.
   - Example: Inserting "apple" creates a path `a -> p -> p -> l -> e`, with the node for 'e' marked as the end of the word.

3. search(word):
   - The `search` method checks if a specific word exists in the Trie.
   - It traverses the Trie following the characters of the word. If at any point a character is not found in the current node's children, the word is not in the Trie, and the function returns `false`.
   - If the entire word is found and the last node is marked with `isEndOfWord = true`, the function returns `true`, indicating the word exists in the Trie.

4. startsWith(prefix):
   - The `startsWith` method checks if there is any word in the Trie that starts with the given prefix.
   - It traverses the Trie following the characters of the prefix. If at any point a character is not found, the function returns `false`.
   - If the entire prefix exists in the Trie, the function returns `true`, meaning there is at least one word that starts with the given prefix.

5. Use Cases:
   - The Trie is particularly useful for applications where efficient prefix matching or searching is required, such as autocomplete systems, spell checkers, and dictionary lookups.
   - Example: Using `insert("apple")` and `search("apple")` allows us to quickly check if the word "apple" exists in the Trie.

6. Example Usage:
   var obj = new Trie();
   obj.insert("apple");
   console.log(obj.search("apple"));   // Output: true
   console.log(obj.search("app"));     // Output: false
   console.log(obj.startsWith("app")); // Output: true
   obj.insert("app");
   console.log(obj.search("app"));     // Output: true

Time and Space Complexity:
- Time Complexity:
   - `insert(word)` and `search(word)` take \(O(m)\), where \(m\) is the length of the word (or prefix). This is because we are traversing each character in the word or prefix.
   - `startsWith(prefix)` also takes \(O(m)\), where \(m\) is the length of the prefix.

- Space Complexity:
   - The space complexity is \(O(n \times m)\), where \(n\) is the number of words inserted into the Trie and \(m\) is the length of the longest word. This is because the Trie stores every character of each word separately in nodes.
*/
