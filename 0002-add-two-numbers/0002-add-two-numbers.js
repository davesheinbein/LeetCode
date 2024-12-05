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

    console.log("Starting addition of two numbers...");

    // Traverse both lists until all digits and carry are processed
    while (l1 !== null || l2 !== null || carry > 0) {
        let sum = carry; // Start with the carry value

        if (l1 !== null) {
            console.log(`Adding l1.val: ${l1.val}`);
            sum += l1.val; // Add l1's value if it exists
            l1 = l1.next; // Move to the next node in l1
        }

        if (l2 !== null) {
            console.log(`Adding l2.val: ${l2.val}`);
            sum += l2.val; // Add l2's value if it exists
            l2 = l2.next; // Move to the next node in l2
        }

        // Calculate carry for the next iteration
        carry = Math.floor(sum / 10); 
        // Explanation:
        // Math.floor(sum / 10) gives us the carry digit for the next place.
        // For example, if sum = 13, the carry is 1 (13 / 10 = 1.3, so we take the integer part, which is 1).
        console.log(`Current sum: ${sum}, carry: ${carry}`);

        // Extract the current digit to store in the result list
        current.next = new ListNode(sum % 10);
        // Explanation:
        // sum % 10 gives us the digit for the current place.
        // For example, if sum = 13, the current digit is 3 (13 % 10 = 3).
        console.log(`Appending node with value: ${sum % 10}`);

        current = current.next; // Move to the next node in the result list
    }

    console.log("Finished constructing the result list.");
    return dummy.next; // Return the head of the resulting list
};


/*
Explanation:
1. Reverse Order Representation:
   - Since the digits are stored in reverse order, the least significant digit is at the head of the list. This allows us to add the numbers directly from the start of the lists, similar to how we perform manual addition from right to left.

2. Carry Management:
   - At each step, the sum of the digits from both lists (if present) and the carry from the previous step is calculated.
   - The carry for the next step is `Math.floor(sum / 10)`, which gives us the higher place value.
   - The digit for the current place in the result is `sum % 10`, which gives the remainder after dividing by 10.

3. Using a Dummy Node:
   - A dummy node is used to simplify edge cases, such as when the resulting list is empty or when additional nodes need to be appended. The final result starts from `dummy.next`.

4. Iterate Until Done:
   - The loop continues as long as there are digits left in either list or there is a carry. This ensures all possible contributions are accounted for.

Time Complexity:
- O(max(m, n)): Where `m` and `n` are the lengths of `l1` and `l2`, respectively. Each node is visited once.

Space Complexity:
- O(max(m, n)): The size of the resulting linked list.

*/
