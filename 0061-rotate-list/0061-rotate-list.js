/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val); // Initialize the node's value, defaulting to 0 if not provided.
 *     this.next = (next === undefined ? null : next); // Initialize the next pointer, defaulting to null if not provided.
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

var rotateRight = function (head, k) {
	// Edge Case: If the list is empty, has only one node, or no rotation is needed (k = 0)
	if (!head || !head.next || k === 0) {
		return head; // If the list is empty or has only one node, or k is 0, return the head as is.
	}

	// Find the length of the linked list
	let length = 1; // Start with length 1 since we are counting the head node.
	let current = head; // Use a pointer to traverse the list.

	// Traverse the entire list to calculate its length
	while (current.next !== null) {
		length++; // Increment the length for each node.
		current = current.next; // Move to the next node.
	}

	// Calculate the effective number of rotations needed
	k = k % length; // If k is greater than the length, rotating by k is equivalent to rotating by k % length.
	if (k === 0) {
		return head; // If k is 0 after modulo operation, return the head as no rotation is needed.
	}

	// Make the list circular
	current.next = head; // Link the last node back to the head to form a circular linked list.

	// Find the new tail and new head after rotation
	let newTail = head; // Start with the head to find the new tail.

	// Traverse to the (length - k)th node, which will be the new tail of the rotated list.
	for (let i = 1; i < length - k; i++) {
		newTail = newTail.next; // Move the newTail pointer forward.
	}

	// Set the new head and break the circular list
	let newHead = newTail.next; // The new head is the node after the new tail.
	newTail.next = null; // Break the circular link by setting the new tail's next to null.

	// Return the new head of the rotated list
	return newHead; // The new head is the starting point of the rotated list.
};

/*
Explanation:

1. Edge Case Handling:
   - The first condition checks if the list is empty (`!head`), has only one node (`!head.next`), or no rotation is needed (`k === 0`). In such cases, no rotation is required, and we simply return the original list.

2. Calculate List Length:
   - We traverse the entire list using a `current` pointer to calculate the length of the list. This length is essential to determine how many rotations are needed.

3. Effective Rotations:
   - Since rotating a list by `k` steps is the same as rotating it by `k % length` steps (because after every `length` rotations, the list returns to its original position), we reduce `k` to the remainder when divided by the list length.

4. Circular List:
   - To simplify the rotation process, we make the list circular by linking the last node (`current`) to the head. This helps to perform the rotation by simply moving the "tail" of the list.

5. Finding the New Tail and Head:
   - After making the list circular, the new tail of the rotated list will be at the `(length - k)`-th node, and the new head will be the node following this new tail. The rotation effectively moves the last `k` elements to the front.
   
6. Breaking the Circle:
   - After identifying the new tail and new head, we break the circular list by setting `newTail.next = null`, which forms a proper singly-linked list with the rotated order.

7. Time Complexity:
   - O(n), where `n` is the number of nodes in the list. We traverse the list to calculate the length, make it circular, and identify the new head and tail.

8. Space Complexity:
   - O(1), as we only use a few pointers (`current`, `newTail`, `newHead`), regardless of the list's size. No additional space is required proportional to the input size.
*/
