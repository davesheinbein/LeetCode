/**
 * @param {number[][]} matrix - A 2D array representing the image.
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var rotate = function(matrix) {
    const n = matrix.length; // The size of the n x n matrix

    // Transpose the matrix (swap rows and columns)
    // We iterate through the upper triangle of the matrix (i < j) and swap element [i][j] with [j][i]
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]; // Swap elements in place
        }
    }

    // Reverse each row
    // After the transpose, each row needs to be reversed to complete the 90-degree rotation
    for (let i = 0; i < n; i++) {
        matrix[i].reverse(); // Reverse each row of the matrix in place
    }
};

// Examples:
const matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
rotate(matrix1);
console.log(matrix1); // Output: [[7, 4, 1], [8, 5, 2], [9, 6, 3]]

const matrix2 = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]];
rotate(matrix2);
console.log(matrix2); // Output: [[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]

/*
Explanation:

1. Transpose the matrix:
   - Swap element matrix[i][j] with matrix[j][i] for all i < j.
   - This step converts rows into columns. By transposing, the matrix starts to resemble a 90-degree rotation, but the rows are not yet in the correct order.

2. Reverse each row:
   - Flip the elements of each row to achieve the 90-degree rotation. After transposing, each row needs to be reversed for the final transformation.

The transformation is done in-place, meaning no extra space is used for another matrix. This satisfies the problem's constraint of modifying the matrix in place.

This is a great problem to practice working with in-place transformations, which is a useful skill when optimizing memory usage in large applications or when working on performance-sensitive projects like optimizing user interfaces for responsiveness.
*/
