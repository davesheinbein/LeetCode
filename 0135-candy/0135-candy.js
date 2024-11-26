/**
 * @param {number[]} ratings
 * @return {number}
 */

var candy = function (ratings) {
	const numChildren = ratings.length;  // Get the number of children

	// Initialize an array with one candy for each child.
	let candyDistribution = new Array(numChildren).fill(1);  // Start with 1 candy per child

	// Left to right pass to ensure children with higher ratings get more candies.
	for (let i = 1; i < numChildren; i++) {  // Loop through the ratings
		if (ratings[i] > ratings[i - 1]) {  // If the current rating is higher
			candyDistribution[i] = candyDistribution[i - 1] + 1;  // Give more candy than the previous child
		}
	}

	// Right to left pass to adjust candy for children with higher ratings than the next one.
	for (let i = numChildren - 2; i >= 0; i--) {  // Loop backwards through the ratings
		if (ratings[i] > ratings[i + 1]) {  // If the current rating is higher
			candyDistribution[i] = Math.max(  // Take the higher candy count
				candyDistribution[i],  // Keep the current count if higher
				candyDistribution[i + 1] + 1  // Otherwise, add one more than the next child
			);
		}
	}

	// Sum up the total candies.
	return candyDistribution.reduce(  // Add up all the candies
		(totalCandies, currentCandies) => totalCandies + currentCandies,  // Accumulate the total
		0  // Start the sum at 0
	);
};



/*
Explanation:

This problem is a typical greedy approach where we need to distribute candies to children based on their ratings while satisfying certain conditions. The conditions are:

1. Each child must receive at least one candy.
2. Children with higher ratings should receive more candies than their neighbors.

The solution is broken down into two passes over the ratings array:

1. Left to Right Pass:
   - We start by giving each child one candy.
   - As we iterate through the list, we check if the current child has a higher rating than the previous one.
   - If so, we increase their candy count to be one more than the previous child’s candy count.
   - This ensures that children with higher ratings than their left neighbor receive more candies.

2. Right to Left Pass:
   - After the left to right pass, we perform another pass from right to left.
   - This ensures that children with higher ratings than their right neighbor get more candies, while respecting the candy distribution from the first pass.
   - If a child has a higher rating than the next one, we update their candy count to be the maximum of their current candy count or one more than the next child's candy count.

Finally, the total number of candies is the sum of all elements in the `candyDistribution` array.

Time Complexity:
   - O(n): We make two passes through the array, where `n` is the number of children (i.e., the length of the `ratings` array).

Space Complexity:
   - O(n): We use an array `candyDistribution` to store the candy count for each child, which requires space proportional to the number of children.
*/