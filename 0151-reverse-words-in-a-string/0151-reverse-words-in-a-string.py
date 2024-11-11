class Solution:
    def reverseWords(self, s: str) -> str:
        # Step 1: Split the string into a list of words
        # Using s.split() automatically removes any leading, trailing, or multiple spaces
        # between words, resulting in a clean list of words without extra spaces.
        words = s.split()
        
        # Step 2: Reverse the order of words in the list
        # This modifies the list so that the last word appears first, and so on.
        words.reverse()
        
        # Step 3: Join the reversed list into a single string with words separated by a single space
        # " ".join(words) creates a string where each word in 'words' is joined by a single space.
        return " ".join(words)

# Create an instance of the Solution class
solution = Solution()

# Define test cases
test_cases = [
    "the sky is blue",                       # Standard case with multiple words
    "  hello world  ",                       # Case with leading and trailing spaces
    "a good   example",                      # Case with multiple spaces between words
    "singleword",                            # Case with a single word, no spaces to reverse
    "   leading and trailing spaces   ",     # Case with leading, trailing, and multiple spaces
    "multiple    spaces   between    words", # Case with multiple spaces between words
    ""                                       # Edge case with an empty string
]

# Run the test cases and display results
for i, test in enumerate(test_cases, 1):
    print(f"Test Case {i}: Input: '{test}'")
    result = solution.reverseWords(test)
    print(f"Output: '{result}'\n")

    
# Explanation of Each Section in the Code
# Class Definition: Defines the Solution class containing the reverseWords method.
# reverseWords Method:
# - Step 1: s.split() - Splits the input string s by whitespace. This eliminates any extra spaces and produces a list of words.
# - Step 2: words.reverse() - Reverses the list words in place, changing the order of the words so the last word appears first.
# - Step 3: " ".join(words) - Joins the words in the reversed list into a single string, separated by a single space.
