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
        console.log("Length mismatch:");
        console.log(`pattern length = ${pattern.length}`);
        console.log(`words length = ${words.length}`);

        return false; // If lengths are different, the pattern cannot match the words.
    }

    // Initialize two maps to store the character-to-word and word-to-character correspondences.
    // These maps will help track what each character in the pattern maps to and vice versa.
    const charToWordMap = new Map();
    const wordToCharMap = new Map();

    console.log(`Initialized charToWordMap and wordToCharMap.`);

    // Iterate over the pattern.
    // This loop goes through each character in the pattern and its corresponding 
    // word in the words array.
    for (let i = 0; i < pattern.length; ++i) {
        const char = pattern[i]; // Current character from the pattern.
        const word = words[i]; // Current word from the string.
        
        console.log(`Processing index ${i}`);
        console.log(`char = '${char}'`);
        console.log(`word = '${word}'`);


        // Check if the current character is already associated with a different word.
        // If the character is already in the charToWordMap and it maps to a word 
        // different from the current one, it indicates a conflict in mapping and thus 
        // the pattern cannot match.
        if (charToWordMap.has(char)) {
            console.log("Character:");
            console.log(`'${char}'`);
            console.log("is already mapped to:");
            console.log(`'${charToWordMap.get(char)}'`);
            
            if (charToWordMap.get(char) !== word) {
                console.log("Conflict found:");
                console.log(`char '${char}'`);
                console.log(`mapped to '${charToWordMap.get(char)}'`);
                console.log(`expected '${word}'`);

                return false; // Mismatch found, return false.
            }
        } else {
            console.log("Mapping character:");
            console.log(`'${char}'`);
            console.log(`to word '${word}'`);
        }

        // Check if the current word is already associated with a different character.
        // Similar to the previous check, if the word is already mapped to a 
        // character different from the current one, this also indicates a conflict.
        if (wordToCharMap.has(word)) {
            console.log("Word:");
            console.log(`'${word}'`);
            console.log("is already mapped to:");
            console.log(`'${wordToCharMap.get(word)}'`);

            if (wordToCharMap.get(word) !== char) {
                console.log("Conflict found:");
                console.log(`word '${word}'`);
                console.log(`mapped to '${wordToCharMap.get(word)}'`);
                console.log(`expected '${char}'`);

                return false; // Mismatch found, return false.
            }
        } else {
            console.log("Mapping character:");
            console.log(`'${char}'`);
            console.log(`to word '${word}'`);
        }

        // Add the current character-to-word and word-to-character association to the maps.
        // If no conflicts were found, we can safely set the mapping for both the character and the word.
        charToWordMap.set(char, word);
        wordToCharMap.set(word, char);
        
        console.log(`Current mappings: charToWordMap =`, charToWordMap);
        console.log(`Current mappings: wordToCharMap =`, wordToCharMap);
    }

    // If no mismatch was found, return true.
    // This means all characters and words have been successfully mapped without any conflicts.
    console.log(`Successful mapping: pattern matches the words.`);
    return true;
}

// Example usage
console.log(wordPattern("abba", "dog cat cat dog")); // Output: true
console.log(wordPattern("abba", "dog cat cat fish")); // Output: false
console.log(wordPattern("aaaa", "dog cat cat dog")); // Output: false
console.log(wordPattern("abba", "dog constructor constructor dog")); // Output: true
