/**
 * // Definition for a QuadTree node.
 * function _Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {_Node}
 */
var construct = function (grid) {
	// Helper function to determine if all values in a sub-grid are the same
	const isUniform = (x1, y1, x2, y2) => {
		const value = grid[x1][y1];
		for (let i = x1; i < x2; i++) {
			for (let j = y1; j < y2; j++) {
				if (grid[i][j] !== value) {
					return false;
				}
			}
		}
		return true;
	};

	// Recursive function to build the Quad-Tree
	const build = (x1, y1, x2, y2) => {
		if (isUniform(x1, y1, x2, y2)) {
			// All values in the grid are the same
			return new _Node(
				grid[x1][y1] === 1,
				true,
				null,
				null,
				null,
				null
			);
		}

		// Otherwise, divide the grid into four quadrants
		const midX = Math.floor((x1 + x2) / 2);
		const midY = Math.floor((y1 + y2) / 2);

		return new _Node(
			true, // Arbitrary value since it's not a leaf node
			false, // This is not a leaf node
			build(x1, y1, midX, midY), // Top-left quadrant
			build(x1, midY, midX, y2), // Top-right quadrant
			build(midX, y1, x2, midY), // Bottom-left quadrant
			build(midX, midY, x2, y2) // Bottom-right quadrant
		);
	};

	// Start constructing the Quad-Tree from the entire grid
	return build(0, 0, grid.length, grid.length);
};

/*
Explanation:
1. Uniform Check: The `isUniform` helper function checks if all values in a given sub-grid are the same. If they are, a leaf node is created.
2. Recursive Build: The `build` function divides the grid into four quadrants (top-left, top-right, bottom-left, bottom-right) and recursively constructs the Quad-Tree for each quadrant.
3. Node Construction: A node is created with either:
   - `isLeaf = true` if the grid is uniform.
   - `isLeaf = false` if the grid is not uniform, and children are created recursively.

Example:

Input: grid = [[0,1],[1,0]]

1. The grid is divided into four quadrants:
   - Top-left: [0]
   - Top-right: [1]
   - Bottom-left: [1]
   - Bottom-right: [0]

2. Since each quadrant has uniform values, leaf nodes are created for each.

Output:
A Quad-Tree representation:
[[0, 1], [1, 0], [1, 1], [1, 1], [1, 0]]

Time Complexity:
- The time complexity is \(O(n^2 \log n)\):
  - \(O(n^2)\) for the uniform check of each grid.
  - \(\log n\) levels of recursion for a grid of size \(n \times n\).

Space Complexity:
- The space complexity is \(O(\log n)\) due to the recursive call stack.
- Additional memory is used for the nodes created, but it is proportional to the input grid size.

*/
