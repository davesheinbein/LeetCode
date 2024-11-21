/**
 * @param {number[]} nums - An array of integers.
 *        This array contains the numbers from which we need to find the k-th largest element.
 * @param {number} k - An integer representing the position (1-indexed) of the largest element we need to find.
 *        For example, if k = 1, we need to find the largest element in the array; if k = 2, we find the second largest element, and so on.
 * @return {number} - The k-th largest element in the array `nums`.
 */
 
var findKthLargest = function(nums, k) {
    // Initialize a Min-Heap (MinPriorityQueue) to store the k largest elements. 
    // MinPriorityQueue maintains elements in a priority order, with the smallest element always at the root. 
    // This allows us to efficiently remove the smallest element when the heap size exceeds k.
    let minHeap = new MinPriorityQueue({ priority: x => x });

    // Iterate through each number in the input array `nums`
    for (let num of nums) {
        // Add the current number to the Min-Heap.
        minHeap.enqueue(num);

        // If the size of the heap exceeds k, remove the smallest element.
        // This is done using `minHeap.dequeue()`, which removes the root of the Min-Heap.
        // By doing this, we ensure that we always retain only the k largest elements.
        // After this operation, the heap will always contain the largest `k` numbers encountered so far.
        if (minHeap.size() > k) {
            minHeap.dequeue(); // Remove the smallest element (root) from the heap.
        }
    }

    // At this point, the heap contains the k largest elements.
    // The smallest element in this heap (the root) is the k-th largest element in the array.
    // We retrieve this element using `minHeap.front().element` which gives us the root element of the heap.
    return minHeap.front().element;
};

/*
Explanation:

1. Min-Heap:
   - A min-heap (or priority queue with the smallest element at the top) is used to keep track of the k largest elements in the array.
   - The reason we use a min-heap is that it allows us to quickly access and remove the smallest element, which is the least valuable in our set of largest elements.
   - By always keeping the k largest elements, the smallest of those elements will be the k-th largest element in the array when we finish processing all elements.

2. Processing the array:
   - We iterate through the array `nums` and add each element to the heap.
   - If the size of the heap exceeds `k`, we remove the smallest element (the root of the heap) to ensure the heap only stores the largest `k` elements.
   - This keeps the heap from growing too large and helps efficiently track the largest `k` elements during the iteration.

3. Finding the k-th largest element:
   - After iterating through all the elements in the array, the heap contains the largest `k` elements.
   - Since the heap is a min-heap, the smallest element in this heap is the k-th largest element in the original array. This is because the heap maintains the largest elements, and the root is the smallest of them.
   - We return the root element of the heap, which gives us the k-th largest element.

4. Time Complexity:
   - Inserting a number into the heap takes O(log k) time because each insertion requires reordering the heap to maintain its properties.
   - Since we process each element of the array exactly once, and there are `n` elements in `nums`, the total time complexity is O(n log k). 
   - This is much more efficient than sorting the entire array, which would take O(n log n) time.

5. Space Complexity:
   - We only need to store the k largest elements, so the space complexity is O(k).
   - The heap will never grow larger than `k` elements, which keeps the space usage constant at this size.

Why this is efficient:
   - By using a min-heap, we avoid sorting the entire array, which would be slower for large arrays, especially when `k` is much smaller than `n`. The heap allows us to focus only on the k largest elements, making this approach more efficient when `k` is small relative to `n`.
*/
