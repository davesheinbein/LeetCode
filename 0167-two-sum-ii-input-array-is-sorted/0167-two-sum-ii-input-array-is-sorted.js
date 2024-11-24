/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // Initialize two pointers: one at the start, one at the end of the array
    let left = 0;
    let right = numbers.length - 1;

    // Loop until the pointers meet
    while (left < right) {
        // Calculate the sum of the numbers at the two pointers
        const sum = numbers[left] + numbers[right];
        
        // Check if the sum matches the target
        if (sum === target) {
            // Return the indices (1-indexed)
            return [left + 1, right + 1];
        } else if (sum < target) {
            // If the sum is less than the target, move the left pointer to the right
            left++;
        } else {
            // If the sum is greater than the target, move the right pointer to the left
            right--;
        }
    }
};

// Examples
console.log(twoSum([2,7,11,15], 9)); // Output: [1, 2]
console.log(twoSum([2,3,4], 6));     // Output: [1, 3]
console.log(twoSum([-1,0], -1));     // Output: [1, 2]


/*
Explanation:

1. Two Pointers Approach:
   - Since the array is already sorted in non-decreasing order, we can use a two-pointer approach to find the pair efficiently.
   - The `left` pointer starts at the beginning of the array, and the `right` pointer starts at the end of the array.

2. Logic:
   - Calculate the sum of the numbers at the two pointers (`numbers[left]` and `numbers[right]`).
   - If the sum equals the target, return the indices (adding 1 to convert from 0-based to 1-based indexing).
   - If the sum is less than the target, move the `left` pointer to the right to increase the sum.
   - If the sum is greater than the target, move the `right` pointer to the left to decrease the sum.

3. Optimal Solution:
   - This approach runs in O(n) time complexity, where `n` is the length of the array, as each element is visited at most once.
   - The space complexity is O(1), as no additional data structures are used.

4. Examples:
   - Input: `numbers = [2,7,11,15], target = 9`
     - Start: `left = 0` (`2`), `right = 3` (`15`), sum = 17 (too large, move `right`).
     - Next: `left = 0` (`2`), `right = 1` (`7`), sum = 9 (match, return `[1, 2]`).
   - Input: `numbers = [2,3,4], target = 6`
     - Start: `left = 0` (`2`), `right = 2` (`4`), sum = 6 (match, return `[1, 3]`).
   - Input: `numbers = [-1,0], target = -1`
     - Start: `left = 0` (`-1`), `right = 1` (`0`), sum = -1 (match, return `[1, 2]`).
*/
