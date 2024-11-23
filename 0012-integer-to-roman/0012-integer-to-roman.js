/**
 * @param {number} num
 * @return {string}
 */

var intToRoman = function(num) {
    // Define the Roman numeral values and symbols
    const romanValues = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"]
    ];
    
    let result = "";

    // Loop through each value in the romanValues array
    for (const [value, symbol] of romanValues) {
        // Check how many times the symbol can be used
        while (num >= value) {
            result += symbol;  // Append the Roman numeral symbol
            num -= value;      // Subtract the value from the number
        }
    }
    
    return result;
};

// Example usage
console.log(intToRoman(3749)); // Output: "MMMDCCXLIX"
console.log(intToRoman(58));   // Output: "LVIII"
console.log(intToRoman(1994)); // Output: "MCMXCIV"
console.log(intToRoman(9));    // Output: "IX"
console.log(intToRoman(40));   // Output: "XL"

/*
Explanation:

This function converts an integer to its Roman numeral equivalent.

1. Roman Numeral Values: 
   The `romanValues` array contains pairs of integer values and their corresponding Roman numeral symbols. The array is ordered from the largest value (1000, "M") to the smallest (1, "I") to ensure that the conversion starts with the largest possible Roman numeral.

2. Main Loop:
   The function iterates through each pair of integer and Roman numeral symbol. For each pair:
   - It checks how many times the Roman numeral symbol can be used by comparing the integer `num` with the current value in the `romanValues` array.
   - If `num` is greater than or equal to the value, it appends the corresponding symbol to the result string and subtracts the value from `num`.

3. Result Construction:
   This continues until `num` is reduced to 0. The result string will contain the Roman numeral representation of the integer.

4. Final Output:
   Once the loop completes, the function returns the constructed Roman numeral as a string.

For example:
- If the input is `num = 3749`, the function produces `"MMMDCCXLIX"`.
- For `num = 58`, it returns `"LVIII"`.

The time complexity is O(1) because the number of Roman numeral symbols is fixed and the function loops through them at most once.
*/
