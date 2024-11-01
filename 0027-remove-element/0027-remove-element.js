/**
 * @param {number[]} nums - The input array of numbers
 * @param {number} val - The value to remove from the array
 * @return {number} - The count of elements not equal to val
 */

var removeElement = function(nums, val) {
    // Initialize k to track the position for the next element that isn’t equal to val.
    let k = 0;

    // Loop through each element in the nums array
    for (let i = 0; i < nums.length; i++) {
        // Check if the current element nums[i] is not equal to val
        if (nums[i] !== val) {
            // Place the current element at index k, then increment k
            nums[k] = nums[i];
            k++;
        }
    }
    
    // Return k, which now represents the number of elements not equal to val
    return k;
};

/**
 * Explanation:
 * - **Two-Pointer Approach**: We use two pointers, one iterating through the array (`i`)
 *   and one (`k`) to store the position of the next non-val element.
 * - **Place Non-Val Elements**: If an element isn’t equal to `val`, we place it at the
 *   current position of `k` and then increment `k`.
 * - **Final Result**: By the end of the loop, the first `k` elements in `nums` will contain
 *   all elements except `val`. `k` is returned, representing the count of elements in `nums`
 *   that are not equal to `val`.
 * 
 * ### Example Walkthroughs:
 * 1. **Example 1**:
 *    - Input: `nums = [3, 2, 2, 3]`, `val = 3`
 *    - Output: `2`, `nums = [2, 2, _, _]`
 *    - Explanation: After removing all occurrences of `val = 3`, the array has two elements
 *      `[2, 2]` and `k = 2`.
 * 
 * 2. **Example 2**:
 *    - Input: `nums = [0, 1, 2, 2, 3, 0, 4, 2]`, `val = 2`
 *    - Output: `5`, `nums = [0, 1, 4, 0, 3, _, _, _]`
 *    - Explanation: After removing all occurrences of `val = 2`, the array has five elements
 *      `[0, 1, 4, 0, 3]` and `k = 5`.
 * 
 * ### Complexity:
 * - **Time Complexity**: `O(n)`, where `n` is the length of `nums`, as we make a single pass through the array.
 * - **Space Complexity**: `O(1)`, as the operation is performed in-place with no additional storage.
 */
