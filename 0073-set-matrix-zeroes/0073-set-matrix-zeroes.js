/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var setZeroes = function(matrix) {
    const numRows = matrix.length;  // Number of rows in the matrix
    const numCols = matrix[0].length;  // Number of columns in the matrix

    let isFirstRowZero = false;  // Flag to check if the first row should be zeroed
    let isFirstColZero = false;  // Flag to check if the first column should be zeroed

    // Check if the first row contains any zeros.
    for (let col = 0; col < numCols; col++) {
        if (matrix[0][col] === 0) {
            isFirstRowZero = true;  // Mark the flag if the first row has any zero
            break;  // Exit the loop early once we find a zero in the first row
        }
    }

    // Check if the first column contains any zeros.
    for (let row = 0; row < numRows; row++) {
        if (matrix[row][0] === 0) {
            isFirstColZero = true;  // Mark the flag if the first column has any zero
            break;  // Exit the loop early once we find a zero in the first column
        }
    }

    // Use the first row and first column to mark the corresponding rows and columns that should be zeroed.
    for (let row = 1; row < numRows; row++) {
        for (let col = 1; col < numCols; col++) {
            if (matrix[row][col] === 0) {
                matrix[row][0] = 0;  // Mark the first column for this row (indicating this row needs to be zeroed)
                matrix[0][col] = 0;  // Mark the first row for this column (indicating this column needs to be zeroed)
            }
        }
    }

    // Set the cells to zero based on the marks in the first row and first column.
    for (let row = 1; row < numRows; row++) {
        for (let col = 1; col < numCols; col++) {
            if (matrix[row][0] === 0 || matrix[0][col] === 0) {
                matrix[row][col] = 0;  // Set the element to zero if its row or column is marked
            }
        }
    }

    // Zero out the first row if necessary.
    if (isFirstRowZero) {
        for (let col = 0; col < numCols; col++) {
            matrix[0][col] = 0;  // Set all values in the first row to zero if required
        }
    }

    // Zero out the first column if necessary.
    if (isFirstColZero) {
        for (let row = 0; row < numRows; row++) {
            matrix[row][0] = 0;  // Set all values in the first column to zero if required
        }
    }
};

/*
Explanation:
1. First, we check if the first row or first column contains any zeros. If they do, we store this information in the `isFirstRowZero` and `isFirstColZero` flags. This is done to handle these rows/columns separately later.

2. Next, we iterate through the rest of the matrix (excluding the first row and column) to identify which rows and columns contain zeros. For each zero element, we mark the corresponding first row and first column with zeros. This allows us to use the first row and column as markers for zeroing out other rows and columns.

3. After marking, we loop through the matrix again (starting from the second row and column) and set any element to zero if its corresponding row or column is marked (i.e., if the first row or first column at that index is zero).

4. Finally, we check the flags `isFirstRowZero` and `isFirstColZero`. If these flags are true, we set the entire first row or first column to zero, as needed.

This approach modifies the matrix in place and uses **constant space** (O(1) extra space), meaning it doesn't use any additional data structures. The time complexity is O(m * n), where m and n are the number of rows and columns in the matrix.
*/
