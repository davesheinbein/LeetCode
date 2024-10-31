// Define a function to merge two sorted integer arrays
var merge = function(nums1, m, nums2, n) {
    // Initialize pointers for the last elements of nums1 and nums2
    let i = m - 1; // Pointer for the last element in the first part of nums1
    let j = n - 1; // Pointer for the last element in nums2
    let k = m + n - 1; // Pointer for the last position in nums1 (the merged array)

    // While there are still elements to merge from nums2
    while (j >= 0) {
        // If there are remaining elements in nums1 and the current element in nums1 is greater than in nums2
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i]; // Place the element from nums1 into the correct position in nums1
            i--; // Move the pointer in nums1 left
        } else {
            // If nums2's current element is greater or nums1 is exhausted
            nums1[k] = nums2[j]; // Place the element from nums2 into nums1
            j--; // Move the pointer in nums2 left
        }
        // Move the pointer for the merged position left
        k--;
    }
    
    // No need to return anything since we modify nums1 in place
};

// Explanation of the Problem:

/*
1. Function Purpose: The merge function is designed to combine two sorted arrays, nums1 and nums2, into a single sorted array stored in nums1.

2. Input Specification: 
   - nums1 is an array of integers that contains m elements followed by n zeros. 
   - nums2 is an array of integers containing n elements.
   - m represents the number of actual elements in nums1.
   - n represents the number of elements in nums2.

3. Output Specification: 
   - The merged sorted array is stored in nums1.
   - No return value is necessary as the result modifies nums1 in place.

4. Example Walkthrough:
   - Example 1: For the input nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3:
     - Start merging from the end of both arrays, comparing elements and placing them in the correct position.
     - Final output in nums1 will be [1, 2, 2, 3, 5, 6].
   - Example 2: For the input nums1 = [1], m = 1, nums2 = [], n = 0:
     - Since nums2 is empty, nums1 remains [1].
   - Example 3: For the input nums1 = [0], m = 0, nums2 = [1], n = 1:
     - All elements from nums2 are placed in nums1, resulting in [1].

5. Constraints:
   - The function handles constraints ensuring both arrays are of appropriate lengths, with -10^9 <= nums1[i], nums2[j] <= 10^9.
   - The overall length of the combined arrays does not exceed 200 elements, ensuring efficient performance.

6. In-Place Modification: 
   - This approach modifies nums1 directly, utilizing its extra space to accommodate the merged result without needing additional arrays, thus achieving O(1) extra space complexity.
*/
