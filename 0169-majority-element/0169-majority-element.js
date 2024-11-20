/**
 * Finds the majority element in an array of numbers using the Boyer-Moore Voting Algorithm.
 * The majority element is the element that appears more than ⌊n/2⌋ times.
 * 
 * @param {number[]} nums - The array of numbers.
 * @return {number} - The majority element.
 */

const majorityElement = function(nums) {
    let count = 0;          // Tracks the current "weight" of the candidate element.
    let candidate = null;   // Stores the potential majority element.

    // Phase 1: Find a candidate for the majority element
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {  // If count reaches zero, we choose a new candidate.
            candidate = nums[i];
        }
        // Increment or decrement the count based on whether the current number matches the candidate.
        count += (nums[i] === candidate) ? 1 : -1;
    }

    // At this point, `candidate` is the element that could potentially be the majority element.

    // Phase 2: Verify if the candidate is indeed the majority element
    count = 0;  // Reset count to verify the candidate.
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === candidate) {  // Count occurrences of the candidate in the array.
            count++;
        }
    }

    // Check if the candidate occurs more than ⌊n/2⌋ times.
    if (count > Math.floor(nums.length / 2)) {
        return candidate;  // Candidate is the majority element.
    }
    // Throw an error if no majority element is found. 
    // (Should not happen if the input meets the problem's guarantee.)
    throw new Error("No majority element found");
};

console.log(majorityElement([3, 2, 3])); // Output: 3
// Explanation: The majority element is 3, as it appears twice (more than 3/2 = 1.5 times).

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2
// Explanation: The majority element is 2, as it appears four times (more than 7/2 = 3.5 times).

/*
Explanation:

1. The algorithm is based on the Boyer-Moore Voting Algorithm.
2. Phase 1:
   - Iterates through the array to identify a potential majority element (`candidate`).
   - Keeps a `count` which increases when the current number matches `candidate` and decreases otherwise.
   - If `count` becomes zero, a new `candidate` is selected.
   - By the end of this phase, `candidate` is guaranteed to be the majority element if one exists.
3. Phase 2:
   - Verifies if the `candidate` appears more than ⌊n/2⌋ times in the array.
   - If yes, it returns the candidate. Otherwise, it throws an error.
4. Time complexity: O(n) - Linear, as the array is traversed twice.
5. Space complexity: O(1) - Constant, as no additional data structures are used.
*/
