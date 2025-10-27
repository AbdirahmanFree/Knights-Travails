# ♞ Knight’s Travails (BFS Shortest Path)

This project finds the **shortest sequence of moves** for a chess knight to travel from one square to another on an 8×8 board.  
It uses **Breadth-First Search (BFS)** with a **custom circular queue** for efficient traversal.

---

## 🧩 Features

- Implements BFS to guarantee the **shortest path**
- Uses a **Queue class** with automatic resizing (`expand()` method)
- Generates all valid knight moves dynamically (`canReach`)
- Reconstructs the full move path using a `previous` map
- Handles edge cases such as same start/end position

---

## 📂 File Structure

knight-travails/
│
├── knightTravails.js # Main logic
└── README.md # Documentation

## ⚙️ Core Components

### 🧮 Queue Class
A circular queue supporting enqueue, dequeue, peek, and dynamic resizing.

| Method | Description | Complexity |
|:--|:--|:--|
| `enqueue()` | Adds an element to the rear | O(1) amortized |
| `dequeue()` | Removes and returns the front element | O(1) |
| `expand()` | Doubles the queue size when full | O(n) |
| `isEmpty()` / `isFull()` | State checks | O(1) |

---

### ♞ `canReach(position)`
Generates all legal knight moves from a given position `[row, col]`.

**Example**
```js
canReach([0, 0]);
// → [[1, 2], [2, 1]]

canReach([3, 3]);
// → Possible output (order may vary):
//   [[1,2], [1,4], [2,1], [2,5], [4,1], [4,5], [5,2], [5,4]]

getKey(position) and keyToArray(key)

getKey([y, x]) → "y,x"

keyToArray("y,x") → [y, x]

getKey([3, 5]);      // "3,5"
keyToArray("3,5");   // [3, 5]

knightTravails(start, end)
```

Performs a BFS to find the shortest route from start to end.



reconstructShortestPath(previous, end)

Backtracks from the target node using the previous map to rebuild the full path.

```js
const path = knightTravails([0, 0], [7, 7]);
console.log(path);
[[0,0], [1,2], [2,4], [3,6], [5,7], [7,6], [7,7]]

// assuming `previous` was filled by BFS and end is [7,7]
const path = reconstructShortestPath(previous, [7, 7]);
// e.g. [[0,0],[1,2],[2,4],[3,6],[5,7],[7,6],[7,7]]
```

| Start   | End     | Moves | Example Output*                               |
| :------ | :------ | :---- | :-------------------------------------------- |
| `[0,0]` | `[7,7]` | 6     | `[[0,0],[1,2],[2,4],[3,6],[5,7],[7,6],[7,7]]` |
| `[0,0]` | `[0,0]` | 0     | `[[0,0]]`                                     |
| `[3,3]` | `[4,3]` | 3     | `[[3,3],[5,4],[3,5],[4,3]]`                   |


