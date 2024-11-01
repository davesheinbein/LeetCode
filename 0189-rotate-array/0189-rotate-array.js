/**
 * @param {number[]} nums - The input array to rotate
 * @param {number} k - The number of steps to rotate the array
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function(nums, k) {
    // Reduce k if it’s greater than nums.length by taking modulo
    k = k % nums.length;
    
    // Function to reverse elements in nums between start and end indices
    const reverse = function(start, end) {
        while (start < end) {
            // Swap elements at start and end
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    };
    
    // Step 1: Reverse the entire array
    reverse(0, nums.length - 1);
    
    // Step 2: Reverse the first k elements
    reverse(0, k - 1);
    
    // Step 3: Reverse the remaining elements
    reverse(k, nums.length - 1);
};

// Explanation and Examples:

// 1. Adjust `k` Value:
//    - Since rotating by the array’s length returns the array to its original position, only `k % nums.length` rotations are needed. This prevents extra rotations if `k` is greater than `nums.length`.

// 2. Reverse Function:
//    - The `reverse` function swaps elements in the array from `start` to `end`. This helps rearrange elements in specific sections of `nums`.

// 3. Steps to Rotate:
//    - Step 1: Reverse the entire array. This places the elements in the opposite order.
//    - Step 2: Reverse the first `k` elements to restore their original order in the rotated part.
//    - Step 3: Reverse the rest of the array from index `k` to the end, fixing the second part’s order.

// By following these steps, `nums` rotates in-place, achieving `O(n)` time complexity and `O(1)` space complexity.

// Example 1:
let nums1 = [1, 2, 3, 4, 5, 6, 7];
let k1 = 3;
rotate(nums1, k1);
console.log(nums1); // Expected output: [5, 6, 7, 1, 2, 3, 4]

// Example 2:
let nums2 = [-1, -100, 3, 99];
let k2 = 2;
rotate(nums2, k2);
console.log(nums2); // Expected output: [3, 99, -1, -100]

// Example 3:
let nums3 = [1, 2];
let k3 = 3;
rotate(nums3, k3);
console.log(nums3); // Expected output: [2, 1] (since 3 % 2 = 1, equivalent to rotating 1 step to the right)
