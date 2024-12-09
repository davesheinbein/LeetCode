/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
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
	// Check the length of the linked list
	let length = 0;
	let node = head;
	while (node !== null) {
		length++;
		node = node.next;
	}

	// Handle edge case where the length is less than k
	if (length < k) return head;

	// Initialize pointers and dummy node
	let dummy = new ListNode(0);
	dummy.next = head;
	let prevGroupEnd = dummy;
	let current = head;

	// Reverse k nodes in each group
	while (length >= k) {
		let groupStart = current;
		let groupEnd = current;
		// Move groupEnd to the k-th node
		for (let i = 1; i < k; i++) {
			groupEnd = groupEnd.next;
		}
		let nextGroupStart = groupEnd.next; // The node after the current group

		// Reverse the nodes in the current group
		let prev = null;
		let curr = groupStart;
		while (curr !== nextGroupStart) {
			let next = curr.next;
			curr.next = prev;
			prev = curr;
			curr = next;
		}

		// Connect the reversed group back into the list
		prevGroupEnd.next = prev; // prev is the new head of the reversed group
		groupStart.next = nextGroupStart; // groupStart is the new tail of the reversed group

		// Move prevGroupEnd and current to the next group
		prevGroupEnd = groupStart;
		current = nextGroupStart;

		// Decrease the remaining length by k
		length -= k;
	}

	// Return the head of the modified list
	return dummy.next;
};

/*
Explanation:

1. Length Calculation:
   - We first traverse the entire list to determine the length. This helps us know how many full k-groups can be reversed.
   
2. Dummy Node:
   - A dummy node is used to simplify linking the head of the modified list to the rest of the list. It allows us to easily handle the case where the list might start with a reversed group.

3. Reversing k Nodes:
   - For each group of k nodes, we reverse them by adjusting their `next` pointers.
   - The reversed group is then reconnected to the list by linking the end of the previous group to the start of the reversed group and the end of the reversed group to the next group.

4. Edge Case:
   - If there are fewer than k nodes remaining at the end, they are not reversed. We just connect them to the list as they are.

5. Time Complexity:
   - O(n): We visit each node exactly once during the reversal process.
   
6. Space Complexity:
   - O(1): We only use a few pointers and no additional space that grows with the size of the input.

*/
