var removeDuplicates = function(nums) {
    console.log(`Initial nums: ${nums}`);
    console.log(`nums.length: ${nums.length}`);

    // If the array is empty, return 0
    if (nums.length === 0) {
        console.log("Input array is empty.");
        return 0;
    }

    // Pointer for the last unique element
    let k = 1; 

    // Iterate through the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
        console.log(`Checking nums[${i}]: ${nums[i]} against nums[${i - 1}]: ${nums[i - 1]}`);
        
        // If the current element is different from the last unique element
        if (nums[i] !== nums[i - 1]) {
            console.log(`Found new unique element: ${nums[i]}`);
            nums[k] = nums[i]; // Assign it to the next position of unique elements
            k++; // Increment the unique count
            console.log(`Updated nums: ${nums.slice(0, k)} (unique count: ${k})`);
        } else {
            console.log(`Duplicate element found: ${nums[i]}`);
        }
    }

    // Final result
    console.log(`Final unique count: ${k}`);
    console.log(`Final modified nums: ${nums.slice(0, k)} (remaining elements are not important)`);
    
    // Return the count of unique elements
    return k;
};

// Example usage
let nums1 = [1, 1, 2];
let k1 = removeDuplicates(nums1);
console.log(`Output: ${k1}, Unique Elements: ${nums1.slice(0, k1)}`);

let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k2 = removeDuplicates(nums2);
console.log(`Output: ${k2}, Unique Elements: ${nums2.slice(0, k2)}`);
