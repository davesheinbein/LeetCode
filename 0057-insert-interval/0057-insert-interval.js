/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

var insert = function (intervals, newInterval) {
	// Initialize an array to store the result
	const result = [];

	// Iterate through the intervals
	for (const interval of intervals) {
		// If the current interval is completely before the new interval
		if (interval[1] < newInterval[0]) {
			result.push(interval);
		}
		// If the current interval is completely after the new interval
		else if (interval[0] > newInterval[1]) {
			result.push(newInterval);
			newInterval = interval; // Update newInterval to continue adding remaining intervals
		}
		// If the current interval overlaps with the new interval, merge them
		else {
			newInterval[0] = Math.min(
				newInterval[0],
				interval[0]
			);
			newInterval[1] = Math.max(
				newInterval[1],
				interval[1]
			);
		}
	}

	// Add the remaining newInterval (if any) to the result
	result.push(newInterval);

	// Return the result array
	return result;
};

// Examples
// Example 1: intervals = [[1,3],[6,9]], newInterval = [2,5]
console.log(
	insert(
		[
			[1, 3],
			[6, 9],
		],
		[2, 5]
	)
);
// Output: [[1,5],[6,9]]

// Example 2: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
console.log(
	insert(
		[
			[1, 2],
			[3, 5],
			[6, 7],
			[8, 10],
			[12, 16],
		],
		[4, 8]
	)
);
// Output: [[1,2],[3,10],[12,16]]

// Example 3: intervals = [], newInterval = [4,8]
console.log(insert([], [4, 8]));
// Output: [[4,8]]

// Example 4: intervals = [[1,5]], newInterval = [2,3]
console.log(insert([[1, 5]], [2, 3]));
// Output: [[1,5]]

/*
Explanation:
1. Overview:
   - The goal is to insert a new interval into a sorted array of non-overlapping intervals and merge any overlapping intervals.
   - We process intervals in three main cases:
     1. Intervals completely before the new interval.
     2. Intervals completely after the new interval.
     3. Intervals overlapping with the new interval.

2. Key Steps:
   - Traverse the `intervals` array:
     - If the current interval ends before the `newInterval` starts, add it directly to the result.
     - If the current interval starts after the `newInterval` ends, add the `newInterval` and update `newInterval` to the current interval (to process future intervals).
     - If there’s overlap, merge the intervals by updating the start and end of `newInterval` to include both intervals.
   - After the loop, add the remaining `newInterval` to the result.

3. Efficiency:
   - Time Complexity: O(n), where `n` is the number of intervals. Each interval is processed once.
   - Space Complexity: O(n), for the result array.

This ensures that the output array is sorted and contains no overlapping intervals.
*/
