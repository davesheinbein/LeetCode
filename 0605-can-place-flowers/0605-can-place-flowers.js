function canPlaceFlowers(flowerbed, n) {
    // Initialize a variable to count the flowers we can plant
    let count = 0;

    // Loop through each plot in the flowerbed
    for (let i = 0; i < flowerbed.length; i++) {
        // Check if the current plot is empty and the adjacent plots (if any) are also empty
        if (flowerbed[i] === 0 &&
            (i === 0 || flowerbed[i - 1] === 0) &&
            (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
            
            // Plant a flower here by setting this plot to 1
            flowerbed[i] = 1;
            // Increment the count of flowers we have planted
            count++;

            // If we've planted enough flowers, return true
            if (count >= n) {
                return true;
            }
        }
    }

    // If we exit the loop without planting enough flowers, return false
    return count >= n;
}

// Test cases to verify the solution
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); // true, can plant 1 flower between the two planted flowers
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)); // false, cannot plant 2 flowers without breaking the rules
console.log(canPlaceFlowers([0, 0, 1, 0, 0], 1)); // true, can plant 1 flower at the beginning or end
console.log(canPlaceFlowers([0], 1));             // true, a single empty plot can hold 1 flower
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 1)); // true, can plant 1 flower in the middle

// Edge cases
console.log(canPlaceFlowers([0, 0, 0, 0, 0], 2)); // true, can plant 2 flowers spaced apart
console.log(canPlaceFlowers([1, 1, 1, 1], 0));    // true, need to plant 0 flowers so condition is trivially met
console.log(canPlaceFlowers([1, 0, 1, 0, 1], 1)); // false, no room to plant even 1 flower


/**
 * Explanation of Each Part
 * 
 * Initialize a count variable: This will keep track of how many flowers we've planted so far.
 * 
 * Loop through each plot in flowerbed:
 * We iterate through flowerbed using a for loop.
 * 
 * Check if the current plot can hold a flower:
 * We check if:
 * - flowerbed[i] is 0 (the plot is empty),
 * - (i === 0 || flowerbed[i - 1] === 0) (either it’s the first plot or the previous plot is empty),
 * - (i === flowerbed.length - 1 || flowerbed[i + 1] === 0) (either it’s the last plot or the next plot is empty).
 * If all conditions are met, it’s safe to plant a flower in this plot.
 * 
 * Plant the flower and update the count:
 * Set flowerbed[i] to 1 to mark the plot as occupied.
 * Increase the count of planted flowers.
 * If count is greater than or equal to n, we return true immediately because we’ve successfully planted enough flowers.
 * 
 * Return the result:
 * If we exit the loop and haven’t planted enough flowers (count < n), we return false.
 * 
 * Complexity Analysis
 * 
 * Time Complexity: O(m), where m is the length of flowerbed, since we’re iterating through the array once.
 * Space Complexity: O(1), as we’re only using a few extra variables for counting.
**/
