/**
 * @param {number[]} nums - A sorted array of distinct integers.
 * @param {number} target - The value to be searched or inserted.
 * @return {number} - The index where the target is found or should be inserted.
 */

var searchInsert = function(nums, target) {
    console.log("nums:", nums);
    console.log("target:", target);
    // Initializing two pointers, left and right, which will define the search range
    let left = 0;
    let right = nums.length - 1;

    // Binary search loop: Continue until the left pointer exceeds the right pointer
    while (left <= right) {
        // Find the middle index in the current search range
        const mid = Math.floor((left + right) / 2);

        // Case 1: If the target is found at mid, return the mid index
        if (nums[mid] === target) {
            return mid;
        }
        // Case 2: If the target is greater than the mid value, search in the right half
        else if (nums[mid] < target) {
            left = mid + 1;  // Move the left pointer to mid + 1
        }
        // Case 3: If the target is smaller than the mid value, search in the left half
        else {
            right = mid - 1;  // Move the right pointer to mid - 1
        }
    }

    // If the target is not found, left will be the position where the target should be inserted
    // This ensures the array remains sorted if the target were to be inserted
    return left;
};

// Example usage:
console.log(searchInsert([1, 3, 5, 6], 5)); // Output: 2
console.log(searchInsert([1, 3, 5, 6], 2)); // Output: 1
console.log(searchInsert([1, 3, 5, 6], 7)); // Output: 4
console.log(searchInsert([1, 3, 5, 6], 0)); // Output: 0
console.log(searchInsert([1, 3, 5, 6], 4)); // Output: 2

/*
Explanation:

- `left` and `right` represent the current search boundaries within the array. Initially, `left` is at the start (0) and `right` is at the end (nums.length - 1).
  
- `mid` is the middle index of the current search range and is calculated by `(left + right) / 2`. It is used to compare the target with the element at that index.
  
- The three cases inside the while loop handle different situations:
  - If the element at `nums[mid]` equals the target, we return the `mid` index immediately, as we have found the target.
  - If `nums[mid]` is less than the target, the target must be on the right side of `mid`, so we move the `left` pointer to `mid + 1`.
  - If `nums[mid]` is greater than the target, the target must be on the left side of `mid`, so we move the `right` pointer to `mid - 1`.

- Once the binary search is complete and the target is not found, the `left` pointer will be positioned at the index where the target should be inserted to keep the array sorted. This is the key idea: if the target isn't present, `left` will point to the first position where the target can be inserted without disrupting the order.

Time Complexity:

- O(log n): The binary search halves the search range in each step, leading to a logarithmic time complexity. This is optimal for searching in a sorted array.
  
Space Complexity:

- O(1): The algorithm uses a constant amount of extra space, as it only stores a few variables (left, right, mid) and does not use any additional data structures.
*/
