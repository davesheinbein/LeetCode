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
    console.log("Starting cycle detection...");
    
    // Edge case: A list with no nodes or only one node cannot have a cycle.
    if (!head) {
        console.log("The list is empty. No cycle.");
        return false;
    }
    if (!head.next) {
        console.log("The list has only one node. No cycle.");
        return false;
    }
    
    // Initialize two pointers:
    let slow = head;
    let fast = head;
    console.log("Initialized slow and fast pointers.");

    // Traverse the list using the two pointers.
    while (fast && fast.next) {
        slow = slow.next; // Move 'slow' one step forward.
        fast = fast.next.next; // Move 'fast' two steps forward.

        console.log(`Current positions -> slow: ${slow.val}, fast: ${fast ? fast.val : "null"}`);
        
        // If 'slow' and 'fast' meet, a cycle exists in the list.
        if (slow === fast) {
            console.log("Cycle detected! The slow and fast pointers met.");
            return true;
        }
    }
    
    // If the loop ends, it means 'fast' reached the end of the list (no cycle).
    console.log("No cycle detected. The list ended.");
    return false;
};

function testHasCycle() {
    console.log("==== Test Case 1: No Cycle ====");
    let head1 = new ListNode(1);
    head1.next = new ListNode(2);
    head1.next.next = new ListNode(3);
    head1.next.next.next = new ListNode(4);
    console.log("Result:", hasCycle(head1)); // Expected: false

    console.log("\n==== Test Case 2: Cycle at Node 2 ====");
    let head2 = new ListNode(1);
    head2.next = new ListNode(2);
    head2.next.next = new ListNode(3);
    head2.next.next.next = new ListNode(4);
    head2.next.next.next.next = head2.next; // Creating a cycle
    console.log("Result:", hasCycle(head2)); // Expected: true

    console.log("\n==== Test Case 3: Single Node, No Cycle ====");
    let head3 = new ListNode(1);
    console.log("Result:", hasCycle(head3)); // Expected: false

    console.log("\n==== Test Case 4: Empty List ====");
    console.log("Result:", hasCycle(null)); // Expected: false

    console.log("\n==== Test Case 5: Cycle at Head ====");
    let head4 = new ListNode(1);
    head4.next = head4; // Single node pointing to itself
    console.log("Result:", hasCycle(head4)); // Expected: true
}

// Run the tests
testHasCycle();

/*
Explanation:

1. Edge Case Handling:
   - If the list is empty (`head` is null) or has only one node (`head.next` is null), 
     it cannot contain a cycle, so we return false.

2. Pointer Initialization:
   - 'slow' pointer moves one step at a time.
   - 'fast' pointer moves two steps at a time.

3. Cycle Detection:
   - Log each step of 'slow' and 'fast' pointers during traversal.
   - If 'slow' and 'fast' meet, log the detection and return true.

4. End Condition:
   - If 'fast' reaches null or the end of the list, log that no cycle is detected and return false.

Example Use Cases:
- Input: [3, 2, 0, -4] with pos = 1 (tail connects to the node at index 1)
  Logs: Positions of slow and fast pointers until they meet.
  Output: true (cycle detected).
- Input: [1, 2] with pos = 0 (tail connects to the head)
  Logs: Positions of slow and fast pointers until they meet.
  Output: true (cycle detected).
- Input: [1] with pos = -1 (no cycle)
  Logs: The list ends without a cycle.
  Output: false (no cycle).
*/
