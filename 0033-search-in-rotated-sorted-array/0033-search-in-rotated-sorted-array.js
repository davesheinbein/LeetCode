/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 
var search = function(nums, target) {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // Check if we found the target
        if (nums[mid] === target) {
            return mid;
        }

        // If the left half is sorted
        if (nums[left] <= nums[mid]) {
            // Check if target lies within the left half
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;  // Search the left half
            } else {
                left = mid + 1;   // Search the right half
            }
        }
        // If the right half is sorted
        else {
            // Check if target lies within the right half
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;  // Search the right half
            } else {
                right = mid - 1; // Search the left half
            }
        }
    }

    // If we exit the loop, the target is not in the array
    return -1;
};

/*
Explanation:

1. We start by initializing the `left` and `right` pointers for binary search.
2. In each iteration, we calculate the middle index (`mid`) and check:
   - If the middle element is the target, return its index.
   - If the left half is sorted, check if the target lies within this sorted half. If it does, adjust the search range to the left; otherwise, move to the right half.
   - If the right half is sorted, check if the target lies within this sorted half. If it does, adjust the search range to the right; otherwise, move to the left half.
3. If the target is not found, return -1.

Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Explanation: The array is rotated at index 4, and 0 is found at index 4.

Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Explanation: The target 3 is not found in the array.

Example 3:
Input: nums = [1], target = 0
Output: -1
Explanation: The array contains only one element 1, which is not the target.

Time Complexity:
- The time complexity is \(O(\log n)\) because we are performing a binary search on the array.

Space Complexity:
- The space complexity is \(O(1)\) because we only use a constant amount of extra space (just for the `left`, `right`, and `mid` pointers).
*/
