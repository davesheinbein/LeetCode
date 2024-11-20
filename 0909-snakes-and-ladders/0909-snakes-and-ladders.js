/**
 * @param {number[][]} board
 * @return {number}
 */

var snakesAndLadders = function(board) {
    const boardSize = board.length; // The size of the board (n x n)
    const totalSquares = boardSize * boardSize; // The total number of squares on the board (n^2)

    // Helper function to convert 2D coordinates to a 1D index
    // This will allow easier handling of the board as a linear array
    function getIndex(row, col) {
        return (row * boardSize) + col;
    }

    // Flatten the 2D board into a 1D array representing the board
    // We iterate over each row and alternate the direction for odd rows
    let flattenedBoard = new Array(totalSquares).fill(-1);
    let index = 0;

    // Traverse each row from bottom to top
    for (let row = boardSize - 1; row >= 0; row--) {
        if (row % 2 === boardSize % 2) { // Right to left direction for odd rows
            for (let col = boardSize - 1; col >= 0; col--) {
                flattenedBoard[index++] = board[row][col];
            }
        } else { // Left to right direction for even rows
            for (let col = 0; col < boardSize; col++) {
                flattenedBoard[index++] = board[row][col];
            }
        }
    }

    // BFS (Breadth-First Search) setup to find the shortest path to the last square
    let queue = [[0, 0]]; // Start from square 1 (index 0)
    let visitedSquares = new Array(totalSquares).fill(false); // Array to keep track of visited squares
    visitedSquares[0] = true; // Mark the first square as visited

    while (queue.length > 0) {
        let [currentSquare, diceRolls] = queue.shift(); // Dequeue the current square and dice rolls
        
        // If we've reached the last square (n^2 - 1), return the number of dice rolls
        if (currentSquare === totalSquares - 1) {
            return diceRolls;
        }
        
        // Try all dice rolls from 1 to 6
        for (let dice = 1; dice <= 6; dice++) {
            let nextSquare = currentSquare + dice; // Calculate the next square based on the dice roll
            if (nextSquare >= totalSquares) break; // Don't go out of bounds of the board
            
            // If there's a snake or ladder at the next square, move directly to its destination
            if (flattenedBoard[nextSquare] !== -1) {
                nextSquare = flattenedBoard[nextSquare] - 1; // Destination of the snake or ladder
            }
            
            // If the next square hasn't been visited, mark it and add it to the queue
            if (!visitedSquares[nextSquare]) {
                visitedSquares[nextSquare] = true;
                queue.push([nextSquare, diceRolls + 1]);
            }
        }
    }
    
    // If we can't reach the last square, return -1
    return -1;
};

/*
Explanation:

The goal of this problem is to find the least number of dice rolls required to reach the last square on a snakes-and-ladders board.

1. Flatten the board: The input is a 2D board, but we need to treat it as a 1D array to simplify the movement logic. The board has an alternating row traversal pattern (Boustrophedon style), so we process the rows starting from the bottom and alternate between left-to-right and right-to-left.

2. Breadth-First Search (BFS): To find the shortest path to the last square, we use BFS, which is ideal for unweighted graphs like this. Starting from square 1, we try all possible moves (1 through 6) from each square, and for each possible destination, we either move directly to it or follow a snake or ladder if present.

3. Queue and Visited Squares: We use a queue to explore squares and store the number of dice rolls taken to reach each square. We also maintain a visited array to prevent revisiting squares, ensuring that we don't loop indefinitely.

4. End Condition: If we reach the last square, we return the number of dice rolls. If the queue is exhausted without reaching the last square, we return -1, indicating it's impossible to reach the last square.

Time complexity is O(n^2) where n is the board size, since BFS explores each square once and each dice roll leads to at most 6 possible moves.
*/
