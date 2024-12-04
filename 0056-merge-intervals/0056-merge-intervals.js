/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
	// Sort intervals by their start time
	intervals.sort((a, b) => a[0] - b[0]);

	// Initialize an array to store the merged intervals
	const mergedIntervals = [];

	// Iterate through the sorted intervals
	for (const interval of intervals) {
		// If the mergedIntervals array is empty or the current interval does not overlap
		// with the last interval in mergedIntervals, add it to the result
		if (
			mergedIntervals.length === 0 ||
			mergedIntervals[mergedIntervals.length - 1][1] <
				interval[0]
		) {
			mergedIntervals.push(interval);
		} else {
			// If there is an overlap, merge the current interval with the last interval
			// Update the end time of the last interval to the maximum end time
			mergedIntervals[mergedIntervals.length - 1][1] =
				Math.max(
					mergedIntervals[mergedIntervals.length - 1][1],
					interval[1]
				);
		}
	}

	// Return the merged intervals
	return mergedIntervals;
};

// Examples
// Example 1: intervals = [[1,3],[2,6],[8,10],[15,18]]
console.log(
	merge([
		[1, 3],
		[2, 6],
		[8, 10],
		[15, 18],
	])
);
// Output: [[1,6],[8,10],[15,18]]

// Example 2: intervals = [[1,4],[4,5]]
console.log(
	merge([
		[1, 4],
		[4, 5],
	])
);
// Output: [[1,5]]

// Example 3: intervals = [[1,4],[5,6]]
console.log(
	merge([
		[1, 4],
		[5, 6],
	])
);
// Output: [[1,4],[5,6]]

/*
Explanation:
1. Sorting the Intervals:
   - The intervals are sorted by their start time to ensure that we process them in order.
   - Sorting ensures that overlapping intervals are adjacent in the list.

2. Merging Logic:
   - Use a result array (`mergedIntervals`) to store merged intervals.
   - For each interval in the sorted list:
     - If the current interval does not overlap with the last interval in `mergedIntervals`:
       - Add it as a new interval to the result.
     - If there is overlap:
       - Update the end time of the last interval in `mergedIntervals` to the maximum of the overlapping intervals' end times.

3. Returning the Result:
   - After processing all intervals, return the `mergedIntervals` array.

Time Complexity:
- O(n log n): Sorting the intervals takes O(n log n), and iterating through the sorted intervals takes O(n).

Space Complexity:
- O(n): The space used to store the merged intervals.

This approach guarantees that all overlapping intervals are merged into a single interval while maintaining the order of non-overlapping intervals.
*/
