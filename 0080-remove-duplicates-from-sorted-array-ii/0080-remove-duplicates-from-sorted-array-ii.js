/**
 * Removes duplicates in-place such that each unique element appears at most twice.
 * Modifies the input array 'nums' and returns the length of the modified array.
 *
 * @param {number[]} nums - Sorted integer array with potential duplicates.
 * @return {number} - The length of the modified array with duplicates reduced to at most twice.
 */

var removeDuplicates = function(nums) {
    console.log("Initial array:", nums);
    // Initialize a pointer 'k' to keep track of the position where the next allowable element should be placed.
    let k = 0;

    // Loop through each element in the input array 'nums' using the index 'i'.
    for (let i = 0; i < nums.length; i++) {
        console.log(`Current index i = ${i}, value nums[i] = ${nums[i]}`);

        // Check the conditions to decide if nums[i] can be added.
        if (k < 2 || nums[i] !== nums[k - 2]) {
            console.log(`Adding nums[i] = ${nums[i]} at index k = ${k}`);
            
            // Place the current element 'nums[i]' at the position 'k' in the array.
            nums[k] = nums[i];
            k++;  // Increment 'k' for the next valid placement.
            
            console.log(`Updated array: ${nums.slice(0, k)} (length = ${k})`);
        } else {
            console.log(`Skipping nums[i] = ${nums[i]} to prevent more than two occurrences`);
        }
    }

    // Final state of the modified array.
    console.log("Final modified array:", nums.slice(0, k));
    console.log("Final length of modified array:", k);

    return k;
};



/*
Detailed Explanation Summary:
1. 'k' is used as both a pointer and a counter:
   - It keeps track of the position in 'nums' where the next valid element should be placed.
   - By the end, 'k' will represent the length of the modified array.
   
2. As we iterate through each element 'nums[i]', we use two conditions to decide if it should be added to the result:
   - If 'k < 2', we are in the initial phase of the result array where any element is allowed.
   - If 'k >= 2', we add 'nums[i]' only if it’s different from 'nums[k - 2]'.
   
3. The check 'nums[i] !== nums[k - 2]' ensures that each unique element appears at most twice, by comparing with the element two places back.
   
4. The function finally returns 'k', the length of the modified array, where each unique element appears at most twice.
   - Elements from 'nums[0]' up to 'nums[k - 1]' represent the final modified array.
*/
