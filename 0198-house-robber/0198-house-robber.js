/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function(nums) {
    // Handle edge cases
    if (nums.length === 0) return 0;   // No houses to rob
    if (nums.length === 1) return nums[0]; // Only one house to rob
    
    // Initialize variables for the maximum money robbed at two previous houses
    let prevHouseMax = 0;      // Represents the max money robbed from two houses ago (dp[i-2])
    let lastHouseMax = nums[0]; // Represents the max money robbed from the last house (dp[i-1])
    
    // Iterate through the houses starting from the second one
    for (let i = 1; i < nums.length; i++) {
        // Calculate the maximum money we can rob at this house
        let currentMax = Math.max(lastHouseMax, nums[i] + prevHouseMax);
        // Update the variables for the next iteration
        prevHouseMax = lastHouseMax;
        lastHouseMax = currentMax;
    }
    
    // The final `lastHouseMax` contains the maximum amount of money that can be robbed
    return lastHouseMax;
};

// Example usage:
console.log(rob([1,2,3,1])); // Output: 4
console.log(rob([2,7,9,3,1])); // Output: 12

/*
Explanation:

1. Edge Cases:
   - If the list is empty, return 0 as there are no houses to rob.
   - If there is only one house, return its value (`nums[0]`).

2. Dynamic Programming Approach:
   - Use two variables, `prevHouseMax` and `lastHouseMax`, to keep track of the maximum money robbed from the last two houses.
   - For each house:
     - Decide between skipping the house (taking `lastHouseMax`) or robbing it (taking `nums[i] + prevHouseMax`).
     - Store the maximum of these two options in `currentMax`.
   
3. Space Optimization:
   - Instead of using an entire array to store intermediate results, we only track the last two states, reducing space complexity to \(O(1)\).

4. Final Result:
   - After processing all houses, `lastHouseMax` holds the maximum amount of money that can be robbed.

Time Complexity: \(O(n)\), where \(n\) is the number of houses. We only need to iterate through the list once.
Space Complexity: \(O(1)\), as we only use a constant amount of extra space.
*/
