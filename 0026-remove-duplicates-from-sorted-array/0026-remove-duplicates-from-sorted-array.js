/**
 * Problem Explanation:
 * 
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates 
 * in-place so that each unique element appears only once, and return the count of 
 * unique elements. 
 * 
 * Definitions:
 * - Non-decreasing order: This means that each element in the array is equal to or 
 *   greater than the previous one. For example, [1, 1, 2, 3, 4, 4] is sorted in 
 *   non-decreasing order.
 * 
 * Requirements:
 * 1. Modify nums so that the first k elements (where k is the number of unique 
 *    elements) contain only unique elements, maintaining their original order.
 * 2. Any elements in nums beyond the first k positions are not important.
 * 
 * Return Value:
 * - The function returns `k`, which represents the count of unique elements in the 
 *   modified array. This `k` allows any code calling this function to know where the 
 *   unique elements end in the modified array.
 * 
 * Custom Judge:
 * The solution is tested with a custom judge that:
 * - Compares the returned `k` to the expected count of unique elements.
 * - Confirms that the first k elements in nums match the expected unique elements.
 * If both conditions are satisfied, the solution is accepted.
 */

var removeDuplicates = function(nums) {
    // Log the initial state of the input array
    console.log(`Initial nums: ${nums}`);
    // Log the length of the input array
    console.log(`nums.length: ${nums.length}`);

    // Check if the input array is empty
    if (nums.length === 0) {
        // If empty, log a message and return 0 as there are no unique elements
        console.log("Input array is empty.");
        return 0;
    }

    // Initialize a pointer `k` to track the position of the last unique element
    // Since the first element is always unique, we start with k = 1
    let k = 1; 

    // Start iterating through the array from the second element (index 1)
    for (let i = 1; i < nums.length; i++) {
        // Log the current element being checked and the previous unique element
        console.log(`Checking nums[${i}]: ${nums[i]} against nums[${i - 1}]: ${nums[i - 1]}`);
        
        // Compare the current element with the last unique element
        if (nums[i] !== nums[i - 1]) {
            // If they are different, we found a new unique element
            console.log(`Found new unique element: ${nums[i]}`);
            // Assign the current unique element to the position k in the array
            nums[k] = nums[i]; 
            // Increment k to point to the next position for any future unique elements
            k++; 
            // Log the updated state of the array containing unique elements so far
            console.log(`Updated nums: ${nums.slice(0, k)} (unique count: ${k})`);
        } else {
            // If they are the same, it's a duplicate; log that a duplicate was found
            console.log(`Duplicate element found: ${nums[i]}`);
        }
    }

    // Log the final count of unique elements found
    console.log(`Final unique count: ${k}`);
    // Log the modified array which now contains only the unique elements in the first k positions
    console.log(`Final modified nums: ${nums.slice(0, k)} (remaining elements are not important)`);
    
    // Return the count of unique elements
    return k;
};

/**
 * Explanation of the Code Logic:
 * 
 * 1. Function Declaration: The removeDuplicates function takes an array nums as input 
 * and is designed to modify it in place to remove duplicates.
 *
 * 2. Initial Checks: It first logs the input array and its length. If the array is 
 * empty, it returns 0, indicating there are no unique elements.
 *
 * 3. Pointer Initialization: The variable `k` is initialized to 1 because the first 
 * element is always considered unique.
 *
 * 4. Iterative Comparison: A for loop starts at index 1 and iterates through the 
 * array:
 *   - It compares the current element (nums[i]) with the previous element 
 *   (nums[i - 1]).
 *   - If they are different, it identifies the current element as unique, assigns it 
 *   to nums[k], and increments k.
 *   - If they are the same, it logs that a duplicate has been found.
 *
 * 5. Final Output: After processing all elements, it logs the count of unique 
 * elements and the modified array, which contains only the unique elements up to 
 * index k.
 */

// Example Tests
let nums1 = [1, 1, 2];
let k1 = removeDuplicates(nums1);
console.log(`Output: ${k1}, Unique Elements: ${nums1.slice(0, k1)}`);

let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k2 = removeDuplicates(nums2);
console.log(`Output: ${k2}, Unique Elements: ${nums2.slice(0, k2)}`);
