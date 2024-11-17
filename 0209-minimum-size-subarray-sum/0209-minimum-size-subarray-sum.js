/**
 * @param {number} target - The target sum to achieve.
 * @param {number[]} nums - An array of positive integers.
 * @return {number} - The minimal length of the subarray, or 0 if no such subarray exists.
 */

var minSubArrayLen = function(target, nums) {
    // Start of the sliding window
    let left = 0;
    // Current sum of the numbers within the window
    let sum = 0; 
    // To store the minimum length of a valid subarray
    let minLength = Infinity; 

    // Iterate through the array with the right pointer
    for (let right = 0; right < nums.length; right++) {
        // Add the current element to the sum
        sum += nums[right]; 

        // While the current sum is greater than or equal to the target
        while (sum >= target) {
            // Calculate the length of the current subarray
            let currentLength = right - left + 1;
            // Update minLength with the smaller value between currentLength and minLength
            minLength = Math.min(minLength, currentLength);
            // Shrink the window from the left
            sum -= nums[left];
            // Move the left pointer forward
            left++; 
        }
    }

    // If no valid subarray was found, return 0; otherwise, return minLength
    return minLength === Infinity ? 0 : minLength;
};

/**
  Explanation:
 
  1. The `left` pointer marks the start of the current window, and the `right` pointer 
     iterates through the array, expanding the window by adding elements to `sum`.
 
  2. Whenever the `sum` of the window is greater than or equal to the `target`, 
     the program tries to shrink the window by moving the `left` pointer forward.
 
  3. While shrinking, the program calculates the current window length 
     (`right - left + 1`) and updates `minLength` if the current length is smaller.
 
  4. If no valid subarray is found (i.e., `minLength` remains `Infinity`), the function returns 0.
 
  Time Complexity: O(n) - Each element is visited at most twice (once by `right` and once by `left`).
  Space Complexity: O(1) - Only constant space is used.
 */
