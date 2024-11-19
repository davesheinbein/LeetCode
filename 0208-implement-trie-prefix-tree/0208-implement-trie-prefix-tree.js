class Trie {
    constructor() {
        this.root = {}; // Root node
    }

    /**
     * Inserts a word into the trie.
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node[char]) {
                node[char] = {}; // Create a new node if the character doesn't exist
            }
            node = node[char]; // Move to the next node
        }
        node.isEnd = true; // Mark the end of the word
    }

    /**
     * Searches for a word in the trie.
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const node = this._traverse(word);
        return !!node && !!node.isEnd; // Return true if the node exists and is the end of a word
    }

    /**
     * Checks if a prefix exists in the trie.
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        return !!this._traverse(prefix); // Return true if the prefix exists
    }

    /**
     * Helper function to traverse the trie up to the end of the given word/prefix.
     * @param {string} word
     * @return {Object|null}
     */
    _traverse(word) {
        let node = this.root;
        for (const char of word) {
            if (!node[char]) {
                return null; // Return null if the character doesn't exist
            }
            node = node[char]; // Move to the next node
        }
        return node; // Return the final node
    }
}

// Example usage:
const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));   // true
console.log(trie.search("app"));     // false
console.log(trie.startsWith("app")); // true
trie.insert("app");
console.log(trie.search("app"));     // true

/*
Explanation of Methods
insert(word)

Traverse through the characters of the word.
If a character node doesn’t exist, create it.
Mark the end of the word by setting isEnd to true at the last character's node.
search(word)

Use a helper function _traverse to follow the path for the word in the trie.
Return true if the path exists and ends at a node marked as isEnd.
startsWith(prefix)

Similar to search, but it only checks if the path exists in the trie, without needing isEnd.
_traverse(word)

Complexity
- Insert: \(O(n)\), where \(n\) is the length of the word.
- Search: \(O(n)\).
- StartsWith: \(O(n)\).
- Space: \(O(k \cdot n)\), where \(k\) is the average length of words and \(n\) is the total number of words.

*/