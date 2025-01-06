/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const minHeap = new MinPriorityQueue({ priority: node => node.val });
    const dummyHead = new ListNode(0); // Dummy node to simplify the merge
    let current = dummyHead;

    // Insert the first node of each list into the min-heap
    for (let i = 0; i < lists.length; i++) {
        if (lists[i]) {
            minHeap.enqueue(lists[i]);
        }
    }

    // While the heap is not empty, extract the smallest node and add it to the result
    while (minHeap.size() > 0) {
        const smallestNode = minHeap.dequeue().element;
        current.next = smallestNode;
        current = current.next;

        // If the smallest node has a next node, enqueue it into the heap
        if (smallestNode.next) {
            minHeap.enqueue(smallestNode.next);
        }
    }

    return dummyHead.next; // Return the merged list (skip the dummy node)
};

/*
Explanation:
1. The `minHeap` stores nodes in the heap, and we always extract the smallest node.
2. We create a `dummyHead` node to simplify the merging process. The `current` pointer will help us build the result list.
3. For each list, we insert its first node into the heap, and then repeatedly extract the smallest node and add it to the result list.
4. If the extracted node has a next node, we insert it into the heap for further processing.
5. Finally, we return the merged list, skipping the dummy head.

Example:

Input: lists = [[1,4,5],[1,3,4],[2,6]]

The min-heap process:
- Insert the first node of each list into the heap: [1, 1, 2].
- Extract the smallest node (1), add it to the result, and insert its next node (4) from the first list: [1, 4, 2].
- Extract the next smallest node (1), add it to the result, and insert its next node (3) from the second list: [3, 4, 2].
- Continue extracting the smallest node and adding it to the result until all lists are processed.

Output: [1,1,2,3,4,4,5,6]

Time Complexity:
- The time complexity is \(O(N \log k)\), where \(N\) is the total number of nodes in all the lists, and \(k\) is the number of lists. Each operation of extracting the smallest node from the heap takes \(O(\log k)\), and we perform this operation \(N\) times.

Space Complexity:
- The space complexity is \(O(k)\) due to the heap storing up to \(k\) nodes at a time, one from each list.

*/
