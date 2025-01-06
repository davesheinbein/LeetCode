/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 
var searchRange = function(nums, target) {
    // Helper function to find the leftmost position of the target
    const findLeft = (nums, target) => {
        let left = 0, right = nums.length - 1;
        let result = -1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                result = mid;
                right = mid - 1; // Continue searching in the left half
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    };

    // Helper function to find the rightmost position of the target
    const findRight = (nums, target) => {
        let left = 0, right = nums.length - 1;
        let result = -1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                result = mid;
                left = mid + 1; // Continue searching in the right half
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    };

    // Find the leftmost and rightmost positions of the target
    const leftPos = findLeft(nums, target);
    const rightPos = findRight(nums, target);

    // If the target is not found, return [-1, -1]
    if (leftPos === -1) {
        return [-1, -1];
    }

    // Return the positions as [first, last]
    return [leftPos, rightPos];
};

/*
Explanation:

1. We use two binary search functions:
   - `findLeft`: Finds the leftmost index of the target by searching the left half after finding the target.
   - `findRight`: Finds the rightmost index of the target by searching the right half after finding the target.

2. If the target is found, we return the first and last indices of the target in the array. If the target is not found, we return `[-1, -1]`.

Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3, 4]
Explanation: The first occurrence of 8 is at index 3, and the last occurrence is at index 4.

Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1, -1]
Explanation: The target 6 is not in the array.

Example 3:
Input: nums = [], target = 0
Output: [-1, -1]
Explanation: The array is empty, so the target is not found.

Time Complexity:
- The time complexity is \( O(\log n) \) because each binary search operation runs in \( O(\log n) \), and we perform two binary searches.

Space Complexity:
- The space complexity is \( O(1) \) because we only use a constant amount of extra space (just the pointers and result variables).
*/
