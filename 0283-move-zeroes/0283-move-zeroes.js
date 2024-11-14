/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(nums) {
    let lastNonZeroIndex = 0; // Pointer to track the position for non-zero elements
    
    // Move non-zero elements to the front
    for (let i = 0; i < nums.length; i++) {
        console.log(`Checking index ${i}, value: ${nums[i]}`);
        if (nums[i] !== 0) {
            nums[lastNonZeroIndex] = nums[i]; // Place the non-zero element at the correct position
            console.log(`Moved ${nums[i]} to index ${lastNonZeroIndex}`);
            lastNonZeroIndex++;
        }
    }
    
    // Fill the remaining positions with zeros
    for (let i = lastNonZeroIndex; i < nums.length; i++) {
        console.log(`Filling index ${i} with 0`);
        nums[i] = 0;
    }
};

// Test 1 - Input: [0, 1, 0, 3, 12]
let test1 = [0, 1, 0, 3, 12];
console.log("Test 1 - Input:", test1);
moveZeroes(test1);
console.log("Output:", test1);
// Expected Output: [1, 3, 12, 0, 0]

// Test 2 - Input: [0, 0, 1]
let test2 = [0, 0, 1];
console.log("\nTest 2 - Input:", test2);
moveZeroes(test2);
console.log("Output:", test2);
// Expected Output: [1, 0, 0]

// Test 3 - Input: [1, 2, 3, 4, 5]
let test3 = [1, 2, 3, 4, 5];
console.log("\nTest 3 - Input:", test3);
moveZeroes(test3);
console.log("Output:", test3);
// Expected Output: [1, 2, 3, 4, 5]

// Test 4 - Input: [0, 0, 0, 0]
let test4 = [0, 0, 0, 0];
console.log("\nTest 4 - Input:", test4);
moveZeroes(test4);
console.log("Output:", test4);
// Expected Output: [0, 0, 0, 0]

// Test 5 - Input: [0, 1, 2, 3, 0, 4, 5]
let test5 = [0, 1, 2, 3, 0, 4, 5];
console.log("\nTest 5 - Input:", test5);
moveZeroes(test5);
console.log("Output:", test5);
// Expected Output: [1, 2, 3, 4, 5, 0, 0]


// Explanation:
// let lastNonZeroIndex = 0;

// A pointer is initialized to track where the next non-zero element should be placed in the array. Initially, it's set to 0.
// First loop (for (let i = 0; i < nums.length; i++))

// This loop iterates through each element of the nums array.
// If the current element (nums[i]) is non-zero, it is moved to the position indicated by lastNonZeroIndex.
// After moving a non-zero element, lastNonZeroIndex is incremented to track the next position for non-zero elements.
// Second loop (for (let i = lastNonZeroIndex; i < nums.length; i++))

// After all non-zero elements have been moved, the remaining positions in the array (from lastNonZeroIndex onward) are filled with zeros.
// This loop starts at lastNonZeroIndex and sets each subsequent index to 0.