/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val);
 *     this.next = (next===undefined ? null : next);
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var sortList = function (head) {
	// Base case: If the list is empty or contains a single element, it's already sorted
	if (!head || !head.next) {
		return head;
	}

	// Helper function to find the middle of the list
	const getMiddle = (node) => {
		let slow = node,
			fast = node;
		let prev = null;

		while (fast && fast.next) {
			prev = slow;
			slow = slow.next;
			fast = fast.next.next;
		}

		// Break the list into two halves
		if (prev) prev.next = null;

		return slow;
	};

	// Helper function to merge two sorted lists
	const merge = (l1, l2) => {
		const dummy = new ListNode();
		let current = dummy;

		while (l1 && l2) {
			if (l1.val <= l2.val) {
				current.next = l1;
				l1 = l1.next;
			} else {
				current.next = l2;
				l2 = l2.next;
			}
			current = current.next;
		}

		// Attach remaining nodes (if any)
		if (l1) current.next = l1;
		if (l2) current.next = l2;

		return dummy.next;
	};

	// Split the list into two halves
	const mid = getMiddle(head);
	const left = sortList(head); // Recursively sort the left half
	const right = sortList(mid); // Recursively sort the right half

	// Merge the two sorted halves
	return merge(left, right);
};

/*
Explanation:
1. Divide and Conquer Approach (Merge Sort):
   - The list is recursively split into two halves until each sublist has one or no elements.
   - The middle of the list is found using the two-pointer technique.
2. Merge Two Sorted Lists:
   - Two sorted sublists are merged into a single sorted list.
   - This ensures the sorted order is maintained as the lists are combined.
3. The recursion continues until the entire list is merged into a single sorted list.

Example:

Input: head = [4,2,1,3]
- Split the list into [4,2] and [1,3].
- Split further into [4], [2], [1], [3].
- Merge [4] and [2] to get [2,4].
- Merge [1] and [3] to get [1,3].
- Merge [2,4] and [1,3] to get [1,2,3,4].

Output: [1,2,3,4]

Time Complexity:
- The time complexity is \(O(n \log n)\) due to the divide and conquer strategy:
  - \(O(\log n)\) splits to divide the list.
  - \(O(n)\) for merging the sublists at each level.

Space Complexity:
- The space complexity is \(O(1)\) for linked list operations since no additional data structures are used.
- However, recursion stack usage will be \(O(\log n)\) due to the depth of the recursive calls.
*/
