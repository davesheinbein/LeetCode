/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    // Step 1: Kadane's Algorithm to find the max subarray sum (non-circular)
    // Kadane's algorithm is an efficient way to find the maximum sum of a contiguous subarray
    // within a non-circular array. It works by iterating through the array while keeping track
    // of the current sum (currentMax). If the current sum becomes negative, it resets the sum to the current element.
    // The global maximum (maxSum) is updated as we progress.
    // This handles the standard maximum subarray problem (non-circular case).
    const kadaneMax = (nums) => {
        let maxSum = nums[0], currentMax = nums[0];
        // Start iterating from the second element because the first element is already considered in the initial values.
        for (let i = 1; i < nums.length; i++) {
            // Update currentMax to be either the current element itself or the sum of the currentMax and the current element
            currentMax = Math.max(nums[i], currentMax + nums[i]);
            // Update maxSum to store the maximum value encountered
            maxSum = Math.max(maxSum, currentMax);
        }
        return maxSum;
    };

    // Step 2: Kadane's Algorithm to find the min subarray sum
    // A similar approach is used to find the minimum sum of a contiguous subarray.
    // We use this to help calculate the maximum sum for a circular subarray.
    // The minimum subarray sum is subtracted from the total array sum to get the circular maximum.
    const kadaneMin = (nums) => {
        let minSum = nums[0], currentMin = nums[0];
        // Start iterating from the second element
        for (let i = 1; i < nums.length; i++) {
            // Update currentMin to be either the current element itself or the sum of the currentMin and the current element
            currentMin = Math.min(nums[i], currentMin + nums[i]);
            // Update minSum to store the minimum value encountered
            minSum = Math.min(minSum, currentMin);
        }
        return minSum;
    };

    // Step 3: Calculate the total sum of the entire array
    // The total sum is needed to compute the circular sum. If we know the minimum subarray sum,
    // the maximum circular sum is simply the total sum minus the minimum subarray sum.
    const totalSum = nums.reduce((acc, num) => acc + num, 0);
    
    // Step 4: Calculate the maximum sum of a non-circular subarray using Kadane's algorithm
    const maxSum = kadaneMax(nums); 
    
    // Step 5: Calculate the minimum sum of a subarray using Kadane's algorithm
    const minSum = kadaneMin(nums);
    
    // Edge case: If all elements are negative, then the circular subarray will be the same as the maximum subarray sum
    // in the non-circular case. This happens because subtracting the minimum sum would just leave us with an empty subarray,
    // which we should avoid. So in this case, we just return the maximum subarray sum.
    if (totalSum === minSum) {
        return maxSum;
    }

    // Step 6: Return the maximum of the non-circular maximum sum and the circular maximum sum
    // The circular subarray maximum sum is calculated as `totalSum - minSum` because we are excluding the minimum subarray
    // from the total sum. We compare this with the non-circular maximum sum to get the final result.
    return Math.max(maxSum, totalSum - minSum);
};

/*
Explanation:

1. Kadane’s algorithm is applied twice:
   - First, to find the maximum sum for a non-circular subarray (the standard problem).
   - Second, to find the minimum sum of a subarray, which helps in calculating the maximum sum of a circular subarray.

2. The total sum of the array is computed, which allows us to compute the circular subarray sum by subtracting the minimum subarray sum from the total sum.

3. If all elements are negative (i.e., the total sum equals the minimum subarray sum), the circular sum is the same as the maximum sum in the non-circular case.

4. The final result is the maximum between the non-circular maximum sum (`maxSum`) and the circular maximum sum (`totalSum - minSum`).

Examples:

Example 1:
Input: nums = [1,-2,3,-2]
Output: 3
Explanation: Subarray [3] has the maximum sum of 3.

Example 2:
Input: nums = [5,-3,5]
Output: 10
Explanation: Subarray [5,5] has the maximum sum 5 + 5 = 10.

Example 3:
Input: nums = [-3,-2,-3]
Output: -2
Explanation: Subarray [-2] has the maximum sum of -2, as all other subarrays have negative sums.

Time Complexity:
- The time complexity is O(n) because we scan the array a few times: once for Kadane’s algorithm to find the maximum sum, once to find the minimum sum, and once for the total sum calculation.

Space Complexity:
- The space complexity is O(1) because we use only a constant amount of extra space for storing variables.
*/
