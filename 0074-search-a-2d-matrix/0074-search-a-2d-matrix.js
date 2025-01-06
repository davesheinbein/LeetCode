/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 
var searchMatrix = function(matrix, target) {
    // Edge case: If matrix is empty, return false
    if (matrix.length === 0 || matrix[0].length === 0) return false;

    // Step 1: Define the search space
    const m = matrix.length;
    const n = matrix[0].length;

    let left = 0, right = m * n - 1;

    // Step 2: Perform binary search on the "flattened" 1D array
    while (left <= right) {
        const mid = Math.floor((left + right) / 2); // Find middle index
        const midValue = matrix[Math.floor(mid / n)][mid % n]; // Map to 2D index

        // Step 3: Compare the middle value with the target
        if (midValue === target) {
            return true; // Found the target
        } else if (midValue < target) {
            left = mid + 1; // Search the right half
        } else {
            right = mid - 1; // Search the left half
        }
    }

    return false; // Target not found
};

/*
Explanation:

1. We treat the 2D matrix as a flattened 1D array by calculating the middle index as `Math.floor((left + right) / 2)` and mapping it to a 2D index using `matrix[Math.floor(mid / n)][mid % n]`.
   
2. Binary search is applied to this flattened array, adjusting the search range based on comparisons between the target and the middle value.

3. If the target is found, we return true. If the entire search space is exhausted and the target is not found, we return false.

Example 1:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
Explanation: The target 3 is found at position (0, 1).

Example 2:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
Explanation: The target 13 is not found in the matrix.

Time Complexity:
- The time complexity is \(O(\log(m \times n))\) because binary search runs in logarithmic time on the flattened array, where \(m \times n\) is the total number of elements in the matrix.

Space Complexity:
- The space complexity is \(O(1)\) because we are only using a few extra variables for indices and calculations.
*/
