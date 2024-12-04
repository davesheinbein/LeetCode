/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var containsNearbyDuplicate = function(nums, k) {
    // Step 1: Create a map to store the last seen index of each number
    const lastSeenIndex = new Map();

    // Step 2: Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        const currentNumber = nums[i];

        // Check if the current number has been seen before
        if (lastSeenIndex.has(currentNumber)) {
            const previousIndex = lastSeenIndex.get(currentNumber);

            // If the difference between indices is <= k, return true
            if (i - previousIndex <= k) {
                return true;
            }
        }

        // Update the last seen index of the current number
        lastSeenIndex.set(currentNumber, i);
    }

    // Step 3: If no such pair is found, return false
    return false;
};

// Examples
// Example 1: nums = [1, 2, 3, 1], k = 3
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // Output: true

// Example 2: nums = [1, 0, 1, 1], k = 1
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // Output: true

// Example 3: nums = [1, 2, 3, 1, 2, 3], k = 2
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // Output: false

/*
Explanation:
- The goal is to check if there are two distinct indices `i` and `j` in the array such that:
  - `nums[i] == nums[j]`
  - The difference `abs(i - j) <= k`.
  
Steps:
1. Use a `Map` to track the last seen index of each number in `nums`.
2. As you iterate through the array:
   - Check if the current number has been seen before.
   - If it has, calculate the difference between the current index and the previously stored index.
   - If the difference is less than or equal to `k`, return `true`.
3. Update the map with the current number and its index.
4. If no such pair is found after iterating, return `false`.

Time Complexity:
- O(n), where `n` is the length of `nums`.
  - We iterate through the array once and perform constant-time operations for each element.

Space Complexity:
- O(min(n, k)), as the size of the `Map` is bounded by the smaller of `n` (number of elements) and `k` (distance constraint).

*/
