/**
 * @param {number[]} gas - Array - the amount of gas available at each station.
 * @param {number[]} cost - Array - the cost of gas required to travel to the next station from each station.
 * @return {number} - index of starting gas station if a complete circuit is possible; otherwise, -1.
 */
var canCompleteCircuit = function(gas, cost) {
    const numStations = gas.length;  // Number of gas stations
    let totalGas = 0;  // Total gas available from all stations
    let totalCost = 0;  // Total cost to travel around the circuit
    let currentGas = 0;  // Current gas level while traveling
    let startIndex = 0;  // Index of the current potential starting station

    // Traverse through all stations and calculate the total gas and cost
    for (let station = 0; station < numStations; station++) {
        totalGas += gas[station];  // Accumulate total available gas
        totalCost += cost[station];  // Accumulate total cost to travel

        // Update the current gas level after traveling to the next station
        currentGas += gas[station] - cost[station];
        
        // If the current gas level becomes negative, it means we cannot start from 'startIndex'
        if (currentGas < 0) {
            // Reset the starting station to the next station
            startIndex = station + 1;
            currentGas = 0;  // Reset the current gas level for the next start attempt
        }
    }

    // If the total gas available is less than the total cost required, return -1 (impossible to complete the circuit)
    if (totalGas < totalCost) {
        return -1;
    }

    // Return the index of the station from where the circuit can be completed
    return startIndex;
};

// Example 1
let gas1 = [1, 2, 3, 4, 5];
let cost1 = [3, 4, 5, 1, 2];
console.log(canCompleteCircuit(gas1, cost1));  // Output: 3

// Example 2
let gas2 = [2, 3, 4];
let cost2 = [3, 4, 3];
console.log(canCompleteCircuit(gas2, cost2));  // Output: -1

// Example 3
let gas3 = [5, 1, 2, 3, 4];
let cost3 = [4, 4, 4, 4, 5];
console.log(canCompleteCircuit(gas3, cost3));  // Output: 0

// Example 4
let gas4 = [2, 3, 4, 5, 6];
let cost4 = [3, 4, 5, 6, 7];
console.log(canCompleteCircuit(gas4, cost4));  // Output: -1

/*
Explanation:

The problem asks to determine if a car can travel around a circular route consisting of `n` gas stations. The car has an unlimited gas tank, but each station provides a certain amount of gas (`gas[i]`), and traveling from one station to the next requires a specific amount of gas (`cost[i]`). You need to find the starting gas station index from where the car can complete the full circuit, or return -1 if no such station exists.

Approach:

1. Initialization:
   - We start by defining some variables:
     - `numStations`: The number of gas stations.
     - `totalGas`: The sum of gas available at all stations.
     - `totalCost`: The total gas required to travel through all stations.
     - `currentGas`: The amount of gas the car currently has while trying to make the trip.
     - `startIndex`: The index of the station that might be the valid starting point.

2. Iterating Through the Stations:
   - We loop over each station to compute the total gas and total cost required for the circuit. We also track the `currentGas` while attempting to travel from one station to the next.
   - At each station, we add the gas available at the station to `totalGas` and subtract the cost of traveling to the next station from `totalCost`.
   - We update `currentGas` by adding the available gas at the current station and subtracting the travel cost to the next station.

3. Checking Feasibility of Starting from Current Station:
   - If at any point `currentGas` becomes negative, it means we cannot complete the circuit starting from the current `startIndex`. In this case, we reset `startIndex` to the next station (`station + 1`) and reset `currentGas` to 0. This is because if we can't reach the next station from the current starting point, any station before it will also fail.

4. Final Check:
   - After the loop, we check if the total gas available (`totalGas`) is less than the total cost required (`totalCost`). If it is, then completing the circuit is impossible, and we return -1.
   - If `totalGas` is greater than or equal to `totalCost`, the circuit is possible, and we return `startIndex`, which represents the first station from which the car can complete the circuit.

Time Complexity:
- O(n): We only loop through the stations once, making the time complexity linear.

Space Complexity:
- O(1): We use a constant amount of space for the variables, regardless of the input size.

*/

