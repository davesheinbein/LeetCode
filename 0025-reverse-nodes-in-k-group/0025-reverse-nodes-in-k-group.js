/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);  // Initialize the node's value (default 0 if not provided)
 *     this.next = (next === undefined ? null : next); // Initialize the next pointer (default null if not provided)
 * }
 */

/**
 * Reverses nodes in k-sized groups and returns the modified linked list.
 *
 * @param {ListNode} head - The head of the linked list.
 * @param {number} k - The size of the groups to reverse.
 * @return {ListNode} - The head of the modified linked list.
 */
var reverseKGroup = function (head, k) {
	// Calculate the length of the linked list
	let length = 0;
	let node = head;
	// Traverse through the list to count the number of nodes.
	while (node !== null) {
		length++;
		node = node.next;
	}

	// Handle edge case where the list has fewer than k nodes
	if (length < k) return head; // If there are less than k nodes, no reversal is needed.

	// Initialize pointers and dummy node for easier manipulation
	let dummy = new ListNode(0); // Create a dummy node to handle edge cases and simplify linking.
	dummy.next = head; // Point the dummy node to the head of the original list.
	let prevGroupEnd = dummy; // 'prevGroupEnd' will track the end of the previous group.
	let current = head; // 'current' will track the start of the current group to be reversed.

	// Reverse k nodes in each group
	while (length >= k) {
		// While there are enough nodes left to form a full group of size k
		let groupStart = current; // The first node of the current group (to be reversed)
		let groupEnd = current; // 'groupEnd' will eventually be the last node of the current group.

		// Move groupEnd to the k-th node (end of the current group)
		for (let i = 1; i < k; i++) {
			groupEnd = groupEnd.next;
		}

		let nextGroupStart = groupEnd.next; // The node after the current k-group that we will process next.

		// Reverse the nodes in the current group
		let prev = null; // Initialize 'prev' to null (to reverse the pointers).
		let curr = groupStart; // 'curr' starts at the first node of the current group.
		// Reverse the links between the nodes in the current group
		while (curr !== nextGroupStart) {
			let next = curr.next; // Save the next node.
			curr.next = prev; // Reverse the 'next' pointer of the current node.
			prev = curr; // Move 'prev' to the current node.
			curr = next; // Move 'curr' to the next node.
		}

		// Reconnect the reversed group back into the list
		prevGroupEnd.next = prev; // The previous group's end now points to the new head of the reversed group.
		groupStart.next = nextGroupStart; // The old head of the group now points to the node after the reversed group.

		// Move prevGroupEnd and current to the next group
		prevGroupEnd = groupStart; // Update prevGroupEnd to the end of the reversed group.
		current = nextGroupStart; // Move 'current' to the start of the next group to reverse.

		// Decrease the remaining length by k
		length -= k; // We have processed k nodes, so reduce the remaining length by k.
	}

	// Return the head of the modified list
	return dummy.next; // The dummy node's next pointer points to the head of the new list.
};

/*
Explanation:

1. Length Calculation:
   - We traverse the entire list to calculate its length. This is necessary to know if there are enough nodes to form a full group of size `k`. If there are fewer than `k` nodes left, they will not be reversed.

2. Dummy Node:
   - A dummy node is used to simplify edge cases. For example, when the first group of nodes is reversed, we don't have to worry about updating the head of the list since `dummy.next` will always point to the correct head of the modified list.

3. Reversing k Nodes:
   - For each group of `k` nodes, we reverse the pointers between the nodes in that group by adjusting the `next` pointers. We then reconnect the reversed group to the rest of the list.
   - The `prevGroupEnd` node connects to the new head of the reversed group, and the original `groupStart` node connects to the first node after the reversed group.

4. Edge Case:
   - If the length of the list is less than `k`, we don't reverse any nodes and simply return the original list.

5. Time Complexity:
   - O(n): We traverse the list twice. The first traversal calculates the length, and the second traversal reverses the groups. Both operations take linear time relative to the size of the list.

6. Space Complexity:
   - O(1): The space complexity is constant because we only use a few pointers (`dummy`, `prevGroupEnd`, `current`, etc.) and do not use any additional data structures that grow with the size of the input.
*/
