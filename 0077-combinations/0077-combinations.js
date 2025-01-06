/**
 * @param {number} n - The upper limit of the range [1, n] (inclusive)
 * @param {number} k - The number of elements to choose for each combination
 * @return {number[][]} - An array of arrays containing all possible combinations of k numbers from 1 to n
 */
var combine = function (n, k) {
	const result = []; // This array will store the final list of all combinations

	// Helper function to perform backtracking and generate combinations
	const backtrack = (start, currentCombination) => {
		// Base case: when the current combination reaches the length 'k'
		if (currentCombination.length === k) {
			result.push([...currentCombination]); // Add a copy of the current combination to the result
			return; // Return once a valid combination has been found
		}

		// Iterate through numbers starting from 'start' to 'n'
		for (let i = start; i <= n; i++) {
			currentCombination.push(i); // Add the current number to the combination
			backtrack(i + 1, currentCombination); // Recursively explore further combinations starting from 'i + 1'
			currentCombination.pop(); // Remove the last number from the combination to backtrack and explore other possibilities
		}
	};

	// Initiate the backtracking process starting with an empty combination and beginning at number 1
	backtrack(1, []);

	return result; // Return the array containing all the valid combinations of k numbers
};

/*
Explanation:
1. The backtracking function explores all possible combinations by adding each number from `start` to `n` to the `currentCombination` array.
2. For each number `i`, it is added to the `currentCombination`, and the function recurses to generate further combinations with the next numbers.
3. Once the combination has the required length `k`, it is added to the `result` array.
4. After exploring one number, the function backtracks by removing the last number added and trying the next number in the sequence.

Example:

combine(4, 2);
// Output: [[1,2], [1,3], [1,4], [2,3], [2,4], [3,4]]

For the input `n = 4` and `k = 2`, the function generates all possible combinations of 2 numbers from the range [1, 4].

Time Complexity:
- The time complexity is O(C(n, k)), where C(n, k) represents the number of combinations of n items taken k at a time. The function generates all such combinations recursively.

Space Complexity:
- The space complexity is O(k) due to the space used to store the current combination in each recursive call. Additionally, the result array requires O(C(n, k) * k) space to store all the combinations.
*/