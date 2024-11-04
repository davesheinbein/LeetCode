/**
 * Problem Explanation:
 * 
 * Given an array of integers `nums` and an integer `target`, find two numbers in the 
 * array that add up to `target`, and return their indices. You may assume:
 * - Each input has exactly one solution.
 * - You cannot use the same element twice.
 * - The order of indices in the answer does not matter.
 * 
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: nums[0] + nums[1] == 9, so we return [0, 1].
 * 
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * 
 * Example 3:
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 * 
 * Constraints:
 * - 2 <= nums.length <= 10^4
 * - -10^9 <= nums[i] <= 10^9
 * - -10^9 <= target <= 10^9
 * - Only one valid answer exists.
 * 
 * Approach:
 * - The goal is to find a pair of indices (i, j) where nums[i] + nums[j] equals the target.
 * - The solution returns the indices, which can be in any order.
 */

// Define a function that takes an array of numbers (nums) and a target sum
var twoSum = function (nums, target) {
    // Initialize a hash map to store elements and their indices
    const map = new Map();

    // Loop through the array with index `i`
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement that we need to reach the target
        const complement = target - nums[i];

        // Check if the complement is in the map
        if (map.has(complement)) {
            // If found, return the indices [map.get(complement), i]
            return [map.get(complement), i];
        }

        // Store the current element with its index in the map
        map.set(nums[i], i);
    }

    // Return an empty array if no solution is found (though the problem guarantees one solution exists)
    return [];
};

/**
 * Explanation of Each Step:
 * 
 * 1. Hash Map Initialization: We initialize an empty map to store each number and 
 *    its index as we iterate through `nums`.
 * 
 * 2. Looping Through nums:
 *    - For each number `nums[i]`, we calculate the `complement`, which is the 
 *      difference between the `target` and `nums[i]`.
 *    - We check if this `complement` exists in the map. If it does, it means that 
 *      we have previously encountered a number that pairs with `nums[i]` to reach 
 *      the target.
 * 
 * 3. Returning the Solution:
 *    - If the complement is found in the map, we return the indices of the two 
 *      numbers: `[map.get(complement), i]`.
 *    - If the complement is not found, we store the current number and its index 
 *      in the map to check against future elements.
 * 
 * 4. Complexity:
 *    - **Time Complexity**: O(n) since we only iterate through the array once.
 *    - **Space Complexity**: O(n) due to the hash map storing up to n elements.
 */

// Example Tests
let nums1 = [2, 7, 11, 15];
let target1 = 9;
console.log(twoSum(nums1, target1));  // Output: [0, 1]

let nums2 = [3, 2, 4];
let target2 = 6;
console.log(twoSum(nums2, target2));  // Output: [1, 2]

let nums3 = [3, 3];
let target3 = 6;
console.log(twoSum(nums3, target3));  // Output: [0, 1]
