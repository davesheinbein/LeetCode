/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function(grid) {
    // Helper function to mark all connected land cells of an island
    function markIsland(i, j) {
        // Base case: if the cell is out of bounds or water, return
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === '0') {
            return;
        }

        // Mark the current cell as visited by setting it to '0'
        grid[i][j] = '0';

        // Recursively visit the neighboring cells (up, down, left, right)
        console.log(`Visiting cell: (${i}, ${j})`);
        markIsland(i - 1, j); // up
        markIsland(i + 1, j); // down
        markIsland(i, j - 1); // left
        markIsland(i, j + 1); // right
    }

    let islandCount = 0;

    // Loop through the entire grid
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            // If we find a land cell ('1'), we have found a new island
            if (grid[i][j] === '1') {
                console.log(`Found a new island at: (${i}, ${j})`);
                islandCount++;
                // Start exploring the island and mark all connected land cells as visited
                markIsland(i, j);
            }
        }
    }

    return islandCount;
};

// Test example 1
const grid1 = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
];
console.log("Number of Islands (Test 1):", numIslands(grid1));

// Test example 2
const grid2 = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
];
console.log("Number of Islands (Test 2):", numIslands(grid2));


/*
Explanation:

1. numIslands` Function:
   - This function takes a 2D grid (a map of land '1' and water '0') as input and returns the total number of islands in the grid.

2. Grid Exploration:
   - We iterate through each cell of the grid.
   - When a '1' (land) is found, we have encountered a new island and increment the `islandCount`.
   - The `markIsland` helper function is then called to explore all connected land cells (i.e., to "mark" the entire island as visited).

3. Depth-First Search (DFS) - `markIsland`:
   - This function performs a Depth-First Search (DFS) to explore the entire island.
   - It works by recursively marking all adjacent land cells (up, down, left, right) as visited by setting them to '0' (water).
   - The recursion ensures that all cells belonging to the same island are visited and marked.

4. Termination of Depth-First Search (DFS):
   - The Depth-First Search (DFS) terminates if a cell is out of bounds or if it is water ('0').

5. Example 1 (grid1):
   - In the first test case, the grid represents a single island, so the function will find one island.
   - The DFS will visit all connected '1's and mark them as '0'.
   - The output will be `1`.

6. Example 2 (grid2):
   - In the second test case, the grid contains three separate islands.
   - The function will detect and count all three islands individually.
   - The output will be `3`.

7. **Log Statements:**
   - **`console.log('Visiting cell:')`** shows each cell visited during the DFS traversal.
   - **`console.log('Found a new island at:')`** indicates the starting point of a new island being discovered.

Output Example:
Found a new island at: (0, 0)
Visiting cell: (0, 0)
Visiting cell: (1, 0)
Visiting cell: (2, 0)
Visiting cell: (2, 1)
Visiting cell: (1, 1)
Visiting cell: (0, 1)
Visiting cell: (0, 2)
Visiting cell: (1, 2)
Number of Islands (Test 1): 1

Found a new island at: (0, 0)
Visiting cell: (0, 0)
Visiting cell: (1, 0)
Visiting cell: (2, 0)
Visiting cell: (2, 1)
Visiting cell: (1, 1)
Visiting cell: (0, 1)
Visiting cell: (0, 2)
Visiting cell: (1, 2)
Found a new island at: (2, 2)
Visiting cell: (2, 2)
Visiting cell: (3, 2)
Visiting cell: (3, 3)
Found a new island at: (3, 3)
Visiting cell: (3, 3)
Number of Islands (Test 2): 3
*/
