/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        // If the price today is higher than the price yesterday, 
        // it means we can make a profit by selling the stock.
        if (prices[i] > prices[i - 1]) {
            // Add the difference between today's price and yesterday's price to maxProfit
            maxProfit += prices[i] - prices[i - 1];
        }
    }

    // Return the total profit achieved from all profitable transactions
    return maxProfit;
};

// Example 1:
console.log(maxProfit([7,1,5,3,6,4])); // Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5 - 1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6 - 3 = 3.
// Total profit = 4 + 3 = 7.

// Example 2:
console.log(maxProfit([1,2,3,4,5])); // Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5 - 1 = 4.
// Total profit = 4.

// Example 3:
console.log(maxProfit([7,6,4,3,1])); // Output: 0
// Explanation: No profitable opportunities since prices keep decreasing.
// Total profit = 0.

/*
Explanation:

- We are given an array 'prices' where each element represents the price of a stock on a given day.
- The goal is to maximize profit by buying and selling the stock at the right times. 
- The key observation is that you can make a profit if the stock price increases from one day to the next.
- On each day, if the price is higher than the previous day's price, we "buy" on the previous day and "sell" on the current day. The profit from this transaction is the difference between the two prices.
- We repeat this for all days, adding the profits from each transaction, to get the total maximum profit.
- The approach runs in linear time \(O(n)\), where \(n\) is the number of days in the 'prices' array.
*/
