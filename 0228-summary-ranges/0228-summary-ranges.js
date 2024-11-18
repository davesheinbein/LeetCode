/**
 * @param {number[]} nums
 * @return {string[]}
 */

var summaryRanges = function(nums) {
    // Edge case: If the input array is empty, return an empty array.
    if (nums.length === 0) return [];

    let result = []; // Array to store the resulting ranges.
    let start = nums[0]; // Starting number of the current range.

    // Log initial values.
    console.log("Initial nums array:", nums);

    // Iterate through the array starting from the second element.
    for (let i = 1; i <= nums.length; i++) {
        // Log the current iteration details.
        console.log(`Iteration ${i}: Current number = ${nums[i-1]}, Start = ${start}`);

        // Check if we are at the end of the array or if the current number is not consecutive.
        if (i === nums.length || nums[i] !== nums[i - 1] + 1) {
            // Log range detection.
            console.log(`Range detected from ${start} to ${nums[i - 1]}`);

            // Determine the range and add it to the result.
            if (start === nums[i - 1]) {
                result.push(`${start}`); // Single number range.
                console.log(`Added single number: ${start}`);
            } else {
                result.push(`${start}->${nums[i - 1]}`); // Continuous range.
                console.log(`Added range: ${start}->${nums[i - 1]}`);
            }

            // Update `start` for the next range.
            if (i < nums.length) start = nums[i];
            console.log(`Updated start for next range: ${start}`);
        }
    }
    console.log("Final result:", result);

    return result;
};

/*
Explanation:
1. Initialization:
   - We set `start` to the first element of the `nums` array, marking the beginning of the first range.

2. Loop through the Array:
   - We iterate through the `nums` array starting from the second element.
   - In each iteration:
     - We check if the current number is consecutive to the previous one. If not, this indicates the end of the current range.
     - We construct the range and add it to the `result` array in the appropriate format:
       - If `start` equals `nums[i - 1]`, we add the single number range `start`.
       - Otherwise, we add the continuous range in the format `start->nums[i - 1]`.
     - We update `start` to `nums[i]` if `i < nums.length` to prepare for the next range.

3. Edge Case Handling:
   - If the array is empty, we return an empty array.

Example Walkthrough:
- For input `nums = [0,1,2,4,5,7]`:
  - We start with `start = 0` and form the range "0->2".
  - Next, `4, 5` form the range "4->5".
  - Finally, `7` is a single number, so we add "7" to the result.
  - The resulting array is ["0->2", "4->5", "7"].

- For input `nums = [0,2,3,4,6,8,9]`:
  - The first number is `0`, so the range is "0".
  - `2, 3, 4` form the range "2->4".
  - `6` is a single number, so we add "6" to the result.
  - `8, 9` form the range "8->9".
  - The resulting array is ["0", "2->4", "6", "8->9"].

Time and Space Complexity:
- Time Complexity: O(n), where `n` is the number of elements in `nums`. We iterate through the array once.
- Space Complexity: O(k), where `k` is the number of ranges in the result array. In the worst case, this is O(n) if there are no consecutive numbers.
*/
