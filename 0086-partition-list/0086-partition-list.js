/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
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
	let lessThanHead = new ListNode(0);
	let greaterThanOrEqualHead = new ListNode(0);

	// Create pointers for the two lists
	let lessThan = lessThanHead;
	let greaterThanOrEqual = greaterThanOrEqualHead;

	// Traverse the original list
	let current = head;
	while (current !== null) {
		if (current.val < x) {
			// Add to the "less than x" list
			lessThan.next = current;
			lessThan = lessThan.next;
		} else {
			// Add to the "greater than or equal to x" list
			greaterThanOrEqual.next = current;
			greaterThanOrEqual = greaterThanOrEqual.next;
		}
		current = current.next;
	}

	// Combine the two lists
	greaterThanOrEqual.next = null; // End the "greater than or equal to x" list
	lessThan.next = greaterThanOrEqualHead.next; // Connect the two lists

	// Return the partitioned list, starting from lessThanHead.next
	return lessThanHead.next;
};

/*
Explanation:

1. Dummy Nodes:
   - Two dummy nodes are used to create the two separate lists: one for nodes less than `x` and one for nodes greater than or equal to `x`. The dummy nodes help simplify list handling by providing a starting point for the lists.
   
2. Two Pointers:
   - `lessThan` keeps track of the last node in the "less than `x`" list.
   - `greaterThanOrEqual` keeps track of the last node in the "greater than or equal to `x`" list.
   
3. List Traversal:
   - We traverse the original list, comparing each node's value with `x`.
   - If the node's value is less than `x`, it is added to the "less than `x`" list.
   - If the node's value is greater than or equal to `x`, it is added to the "greater than or equal to `x`" list.

4. Merging the Lists:
   - After the traversal, we merge the two lists by setting `lessThan.next` to point to the head of the "greater than or equal to `x`" list.
   - The end of the "greater than or equal to `x`" list is marked with `greaterThanOrEqual.next = null` to prevent any potential circular references.

5. Edge Cases:
   - If the list is empty, the result will be `null`.
   - If no nodes are less than `x` or no nodes are greater than or equal to `x`, the two lists will still merge correctly, preserving the relative order.

### Time Complexity:
- O(n): Where `n` is the number of nodes in the list. We traverse the list once and perform constant time operations for each node.

### Space Complexity:
- O(1): We only use a constant amount of space (two dummy nodes) aside from the input and output linked lists. No additional space is used that grows with the input size.
*/
