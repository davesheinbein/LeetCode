/**
 * @param {number[][]} board
 * @return {number}
 */

var snakesAndLadders = function(board) {
    console.log('Original board:', board);
    const boardSize = board.length; // The size of the board (n x n)
    const totalSquares = boardSize * boardSize; // The total number of squares on the board (n^2)

    // Flatten the 2D board into a 1D array representing the board
    // We iterate over each row and alternate the direction for odd rows
    let flattenedBoard = new Array(totalSquares).fill(-1); // 0-based array
    let index = 0;

    console.log('Flattening the board...');

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

    // 0-based array
    console.log('Flattened Board (0-based array):', flattenedBoard);
    
    // BFS (Breadth-First Search) setup to find the shortest path to the last square
    let queue = [[0, 0]]; // Start from square 1 (index 0)
    let visitedSquares = new Array(totalSquares).fill(false); // Array to keep track of visited squares
    visitedSquares[0] = true; // Mark the first square as visited

    console.log('Starting BFS to find the shortest path to the last square...');

    while (queue.length > 0) {
        // Remove the first element from the queue and get the current square and dice rolls
        let [currentSquare, diceRolls] = queue.shift();
        
        // Inside the BFS loop, where you're processing squares:
        console.log(`Landed on square ${currentSquare + 1} (Index: ${currentSquare}), Dice rolls: ${diceRolls}`);

        
        // If we've reached the last square (n^2 - 1), return the number of dice rolls
        if (currentSquare === totalSquares - 1) {
            console.log(`Reached the last square! Total dice rolls: ${diceRolls}`);
            return diceRolls;
        }
        
        // Try all dice rolls from 1 to 6
        for (let dice = 1; dice <= 6; dice++) {
            let nextSquare = currentSquare + dice; // Calculate the next square based on the dice roll
            
            // Prevent going out of bounds of the board
            if (nextSquare >= totalSquares) break;
            
            // Check if there's a snake or ladder at the next square
            if (flattenedBoard[nextSquare] !== -1) {
                // A snake or ladder sends the player directly to the destination square
                nextSquare = flattenedBoard[nextSquare] - 1; // Adjust because the destination is 1-based
                console.log("nextSquare set", nextSquare + 1);
                // convert from 0-based indexing to 1-based indexing
                // console.log(`Landed on a snake/ladder, moving from square ${currentSquare + 1} to ${nextSquare + 1}`);
            } else {
                // No snake or ladder, move normally
                // convert from 0-based indexing to 1-based indexing
                // console.log(`Moving from square ${currentSquare + 1} to square ${nextSquare + 1}`);
            }
            
            // If the next square hasn't been visited, mark it and add it to the queue
            if (!visitedSquares[nextSquare]) {
                visitedSquares[nextSquare] = true;
                queue.push([nextSquare, diceRolls + 1]);
                console.log(`Adding square ${nextSquare + 1} to the queue with ${diceRolls + 1} dice rolls.`);
            }
        }
    }
    
    // If we can't reach the last square, return -1
    console.log('Unable to reach the last square. Returning -1.');
    return -1;
};

// Example board for testing
board = [
    [-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1],
    [-1,35,-1,-1,13,-1],
    [-1,-1,-1,-1,-1,-1],
    [-1,15,-1,-1,-1,-1]
]
// Test the function with example board A
console.log('A Minimum number of dice rolls:', snakesAndLadders(board));
console.log('-----');

// Test the function with example board B
// boardB = [
//     [-1,-1],
//     [-1,3]
// ]

// console.log('B Minimum number of dice rolls:', snakesAndLadders(boardB));



/*
Explanation:

The problem asks to find the minimum number of dice rolls required to reach the last square on a snakes-and-ladders board, starting from the first square. The board is represented as a 2D array, where each element can either be:
- -1, indicating an empty square.
- A positive number, which indicates a ladder that takes you directly to the square at that position.
- A negative number, representing a snake, which takes you to a square with the corresponding number.

We can treat the board as an unweighted graph, where each square is a node, and the dice rolls define possible edges to neighboring nodes. The objective is to find the shortest path from the first square to the last square.

1. Flattening the Board (2D to 1D transformation):
   - The input board is a 2D array, but to simplify our logic (since BFS typically works with a 1D array for easier indexing), we convert the 2D board into a 1D array.
   - The board is traversed in a "Boustrophedon" style, which means:
     - For odd-indexed rows (from the bottom), we traverse from right to left.
     - For even-indexed rows (from the bottom), we traverse from left to right.
   - This transformation makes it easier to handle the board's unique structure and helps us index the board using a simple 1D array.
   - The flattened array will have a length of `n^2` (where `n` is the side length of the square grid).

2. Breadth-First Search (BFS) for the Shortest Path:
   - BFS is chosen because it efficiently finds the shortest path in an unweighted graph.
   - We use a queue to explore the board level by level (i.e., dice roll by dice roll). Each element in the queue represents a square on the board, along with the number of dice rolls taken to reach that square.
   - Starting from the first square (index 0), we try all possible dice rolls (1 through 6) to explore the next squares. For each dice roll, we calculate the destination square and check if it’s a snake or ladder.
     - If it’s a ladder or snake, we adjust the destination to the corresponding square.
     - If not, we simply move to the square resulting from the dice roll.

3. Tracking Visited Squares:
   - To avoid revisiting squares and causing infinite loops, we maintain an array `visitedSquares` where each index corresponds to a square on the board. If a square has been visited before, it is skipped in future dice rolls.
   - This ensures that the BFS doesn’t waste time exploring already visited squares and guarantees that the shortest path is found.

4. Termination Condition:
   - The BFS continues until the queue is empty or we reach the last square (`n^2 - 1`).
   - If we reach the last square, we return the number of dice rolls taken to get there, as that represents the shortest path.
   - If the BFS completes without reaching the last square (i.e., the queue is exhausted), we return `-1`, indicating that it's impossible to reach the last square (which should never happen with a valid board setup).

Time Complexity:
   - The time complexity of this solution is O(n^2), where `n` is the side length of the square grid.
   - BFS processes each square at most once, and for each square, we attempt to move in 6 possible directions (1 through 6 dice rolls).
   - Since the number of squares is `n^2`, the total number of operations is proportional to `n^2`, making this approach efficient for typical board sizes.

In summary, we flatten the board to simplify movement logic, apply BFS to explore the shortest path using dice rolls, and track visited squares to ensure we don’t process a square more than once. The BFS guarantees that we find the minimum number of rolls required to reach the last square.

*/
