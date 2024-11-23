/**
 * @param {number[]} citations
 * @return {number}
 */

var hIndex = function(citations) {
    // Sort the citations array in descending order to arrange papers from most to least cited.
    citations.sort((a, b) => b - a);
    
    let h = 0; // Initialize h-index to 0. This will hold the highest possible h-index found.
    
    // Iterate through the sorted citations array to determine the h-index.
    for (let i = 0; i < citations.length; i++) {
        // Check if the current paper's citations are greater than or equal to the index+1 (papers with >= i+1 citations).
        if (citations[i] >= i + 1) {
            h = i + 1; // Update the h-index to reflect that we have at least (i+1) papers with >= (i+1) citations.
        } else {
            break; // If we find a paper with fewer than (i+1) citations, we can stop as the remaining papers will have even fewer.
        }
    }
    
    return h; // Return the computed h-index.
};

// Example usage:
console.log(hIndex([3, 0, 6, 1, 5])); // Output: 3
console.log(hIndex([1, 3, 1]));       // Output: 1

/*
Explanation:

1. Sorting the citations array:
   - We begin by sorting the citations in descending order to easily compare papers with high citations first.
   - Example: Given citations = [3, 0, 6, 1, 5], after sorting, it becomes [6, 5, 3, 1, 0].

2. Finding the h-index:
   - We iterate through the sorted array, where each index `i` represents the number of papers (indexed from 0) that have at least `i+1` citations.
   - For each paper at index `i`:
     - If the citations at index `i` are greater than or equal to `i + 1`, this means that there are at least `i+1` papers with `i+1` or more citations. We update the h-index to `i + 1`.
     - If the condition fails, we stop the iteration because subsequent papers will have fewer citations, making it impossible to increase the h-index further.

3. Example Breakdown:
   - For citations = [3, 0, 6, 1, 5], after sorting, the array becomes [6, 5, 3, 1, 0].
   - At index 0: citations[0] = 6, 1 paper has at least 6 citations, so h = 1.
   - At index 1: citations[1] = 5, 2 papers have at least 5 citations, so h = 2.
   - At index 2: citations[2] = 3, 3 papers have at least 3 citations, so h = 3.
   - At index 3: citations[3] = 1, but we need at least 4 papers with 4 or more citations, which is not the case, so we stop.

   Final h-index = 3, because there are 3 papers with at least 3 citations each.

Time Complexity:
- Sorting the array takes O(n log n), where `n` is the length of the `citations` array.
- Iterating through the array takes O(n).
- Overall time complexity is O(n log n).

Space Complexity:
- We are sorting the array in-place, so the space complexity is O(1) for additional space (aside from the input).
*/
