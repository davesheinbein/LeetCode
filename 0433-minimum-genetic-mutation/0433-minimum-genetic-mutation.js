/**
 * @param {string} startGene - The starting gene string
 * @param {string} endGene - The target gene string
 * @param {string[]} bank - Array of valid gene mutations
 * @return {number} - Minimum number of mutations required, or -1 if not possible
 */
var minMutation = function (startGene, endGene, bank) {
	// Convert the bank into a Set for efficient lookups
	const bankSet = new Set(bank);

	// If the endGene is not in the bank, it is not possible to reach it
	if (!bankSet.has(endGene)) return -1;

	// Initialize BFS
	const queue = [[startGene, 0]]; // Queue of [currentGene, mutationSteps]
	const validChars = ['A', 'C', 'G', 'T']; // Valid characters for mutations

	// Perform BFS to find the shortest path
	while (queue.length > 0) {
		const [currentGene, mutations] = queue.shift(); // Dequeue the current gene

		// If the current gene matches the target gene, return the mutation count
		if (currentGene === endGene) return mutations;

		// Explore all single-character mutations
		for (let i = 0; i < currentGene.length; i++) {
			for (const char of validChars) {
				// Skip if the character is the same as in the current gene
				if (char === currentGene[i]) continue;

				// Create a new mutated gene by replacing one character
				const mutatedGene =
					currentGene.slice(0, i) +
					char +
					currentGene.slice(i + 1);

				// Check if the mutated gene is valid and in the bank
				if (bankSet.has(mutatedGene)) {
					queue.push([mutatedGene, mutations + 1]); // Add to the queue
					bankSet.delete(mutatedGene); // Remove from bank to prevent revisits
				}
			}
		}
	}

	// If BFS completes without finding the target gene, return -1
	return -1;
};

/*
Explanation:
1. Key Concepts:
   - Each mutation changes exactly one character in the gene string.
   - Only valid mutations from the bank are allowed.
   - BFS ensures the shortest path (minimum mutations) is found.

2. Algorithm:
   - Start with the `startGene` and perform BFS to explore all possible mutations.
   - Generate all possible single-character mutations for the current gene.
   - If a mutation matches the `endGene`, return the mutation count.
   - Otherwise, continue until the queue is empty.

3. Optimizations:
   - Use a `Set` for the bank to allow O(1) lookups and deletions.
   - Remove genes from the bank once visited to avoid revisiting and infinite loops.

4. Edge Cases:
   - If the `endGene` is not in the bank, return -1.
   - Handle cases with an empty bank gracefully.

5. Complexity:
   - Time Complexity: \(O(N \cdot L \cdot 4)\), where:
     - \(N\) is the number of genes in the bank.
     - \(L = 8\) (length of each gene string).
     - \(4\) accounts for the four possible mutations per character.
   - Space Complexity: \(O(N)\) for the queue and bank set.

*/

// Examples:

// Example 1:
// Input: startGene = "AACCGGTT", endGene = "AACCGGTA", bank = ["AACCGGTA"]
// Output: 1
// Explanation: One mutation from "AACCGGTT" → "AACCGGTA".

// Example 2:
// Input: startGene = "AACCGGTT", endGene = "AAACGGTA", bank = ["AACCGGTA", "AACCGCTA", "AAACGGTA"]
// Output: 2
// Explanation: Mutations: "AACCGGTT" → "AACCGGTA" → "AAACGGTA".

// Example 3:
// Input: startGene = "AACCGGTT", endGene = "AACCGGTA", bank = []
// Output: -1
// Explanation: The endGene is not in the bank, so the mutation is not possible.
