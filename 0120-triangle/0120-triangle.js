/**
 * @param {number[][]} triangle
 * @return {number}
 */

var minimumTotal = function(triangle) {
    // Start from the second-to-last row and move upwards
    for (let row = triangle.length - 2; row >= 0; row--) {
        for (let col = 0; col < triangle[row].length; col++) {
            // Update the current cell with the minimum path sum
            triangle[row][col] += Math.min(
                triangle[row + 1][col],      // Path to the same index in the next row
                triangle[row + 1][col + 1]  // Path to the next index in the next row
            );
        }
    }

    // The top element contains the minimum path sum
    return triangle[0][0];
};

// Example Usage
console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]])); // Output: 11
console.log(minimumTotal([[-10]])); // Output: -10

/*
Explanation:

The problem requires calculating the minimum path sum from the top of a triangle to its base. At each step, you can only move to adjacent numbers in the row below. To solve this efficiently, we use a bottom-up dynamic programming approach. Here's how:

1. Start from the bottom of the triangle:
   - Instead of starting from the top and working down, we begin from the second-to-last row and calculate the minimum path sum for each element by considering the two possible paths in the row below. This avoids the need for recursion and redundant calculations.

2. Iterative Updates:
   - For each element in the current row, we compute the minimum path sum by adding the current value to the minimum of the two adjacent values in the row below. This effectively reduces the problem size row by row.

3. In-Place Modification:
   - The `triangle` array is updated directly during the computation. This avoids the need for extra space to store intermediate results, making the solution space-efficient.

4. Final Result:
   - By the time we process all rows, the top element of the triangle (`triangle[0][0]`) will contain the minimum path sum.

Why Bottom-Up?
This approach is efficient because:
   - It avoids recomputation: Each subproblem is solved once, and its result is reused.
   - It uses the triangle itself for storing intermediate results, saving space.

Time and Space Complexity:
- Time Complexity: \(O(n^2)\), where \(n\) is the number of rows. We iterate over every element in the triangle.
- Space Complexity: \(O(1)\), as the triangle is updated in place without using additional memory.

*/
