var MinStack = function () {
    // Initialize two stacks:
    // `stack` holds all elements.
    // `minStack` keeps track of the minimum value at each level.
    this.stack = [];
    this.minStack = [];
};

/**
 * Push a value onto the stack.
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    // Push the value onto the main stack
    this.stack.push(val);

    // Push the minimum value onto the minStack
    // If minStack is empty or the new value is smaller/equal to the current minimum, push it
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(val);
    }
};

/**
 * Pop the top element from the stack.
 * @return {void}
 */
MinStack.prototype.pop = function () {
    // Pop from the main stack
    const popped = this.stack.pop();

    // If the popped value is the current minimum, pop it from the minStack as well
    if (popped === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
};

/**
 * Get the top element of the stack.
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

/**
 * Get the current minimum value in the stack.
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minStack[this.minStack.length - 1];
};

// Example usage:

var obj = new MinStack();
obj.push(3);
console.log(obj.top());     // Output: 3
console.log(obj.getMin());  // Output: 3

obj.push(5);
console.log(obj.top());     // Output: 5
console.log(obj.getMin());  // Output: 3

obj.push(2);
console.log(obj.top());     // Output: 2
console.log(obj.getMin());  // Output: 2

obj.pop();
console.log(obj.top());     // Output: 5
console.log(obj.getMin());  // Output: 3

obj.push(1);
console.log(obj.top());     // Output: 1
console.log(obj.getMin());  // Output: 1

obj.pop();
console.log(obj.top());     // Output: 5
console.log(obj.getMin());  // Output: 3

/*
Explanation:
1. Two Stacks Approach:
   - The `stack` contains all the pushed elements.
   - The `minStack` tracks the minimum element at each stage. Whenever a new minimum is encountered, it is added to the `minStack`.

2. Operations:
   - push(val): 
     - Add the value to the `stack`.
     - If the `minStack` is empty or the value is less than or equal to the current minimum, add it to the `minStack`.
   - pop():
     - Remove the top element from the `stack`.
     - If the popped element is equal to the current minimum (top of `minStack`), remove it from the `minStack`.
   - top():
     - Return the top element of the `stack`.
   - getMin():
     - Return the top element of the `minStack`, which represents the current minimum.

3. Time Complexity:
   - All operations (`push`, `pop`, `top`, `getMin`) run in O(1) time, as all stack operations (push and pop) are O(1).

4. Space Complexity:
   - O(n), where `n` is the number of elements pushed to the stack, as we use an auxiliary `minStack` to track the minimum values.
*/
