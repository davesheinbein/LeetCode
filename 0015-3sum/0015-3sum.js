/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
    console.log("Input array:", nums);
    
    // Sort the array to simplify finding duplicates and using the two-pointer approach
    nums.sort((a, b) => a - b);
    console.log("Sorted array:", nums);

    const result = [];
    const n = nums.length;

    // Iterate through the array, fixing the first number of the triplet
    for (let i = 0; i < n - 2; i++) {
        // Explanation: We use `i < n - 2` because we need at least two numbers after `nums[i]`
        // to form a triplet. If `i` were to reach `n - 2`, there wouldn't be enough numbers 
        // remaining in the array to form a valid triplet.
        
        // Skip duplicates for the first number
        if (i > 0 && nums[i] === nums[i - 1]) {
            // console.log(`Skipping duplicate for nums[${i}] = ${nums[i]}`);
            continue;
        }

        let left = i + 1;
        let right = n - 1;

        // console.log(`Processing nums[${i}] = ${nums[i]}`);

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            // console.log(`Checking combination: ${nums[i]}, ${nums[left]}, ${nums[right]} (sum = ${sum})`);

            if (sum === 0) {
                // console.log(`Found triplet: [${nums[i]}, ${nums[left]}, ${nums[right]}]`);
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;

                // Skip duplicates for the second number
                while (left < right && nums[left] === nums[left - 1]) {
                    // console.log(`Skipping duplicate for nums[${left}] = ${nums[left]}`);
                    left++;
                }
                // Skip duplicates for the third number
                while (left < right && nums[right] === nums[right + 1]) {
                    // console.log(`Skipping duplicate for nums[${right}] = ${nums[right]}`);
                    right--;
                }
            } else if (sum < 0) {
                // console.log(`Sum < 0, incrementing left pointer from ${left} to ${left + 1}`);
                left++;
            } else {
                // console.log(`Sum > 0, decrementing right pointer from ${right} to ${right - 1}`);
                right--;
            }
        }
    }

    console.log("Final result:", result);
    return result;
};

// Example usage
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// Expected result
// [-1, 0, 1, 2, -1, -4]


/*
Explanation:
1. Input array: [-1, 0, 1, 2, -1, -4]
   After sorting: [-4, -1, -1, 0, 1, 2]
2. Iterate through the array and fix the first number of the triplet.
3. Use two pointers (left and right) to find pairs of numbers that, when added to the first number, result in zero:
   - Left pointer:
     - Starts just after the current index `i` (`left = i + 1`).
     - Moves forward (`left++`) if the sum of the triplet is less than zero, since the sorted order means larger numbers are needed to increase the sum.
   - Right pointer:
     - Starts at the last index (`right = n - 1`).
     - Moves backward (`right--`) if the sum of the triplet is greater than zero, since the sorted order means smaller numbers are needed to decrease the sum.
   - Together:
     - `left` and `right` explore all possible pairs for the current `nums[i]`.
     - If the sum of the triplet matches zero, the combination is valid, and both pointers adjust to skip duplicates.
     - The process continues until `left` and `right` pointers overlap, completing all pair possibilities for the current `nums[i]`.
4. If a triplet is found, store it in the result array and adjust the pointers while skipping duplicates.
5. If the sum is less than zero, increment the left pointer to increase the sum.
6. If the sum is greater than zero, decrement the right pointer to decrease the sum.
7. Repeat this process for all elements in the array.
8. Return the final list of unique triplets: [[-1, -1, 2], [-1, 0, 1]].
*/
