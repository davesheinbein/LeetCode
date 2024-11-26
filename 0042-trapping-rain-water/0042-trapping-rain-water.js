/**
 * @param {number[]} height
 * @return {number}
 */

var trap = function (height) {
	let left = 0,
		right = height.length - 1; // Initialize two pointers
	let left_max = 0,
		right_max = 0; // Initialize the max heights from left and right
	let waterTrapped = 0; // Variable to accumulate the water trapped

	while (left <= right) {
		// Continue until the two pointers meet
		if (height[left] <= height[right]) {
			// If the left height is smaller or equal
			if (height[left] >= left_max) {
				// If the current left height is greater than or equal to left_max
				left_max = height[left]; // Update left_max
			} else {
				// Otherwise, we can trap water
				waterTrapped += left_max - height[left];
			}
			left++; // Move the left pointer to the right
		} else {
			// If the right height is smaller
			if (height[right] >= right_max) {
				// If the current right height is greater than or equal to right_max
				right_max = height[right]; // Update right_max
			} else {
				// Otherwise, we can trap water
				waterTrapped += right_max - height[right];
			}
			right--; // Move the right pointer to the left
		}
	}

	return waterTrapped; // Return the total trapped water
};

// Example 1
let height1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log('Example 1 - Trapped Water:', trap(height1)); // Output should be 6

// Example 2
let height2 = [4, 2, 0, 3, 2, 5];
console.log('Example 2 - Trapped Water:', trap(height2)); // Output should be 9

/*
Explanation:

This problem involves calculating the amount of water that can be trapped between bars after raining, given an array representing the heights of the bars. The goal is to find how much water can be trapped between the bars after a rainfall.

We use a two-pointer approach to solve this problem efficiently:

1. Two Pointers: 
   - We initialize two pointers, `left` at the beginning of the array and `right` at the end. These pointers will move towards each other as we calculate the trapped water.

2. Tracking Max Heights: 
   - We keep track of the maximum heights encountered so far from both the left (`left_max`) and the right (`right_max`). These values help determine how much water can be trapped at each position.

3. Water Trapping Logic:
   - We compare the heights at the `left` and `right` pointers:
     - If the height at `left` is smaller than or equal to the height at `right`, we check if the current height at `left` is smaller than `left_max`. If it is, water is trapped, and we add the difference between `left_max` and `height[left]` to the total trapped water. If not, we update `left_max` and move the `left` pointer to the right.
     - If the height at `right` is smaller, we perform the same logic but for the `right` pointer, updating `right_max` and moving the `right` pointer to the left.

4. Summing the Water:
   - The total trapped water is accumulated as we traverse the array from both ends to the center, ensuring that we calculate the trapped water based on the highest possible barriers on either side.

5. Termination:
   - The process continues until the `left` and `right` pointers meet, and the total trapped water is returned.

Time Complexity:
   - O(n), where `n` is the number of elements in the input array. We only need to make a single pass through the array.

Space Complexity:
   - O(1), since we only use a constant amount of extra space for the `left_max`, `right_max`, and `waterTrapped` variables.

The algorithm efficiently computes the total trapped water using a greedy approach with two pointers.
*/
