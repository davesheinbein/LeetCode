/**
 * Rotates the array `nums` to the right by `k` steps, modifying `nums` in place.
 * @param {number[]} nums - The array to rotate.
 * @param {number} k - The number of steps to rotate the array to the right.
 * @return {void} - Does not return anything, modifies `nums` directly.
 */

const rotate = function(nums, k) {
    // Display the original array and k value to track changes.
    console.log("Original array:", nums);
    console.log("Original k:", k);

    // Adjust k if it's greater than the array length:
    // k % nums.length gives the effective number of rotations needed, 
    // since rotating by the length of the array results in the same array.
    k = k % nums.length;

    console.log("Rotation steps (k):", k); // Show adjusted k value after modulo operation
    
    // Step 1: Reverse the entire array to start the rotation process.
    // This brings the elements to the "right-rotated" positions but in reverse order.
    reverse(nums, 0, nums.length - 1);
    console.log("After reversing the entire array:", nums);

    // Step 2: Reverse the first `k` elements to place the rotated part in the correct order.
    reverse(nums, 0, k - 1);
    console.log(`After reversing the first ${k} elements:`, nums);

    // Step 3: Reverse the elements from `k` to the end of the array.
    // This step restores the remaining elements to their original order following the rotated segment.
    reverse(nums, k, nums.length - 1);
    console.log(`After reversing the elements from index ${k} to end:`, nums);
};

// Helper function to reverse a section of the array in place
function reverse(arr, start, end) {
    // Continue swapping elements until the `start` index meets or crosses the `end` index
    while (start < end) {
        let temp = arr[start];    // Store the value at `start` index temporarily
        arr[start] = arr[end];    // Move the value at `end` to the `start` index
        arr[end] = temp;          // Place the stored `start` value at the `end` index
        start++;                  // Move `start` pointer forward
        end--;                    // Move `end` pointer backward
    }
}

// Example usage to test the function

// Example 1: Rotate the array [1, 2, 3, 4, 5, 6, 7] by 3 steps to the right
let nums1 = [1, 2, 3, 4, 5, 6, 7];
rotate(nums1, 3); // Expected output: [5, 6, 7, 1, 2, 3, 4]
console.log("Final rotated array (Example 1):", nums1);
console.log("\n"); // Just for clearer separation between examples

// Example 2: Rotate the array [-1, -100, 3, 99] by 2 steps to the right
let nums2 = [-1, -100, 3, 99];
rotate(nums2, 2); // Expected output: [3, 99, -1, -100]
console.log("Final rotated array (Example 2):", nums2);

/*
Explanation of Key Parts:

1. Modulo Operation:
   - `k = k % nums.length` simplifies the rotation count by eliminating any unnecessary full-length rotations. For instance, rotating an array of length 7 by 7 or any multiple results in no change.

2. Reverse Function:
   - `reverse` swaps elements between the `start` and `end` indices, iterating inward until `start` meets or exceeds `end`. This in-place swap operation reverses the specified segment of the array.

3. Three-Step Array Manipulation:
   - Step 1: Reverse the entire array, setting up the array for a "right rotation" by bringing the last `k` elements to the beginning (in reverse order).
   - Step 2: Reverse the first `k` elements, putting the rotated segment in its final, correct order.
   - Step 3: Reverse the remaining elements to restore the rest of the array to its original sequence after the rotated portion.
*/
