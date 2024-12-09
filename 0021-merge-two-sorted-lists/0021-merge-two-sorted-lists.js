/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */

/**
 * Merges two sorted linked lists into one sorted linked list.
 *
 * @param {ListNode} list1 - The head of the first sorted linked list.
 * @param {ListNode} list2 - The head of the second sorted linked list.
 * @return {ListNode} - The head of the merged sorted linked list.
 */
var mergeTwoLists = function (list1, list2) {
    // Create a dummy node to simplify the merging process
    let dummy = new ListNode(-1);
    let current = dummy; // Pointer to construct the merged list

    console.log("Starting to merge two lists...");

    // Traverse both lists while neither is exhausted
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            console.log(`Adding node from list1 with value: ${list1.val}`);
            current.next = list1; // Attach the smaller node from list1
            list1 = list1.next;  // Move to the next node in list1
        } else {
            console.log(`Adding node from list2 with value: ${list2.val}`);
            current.next = list2; // Attach the smaller node from list2
            list2 = list2.next;  // Move to the next node in list2
        }
        current = current.next; // Move the pointer in the merged list
    }

    // If any nodes remain in list1, append them
    if (list1 !== null) {
        console.log("Appending remaining nodes from list1.");
        current.next = list1;
    }

    // If any nodes remain in list2, append them
    if (list2 !== null) {
        console.log("Appending remaining nodes from list2.");
        current.next = list2;
    }

    console.log("Finished merging the lists.");
    console.log("dummy.next", dummy.next);
    return dummy.next; // Return the merged list, skipping the dummy node
};

/*
Explained:
1. Dummy Node:
   - A dummy node simplifies merging by providing a starting point for the merged list.
   - The merged list is built starting from `dummy.next`.

2. Comparing Nodes:
   - At each step, the smaller node between `list1` and `list2` is appended to the merged list.
   - The pointer for the list that provided the smaller node moves to the next node.

3. Handling Remaining Nodes:
   - After one list is exhausted, the remaining nodes from the other list are appended to the merged list.

4. Edge Cases:
   - If either `list1` or `list2` is initially empty, the merged list is simply the non-empty list.
   - If both lists are empty, the merged list is also empty.

Time Complexity:
- O(m + n): Where `m` is the number of nodes in `list1` and `n` is the number of nodes in `list2`.
  Each node is visited once.

Space Complexity:
- O(1): The merged list is constructed in-place without requiring additional space, excluding the input nodes.
*/