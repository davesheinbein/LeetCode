class Solution:
    def isHappy(self, n):
        # A set to track previously encountered numbers to detect cycles
        seen = set()

        # Loop until n becomes 1 (happy) or we detect a cycle (repeated number)
        while n != 1:
            # If the number has been seen before, it means we're in a cycle
            if n in seen:
                return False  # Return False if a cycle is detected (not a happy number)

            # Add the current number to the set to track it
            seen.add(n)

            # Calculate the sum of the squares of the digits of n
            sum_of_squares = 0
            temp = n  # Temporary variable to calculate sum of squares
            while temp > 0:
                digit = temp % 10  # Extract the last digit of n
                sum_of_squares += digit * digit  # Add the square of the digit to the sum
                temp //= 10  # Remove the last digit from n

            # Update n to the sum of the squares of its digits
            n = sum_of_squares

        # If n reaches 1, it's a happy number
        return True  # Return True if n becomes 1 (happy number)


# Example usage:

solution = Solution()

# Example 1: n = 19 (expected output: true)
print("Expected output: true, Ans:", solution.isHappy(19))  # Expected output: true

# Example 2: n = 2 (expected output: false)
print("Expected output: false, Ans:", solution.isHappy(2))  # Expected output: false

# Explanation:
# Class Definition: The Solution class contains the isHappy method that checks whether a given number n is a happy number.
# Set seen: The set seen tracks previously encountered numbers to detect cycles. If a number repeats, it means we're in a cycle, and the function returns False.
# Loop for Happy Number Check: The loop continues until n becomes 1 (indicating it's a happy number) or if a cycle is detected.
# Sum of Squares: The inner loop calculates the sum of the squares of the digits of n. This sum is then used to update n for the next iteration.
# Return Values:
# If n reaches 1, the function returns True, indicating a happy number.
# If a cycle is detected (a previously encountered number is found in seen), the function returns False.
# Example Usage:
# The code demonstrates usage with two examples: 19 (happy number, expected output: True) and 2 (not a happy number, expected output: False).
