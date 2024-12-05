/**
 * @param {number[][]} points
 * @return {number}
 */

var findMinArrowShots = function (points) {
	// Handle the edge case where no balloons exist
	if (points.length === 0) return 0;

	// Sort balloons by their end points
	points.sort((a, b) => a[1] - b[1]);

	// Initialize variables
	let arrows = 1; // Start with one arrow
	let currentEnd = points[0][1]; // The end point of the first balloon

	// Iterate through the balloons
	for (const [start, end] of points) {
		// If the current balloon starts after the previous arrow's end
		if (start > currentEnd) {
			arrows++; // Use a new arrow
			currentEnd = end; // Update the current end to this balloon's end
		}
	}

	// Return the number of arrows needed
	return arrows;
};

// Examples
// Example 1
console.log(
	findMinArrowShots([
		[10, 16],
		[2, 8],
		[1, 6],
		[7, 12],
	])
);
// Output: 2

// Example 2
console.log(
	findMinArrowShots([
		[1, 2],
		[3, 4],
		[5, 6],
		[7, 8],
	])
);
// Output: 4

// Example 3
console.log(
	findMinArrowShots([
		[1, 2],
		[2, 3],
		[3, 4],
		[4, 5],
	])
);
// Output: 2

/*
Explanation:
1. Sorting:
   - To minimize the number of arrows, we aim to burst as many overlapping balloons as possible with one arrow.
   - Sorting the balloons by their end points ensures that we process them in an order where overlapping balloons are grouped together.

2. Logic:
   - Start with one arrow for the first balloon.
   - Iterate through the balloons:
     - If the next balloon starts after the current arrow's effective range (the end of the last burst balloon), use a new arrow and update the effective range.
     - Otherwise, the current arrow can still burst this balloon, so no additional arrow is needed.

3. Efficiency:
   - Time Complexity: O(n log n) due to sorting, where `n` is the number of balloons.
   - Space Complexity: O(1) for in-place iteration and tracking variables.

4. Edge Cases:
   - Single balloon: The function correctly returns 1 arrow.
   - Non-overlapping balloons: Each balloon requires its own arrow.
   - Fully overlapping balloons: The function correctly groups them with one arrow.
*/
