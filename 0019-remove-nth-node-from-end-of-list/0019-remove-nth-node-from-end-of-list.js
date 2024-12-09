/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);  // Initialize the node's value, defaulting to 0 if not provided.
 *     this.next = (next === undefined ? null : next); // Initialize the next pointer, defaulting to null if not provided.
 * }
 */

/**
 * Removes the nth node from the end of the list and returns the head of the modified list.
 *
 * @param {ListNode} head - The head of the linked list.
 * @param {number} n - The position of the node from the end to remove.
 * @return {ListNode} - The head of the modified linked list.
 */
var removeNthFromEnd = function (head, n) {
	// Create a dummy node to handle edge cases (like removing the head node)
	let dummy = new ListNode(0); // The dummy node helps simplify operations when removing the head or other nodes.
	dummy.next = head; // Point the dummy node's next to the head of the original list.

	// Initialize two pointers, fast and slow, both starting at the dummy node
	let fast = dummy; // The 'fast' pointer will move ahead to create a gap of n nodes between fast and slow.
	let slow = dummy; // The 'slow' pointer will eventually point to the node just before the one we want to remove.

	// Move the fast pointer n + 1 steps ahead
	// We need fast to be n+1 steps ahead of slow so that when fast reaches the end, slow will be at the node to remove.
	for (let i = 1; i <= n + 1; i++) {
		fast = fast.next; // Move the fast pointer one step ahead.
	}

	//  Move both fast and slow pointers until fast reaches the end of the list
	// This step ensures that the slow pointer will be just before the node that needs to be removed.
	while (fast !== null) {
		fast = fast.next; // Move fast one step forward.
		slow = slow.next; // Move slow one step forward, maintaining the gap between fast and slow.
	}

	// Remove the nth node from the end
	// At this point, slow is pointing to the node just before the one we want to remove.
	slow.next = slow.next.next; // Skip over the nth node, effectively removing it from the list.

	// Return the head of the modified list, which is dummy.next
	// We return dummy.next because dummy was initially pointing to the head of the list, and the head might have changed.
	return dummy.next;
};

/*
Explanation:

1. Dummy Node:
   - We introduce a dummy node at the beginning of the list. This simplifies edge cases, such as when the node to be removed is the head node (e.g., if `n` is equal to the length of the list).
   - `dummy.next` points to the head of the original list, making it easy to return the modified list.

2. Two Pointers:
   - The `fast` pointer is moved `n + 1` steps ahead of the `slow` pointer. The reason for moving `fast` by `n + 1` steps is that when `fast` reaches the end of the list, `slow` will be positioned just before the node we want to remove. This allows us to remove the node in constant time once the pointers are in place.
   - Both pointers move at the same speed after this initial gap, keeping the difference between them consistent.

3. Removing the Node:
   - To remove the nth node from the end, we simply adjust the `next` pointer of the `slow` pointer to skip the node that needs to be deleted (i.e., `slow.next = slow.next.next`).

4. Edge Case:
   - If the list has only one node and `n = 1`, the list will be empty after the removal. The dummy node allows us to handle this case gracefully without needing special logic.

5. Time Complexity:
   - O(sz), where `sz` is the number of nodes in the list. The list is traversed once with two pointers, which means the time complexity is proportional to the length of the list.

6. Space Complexity:
   - O(1), because the solution uses only a constant amount of extra space. We only need a few pointers (dummy, fast, slow), regardless of the size of the input list.
*/
