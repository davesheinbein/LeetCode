// Define a function that takes an array of numbers (nums) and a target sum
var twoSum = function (nums, target) {
    // Start looping through the array with index 'i'
    for (let i = 0; i < nums.length; i++) {
        // For each 'i', loop through the remaining elements with index 'j' starting from 'i + 1'
        for (let j = i + 1; j < nums.length; j++) {
            // Check if the sum of nums[i] and nums[j] equals the target
            if (nums[j] === target - nums[i]) {
                // If it does, return an array with the indices [i, j]
                return [i, j];
            }
        }
    }
    // Return an empty array if no solution is found (though the problem guarantees one solution exists)
    return [];
};

// Explanation of Each Step

// 1. Function Definition: `twoSum(nums, target)`:
//    This function takes an array of integers `nums` and an integer `target`. The goal is to return the indices of two numbers in `nums` that add up to `target`.

// 2. Outer Loop:
//    `for (let i = 0; i < nums.length; i++) {...}`
//    This loop iterates over each element in `nums` using index `i`.
   
// 3. Inner Loop:
//    `for (let j = i + 1; j < nums.length; j++) {...}`
//    For each element at `i`, a nested loop iterates over the remaining elements with index `j` (starting from `i + 1`) to avoid using the same element twice.

// 4. Condition Check:
//    `if (nums[j] === target - nums[i]) {...}`
//    For each pair of indices `i` and `j`, we check if the element at `j` is equal to `target - nums[i]`. If this is true, it means `nums[i] + nums[j]` equals the target.

// 5. Return Solution:
//    `return [i, j];`
//    If the condition is met, we return the indices `[i, j]` as an array, which represents the solution.

// 6. Failsafe Return:
//    `return [];`
//    Although the problem guarantees a solution, this is here to handle cases where no solution is found.

// Time Complexity

// This solution has a **time complexity of O(n²)** due to the nested loops. Each element `i` is compared with every other element `j` to find a pair that sums to the target. For larger arrays, this approach may not be as efficient as using a hash map for O(n) complexity.