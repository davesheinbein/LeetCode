/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {
    let maxSum = nums[0];  // Initialize maxSum with the first element
    let currentSum = 0;    // Initialize currentSum to 0

    // Iterate through the array
    for (let num of nums) {
        // Decide whether to start a new subarray or continue adding the current number
        currentSum = Math.max(num, currentSum + num);
        
        // Update maxSum if currentSum is greater
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;  // Return the largest sum found
};

// Example
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log('Maximum Subarray Sum:', maxSubArray(nums)); // Output: Maximum Subarray Sum: 6

/*
Explanation:

The problem at hand is to find the contiguous subarray within an integer array `nums` that has the largest sum. This problem is efficiently solved using **Kadane’s Algorithm**, which operates in linear time.

### Key Steps in Kadane’s Algorithm:

1. Initialization:
   - We start by initializing `maxSum` with the first element of the array (`nums[0]`) since the subarray must have at least one element. This is also our starting point for comparison.
   - `currentSum` is initialized to 0, which will be used to track the sum of the current subarray as we iterate through the array.

2. Iterate through the array:
   - For each number in the array (`num`), we decide whether to:
     - Start a new subarray with the current number (`num`), or
     - Add the current number to the ongoing subarray sum (`currentSum + num`).
   - The decision is made by comparing `num` with `currentSum + num` and taking the larger value using `Math.max(num, currentSum + num)`. This allows us to effectively "reset" the sum if adding the current number leads to a smaller sum than just starting fresh with the current number.

3. Update `maxSum`:
   - After adjusting `currentSum` for each number, we check if `currentSum` is greater than the current `maxSum`. If it is, we update `maxSum` to be `currentSum`.

4. Return the result:
   - After iterating through the array, the `maxSum` will contain the largest sum of any contiguous subarray, which is our desired result.

### Example Walkthrough:
Given the input `[-2, 1, -3, 4, -1, 2, 1, -5, 4]`:
- Initially, `maxSum` is `-2` (the first element) and `currentSum` is `0`.
- We begin iterating:
  - When `1` is encountered, `currentSum` becomes `1` (since `1 > 0 + 1`).
  - Next, when `-3` is encountered, `currentSum` becomes `-2` (since `1 + (-3)` is less than `-3`).
  - When `4` is encountered, `currentSum` becomes `4` (since `4 > -2 + 4`), and so on.
- The algorithm identifies the subarray `[4, -1, 2, 1]` with the maximum sum of `6`.

### Time Complexity:
- O(n) where `n` is the length of the array, because we only need to make one pass through the array.

### Space Complexity:
- O(1) since we only use a constant amount of extra space (`maxSum` and `currentSum`).

This is an optimal solution for the problem and will work efficiently even for large input sizes.
*/
