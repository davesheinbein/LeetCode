/**
 * @param {number[]} nums
 * @return {number}
 */
 
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        // If mid element is greater than the rightmost element,
        // the minimum is in the right part of the array
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } 
        // Otherwise, the minimum is in the left part (or at mid)
        else {
            right = mid;
        }
    }

    // When left == right, we have found the minimum
    return nums[left];
};

/*
Explanation:

1. We initialize `left` and `right` pointers to the start and end of the array.
2. In each iteration of the binary search:
   - If `nums[mid] > nums[right]`, the minimum must be in the right half, so we update `left = mid + 1`.
   - If `nums[mid] <= nums[right]`, the minimum could be at `mid` or in the left half, so we update `right = mid`.
3. The loop continues until `left` equals `right`, at which point the minimum element is found.

Examples:

Example 1:
Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The minimum element is 1.

Example 2:
Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The minimum element is 0.

Example 3:
Input: nums = [11,13,15,17]
Output: 11
Explanation: The minimum element is 11 (array is not rotated).

Time Complexity:
- \( O(\log n) \): Binary search reduces the search space by half in each iteration.

Space Complexity:
- \( O(1) \): No additional space is used.
*/
