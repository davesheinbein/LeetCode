/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // Step 1: Create a map to group anagrams
    // - The key in the map will be a sorted version of each string.
    // - The value will be an array of strings that are anagrams of the key.
    const anagramGroups = new Map();

    // Step 2: Iterate through each string in the input array
    for (const word of strs) {
        // Sort the characters in the string to generate a unique key for anagrams
        // Example: "eat" -> "aet", "tea" -> "aet"
        const sortedWord = word.split('').sort().join('');

        // Add the word to the corresponding group in the map
        if (!anagramGroups.has(sortedWord)) {
            // If the sorted key doesn't exist, initialize a new array for it
            anagramGroups.set(sortedWord, []);
        }
        // Add the word to the corresponding anagram group
        anagramGroups.get(sortedWord).push(word);
    }

    // Step 3: Return the grouped anagrams
    // Convert the map values (arrays of anagrams) into a result array
    return Array.from(anagramGroups.values());
};

// Examples
// Example 1: Grouping anagrams in ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]

// Example 2: An input with a single empty string
console.log(groupAnagrams([""]));
// Output: [[""]]

// Example 3: An input with a single character
console.log(groupAnagrams(["a"]));
// Output: [["a"]]

/*
Explanation:
- Anagrams are words that can be rearranged to form each other.
- By sorting the characters in a word, all anagrams will have the same sorted key.
- The algorithm uses a `Map` to group strings by their sorted key.

Steps:
1. Create an empty map to store groups of anagrams.
2. Iterate through the input array:
   - For each word, sort its characters to generate a unique key.
   - If the key is not already in the map, create a new entry with an empty array.
   - Add the word to the array associated with the key.
3. Convert the map values to an array of arrays and return it.

Time Complexity:
- O(n * k * log(k)), where `n` is the number of strings and `k` is the maximum length of a string.
  - Sorting each string takes O(k * log(k)).
  - Iterating over the input array takes O(n).
- Overall, the time complexity is O(n * k * log(k)).

Space Complexity:
- O(n * k), where `n` is the number of strings and `k` is the maximum length of a string.
  - The map stores all the strings, which requires O(n * k) space.
*/
