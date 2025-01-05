/**
 * @param {string[][]} equations - Array of variable pairs representing equations.
 * @param {number[]} values - Array of division results corresponding to each equation.
 * @param {string[][]} queries - Array of variable pairs for which to compute results.
 * @return {number[]} - Array of results for each query.
 */

var calcEquation = function (equations, values, queries) {
	// Build the graph
	const graph = {};

	for (let i = 0; i < equations.length; i++) {
		const [A, B] = equations[i]; // A / B = values[i]
		const value = values[i];

		// Initialize adjacency lists for A and B if not already present
		if (!graph[A]) graph[A] = {};
		if (!graph[B]) graph[B] = {};

		// Add the direct and reverse relationships
		graph[A][B] = value; // A → B with weight = value
		graph[B][A] = 1 / value; // B → A with weight = 1 / value
	}

	// Helper function for Depth-First Search (DFS)
	const dfs = (start, end, visited) => {
		// If either variable is not in the graph, return -1.0 (undefined division)
		if (!(start in graph) || !(end in graph)) return -1.0;

		// If the start and end variables are the same, the result is 1.0 (self-division)
		if (start === end) return 1.0;

		// Mark the current variable as visited
		visited.add(start);

		// Explore all neighbors of the current variable
		for (const neighbor in graph[start]) {
			if (!visited.has(neighbor)) {
				// Avoid revisiting nodes
				// Recursively attempt to find a path to the target variable
				const result = dfs(neighbor, end, visited);
				if (result !== -1.0) {
					// If a valid path is found
					return result * graph[start][neighbor];
				}
			}
		}

		// Return -1.0 if no valid path to the target variable exists
		return -1.0;
	};

	// Process each query
	const results = [];
	for (const [C, D] of queries) {
		const visited = new Set(); // Reset visited set for each query
		results.push(dfs(C, D, visited)); // Compute result using DFS
	}

	return results; // Return the array of query results
};

/**
Detailed Explanation:

 1. Graph Construction:
    - The graph represents variables as nodes and equations as directed edges with weights.
    - For each equation "A / B = k", create an edge A → B with weight `k` and B → A with weight `1 / k`.

 2. DFS Traversal:
    - To evaluate a query "C / D", perform a DFS from C to D.
    - Multiply the edge weights along the path to compute the result.
    - If no path exists or the variables are not in the graph, return -1.0.

 3. Handling Edge Cases:
    - If a variable in the query does not exist in the graph, return -1.0.
    - If the start and end variables are the same, return 1.0.
    - Avoid cycles by tracking visited nodes.

 4. Complexity:
    - Graph construction: O(E), where E is the number of equations.
    - Each query: O(V + E) in the worst case, where V is the number of variables.
    - Total complexity: O(E + Q * (V + E)), where Q is the number of queries.
 */
