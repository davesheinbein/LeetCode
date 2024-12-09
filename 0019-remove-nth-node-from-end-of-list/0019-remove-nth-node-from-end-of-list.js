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
	let dummy = new ListNode(0); // Dummy node is created, making the list easier to manage, especially if we need to remove the head.
	console.log('dummy', dummy); // Printing the dummy node to check initial value: {val: 0, next: head}
	dummy.next = head; // Point the dummy node's next to the head of the original list.
	console.log('dummy.next', dummy.next); // dummy.next now points to the head of the list, so dummy.next = {val: 1, next: 2}

	// Initialize two pointers, fast and slow, both starting at the dummy node
	let fast = dummy; // The 'fast' pointer will move ahead to create a gap of n nodes between fast and slow.
	let slow = dummy; // The 'slow' pointer will eventually point to the node just before the one we want to remove.

	// Move the fast pointer n + 1 steps ahead
	// We need fast to be n+1 steps ahead of slow so that when fast reaches the end, slow will be at the node to remove.
	for (let i = 1; i <= n + 1; i++) {
		fast = fast.next; // Move the fast pointer one step ahead.
	}

	// Now let's assume we are removing the 2nd node from the end, so after moving fast n+1 steps:
	// At this point:
	// fast is pointing to node 3 (i.e., the node with value 3)
	// slow is pointing to the dummy node (i.e., the node with value 0).

	// Move both fast and slow pointers until fast reaches the end of the list
	// This step ensures that the slow pointer will be just before the node that needs to be removed.
	while (fast !== null) {
		fast = fast.next; // Move fast one step forward.
		slow = slow.next; // Move slow one step forward, maintaining the gap between fast and slow.
	}

	// After this step:
	// fast will reach the end of the list (null).
	// slow will be at the node with value 3, just before the node to remove (which is node 4).

	// Remove the nth node from the end
	// At this point, slow is pointing to the node just before the one we want to remove.
	slow.next = slow.next.next; // Skip over the nth node (node 4) by adjusting the `next` pointer of slow.
	// Now, slow.next will point to the node with value 5, effectively removing node 4 from the list.

	// After the removal, the list is now: 1 -> 2 -> 3 -> 5

	// Return the head of the modified list, which is dummy.next
	// We return dummy.next because dummy was initially pointing to the head of the list, and the head might have changed.
	return dummy.next; // Returns the head of the updated list: {val: 1, next: 2}
};

/*
Explanation:

1. Dummy Node:
   - A dummy node is introduced at the beginning of the list to simplify operations, especially when the node to remove is the head node (or when there's only one node in the list).
   - `dummy.next` initially points to the head of the original list. This helps us avoid special edge case handling when modifying the head of the list.
   
   Example:
   - Initially, the list looks like this: `dummy(0) -> 1 -> 2 -> 3 -> 4 -> 5`
   - After setting `dummy.next = head`, we get: `dummy(0) -> 1 -> 2 -> 3 -> 4 -> 5`

2. Two Pointers:
   - The `fast` pointer is moved `n + 1` steps ahead of the `slow` pointer. This ensures that when `fast` reaches the end of the list, `slow` will be just before the node to be removed.
   - Both pointers move at the same speed after this initial gap, maintaining a fixed difference of `n + 1` nodes between them.
   
   Example (for n = 2):
   - Initially: `dummy(0) -> 1 -> 2 -> 3 -> 4 -> 5`
   - After moving `fast` pointer `n + 1 = 3` steps ahead, `fast` points to node `3` and `slow` points to `dummy(0)`.
   - After the loop, `slow` points to node `3` and `fast` reaches the end of the list (`null`).

3. Removing the Node:
   - To remove the nth node from the end, we update the `next` pointer of `slow` to skip over the node that needs to be removed (node 4 in this case).
   - This effectively removes the node from the list and links the previous node (`slow`) to the next node (`5`).
   
   Example (after removal):
   - List becomes: `dummy(0) -> 1 -> 2 -> 3 -> 5` after removing node 4.

4. Edge Case:
   - If the list contains only one node, and `n = 1`, the dummy node helps us handle the case where we remove the only node and return an empty list (`dummy.next = null`).

5. Time Complexity:
   - O(sz), where `sz` is the number of nodes in the list. We only traverse the list once using the two pointers, so the time complexity is proportional to the length of the list.

6. Space Complexity:
   - O(1), since we are only using a constant amount of extra space. The space used does not grow with the size of the list; we only need a few pointers (`dummy`, `fast`, `slow`).
*/
