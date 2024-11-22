/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function(nums) {
    // Initialize the farthest index that can be reached.
    let farthest = 0;

    // Iterate through the array.
    for (let i = 0; i < nums.length; i++) {
        // If the current index is greater than the farthest index reachable, return false.
        if (i > farthest) {
            return false;
        }

        // Update the farthest reachable index.
        farthest = Math.max(farthest, i + nums[i]);

        // If we can reach or exceed the last index, return true.
        if (farthest >= nums.length - 1) {
            return true;
        }
    }

    // If the loop completes, we return true.
    return true;
};

// Example usage:
console.log(canJump([2, 3, 1, 1, 4])); // Output: true
console.log(canJump([3, 2, 1, 0, 4])); // Output: false

/*
Explanation:

The goal is to determine whether we can jump from the first index to the last index in the array. Each element in the array represents the maximum jump length from that position.

Key Idea:
- Use a greedy approach to track the farthest index we can reach (`farthest`) as we iterate through the array.
- At each step, calculate how far we can jump from the current position and update `farthest` with the maximum possible value. 
- If `farthest` becomes greater than or equal to the last index (`nums.length - 1`), return `true`. If the current index (`i`) exceeds `farthest`, return `false` because it's not reachable.

### Why `Math.max(farthest, i + nums[i])` is used:

- `i + nums[i]`:
  - Represents the farthest index you can jump to from the current position `i`. 
  - For example:
    - At `i = 2` with `nums[2] = 3`, you can jump to index `2 + 3 = 5`.
    - This is the maximum jump length starting from the current position.

- `Math.max(farthest, i + nums[i])`:
  - Ensures we always keep track of the farthest point reachable so far as we iterate.
  - For example:
    - If `farthest = 4` and at `i = 2` you can reach index 5 (`i + nums[i] = 5`), update `farthest` to 5.
    - However, if at `i = 3` you can only reach index 4 (`i + nums[i] = 4`), `farthest` remains 5 because it’s the maximum of `farthest` and `i + nums[i]`.

This allows us to dynamically track the farthest position we can reach without needing additional checks or backtracking.

### Steps in the Algorithm:
1. Initialize `farthest`:
   - Start with `farthest = 0`, representing the maximum index reachable initially.

2. Iterate Through the Array:
   - For each index `i`:
     - If the current index `i` exceeds `farthest`, return `false` because we cannot proceed further.
     - Otherwise, calculate the farthest position reachable so far with `farthest = Math.max(farthest, i + nums[i])`.

3. Check for Success:
   - If at any point `farthest >= nums.length - 1`, return `true` because we can reach the last index.

4. Complete Iteration:
   - If the loop completes without returning `true` or `false`, return `true` as the last index is reachable.

Examples:

Example 1:
Input: `nums = [2, 3, 1, 1, 4]`
1. Start: `farthest = 0`
2. At index 0: `farthest = Math.max(0, 0 + 2) = 2`.
3. At index 1: `farthest = Math.max(2, 1 + 3) = 4`.
4. Since `farthest (4) >= nums.length - 1 (4)`, return `true`.

Example 2:
Input: `nums = [3, 2, 1, 0, 4]`
1. Start: `farthest = 0`
2. At index 0: `farthest = Math.max(0, 0 + 3) = 3`.
3. At index 1: `farthest = Math.max(3, 1 + 2) = 3`.
4. At index 2: `farthest = Math.max(3, 2 + 1) = 3`.
5. At index 3: `farthest = Math.max(3, 3 + 0) = 3`.
6. At index 4: `i (4) > farthest (3)`, return `false`.

Why `Math.max` is Crucial:
- Without it, we would only consider the current jump (`i + nums[i]`) without accounting for previously calculated maximum jumps.
- This would lead to incorrect results, as we’d lose track of the longest reachable index from earlier iterations.

Complexity:

Time Complexity: O(n)
- We traverse the array once, making the algorithm linear in time.

Space Complexity: O(1)
- No additional space is used beyond the variables for tracking indices.
*/
