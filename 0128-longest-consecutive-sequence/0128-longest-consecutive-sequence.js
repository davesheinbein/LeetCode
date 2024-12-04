/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function(nums) {
    // Create a Set for fast lookups and eliminate duplicates
    const numSet = new Set(nums);

    // Initialize a variable to track the longest sequence length
    let longestSequence = 0;

    // Iterate through each number in the array
    for (const num of nums) {
        // Check if the current number is the start of a sequence
        if (!numSet.has(num - 1)) { 
            // If `num - 1` is not in the set, then `num` is the start of a sequence
            let currentNum = num; // Start the sequence from the current number
            let currentSequence = 1; // Initialize the sequence length

            // Extend the sequence by checking consecutive numbers
            while (numSet.has(currentNum + 1)) {
                currentNum++; // Move to the next number in the sequence
                currentSequence++; // Increment the sequence length
            }

            // Update the longest sequence length if the current sequence is longer
            longestSequence = Math.max(longestSequence, currentSequence);
        }
    }

    // Return the length of the longest sequence
    return longestSequence;
};

// Examples
// Example 1: nums = [100, 4, 200, 1, 3, 2]
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4

// Example 2: nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // Output: 9

// Example 3: nums = []
console.log(longestConsecutive([])); // Output: 0

/*
Explanation:
- The problem is to find the length of the longest consecutive sequence in the array.
- To achieve O(n) time complexity:
  1. Use a `Set` to store the elements of the array, allowing O(1) lookups.
  2. For each number in the array:
     - Check if it is the start of a sequence by verifying that `num - 1` is not in the set.
     - If it is the start, incrementally check for the next consecutive numbers (`num + 1`, `num + 2`, etc.).
     - Track the length of the current sequence and update the maximum length found so far.
  3. Skip numbers that are not the start of a sequence to avoid redundant computations.

Time Complexity:
- O(n): Each number is processed once when it is the start of a sequence, and each lookup in the `Set` is O(1).

Space Complexity:
- O(n): The `Set` stores all the unique elements of the array.
*/
