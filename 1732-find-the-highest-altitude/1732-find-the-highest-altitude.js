/**
 * @param {number[]} gain - an array representing changes in altitude at each step
 * @return {number} - the highest altitude reached throughout the journey
 */
var largestAltitude = function(gain) {
    
    // 1. Initialize the current altitude at 0 (representing starting at sea level).
    let currentAltitude = 0;

    // 2. Initialize the highest altitude at 0, since we start at sea level and haven't moved yet.
    let highestAltitude = 0;
    
    console.log("Initial Altitude:", currentAltitude);  // Output the starting altitude for reference
    console.log("Initial gain:", gain); 
    
    // 3. Iterate through each element in the gain array.
    for (let i = 0; i < gain.length; i++) {
        // 4. Update the current altitude by adding the gain at the current index.
        currentAltitude += gain[i];

        // 5. Compare the updated current altitude with the highest altitude seen so far.
        //    If the current altitude is greater, update highestAltitude to this new value.
        highestAltitude = Math.max(highestAltitude, currentAltitude);
        
        // 6. Output the current state after each altitude change for debugging purposes.
        console.log(`After gain[${i}] = ${gain[i]}, Current Altitude: ${currentAltitude}, Highest Altitude: ${highestAltitude}`);
    }
    
    // 7. Once all changes in gain have been processed, return the highest altitude reached.
    return highestAltitude;
};

// Example 1
console.log("Example 1 Result:", largestAltitude([-5, 1, 5, 0, -7]));
// Expected Output: 1 (reaches a maximum of 1 altitude unit at one point)

// Example 2
console.log("Example 2 Result:", largestAltitude([-4, -3, -2, -1, 4, 3, 2]));
// Expected Output: 0 (never goes above starting altitude level)

// Explanation
// Variables Initialization: The function starts with currentAltitude set to 0 to represent sea level, and highestAltitude set to 0 since that's the starting altitude.
// Looping Through gain: For each element in gain, the function updates currentAltitude by adding the current gain value. highestAltitude is then updated to be the maximum between the current highestAltitude and the currentAltitude.
// Return the Result: After the loop completes, highestAltitude contains the maximum altitude reached, which is then returned.