/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var setZeroes = function(matrix) {
    const m = matrix.length;  // Number of rows
    const n = matrix[0].length;  // Number of columns

    let isFirstRowZero = false;  // Flag to check if the first row needs to be zeroed
    let isFirstColZero = false;  // Flag to check if the first column needs to be zeroed

    // Check if the first row contains any zeros.
    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === 0) {
            isFirstRowZero = true;
            break;
        }
    }

    // Check if the first column contains any zeros.
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            isFirstColZero = true;
            break;
        }
    }

    // Use first row and first column to mark zero rows and columns.
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;  // Mark the first column for this row
                matrix[0][j] = 0;  // Mark the first row for this column
            }
        }
    }

    // Set the cells to zero based on the marks in the first row and first column.
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // Zero out the first row if necessary.
    if (isFirstRowZero) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }

    // Zero out the first column if necessary.
    if (isFirstColZero) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
};

/*
Explanation:
1. We first check if the first row or first column contains any zeros and store that information in `isFirstRowZero` and `isFirstColZero`.
2. We use the first row and first column to mark other rows and columns that should be set to zero.
3. After marking, we go through the matrix and set the values to zero based on the markers.
4. Finally, we handle the first row and first column separately because they were used to store the information about other rows and columns.

This solution works in constant space because we only use the matrix itself for storing the state and modify it in place. 
*/
