function minCostClimbingStairs(cost) {
    // Edge case: If the cost array has fewer than 2 steps, 
    // we don't need to climb any stairs, so return 0.
    if (cost.length < 2) return 0;

    // Initialize two variables to keep track of the minimum cost 
    // to reach the last two steps as we iterate through the array.
    // `prev1` represents the minimum cost to reach the second step.
    // `prev2` represents the minimum cost to reach the first step.
    let prev1 = cost[1]; // Start with the cost at index 1
    let prev2 = cost[0]; // Start with the cost at index 0

    // Iterate from the third step (index 2) up to the last step in the array.
    for (let i = 2; i < cost.length; i++) {
        // Calculate the minimum cost to reach the current step (cost[i]).
        // To reach step `i`, we can come from either `i - 1` or `i - 2`.
        // Therefore, the minimum cost to reach `i` is the cost at `cost[i]`
        // plus the smaller of the costs to reach the previous two steps (prev1, prev2).
        let current = cost[i] + Math.min(prev1, prev2);
        
        // Move our "previous" steps forward:
        // - Set `prev2` to `prev1` (the cost to reach the second-to-last step),
        // - Set `prev1` to `current` (the newly calculated cost to reach the current step).
        prev2 = prev1;
        prev1 = current;
    }

    // The final answer is the minimum of the last two steps (`prev1` and `prev2`).
    // Since we can "reach the top" by being on either of the last two steps,
    // we return the smaller of the two costs.
    return Math.min(prev1, prev2);
}

// Test cases to verify the solution
console.log(minCostClimbingStairs([10, 15, 20])); // Expected output: 15
// Explanation: Starting at index 1 with cost 15, we can reach the top with minimal cost.

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])); // Expected output: 6
// Explanation: By stepping on low-cost stairs (1), we achieve the minimum total cost to reach the top.

console.log(minCostClimbingStairs([0, 0, 1, 1])); // Expected output: 1
// Explanation: Starting from either step with cost 0, we can step on a 1-cost stair to reach the top.

console.log(minCostClimbingStairs([1, 0, 1, 0])); // Expected output: 0
// Explanation: By stepping on zero-cost stairs, we reach the top without paying any cost.

console.log(minCostClimbingStairs([10, 15]));     // Expected output: 10
// Explanation: We can start from the step with the lower initial cost (index 0 with cost 10).


/**
Explanation of Each Part

Edge Case:
If there are fewer than 2 steps, we can return 0 since there's no climbing to do.

Initialize Variables:
prev1 and prev2 store the minimum cost to reach the previous two steps (prev1 is the cost to reach step 1, and prev2 is the cost to reach step 0 initially).

Dynamic Programming Loop:
Starting from the third step (i = 2), calculate the minimum cost to reach each step.
To calculate the cost of reaching step i, we add the cost of cost[i] to the minimum of prev1 and prev2 (the costs to reach the previous two steps).

Updating the Previous Steps:
After calculating the minimum cost to reach the current step, move prev1 and prev2 forward to keep track of the last two computed values.

Final Answer:
The final answer is the minimum of prev1 and prev2, which represents the minimum cost to reach or surpass the last step.

Complexity Analysis:
Time Complexity: O(n), where n is the length of cost. We iterate through the array once.
Space Complexity: O(1), as we only use a constant amount of space for prev1 and prev2.

Explanation of Test Cases:
[10, 15, 20]: Starts at the second step with a cost of 15, which is cheaper than 10.
[1, 100, 1, 1, 1, 100, 1, 1, 100, 1]: Finds the minimum path by stepping on the lowest-cost steps (costs 1).

Edge Cases:
cost arrays with zeros allow skipping expensive steps, resulting in minimal total cost.
**/
