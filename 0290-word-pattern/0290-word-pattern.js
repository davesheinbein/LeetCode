// Checks if a string pattern matches a given string sequence.
// Each letter in the pattern corresponds to a word in the s string.
function wordPattern(pattern, s) {
    // Split the string s into an array of words.
    const words = s.split(' ');

    // If the number of elements in the pattern does not match the number of words, return false.
    if (pattern.length !== words.length) {
        return false;
    }

    // Initialize two maps to store the character-to-word and word-to-character correspondences.
    const charToWordMap = new Map();
    const wordToCharMap = new Map();

    // Iterate over the pattern.
    for (let i = 0; i < pattern.length; ++i) {
        const char = pattern[i]; // Current character from the pattern.
        const word = words[i]; // Current word from the string.

        // Check if the current character is already associated with a different word.
        if (charToWordMap.has(char) && charToWordMap.get(char) !== word) {
            return false; // Mismatch found, return false.
        }

        // Check if the current word is already associated with a different character.
        if (wordToCharMap.has(word) && wordToCharMap.get(word) !== char) {
            return false; // Mismatch found, return false.
        }

        // Add the current character-to-word and word-to-character association to the maps.
        charToWordMap.set(char, word);
        wordToCharMap.set(word, char);
    }

    // If no mismatch was found, return true.
    return true;
}

// Example usage
console.log(wordPattern("abba", "dog cat cat dog")); // Output: true
console.log(wordPattern("abba", "dog cat cat fish")); // Output: false
console.log(wordPattern("aaaa", "dog cat cat dog")); // Output: false
console.log(wordPattern("abba", "dog constructor constructor dog")); // Output: true
