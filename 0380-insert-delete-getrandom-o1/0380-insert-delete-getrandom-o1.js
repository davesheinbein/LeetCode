// Class to implement a randomized set
var RandomizedSet = function() {
    this.map = new Map(); // Maps each value to its index in the 'list' array for O(1) lookups
    this.list = [];       // Stores values for efficient random access
};

/** 
 * Inserts a value into the set.
 * @param {number} val - The value to insert.
 * @return {boolean} - Returns true if the value was inserted, false if it already exists.
 */
RandomizedSet.prototype.insert = function(val) {
    // Check if the value already exists in the map
    if (this.map.has(val)) return false;

    // Add value to the list
    this.list.push(val);

    // Store the index of the newly added value in the map
    this.map.set(val, this.list.length - 1);

    return true; // Successfully inserted
};

/** 
 * Removes a value from the set.
 * @param {number} val - The value to remove.
 * @return {boolean} - Returns true if the value was removed, false if it doesn't exist.
 */
RandomizedSet.prototype.remove = function(val) {
    // Check if the value exists in the map
    if (!this.map.has(val)) return false;

    // Retrieve the index of the value to be removed
    const index = this.map.get(val);

    // Get the last value in the list
    const lastValue = this.list[this.list.length - 1];

    // Replace the value at the index with the last value (swap)
    this.list[index] = lastValue;

    // Update the map to reflect the new index of the last value
    this.map.set(lastValue, index);

    // Remove the last element from the list (constant-time removal)
    this.list.pop();

    // Delete the value from the map
    this.map.delete(val);

    return true; // Successfully removed
};

/**
 * Returns a random value from the set.
 * @return {number} - A randomly selected value.
 */
RandomizedSet.prototype.getRandom = function() {
    // Generate a random index between 0 and list.length - 1
    const randomIndex = Math.floor(Math.random() * this.list.length);

    // Return the value at the generated index
    return this.list[randomIndex];
};

/** 
 * Usage Example:
 * var obj = new RandomizedSet();
 * var param_1 = obj.insert(val);
 * var param_2 = obj.remove(val);
 * var param_3 = obj.getRandom();
 */

// Testing the functionality
var randomizedSet = new RandomizedSet();
console.log(randomizedSet.insert(1));    // true: Adds 1 to the set
console.log(randomizedSet.remove(2));    // false: 2 is not in the set
console.log(randomizedSet.insert(2));    // true: Adds 2 to the set
console.log(randomizedSet.getRandom());  // 1 or 2: Randomly selects one of the values
console.log(randomizedSet.remove(1));    // true: Removes 1 from the set
console.log(randomizedSet.insert(2));    // false: 2 is already in the set
console.log(randomizedSet.getRandom());  // 2: 2 is the only value in the set

/*
Explanation:

The `RandomizedSet` class is a data structure that supports the following operations in average O(1) time:
1. `insert(val)`: Inserts a value into the set if it is not already present. Returns `true` if the value was added, and `false` if it already exists.
2. `remove(val)`: Removes a value from the set if it exists. Returns `true` if the value was removed, and `false` if it does not exist.
3. `getRandom()`: Returns a random value from the set. Each value has an equal probability of being selected.

Implementation Details:

1. Constructor (`RandomizedSet`):
   - `this.map`: A `Map` object that maps values to their indices in the `list` array. This allows for constant-time lookup of values.
   - `this.list`: An array that stores all the values. This array supports fast access for random selection.

2. Insert Operation (`insert(val)`):
   - Checks if `val` is already in the `map` using `this.map.has(val)`. If it exists, return `false`.
   - If not, appends `val` to `this.list` and updates the `map` with the value's index (`this.list.length - 1`).
   - Returns `true` to indicate the value was successfully added.

3. Remove Operation (`remove(val)`):
   - Checks if `val` exists in `this.map`. If not, return `false`.
   - Retrieves the index of `val` from the `map`.
   - Swaps the value at this index with the last value in `this.list` to maintain efficient removal.
     - Updates the `map` to reflect the new index of the last value.
   - Removes the last element of the `list` using `pop()` and deletes the entry for `val` in `this.map`.
   - Returns `true` to indicate the value was successfully removed.

4. Get Random Operation (`getRandom()`):
   - Generates a random index using `Math.random()` and the length of the `list`.
   - Returns the value at the random index in `this.list`.

Example Walkthrough:

- `randomizedSet.insert(1)`:
  - Adds `1` to the set. Updates `map` to `{1: 0}` and `list` to `[1]`.
  - Returns `true`.

- `randomizedSet.remove(2)`:
  - Fails because `2` is not in the set.
  - Returns `false`.

- `randomizedSet.insert(2)`:
  - Adds `2` to the set. Updates `map` to `{1: 0, 2: 1}` and `list` to `[1, 2]`.
  - Returns `true`.

- `randomizedSet.getRandom()`:
  - Randomly returns either `1` or `2`, as both have equal probability.

- `randomizedSet.remove(1)`:
  - Removes `1`. Swaps `1` with the last value (`2`) in the `list`.
  - Updates `map` to `{2: 0}` and `list` to `[2]`.
  - Returns `true`.

- `randomizedSet.insert(2)`:
  - Fails because `2` is already in the set.
  - Returns `false`.

- `randomizedSet.getRandom()`:
  - Returns `2`, as it is the only value in the set.

Time Complexity:
1. `insert(val)`: O(1), as it performs constant-time operations on the `map` and `list`.
2. `remove(val)`: O(1), as it swaps and pops elements in the `list` and updates the `map`.
3. `getRandom()`: O(1), as it accesses a random index in the `list`.

Space Complexity:
- The space complexity is O(n), where `n` is the number of elements in the set. The `list` and `map` both store references to the elements.
*/
