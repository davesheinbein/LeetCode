/**
 * @param {number} numCourses - Total number of courses
 * @param {number[][]} prerequisites - List of prerequisite pairs where prerequisites[i] = [a, b] means you must take course b before course a
 * @return {boolean} - True if all courses can be finished, otherwise false
 */

var canFinish = function (numCourses, prerequisites) {
	// Initialize the graph and in-degree array
	// The graph is represented as an adjacency list.
	// For each course `i`, graph[i] stores the list of courses dependent on course `i`.
	const graph = Array.from(
		{ length: numCourses },
		() => []
	);

	// The in-degree array keeps track of the number of prerequisites for each course.
	const inDegree = Array(numCourses).fill(0);

	// Build the graph and compute in-degrees
	for (const [course, prereq] of prerequisites) {
		graph[prereq].push(course); // Create a directed edge from prereq → course
		inDegree[course]++; // Increment the in-degree of the course, indicating an additional prerequisite
	}

	// Initialize the queue with courses that have no prerequisites
	// Courses with an in-degree of 0 can be taken immediately since they do not depend on any other course.
	const queue = [];
	for (let i = 0; i < numCourses; i++) {
		if (inDegree[i] === 0) {
			queue.push(i); // Add courses with no prerequisites to the queue
		}
	}

	// Process the courses in topological order
	// Use a counter to track how many courses have been successfully completed.
	let completedCourses = 0;

	while (queue.length > 0) {
		const course = queue.shift(); // Remove the first course in the queue
		completedCourses++; // Mark this course as completed

		// Loop through all courses that depend on the current course
		for (const nextCourse of graph[course]) {
			inDegree[nextCourse]--; // Decrease the in-degree of the dependent course
			if (inDegree[nextCourse] === 0) {
				queue.push(nextCourse); // If the dependent course has no remaining prerequisites, add it to the queue
			}
		}
	}

	// Check if all courses are completed
	// If the number of completed courses matches the total number of courses, return true (all courses can be finished).
	// Otherwise, return false (a cycle exists, preventing all courses from being completed).
	return completedCourses === numCourses;
};

/*
Explanation:

1. Graph Representation:
   - The graph represents course dependencies. If course `b` is a prerequisite for course `a`, the graph will have a directed edge from `b` to `a`.
   - The `inDegree` array is used to count the number of prerequisites (incoming edges) for each course.

2. Topological Sorting:
   - Start by adding courses with no prerequisites (in-degree = 0) to a queue.
   - Process each course in the queue by reducing the in-degree of its dependent courses.
   - If a dependent course’s in-degree reaches 0, it means all its prerequisites are satisfied, and it can be added to the queue.

3. Cycle Detection:
   - If the number of courses completed (`completedCourses`) equals the total number of courses (`numCourses`), it means all courses can be taken, and there are no cycles.
   - If there is a cycle, some courses will remain with non-zero in-degrees, and `completedCourses` will not reach `numCourses`.

4. Time Complexity:
   - Building the graph and in-degree array: \(O(P)\), where \(P\) is the number of prerequisite pairs.
   - Processing the graph (each edge and node): \(O(V + E)\), where \(V\) is the number of courses (vertices) and \(E\) is the number of prerequisite pairs (edges).
   - Overall: \(O(V + E)\).

5. Space Complexity:
   - Graph storage: \(O(V + E)\), as the adjacency list stores all edges.
   - Queue and in-degree array: \(O(V)\).
   - Overall: \(O(V + E)\).
*/
