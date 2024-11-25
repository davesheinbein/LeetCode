/**
 * @param {number[]} nums
 * @return {number[]}
 */

var productExceptSelf = function(nums) {
    const length = nums.length; // Get the length of the input array
    const result = new Array(length).fill(1); // Initialize the result array with 1s

    // Step 1: Calculate the prefix product for each element
    let cumulativeProductFromLeft = 1;
    for (let i = 0; i < length; i++) {
        result[i] = cumulativeProductFromLeft; // Store the product of elements to the left of nums[i]
        cumulativeProductFromLeft *= nums[i]; // Update the cumulative product from the left
        // The '*=' operator multiplies the variable by the value on the right and reassigns the result.
        // Equivalent to: cumulativeProductFromLeft = cumulativeProductFromLeft * nums[i]
    }

    // Step 2: Calculate the suffix product and update the result array
    let cumulativeProductFromRight = 1;
    for (let i = length - 1; i >= 0; i--) {
        result[i] *= cumulativeProductFromRight;  // Update result[i] by multiplying with cumulativeProductFromRight
        cumulativeProductFromRight *= nums[i];   // Update the cumulative product from the right
        // The '*=' operator multiplies the current value of result[i] 
        // by cumulativeProductFromRight and updates result[i] with the product.
        // Equivalent to: result[i] = result[i] * cumulativeProductFromRight
    }

    return result; // Return the result array
};

// Examples:
console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // Output: [0, 0, 9, 0, 0]

/*
Explanation:

1. Initialization:
   - Create an array `result` of the same size as `nums`, initialized with 1s.
   - Use two variables, `cumulativeProductFromLeft` and `cumulativeProductFromRight`, to store the running product of elements from the left and right of the current element.

2. First Loop (Prefix Products):
   - Traverse the array from left to right.
   - For each index `i`, store the product of all elements to the left of `nums[i]` in `result[i]`.
   - Update `cumulativeProductFromLeft` by multiplying it with the current element `nums[i]`.
     - The `*=` operator is shorthand for multiplying a variable by a value and assigning the result back to the variable.
       - Example: `x *= y` is equivalent to `x = x * y`.

3. Second Loop (Suffix Products):
   - Traverse the array from right to left.
   - For each index `i`, multiply `result[i]` (which already contains the prefix product) by the cumulative product of all elements to the right of `nums[i]`.
   - Update `cumulativeProductFromRight` by multiplying it with the current element `nums[i]`.
     - Again, `*=` updates the variable with the result of the multiplication.

4. Key Idea:
   - The final value at `result[i]` is the product of all elements to the left of `nums[i]` (calculated in the first loop) and all elements to the right of `nums[i]` (calculated in the second loop).
   - By avoiding division and performing two passes, the algorithm achieves O(n) time complexity.

5. Space Complexity:
   - The algorithm uses O(1) additional space (excluding the output array) as it only requires two variables, `cumulativeProductFromLeft` and `cumulativeProductFromRight`.

6. Example Walkthrough:
   - Input: `nums = [1, 2, 3, 4]`
   
   Prefix Pass:
   - i = 0:
     - result[0] = 1 (No elements to the left)
     - cumulativeProductFromLeft = 1 * 1 = 1
   - i = 1:
     - result[1] = 1 (Product of elements to the left of 2: 1)
     - cumulativeProductFromLeft = 1 * 2 = 2
   - i = 2:
     - result[2] = 2 (Product of elements to the left of 3: 1 * 2)
     - cumulativeProductFromLeft = 2 * 3 = 6
   - i = 3:
     - result[3] = 6 (Product of elements to the left of 4: 1 * 2 * 3)
     - cumulativeProductFromLeft = 6 * 4 = 24
   
   After the first loop (Prefix Pass):
   - result = [1, 1, 2, 6]
   
   Suffix Pass:
   - i = 3:
     - result[3] = 6 * 1 (No elements to the right)
     - cumulativeProductFromRight = 1 * 4 = 4
   - i = 2:
     - result[2] = 2 * 4 = 8 (Product of elements to the right of 3: 4)
     - cumulativeProductFromRight = 4 * 3 = 12
   - i = 1:
     - result[1] = 1 * 12 = 12 (Product of elements to the right of 2: 3 * 4)
     - cumulativeProductFromRight = 12 * 2 = 24
   - i = 0:
     - result[0] = 1 * 24 = 24 (Product of elements to the right of 1: 2 * 3 * 4)
     - cumulativeProductFromRight = 24 * 1 = 24
   
   After the second loop (Suffix Pass):
   - result = [24, 12, 8, 6]
   - Output: `[24, 12, 8, 6]`

7. Edge Cases:
   - Input: `nums = [-1, 1, 0, -3, 3]`
     - Prefix Pass: `result = [1, -1, 0, 0, 0]`
     - Suffix Pass: `result = [0, 0, 9, 0, 0]`
     - Output: `[0, 0, 9, 0, 0]`
   - Handles cases with zeros and negative numbers correctly.
*/
