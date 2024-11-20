/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    let minPrice = Infinity; // Initialize the minimum price as Infinity. This will be used to find the lowest price seen so far.
    let maxProfit = 0; // Initialize the maximum profit as 0. This will store the highest profit we can achieve.

    // Iterate through each price in the array
    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price; // If the current price is lower than the minimum price seen so far, update minPrice.
        } else {
            // If the current price is not lower than minPrice, calculate the potential profit
            // by subtracting minPrice from the current price.
            maxProfit = Math.max(maxProfit, price - minPrice); 
            // Update maxProfit only if the calculated profit is greater than the current maxProfit.
        }
    }

    return maxProfit; // After iterating through the array, return the maximum profit found.
};

let prices1 = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices1)); // Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6). Profit = 6 - 1 = 5.

let prices2 = [7, 6, 4, 3, 1];
console.log(maxProfit(prices2)); // Output: 0
// Explanation: No transactions are possible since prices keep decreasing. Profit = 0.

/*
Explanation:
1. We iterate through the `prices` array to simulate buying and selling the stock.
2. `minPrice` keeps track of the lowest price seen so far, ensuring that we always "buy" at the lowest possible price.
3. For each price in the array:
   - If it is lower than `minPrice`, update `minPrice` (simulate finding a better day to buy).
   - Otherwise, calculate the profit if we "sell" on the current day. Compare this profit with the current `maxProfit` and update it if the new profit is higher.
4. If no profit is possible (prices keep decreasing), `maxProfit` remains 0.
5. The algorithm ensures we only traverse the array once, making it efficient with \(O(n)\) time complexity.
*/
