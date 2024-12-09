/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);  // Initialize the node's value
 *     this.next = (next === undefined ? null : next); // Initialize the next pointer (default to null)
 * }
 */

/**
 * Reverses a portion of the list from position `left` to `right`.
 *
 * @param {ListNode} head - The head of the linked list.
 * @param {number} left - The start position of the sublist to reverse.
 * @param {number} right - The end position of the sublist to reverse.
 * @return {ListNode} - The head of the modified list.
 */
var reverseBetween = function (head, left, right) {
	// Edge case: If left equals right, no reversal is needed.
	// This is because reversing a single node results in the same list.
	if (left === right) return head;

	// Create a dummy node to handle edge cases easily, such as when left = 1.
	let dummy = new ListNode(0); // The dummy node helps us easily handle the case where the head needs to be modified.
	dummy.next = head; // Link the dummy node to the original list.
	let prev = dummy; // 'prev' will be the node just before the start of the sublist to reverse.

	// Move 'prev' to the node just before the 'left' position.
	// We traverse from the head until we reach the node just before the 'left' position.
	for (let i = 1; i < left; i++) {
		prev = prev.next; // Move to the next node.
	}

	// Set up the pointers for the reversal process.
	let start = prev.next; // 'start' is the first node to reverse.
	let then = start.next; // 'then' is the node after 'start', which will be moved to the front during the reversal.

	// Reverse the sublist from position `left` to `right`.
	// We will perform the reversal by moving 'then' to the front of the sublist repeatedly.
	for (let i = 0; i < right - left; i++) {
		// Adjust the 'next' pointer of 'start' to skip over 'then' (the node to be moved).
		start.next = then.next;

		// Adjust 'then' to point to the front of the sublist (the node after 'prev').
		then.next = prev.next;

		// Move 'prev.next' to point to 'then', making 'then' the first node in the reversed portion.
		prev.next = then;

		// Move 'then' to the next node to reverse.
		then = start.next;
	}

	// Return the modified list, starting from the node after the dummy node.
	// The modified list starts at dummy.next because the dummy node was placed before the original head.
	return dummy.next;
};

/*
Explanation:

1. Dummy Node:
   - A dummy node is introduced to simplify edge cases like when the reversal starts at the head of the list (i.e., `left = 1`).
   - The `dummy.next` points to the actual head of the modified list after the reversal.

2. Reversing the Sublist:
   - We first move `prev` to the node just before the `left` position.
   - We reverse the sublist between positions `left` and `right` by repeatedly moving the `then` node to the front of the sublist, adjusting the `next` pointers accordingly.

3. Edge Cases:
   - If `left === right`, we don't need to reverse any nodes because the sublist is just one node long.
   - The dummy node simplifies the case where the reversal starts from the head of the list (i.e., `left = 1`).

4. Final Result:
   - The function returns `dummy.next`, which is the head of the modified list after the reversal.

Time Complexity:
- O(n): We traverse the list twice: once to move `prev` to the `left` position and once to reverse the sublist. Each traversal is O(n), so the time complexity is O(n), where `n` is the number of nodes in the list.

Space Complexity:
- O(1): The reversal is done in-place, with only a few additional pointers used for the process. Therefore, the space complexity is O(1) excluding the input and output.
*/
