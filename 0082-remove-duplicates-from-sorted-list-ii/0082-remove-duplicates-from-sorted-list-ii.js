/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val); // Initialize the node's value. Defaults to 0 if not provided.
 *     this.next = (next === undefined ? null : next); // Initialize the next pointer, defaults to null if not provided.
 * }
 */

/**
 * Removes all nodes that have duplicate numbers from a sorted linked list.
 *
 * @param {ListNode} head - The head of the sorted linked list.
 * @return {ListNode} - The head of the modified linked list with duplicates removed.
 */
var deleteDuplicates = function (head) {
	// Create a dummy node that points to the head of the list
	let dummy = new ListNode(0); // Dummy node created with a value of 0
	dummy.next = head; // Dummy's next pointer points to the original head node.

	// Initialize the previous pointer (prev) and current pointer (current)
	let prev = dummy; // prev will point to the node before the duplicates.
	let current = head; // current is used to traverse through the list.

	// Traverse the list
	while (current !== null) {
		// Traverse until we reach the end of the list.
		// Check if we have a duplicate
		if (
			current.next !== null &&
			current.val === current.next.val
		) {
			// If current and next node have the same value, we have a duplicate.

			// Skip all nodes with the same value (move current to the last duplicate)
			while (
				current.next !== null &&
				current.val === current.next.val
			) {
				current = current.next; // Keep moving current to the next node until no more duplicates are found.
			}
			// Connect prev to the node after the duplicates, skipping all duplicates.
			prev.next = current.next; // prev.next should now point to the node after all duplicates.
		} else {
			// If no duplicate, just move prev to the current node.
			prev = prev.next; // prev moves to the current node since it's not a duplicate.
		}

		// Move current pointer forward, whether we find duplicates or not.
		current = current.next; // Always move current forward to check the next node.
	}

	// Return the head of the modified list (dummy.next)
	return dummy.next; // Return the node after the dummy node, which is the new head of the modified list.
};

/*
Explanation:

1. Dummy Node:
   - A dummy node is created at the beginning of the list to handle edge cases, such as when the head node itself contains duplicates.
   - `dummy.next` points to the original head of the list. This simplifies the logic when removing nodes and also makes sure that we can easily return the modified list, even if the head changes.

2. Two Pointers (prev and current):
   - The `prev` pointer is used to track the node just before the duplicates, and it will eventually be used to skip the duplicate nodes.
   - The `current` pointer is used to traverse the list and detect duplicates. If a duplicate is found, `current` moves to skip over all duplicates, while `prev.next` is updated to skip the duplicates.

3. Handling Duplicates:
   - If two consecutive nodes have the same value (`current.val === current.next.val`), we enter a while loop to skip all nodes that have the same value.
   - After skipping the duplicates, `prev.next` is updated to point to the node after the duplicates (or `null` if there are no more nodes). This effectively removes the duplicates from the list.

4. Time Complexity:
   - O(n), where `n` is the number of nodes in the list. We traverse the list once, and for each node, we either move `current` once or skip over multiple duplicates.

5. Space Complexity:
   - O(1), because we only use a constant amount of space. The extra space used is for the pointers (`prev` and `current`), which do not depend on the size of the input list.
   
Key Concepts:
   - Dummy Node: The dummy node simplifies edge cases, such as when the head node contains duplicates or when there are no nodes in the list.
   - Two Pointers (prev and current): The prev pointer is used to update the list when duplicates are skipped. The current pointer is used to traverse and identify duplicates.
   - Skipping Duplicates: By using the current pointer to skip over duplicate nodes and adjusting prev.next, we can remove all duplicates efficiently.
*/
