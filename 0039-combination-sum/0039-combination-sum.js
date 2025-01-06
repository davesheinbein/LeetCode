/**
 * @param {number[]} candidates - An array of distinct integers as potential candidates
 * @param {number} target - The target sum
 * @return {number[][]} - A list of all unique combinations where the chosen numbers sum to target
 */
var combinationSum = function(candidates, target) {
    const result = []; // This will store the list of all unique combinations

    // Helper function to perform backtracking
    const backtrack = (currentCombination, startIndex, remainingTarget) => {
        // Base case: if the remaining target is 0, add the current combination to the result
        if (remainingTarget === 0) {
            result.push([...currentCombination]); // Store a copy of the current combination
            return;
        }

        // Iterate through candidates starting from the current index
        for (let i = startIndex; i < candidates.length; i++) {
            const candidate = candidates[i];

            // Skip this candidate if it exceeds the remaining target
            if (candidate > remainingTarget) continue;

            // Include the current candidate in the combination
            currentCombination.push(candidate);

            // Recurse with the updated combination and reduced target
            // Note: `i` is passed to allow the same candidate to be reused
            backtrack(currentCombination, i, remainingTarget - candidate);

            // Backtrack by removing the last added candidate
            currentCombination.pop();
        }
    };

    // Start the backtracking with an empty combination and the full target
    backtrack([], 0, target);

    return result; // Return the list of all valid combinations
};

/*
Explanation:
1. The backtracking function generates combinations by iterating through the candidates array.
2. At each step, it checks if the remaining target can accommodate the current candidate.
3. If the target reaches 0, the current combination is valid and added to the result.
4. Candidates can be reused, so the `startIndex` remains unchanged for recursive calls on the same candidate.
5. Backtracking ensures that after exploring one path, the function tries another by removing the last element added.

Example:

combinationSum([2, 3, 6, 7], 7);
// Output: [[2, 2, 3], [7]]

For the input `candidates = [2, 3, 6, 7]` and `target = 7`, the function generates all combinations where numbers sum to 7.

Time Complexity:
- The time complexity is O(2^t), where `t` is the target value, as the recursion explores all possible combinations of candidates to reach the target. However, pruning based on the target significantly reduces unnecessary exploration.

Space Complexity:
- The space complexity is O(t) due to the space used by the recursion stack and the temporary list `currentCombination` during backtracking. Additionally, the result array will require space proportional to the number of valid combinations.

*/
