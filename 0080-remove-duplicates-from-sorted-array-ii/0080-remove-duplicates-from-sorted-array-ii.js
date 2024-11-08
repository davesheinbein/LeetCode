/**
 * Removes duplicates in-place such that each unique element appears at most twice.
 * Modifies the input array 'nums' and returns the length of the modified array.
 *
 * @param {number[]} nums - Sorted integer array with potential duplicates
 * @return {number} - The length of the modified array with duplicates reduced to at most twice
 */

var removeDuplicates = function(nums) {
    // Initialize a pointer 'k' to keep track of the position for the next unique or allowable duplicate element
    let k = 0;

    // Loop through each element in the input array 'nums'
    for (let i = 0; i < nums.length; i++) {
        // Check if the current element nums[i] can be placed in the result part of the array:
        // 1. If 'k' is less than 2, add the element since we haven't reached the limit of 2 duplicates.
        // 2. If 'nums[i]' is different from 'nums[k - 2]', add it to ensure each unique element appears at most twice.
        if (k < 2 || nums[i] !== nums[k - 2]) {
            // Place the current element 'nums[i]' at the position 'k' in the array
            nums[k] = nums[i];
            // Increment 'k' to move to the next position for potential additions
            k++;
        }
    }
    
    // Return 'k' which now represents the length of the modified array
    // where each unique element appears at most twice
    return k;
};

/*
Explanation Summary:
1. 'k' is a pointer that keeps track of where to place the next valid element.
2. We iterate over each element in 'nums' and check if it can be added based on:
   - Allowing the first two elements without restriction.
   - Ensuring no element appears more than twice by comparing 'nums[i]' with 'nums[k - 2]'.
3. The function finally returns 'k', the length of the modified array, with each unique element appearing at most twice.
*/
