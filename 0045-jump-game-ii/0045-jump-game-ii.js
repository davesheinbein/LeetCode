/**
 * @param {number[]} nums
 * @return {number}
 */

var jump = function(nums) {
    // If the array has only one element, no jumps are needed.
    if (nums.length === 1) return 0;

    // Initialize variables to track the current range of reachable indices and jumps.
    let jumps = 0;
    let currentEnd = 0; // The farthest index we can reach within the current jump.
    let farthest = 0; // The farthest index we can reach with the next jump.

    // Iterate through the array up to the second-to-last index (since reaching the last index ends the process).
    for (let i = 0; i < nums.length - 1; i++) {
        // Update the farthest reachable index.
        farthest = Math.max(farthest, i + nums[i]);

        // If we reach the end of the current range (currentEnd), increment the jump counter.
        if (i === currentEnd) {
            jumps++;
            currentEnd = farthest;

            // If the farthest index covers the last index, we can exit early.
            if (currentEnd >= nums.length - 1) break;
        }
    }

    return jumps;
};


console.log(jump([2, 3, 1, 1, 4])); // expected output 2
console.log(jump([2, 3, 0, 1, 4])); // expected output 2

/*
Explanation:

This problem can be solved using a greedy approach to minimize the number of jumps.

Key Concepts:
1. Tracking the Current Range:
   - We maintain a variable `currentEnd` to track the range of indices reachable with the current jump.
   - If we reach `currentEnd`, we increment the jump counter and update `currentEnd` to the `farthest` index reachable.

2. Farthest Reachable Index:
   - At each step, we calculate the farthest index we can jump to from the current position using `Math.max(farthest, i + nums[i])`.

3. Stopping Early:
   - Once `currentEnd` (the range of indices reachable with the current jump) reaches or exceeds the last index, we can stop.

Steps in the Algorithm:
1. Edge Case:
   - If `nums.length === 1`, no jumps are needed (`return 0`).

2. Initialize Variables:
   - `jumps` starts at 0 to count the number of jumps.
   - `currentEnd` starts at 0 to represent the range of indices reachable with the current jump.
   - `farthest` starts at 0 to calculate the farthest reachable index in the next jump.

3. Iterate Through the Array:
   - For each index `i` up to `nums.length - 2`:
     - Update `farthest` to the maximum of the current `farthest` and `i + nums[i]`.
     - If `i === currentEnd`:
       - Increment `jumps` because the current range is exhausted.
       - Update `currentEnd` to `farthest`.

4. Return Jumps:
   - When the loop completes, `jumps` contains the minimum number of jumps needed.

Examples:

Example 1:
Input: `nums = [2, 3, 1, 1, 4]`
1. Start: `jumps = 0, currentEnd = 0, farthest = 0`
2. At index 0: `farthest = max(0, 0 + 2) = 2`.
   - `i === currentEnd`: Increment `jumps` to 1, update `currentEnd = 2`.
3. At index 1: `farthest = max(2, 1 + 3) = 4`.
   - `i === currentEnd`: Increment `jumps` to 2, update `currentEnd = 4`.
   - Since `currentEnd >= nums.length - 1`, stop early.
Output: `2`

Example 2:
Input: `nums = [2, 3, 0, 1, 4]`
1. Start: `jumps = 0, currentEnd = 0, farthest = 0`
2. At index 0: `farthest = max(0, 0 + 2) = 2`.
   - `i === currentEnd`: Increment `jumps` to 1, update `currentEnd = 2`.
3. At index 1: `farthest = max(2, 1 + 3) = 4`.
   - `i === currentEnd`: Increment `jumps` to 2, update `currentEnd = 4`.
   - Since `currentEnd >= nums.length - 1`, stop early.
Output: `2`

Complexity:

Time Complexity: O(n)
- We iterate through the array once.

Space Complexity: O(1)
- Only a few variables are used for tracking indices.
*/
