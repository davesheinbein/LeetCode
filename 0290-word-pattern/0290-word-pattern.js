/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

function wordPattern(pattern, s) {
    console.log("pattern", pattern);
    console.log("Words", s);
    
    // Split the string s into an array of words.
    // This creates an array where each element is a word from the input string.
    const words = s.split(' ');
    console.log(`Words split from string s:`, words);

    // If the number of elements in the pattern does not match the number of words, return false.
    // This is a quick check to ensure that the one-to-one mapping can exist.
    if (pattern.length !== words.length) {
        // If lengths are different, the pattern cannot match the words.
        return false; 
    }

    // Initialize two maps to store the character-to-word and word-to-character correspondences.
    // These maps will help track what each character in the pattern maps to and vice versa.
    const charToWordMap = new Map();
    const wordToCharMap = new Map();

    // Iterate over the pattern.
    // This loop goes through each character in the pattern and its corresponding word in the words array.
    for (let i = 0; i < pattern.length; ++i) {
        const char = pattern[i]; // Current character from the pattern.
        const word = words[i]; // Current word from the string.

        console.log(`Processing index ${i}: char = '${char}', word = '${word}'`)

        // Check if the current character is already associated with a different word.
        // If the character is already in the charToWordMap and it maps to a word 
        // different from the current one, it indicates a conflict in mapping and 
        // thus the pattern cannot match.
        if (charToWordMap.has(char)) {
            console.log(`Character '${char}' is already mapped to '${charToWordMap.get(char)}'`);
            if (charToWordMap.get(char) !== word) {
                console.log(`Conflict found: char '${char}' mapped to '${charToWordMap.get(char)}', expected '${word}'`);
                return false; // Mismatch found, return false.
            }
        }
        // Check if the current word is already associated with a different character.
        // Similar to the previous check, if the word is already mapped to a character different from the current one,
        // this also indicates a conflict.
        if (wordToCharMap.has(word)) {
            console.log(`Word '${word}' is already mapped to '${wordToCharMap.get(word)}'`);
            if (wordToCharMap.get(word) !== char) {
                console.log(`Conflict found: word '${word}' mapped to '${wordToCharMap.get(word)}', expected '${char}'`);
                return false; // Mismatch found, return false.
            }
        }

        // Add the current character-to-word and word-to-character association to the maps.
        // If no conflicts were found, we can safely set the mapping for both the character and the word.
        charToWordMap.set(char, word);
        wordToCharMap.set(word, char);
        
        // console.log(`Current mappings: charToWordMap =`, charToWordMap);
        // console.log(`Current mappings: wordToCharMap =`, wordToCharMap);
    }

    // If no mismatch was found, return true.
    // This means all characters and words have been successfully mapped without any conflicts.
    return true;
}

// Example usage
console.log(wordPattern("abba", "dog cat cat dog")); // Output: true
console.log(wordPattern("abba", "dog cat cat fish")); // Output: false
console.log(wordPattern("aaaa", "dog cat cat dog")); // Output: false
console.log(wordPattern("abba", "dog constructor constructor dog")); // Output: true

/*
Explanation:

1. Input Parameters:
   - `pattern`: A string where each character represents a pattern to match.
   - `s`: A string where words are expected to correspond to characters in `pattern`.

2. Splitting the Input String:
   - `s.split(' ')` splits the string `s` into an array of words using spaces as separators.

3. Quick Length Check:
   - If the length of the `pattern` does not match the number of words in `s`, we return `false` immediately, as no one-to-one mapping can exist.

4. Maps for Mappings:
   - `charToWordMap`: A map that tracks the mapping of characters from `pattern` to words.
   - `wordToCharMap`: A map that tracks the reverse mapping, ensuring no word is assigned to more than one character.

5. Iteration over the Pattern:
   - The function iterates through each character in `pattern` and its corresponding word in `words`:
     - If the character is already mapped to a different word, it returns `false`.
     - If the word is already mapped to a different character, it also returns `false`.

6. Returning the Result:
   - If no conflicts are found after checking all the mappings, the function returns `true`, indicating a consistent one-to-one mapping exists between the pattern and the words.

7. Example Outputs:
   - `"abba", "dog cat cat dog"` → `true`: The mapping is consistent (a → dog, b → cat).
   - `"abba", "dog cat cat fish"` → `false`: The word "fish" doesn't match the expected "dog" for the first "a".
   - `"aaaa", "dog cat cat dog"` → `false`: The word "cat" can't map to multiple characters.
*/
