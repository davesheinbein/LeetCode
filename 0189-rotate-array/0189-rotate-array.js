/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function(nums, k) {
    console.log("Original array:", nums);
    console.log("Original k:", k);
    // Handle cases where k is greater than the length of the array
    k = k % nums.length;
    
    console.log("Rotation steps (k):", k);
    
    // Step 1: Reverse the entire array
    reverse(nums, 0, nums.length - 1);
    console.log("After reversing the entire array:", nums);
    
    // Step 2: Reverse the first k elements
    reverse(nums, 0, k - 1);
    console.log(`After reversing the first ${k} elements:`, nums);
    
    // Step 3: Reverse the rest of the array
    reverse(nums, k, nums.length - 1);
    console.log(`After reversing the elements from index ${k} to end:`, nums);
};

// Helper function to reverse a section of the array in-place
function reverse(arr, start, end) {
    while (start < end) {
        // Swap elements at start and end
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

// Example 1
let nums1 = [1, 2, 3, 4, 5, 6, 7];
rotate(nums1, 3);
console.log("Final rotated array (Example 1):", nums1);
console.log("\n"); // Just for clearer separation

// Example 2
let nums2 = [-1, -100, 3, 99];
rotate(nums2, 2);
console.log("Final rotated array (Example 2):", nums2);
