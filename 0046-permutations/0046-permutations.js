/**
 * @param {number[]} nums - An array of distinct integers
 * @return {number[][]} - A 2D array containing all possible permutations of the input array
 */
var permute = function(nums) {
	const result = []; // This will store the list of all permutations

	// Helper function to generate permutations using recursion and backtracking
	const backtrack = (currentPermutation) => {
		// Base case: if the current permutation has the same length as the input array, add it to the result
		if (currentPermutation.length === nums.length) {
			result.push([...currentPermutation]); // Store a copy of the current permutation
			return;
		}

		// Iterate through each number in the input array
		for (let i = 0; i < nums.length; i++) {
			// If the number is already in the current permutation, skip it
			if (currentPermutation.includes(nums[i])) {
				continue;
			}

			// Add the current number to the permutation and recurse
			currentPermutation.push(nums[i]);
			backtrack(currentPermutation); // Recursive call to generate further permutations
			currentPermutation.pop(); // Backtrack by removing the last number to try other possibilities
		}
	};

	// Start the recursion and backtracking with an empty permutation
	backtrack([]);

	return result; // Return the list of all generated permutations
};

/*
Explanation:
1. The recursive `backtrack` function generates all possible permutations by adding each number from the input array to the current permutation.
2. For each number, we check if it already exists in the current permutation to avoid duplicates.
3. Once the permutation reaches the same length as the input array, it is added to the result array.
4. After exploring one number, the function backtracks by removing it and recursively explores other possibilities.

Example:

permute([1, 2, 3]);
// Output: [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]

For the input `nums = [1, 2, 3]`, the function generates all possible permutations of the array using recursion and backtracking.

Time Complexity:
- The time complexity is O(n!), where n is the length of the input array, because there are n! possible permutations for an array of length n.

Space Complexity:
- The space complexity is O(n) due to the space used for storing the current permutation during the recursion and backtracking process. Additionally, the result array requires O(n!) space to store all the permutations.
*/
