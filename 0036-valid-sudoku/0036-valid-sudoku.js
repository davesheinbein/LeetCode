/**
 * @param {character[][]} board
 * @return {boolean}
 */

var isValidSudoku = function(board) {
    // Create sets to track seen numbers in rows, columns, and sub-boxes
    let rows = new Array(9).fill(null).map(() => new Set());
    let cols = new Array(9).fill(null).map(() => new Set());
    let boxes = new Array(9).fill(null).map(() => new Set());
    
    // Iterate through each cell in the 9x9 board
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let num = board[i][j];
            
            // If the cell is not empty
            if (num !== '.') {
                // Calculate the index of the sub-box (0-8)
                let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                
                // Log the current number and its position
                console.log(`Checking number ${num} at position [${i}, ${j}]`);
                
                // Check if the number has already appeared in the row, column, or sub-box
                if (rows[i].has(num)) {
                    console.log(`Duplicate found in row ${i}: ${num}`);
                    return false;
                }
                if (cols[j].has(num)) {
                    console.log(`Duplicate found in column ${j}: ${num}`);
                    return false;
                }
                if (boxes[boxIndex].has(num)) {
                    console.log(`Duplicate found in box ${boxIndex}: ${num}`);
                    return false;
                }
                
                // Add the number to the respective row, column, and sub-box sets
                rows[i].add(num);
                cols[j].add(num);
                boxes[boxIndex].add(num);
                
                // Log the addition of the number
                console.log(`Added number ${num} to row ${i}, column ${j}, box ${boxIndex}`);
            }
        }
    }
    
    // If no duplicates are found, the board is valid
    console.log('The board is valid');
    return true;
};

// Test case 1: Valid Sudoku
let board1 = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];
console.log(isValidSudoku(board1));  // Expected output: true

// Test case 2: Invalid Sudoku (Duplicate in sub-box)
let board2 = [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];
console.log(isValidSudoku(board2));  // Expected output: false

// Test case 3: Invalid Sudoku (Duplicate in row)
let board3 = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];
console.log(isValidSudoku(board3));  // Expected output: false

// Explaination:
// Sets Creation: It creates sets for each row, column, and 3x3 sub-box to keep track of the numbers seen in those sections.
// Loop through the Board: The code iterates through each cell in the 9x9 Sudoku grid.
// Check for Duplicates: For each non-empty cell, it checks if the number has already appeared in the same row, column, or sub-box.
// Return False on Duplicate: If a duplicate is found, it logs the duplicate's position and returns false (indicating an invalid Sudoku board).
// Track Seen Numbers: If no duplicates are found, the number is added to the respective row, column, and sub-box set.
// Return True if Valid: If the entire board is checked without finding duplicates, the board is valid and true is returned.