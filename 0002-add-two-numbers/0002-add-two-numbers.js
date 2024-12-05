/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val);
 *     this.next = (next===undefined ? null : next);
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
	let dummy = new ListNode(0); // Dummy node to simplify list handling
	let current = dummy; // Pointer for constructing the result list
	let carry = 0; // To store carry-over value

	// Traverse both lists until all digits and carry are processed
	while (l1 !== null || l2 !== null || carry > 0) {
		let sum = carry; // Start with the carry value

		if (l1 !== null) {
			sum += l1.val; // Add l1's value if it exists
			l1 = l1.next; // Move to the next node in l1
		}

		if (l2 !== null) {
			sum += l2.val; // Add l2's value if it exists
			l2 = l2.next; // Move to the next node in l2
		}

		carry = Math.floor(sum / 10); // Update carry for the next iteration
		current.next = new ListNode(sum % 10); // Create a new node with the digit
		current = current.next; // Move to the next node in the result list
	}

	return dummy.next; // Return the head of the resulting list
};

/*
Explanation:
1. Reverse Order Representation:
   - Since the digits are stored in reverse order, the least significant digit is at the head of the list. This allows us to add the numbers directly from the start of the lists, similar to how we perform manual addition from right to left.

2. Carry Management:
   - At each step, the sum of the digits from both lists (if present) and the carry from the previous step is calculated.
   - The new digit for the result list is `sum % 10`, and the carry for the next step is `Math.floor(sum / 10)`.

3. Using a Dummy Node:
   - A dummy node is used to simplify edge cases, such as when the resulting list is empty or when additional nodes need to be appended. The final result starts from `dummy.next`.

4. Iterate Until Done:
   - The loop continues as long as there are digits left in either list or there is a carry. This ensures all possible contributions are accounted for.

Time Complexity:
- O(max(m, n)): Where `m` and `n` are the lengths of `l1` and `l2`, respectively. Each node is visited once.

Space Complexity:
- O(max(m, n)): The size of the resulting linked list.

*/
