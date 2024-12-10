/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
	if (!node) return null; // Handle edge case of empty graph.

	const clonedNodes = new Map(); // To store cloned nodes by their value.

	// Helper function to clone a node recursively.
	const dfsClone = (currentNode) => {
		if (clonedNodes.has(currentNode.val)) {
			return clonedNodes.get(currentNode.val);
		}

		// Clone the current node.
		const clone = new _Node(currentNode.val);
		clonedNodes.set(currentNode.val, clone);

		// Clone all neighbors recursively.
		for (const neighbor of currentNode.neighbors) {
			clone.neighbors.push(dfsClone(neighbor));
		}

		return clone;
	};

	return dfsClone(node);
};

/**
  Explanation:
 
  The function `cloneGraph` creates a deep copy of an undirected graph. Each node in the graph contains a value and a list of its neighbors.
 
  Steps:
  1. If the input graph is empty (i.e., `node === null`), return `null`.
  2. Use a Depth-First Search (DFS) approach to traverse the graph:
     - Maintain a `Map` to store already cloned nodes by their value.
     - If a node has been visited before, return its clone from the map to avoid duplication or infinite loops.
     - Otherwise, clone the node, add it to the map, and recursively clone its neighbors.
  3. Start the traversal from the input node and return the clone of the graph.
 
  Edge Cases:
  - Empty graph: Return `null`.
  - Graph with a single node and no neighbors: Clone the single node with an empty neighbors list.
  - Cyclic graph: Handle cycles gracefully using the `Map` to track cloned nodes.
 
  Example:
 
  Input Graph (Adjacency List Representation): `[[2, 4], [1, 3], [2, 4], [1, 3]]`
 
  Process:
  1. Clone node 1:
     - Neighbors: [2, 4]. Clone them recursively.
  2. Clone node 2:
     - Neighbors: [1, 3]. Node 1 is already cloned, so reuse its clone.
  3. Clone node 4:
     - Neighbors: [1, 3]. Node 1 is already cloned, so reuse its clone.
  4. Continue until all nodes are cloned.
 
  Output: `[[2, 4], [1, 3], [2, 4], [1, 3]]`
 
  Complexity:
  - Time Complexity: \(O(V + E)\), where \(V\) is the number of nodes and \(E\) is the number of edges. Each node and edge is processed once.
  - Space Complexity: \(O(V)\), for the `Map` and the DFS call stack.
 
  Key Concepts:
 
  1. Graph Representation:
     - A graph is composed of nodes with neighbors (adjacent nodes).
     - Cloning involves creating new instances of nodes and ensuring all connections (edges) are accurately replicated.
 
  2. DFS Traversal:
     - DFS is used to traverse the graph recursively. For each node, its neighbors are cloned before moving to the next.
 
  3. Avoiding Duplication:
     - Use a `Map` to store already cloned nodes by their values. This prevents re-cloning and handles cycles in the graph.
 
  4. Recursive Node Cloning:
     - The process involves cloning the current node, storing it in the map, and recursively cloning its neighbors.
 */
