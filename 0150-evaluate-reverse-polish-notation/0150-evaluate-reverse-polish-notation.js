/**
 * @param {string[]} tokens
 * @return {number}
 */

var evalRPN = function (tokens) {
	// Initialize a stack to store intermediate results
	const stack = [];

	// Loop through each token
	for (const token of tokens) {
    // for (let i = 0; i < tokens.length; i++) --- alt 
    //     const token = tokens[i]; --- alt 
		if (!isNaN(token)) {
			// If the token is a number, push it onto the stack
			stack.push(Number(token));
		} else {
			// If the token is an operator, pop two numbers from the stack
			const b = stack.pop();
			const a = stack.pop();

			// Perform the operation based on the token
			switch (token) {
				case '+':
					stack.push(a + b);
					break;
				case '-':
					stack.push(a - b);
					break;
				case '*':
					stack.push(a * b);
					break;
				case '/':
					// Division truncates towards zero
					stack.push(Math.trunc(a / b));
					break;
			}
		}
	}

	// The result of the expression will be the only value left in the stack
	return stack.pop();
};

// Examples
console.log(evalRPN(['2', '1', '+', '3', '*'])); // Output: 9
console.log(evalRPN(['4', '13', '5', '/', '+'])); // Output: 6
console.log(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+',])); // Output: 22

/*
Explanation:
1. Reverse Polish Notation:
   - In RPN, operators follow their operands, e.g., `2 1 +` means `2 + 1`.

2. Approach:
   - Use a stack to evaluate the expression.
   - Push numbers onto the stack.
   - When encountering an operator, pop two elements, perform the operation, and push the result back onto the stack.
   - Continue until all tokens are processed.

3. Operators:
   - `+`: Add the top two numbers on the stack.
   - `-`: Subtract the second number from the first (top two numbers on the stack).
   - `*`: Multiply the top two numbers on the stack.
   - `/`: Divide the second number by the first, truncating towards zero.

4. Time Complexity:
   - O(n), where `n` is the number of tokens. Each token is processed once.

5. Space Complexity:
   - O(n), as we use a stack to store numbers during evaluation.

6. Division in JavaScript (/) returns a floating-point number. Using Math.trunc() ensures truncation toward zero for integer division. 
*/
