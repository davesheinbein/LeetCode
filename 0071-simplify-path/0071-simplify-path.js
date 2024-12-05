/**
 * @param {string} path
 * @return {string}
 */

var simplifyPath = function (path) {
	// Split the input path by '/' to get path components
	const components = path.split('/');

	// Use a stack to process valid path components
	const stack = [];

	// Process each component
	for (const component of components) {
		if (component === '' || component === '.') {
			// Skip empty components or single dot (current directory)
			continue;
		} else if (component === '..') {
			// If the component is '..', go up one level (pop from the stack if possible)
			if (stack.length > 0) {
				stack.pop();
			}
		} else {
			// Push valid directory names onto the stack
			stack.push(component);
		}
	}

	// Join the stack into a simplified path
	return '/' + stack.join('/');
};

// Examples
console.log(simplifyPath('/home/')); // Output: "/home"
console.log(simplifyPath('/home//foo/')); // Output: "/home/foo"
console.log(
	simplifyPath('/home/user/Documents/../Pictures')
); // Output: "/home/user/Pictures"
console.log(simplifyPath('/../')); // Output: "/"
console.log(simplifyPath('/.../a/../b/c/../d/./')); // Output: "/.../b/d"

/*
Explanation:
1. Path Components:
   - Split the input path into components using `/` as a delimiter.
   - For example, "/home//foo/" becomes ["", "home", "", "foo", ""].

2. Stack Processing:
   - Use a stack to handle valid directory names and resolve "..":
     - If the component is empty or ".", ignore it.
     - If the component is "..", remove the last directory from the stack if it exists.
     - Otherwise, push the component (directory name) onto the stack.

3. Rebuild the Canonical Path:
   - Join the stack with '/' to form the simplified path.
   - Always prepend a '/' to ensure the path is absolute.

4. Edge Cases:
   - Paths that try to go above the root ("/../") will remain at "/".
   - Multiple slashes (e.g., "//") are treated as a single slash.
   - Directory names with more than two periods (e.g., "...") are treated as valid directory names.

5. Complexity:
   - Time Complexity: O(n), where `n` is the length of the path. We traverse each component once.
   - Space Complexity: O(n) for the stack, storing valid components.
*/
