/**
 * @param {number} numCourses - Total number of courses
 * @param {number[][]} prerequisites - List of prerequisite pairs where prerequisites[i] = [a, b] means course b is a prerequisite for course a
 * @return {number[]} - A valid order of courses to finish all courses, or an empty array if it's not possible
 */

var findOrder = function (numCourses, prerequisites) {
	// Initialize the graph and in-degree array
	// The graph is represented as an adjacency list.
	const graph = Array.from(
		{ length: numCourses },
		() => []
	);
	const inDegree = Array(numCourses).fill(0); // inDegree[i] represents the number of prerequisites for course i.

	// Build the graph and compute in-degrees
	for (const [course, prereq] of prerequisites) {
		graph[prereq].push(course); // Add a directed edge prereq → course
		inDegree[course]++; // Increment the in-degree of the course
	}

	// Initialize the queue with courses that have no prerequisites
	const queue = [];
	for (let i = 0; i < numCourses; i++) {
		if (inDegree[i] === 0) {
			queue.push(i); // Courses with in-degree 0 can be taken immediately
		}
	}

	// Process the courses in topological order
	const order = []; // List to store the course order
	while (queue.length > 0) {
		const course = queue.shift(); // Remove the first course in the queue
		order.push(course); // Add it to the course order

		// For each course dependent on the current course:
		for (const nextCourse of graph[course]) {
			inDegree[nextCourse]--; // Reduce the in-degree of the dependent course
			if (inDegree[nextCourse] === 0) {
				queue.push(nextCourse); // If in-degree becomes 0, add it to the queue
			}
		}
	}

	// Check if all courses are processed
	// If the order contains all courses, return the order. Otherwise, return an empty array (cycle detected).
	return order.length === numCourses ? order : [];
};

/*
Explanation:

1. Graph Representation:
   - The graph represents course dependencies. If course `b` is a prerequisite for course `a`, the graph will have a directed edge from `b` to `a`.
   - The `inDegree` array counts how many prerequisites each course has.

2. Topological Sorting:
   - Use Kahn's algorithm for topological sorting:
     - Start with courses that have no prerequisites (`inDegree = 0`).
     - Process each course by reducing the in-degree of its dependent courses.
     - If a dependent course’s in-degree becomes 0, add it to the queue.
   - Add courses to the `order` list as they are processed.

3. Cycle Detection:
   - If there’s a cycle, some courses will remain with non-zero in-degrees, and the `order` list will not contain all courses.
   - Return an empty array if a cycle is detected.

4. Time Complexity:
   - Building the graph and in-degree array: \(O(P)\), where \(P\) is the number of prerequisite pairs.
   - Processing the graph: \(O(V + E)\), where \(V\) is the number of courses and \(E\) is the number of edges (prerequisite pairs).
   - Total: \(O(V + E)\).

5. Space Complexity:
   - Graph storage: \(O(V + E)\), as the adjacency list stores all edges.
   - Queue and in-degree array: \(O(V)\).
   - Total: \(O(V + E)\).
*/
