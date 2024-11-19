/**
 * Definition for a singly-linked list node.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Determines if a linked list has a cycle.
 *
 * @param {ListNode} head - The head of the linked list.
 * @return {boolean} - Returns true if a cycle is detected, otherwise false.
 */

var hasCycle = function(head) {
    // Edge case: A list with no nodes or only one node cannot have a cycle.
    if (!head || !head.next) return false;
    
    // Initialize two pointers: 
    // 'slow' moves one step at a time, while 'fast' moves two steps at a time.
    let slow = head;
    let fast = head;
    
    // Traverse the list using the two pointers.
    while (fast && fast.next) {
        slow = slow.next; // Move 'slow' one step forward.
        fast = fast.next.next; // Move 'fast' two steps forward.
        
        // If 'slow' and 'fast' meet, a cycle exists in the list.
        if (slow === fast) {
            return true;
        }
    }
    
    // If the loop ends, it means 'fast' reached the end of the list (no cycle).
    return false;
};

/*
Explanation:

1. Edge Case Handling:
   - If the list is empty (`head` is null) or has only one node (`head.next` is null), 
     it cannot contain a cycle, so we return false.

2. Pointer Initialization:
   - 'slow' pointer moves one step at a time.
   - 'fast' pointer moves two steps at a time.

3. Cycle Detection:
   - As 'fast' moves faster, if a cycle exists, 'slow' and 'fast' will eventually 
     meet within the cycle.
   - If 'fast' or 'fast.next' becomes null, it means the list has no cycle.

4. Return Value:
   - If the two pointers meet, return true (a cycle is detected).
   - If the loop terminates without the pointers meeting, return false (no cycle).

Example Use Cases:
- Input: [3, 2, 0, -4] with pos = 1 (tail connects to the node at index 1)
  Output: true (cycle detected).
- Input: [1, 2] with pos = 0 (tail connects to the head)
  Output: true (cycle detected).
- Input: [1] with pos = -1 (no cycle)
  Output: false (no cycle).
*/
