/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n) {
    // Base case: if there's only one step, there's only one way to climb
    if (n === 1) {
        return 1; // Equivalent to Fib(1)
    }

    // Initialize variables for the first two Fibonacci numbers
    let first = 1;  // Fib(1): Represents 1 way to climb 1 step
    let second = 2; // Fib(2): Represents 2 ways to climb 2 steps
    // Explanation: At step 2, you can either take two 1-steps or one 2-step

    // Use a loop to calculate the Fibonacci sequence iteratively from step 3 to n
    for (let i = 3; i <= n; i++) {
        // Calculate the current step's value as the sum of the two previous steps
        let current = first + second; // Fib(i) = Fib(i-1) + Fib(i-2)

        // Update the values of `first` and `second` for the next iteration
        first = second;   // Move `second` to `first` (Fib(i-1))
        second = current; // Move `current` to `second` (Fib(i))
    }

    // By the end of the loop, `second` holds Fib(n), the number of ways to climb n steps
    return second;
};


// Example
// console.log("test:",climbStairs(2));  // Output: 2
// console.log("test:",climbStairs(3));  // Output: 3
// console.log("test:",climbStairs(4));  // Output: 5
// console.log("test:",climbStairs(5));  // Output: 8
console.log("test:",climbStairs(6));  // Output: 13


/*
Explanation:

1. Problem Context:
   - Each step can be climbed either 1 step at a time or 2 steps at a time.
   - The total number of ways to reach step `n` is determined by combining the ways to reach step `n-1` (then take 1 step) and step `n-2` (then take 2 steps).

2. Relation to the Fibonacci Sequence:
   - The number of ways to climb `n` steps corresponds to the Fibonacci sequence:
     - Fib(1) = 1 way to climb 1 step.
     - Fib(2) = 2 ways to climb 2 steps (1+1 or 2).
     - Fib(n) = Fib(n-1) + Fib(n-2) for n > 2.
   - This formula arises because each step can be reached from the two previous steps.

3. Iterative Calculation:
   - Instead of using recursion, the solution uses an iterative approach to compute the Fibonacci sequence:
     - `first` holds Fib(n-2) (ways to climb two steps before the current step).
     - `second` holds Fib(n-1) (ways to climb one step before the current step).
     - `current` is computed as `first + second` (the current step's total ways).
   - The variables are updated iteratively until the `n`-th step.

4. Base Cases:
   - If `n = 1`, there is only 1 way to climb (Fib(1)).
   - If `n = 2`, there are 2 ways to climb (Fib(2)).

5. Time and Space Efficiency:
   - **Time Complexity**: O(n) because the loop iterates once for each step from 3 to `n`.
   - **Space Complexity**: O(1) since only three variables (`first`, `second`, and `current`) are used, regardless of `n`.

*/
