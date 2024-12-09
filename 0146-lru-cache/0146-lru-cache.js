/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
	this.capacity = capacity; // Store the maximum capacity of the cache
	this.cache = new Map(); // A Map for fast O(1) lookups. It stores key-node pairs.

	// Create dummy head and tail nodes to simplify doubly linked list operations
	this.head = new ListNode(0, 0); // Dummy head node, initially has a value of 0
	this.tail = new ListNode(0, 0); // Dummy tail node, initially has a value of 0

	// Link the dummy nodes to form an empty doubly linked list
	this.head.next = this.tail; // The head’s next node is the tail
	this.tail.prev = this.head; // The tail’s previous node is the head
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
	if (this.cache.has(key)) {
		// If the key is found in the cache, retrieve the node and move it to the front (most recently used)
		const node = this.cache.get(key);
		this._moveToFront(node); // Move the accessed node to the front
		return node.value; // Return the node's value
	}
	return -1; // If the key does not exist, return -1
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
	if (this.cache.has(key)) {
		// If the key exists, update the value and move it to the front (most recently used)
		const node = this.cache.get(key);
		node.value = value; // Update the node's value
		this._moveToFront(node); // Move the updated node to the front
	} else {
		// If the key does not exist, we need to insert the new node
		if (this.cache.size >= this.capacity) {
			// If the cache is full, remove the least recently used (LRU) node
			const lruNode = this.tail.prev; // The LRU node is the one just before the tail
			this.cache.delete(lruNode.key); // Remove the LRU node from the cache Map
			this._removeNode(lruNode); // Remove the LRU node from the doubly linked list
		}
		// Create a new node for the given key-value pair
		const newNode = new ListNode(key, value);
		this.cache.set(key, newNode); // Add the new node to the cache
		this._addNode(newNode); // Add the new node to the front of the doubly linked list
	}
};

/**
 * Helper function to add a node to the front of the doubly linked list.
 * The node becomes the most recently used.
 * @param {ListNode} node - The node to be added to the front
 */
LRUCache.prototype._addNode = function (node) {
	node.prev = this.head; // Set the node’s previous pointer to the head
	node.next = this.head.next; // Set the node’s next pointer to the node after the head
	this.head.next.prev = node; // Update the previous pointer of the node after the head to point to the new node
	this.head.next = node; // Update the head’s next pointer to point to the new node
};

/**
 * Helper function to move an existing node to the front (most recently used).
 * @param {ListNode} node - The node to be moved to the front
 */
LRUCache.prototype._moveToFront = function (node) {
	this._removeNode(node); // Remove the node from its current position in the list
	this._addNode(node); // Add the node to the front of the list
};

/**
 * Helper function to remove a node from the doubly linked list.
 * @param {ListNode} node - The node to be removed from the list
 */
LRUCache.prototype._removeNode = function (node) {
	const prevNode = node.prev; // Get the previous node of the current node
	const nextNode = node.next; // Get the next node of the current node
	prevNode.next = nextNode; // Link the previous node’s next pointer to the next node
	nextNode.prev = prevNode; // Link the next node’s previous pointer to the previous node
};

/**
 * Definition for doubly linked list node.
 * This class represents each node in the doubly linked list that holds a key-value pair.
 * @param {number} key - The key of the node
 * @param {number} value - The value associated with the key
 */
function ListNode(key, value) {
	this.key = key; // Store the key of the node
	this.value = value; // Store the value of the node
	this.prev = null; // Pointer to the previous node in the doubly linked list
	this.next = null; // Pointer to the next node in the doubly linked list
}

/*
Explanation:

1. Cache storage: 
   - The cache is implemented using a **Map** for fast O(1) lookup of key-value pairs. The map holds keys as the keys of the cache and values as the nodes in the doubly linked list.

2. Doubly linked list: 
   - A doubly linked list is used to maintain the order of access. The most recently used node is always at the front (directly after the `head`), while the least recently used (LRU) node is at the back (just before the `tail`).

3. get(key): 
   - If the key is found in the cache, the node is moved to the front (making it the most recently used) and its value is returned. If the key is not found, `-1` is returned.

4. put(key, value): 
   - If the key already exists in the cache, the value is updated, and the node is moved to the front (making it the most recently used).
   - If the key does not exist and the cache is full, the least recently used (LRU) node is removed from both the cache map and the doubly linked list.
   - A new node is created for the given key-value pair and added to the front of the doubly linked list and cache.

5. Helper functions: 
   - `_addNode(node)` adds a node to the front of the doubly linked list.
   - `_moveToFront(node)` moves an existing node to the front.
   - `_removeNode(node)` removes a node from the doubly linked list.

By using a **Map** for cache storage and a **doubly linked list** to track the order of usage, this LRU Cache allows both `get` and `put` operations to be performed in **O(1)** time, while ensuring that the cache maintains the correct order of elements.
*/
