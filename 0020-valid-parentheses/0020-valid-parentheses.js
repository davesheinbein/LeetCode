/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = function(s) {
     console.log("Initial Stack:", s);
    // Stack to keep track of opening brackets
    const stack = [];
    // Map to match closing brackets with their respective opening brackets
    const matchingBrackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            // Push opening brackets onto the stack
            stack.push(char);
            console.log(`Pushed ${char} onto the stack:`, stack);
        } else {
            // Check if the stack is empty or if the top of the stack doesn't match
            if (stack.length === 0) {
                console.log(`Stack is empty when encountering ${char}`);
                return false;
            }
            if (stack[stack.length - 1] !== matchingBrackets[char]) {
                console.log(`Mismatch found: expected ${matchingBrackets[char]}, found ${char}`);
                return false;
            }
            // Pop the matched opening bracket
            console.log(`Popped ${stack[stack.length - 1]} for ${char}`);
            stack.pop();
        }
    }
    
    // Final state of the stack
    console.log("Final stack state:", stack);
    // If the stack is empty, all brackets were matched correctly
    return stack.length === 0;
};

// Example usage
console.log("true?: ", isValid("()[]{}"));  // Expected output: true
console.log("false?: ", isValid("(]"));      // Expected output: false
console.log("true?: ", isValid("([{}])"));  // Expected output: true
console.log("false?: ", isValid("((()))]")); // Expected output: false

// Explaination
// Initial Logging:

// console.log("Initial Stack:", s); logs the input string to give context about the input before processing.
// Setting Up the Stack:

// const stack = []; initializes an empty stack to keep track of opening brackets. This stack helps ensure that each opening bracket has a corresponding and correctly ordered closing bracket.
// Matching Map for Closing Brackets:

// const matchingBrackets = { ')': '(', '}': '{', ']': '[' }; defines a dictionary mapping each closing bracket to its respective opening bracket. This will make it easy to check if each closing bracket has a corresponding opening bracket in the correct order.
// Iterating through the Characters in the String:

// The function iterates through each character in the input string s with for (let char of s).

// If the character is an opening bracket ((, {, or [):

// stack.push(char); pushes the character onto the stack.
// console.log(...) logs that the character has been pushed, displaying the current stack’s state.
// If the character is a closing bracket (), }, or ]):

// Empty Stack Check:
// if (stack.length === 0) checks if the stack is empty. If true, it logs this and returns false because there’s no opening bracket for this closing bracket, making the string invalid.
// Mismatched Brackets Check:
// if (stack[stack.length - 1] !== matchingBrackets[char]) compares the last pushed opening bracket (top of the stack) with the expected matching bracket from matchingBrackets. If they don’t match, it logs this mismatch and returns false.
// Matching Brackets:
// If the closing bracket matches the top opening bracket, stack.pop() removes this opening bracket from the stack, effectively “matching” this pair of brackets.
// console.log(...) logs this successful pop, showing which bracket was removed from the stack for the matched closing bracket.
// Final Stack Check:

// After the loop, console.log("Final stack state:", stack); logs the state of the stack. For the string to be valid, the stack should be empty; this would mean all opening brackets were properly closed and matched.
// return stack.length === 0; returns true if the stack is empty (valid string) and false otherwise (invalid string).