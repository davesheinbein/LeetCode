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
1. The algorithm uses a stack to handle nested parentheses by storing the current result and sign.
2. It processes numbers, operators, and parentheses character by character.
3. For numbers, it builds them by multiplying the previous value by 10 and adding the current digit.
4. For operators '+', '-', it adds the number processed so far to the result with the appropriate sign.
5. For '(', it pushes the current result and sign to the stack, resetting them for the new sub-expression.
6. For ')', it completes the sub-expression, pops the previous result and sign, and combines them.

Time Complexity:
- O(n): We traverse the string once, processing each character.

Space Complexity:
- O(n): The stack stores results and signs for nested parentheses.

*/
