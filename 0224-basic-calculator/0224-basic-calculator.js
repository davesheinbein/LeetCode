/**
 * @param {string} s
 * @return {number}
 */

var calculate = function (s) {
	// Initialize variables
	let stack = []; // Stack to handle parentheses
	let currentNumber = 0; // To store the number being processed
	let currentSign = 1; // Sign multiplier (1 for '+', -1 for '-')
	let result = 0; // Final result

	// Traverse the string character by character
	for (let i = 0; i < s.length; i++) {
		const char = s[i];

		if (!isNaN(char) && char !== ' ') {
			// Build the number from consecutive digits
			currentNumber = currentNumber * 10 + parseInt(char);
		} else if (char === '+') {
			// Add the last number to the result with the current sign
			result += currentSign * currentNumber;
			currentSign = 1; // Update sign to positive
			currentNumber = 0; // Reset the current number
		} else if (char === '-') {
			// Add the last number to the result with the current sign
			result += currentSign * currentNumber;
			currentSign = -1; // Update sign to negative
			currentNumber = 0; // Reset the current number
		} else if (char === '(') {
			// Push the current result and sign onto the stack
			stack.push(result);
			stack.push(currentSign);
			// Reset result and sign for the sub-expression
			result = 0;
			currentSign = 1;
		} else if (char === ')') {
			// Add the last number before processing the closing parenthesis
			result += currentSign * currentNumber;
			currentNumber = 0; // Reset the current number
			// Pop the sign and result from the stack
			result *= stack.pop(); // Multiply with the sign
			result += stack.pop(); // Add to the result outside the parenthesis
		}
	}

	// Add any remaining number to the result
	result += currentSign * currentNumber;
	return result;
};

console.log(calculate('1 + 1')); // Output: 2
console.log(calculate(' 2-1 + 2 ')); // Output: 3
console.log(calculate('(1+(4+5+2)-3)+(6+8)')); // Output: 23
console.log(calculate('10 - (2 + (3 - 5))')); // Output: 10

/*
Explanation:
1. Using a Stack for Parentheses:
   - Parentheses create sub-expressions that need to be evaluated independently.
   - When encountering a '(', the current state (result and sign) is pushed onto the stack. This allows us to evaluate the sub-expression as a standalone unit.
   - When encountering a ')', we complete the sub-expression, retrieve the previous state from the stack, and combine it with the evaluated result. This ensures correct precedence handling for nested expressions.

2. Processing Numbers:
   - Numbers can have multiple digits, so we build them by multiplying the current value by 10 and adding the new digit. This ensures that `123` is processed as `1*100 + 2*10 + 3` rather than as three separate numbers.

3. Handling '+', '-' Operators:
   - The `currentSign` variable ensures that numbers are added or subtracted based on the most recent operator.
   - Whenever a '+' or '-' is encountered, the number processed so far is added to the result, and `currentSign` is updated to reflect the new operator.

4. Resetting State at '(':
   - When '(' is encountered, the current result and sign are pushed onto the stack, and the result is reset to 0. This isolates the evaluation of the sub-expression.

5. Combining State at ')':
   - When ')' is encountered, the result of the sub-expression is multiplied by the sign popped from the stack and added to the previous result popped from the stack. This step "un-nests" the sub-expression and integrates it with the outer expression.

6. End of String Handling:
   - At the end of the string, any remaining number is added to the result. This ensures that trailing numbers are included.

Why this approach works:
- Arithmetic operations in strings are naturally left-to-right, except for nested expressions and parentheses, which require careful tracking. Using a stack allows us to "pause" the evaluation of an outer expression, evaluate an inner one, and then seamlessly continue.
- By processing numbers immediately upon encountering operators or parentheses, we ensure no number is skipped or double-counted.

Time Complexity:
- O(n): Each character is processed once.

Space Complexity:
- O(n): The stack grows with the depth of nested parentheses.

*/
