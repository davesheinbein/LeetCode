/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val); // Initialize the node's value, defaulting to 0 if not provided.
 *     this.next = (next === undefined ? null : next); // Initialize the next pointer, defaulting to null if not provided.
 * }
 */

/**
 * Partitions the linked list into two parts:
 * nodes with values less than `x` and nodes with values greater than or equal to `x`.
 *
 * @param {ListNode} head - The head of the linked list.
 * @param {number} x - The partition value.
 * @return {ListNode} - The head of the modified linked list.
 */
var partition = function (head, x) {
	// Create two dummy nodes to simplify handling of edge cases
	let lessThanHead = new ListNode(0); // Dummy node for the "less than x" list
	let greaterThanOrEqualHead = new ListNode(0); // Dummy node for the "greater than or equal to x" list

	// Create pointers to traverse the two lists
	let lessThan = lessThanHead; // Pointer for the "less than x" list
	let greaterThanOrEqual = greaterThanOrEqualHead; // Pointer for the "greater than or equal to x" list

	// Traverse the original list to partition the nodes
	let current = head; // Pointer for traversing the original list
	while (current !== null) {
		if (current.val < x) {
			// If the current node's value is less than x, add it to the "less than x" list
			lessThan.next = current; // Link the current node to the "less than x" list
			lessThan = lessThan.next; // Move the pointer for the "less than x" list forward
		} else {
			// If the current node's value is greater than or equal to x, add it to the "greater than or equal to x" list
			greaterThanOrEqual.next = current; // Link the current node to the "greater than or equal to x" list
			greaterThanOrEqual = greaterThanOrEqual.next; // Move the pointer for the "greater than or equal to x" list forward
		}
		current = current.next; // Move to the next node in the original list
	}

	// Terminate the "greater than or equal to x" list to avoid a circular reference
	greaterThanOrEqual.next = null; // Set the next pointer of the last node in the "greater than or equal to x" list to null

	// Merge the two lists by connecting the "less than x" list to the "greater than or equal to x" list
	lessThan.next = greaterThanOrEqualHead.next; // Skip the dummy node of the "greater than or equal to x" list and attach it

	// Return the head of the modified list, starting from the node after the "less than x" dummy node
	return lessThanHead.next; // Return the head of the new partitioned list
};

/*
Explanation:

1. Dummy Nodes:
   - Two dummy nodes (`lessThanHead` and `greaterThanOrEqualHead`) are used to create the two separate lists: one for nodes with values less than `x` and one for nodes with values greater than or equal to `x`. The dummy nodes provide a starting point for the lists, avoiding special cases when the lists are empty or when the partition happens at the head.

2. Two Pointers:
   - The `lessThan` pointer keeps track of the last node in the "less than x" list. This pointer is updated as we add nodes to that list.
   - The `greaterThanOrEqual` pointer similarly keeps track of the last node in the "greater than or equal to x" list.

3. List Traversal:
   - The algorithm traverses the original linked list once, comparing the value of each node to `x`.
   - If a node's value is less than `x`, it's added to the "less than x" list.
   - If a node's value is greater than or equal to `x`, it's added to the "greater than or equal to x" list.

4. Merging the Lists:
   - After the list traversal, the two sublists are merged. The `lessThan.next` pointer is set to point to the head of the "greater than or equal to x" list (skipping over the dummy node).
   - The end of the "greater than or equal to x" list is terminated with `greaterThanOrEqual.next = null`, preventing any circular references.

5. Edge Cases:
   - If the list is empty (`head === null`), the result will be `null` because there are no nodes to partition.
   - If all nodes are either less than `x` or greater than or equal to `x`, the two lists will still merge correctly, maintaining the original relative order of the nodes.

Time Complexity:
- O(n): Where `n` is the number of nodes in the linked list. The algorithm performs a single traversal of the list, processing each node once.

Space Complexity:
- O(1): We use a constant amount of extra space (two dummy nodes and a few pointers), so the space complexity does not depend on the size of the input list. The operation is done in-place without creating additional data structures that grow with the list size.
*/
