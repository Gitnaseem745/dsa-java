# ✅ **Java Collections Framework — Quick & Complete DSA Revision**

---

# 🔥 **1. List (ArrayList & LinkedList)**

## **ArrayList**

Dynamic array → fast random access.

```java
List<Integer> list = new ArrayList<>();
```

### **Time Complexity**

* get(i) → O(1)
* add() average → O(1)
* add at index / remove → O(n)
* contains() → O(n)

### **Use in DSA**

* prefix sums
* storing results
* dynamic arrays
* sliding window storing windows

---

## **LinkedList**

Nodes connected via pointers.

```java
List<Integer> list = new LinkedList<>();
```

### **Time Complexity**

* addFirst/removeFirst → O(1)
* random access → O(n) (slow)

### **Use in DSA**

Rare on LeetCode; mostly used when interviewer wants real linked list.

---

# 🔥 **2. Set (HashSet, LinkedHashSet, TreeSet)**

## **HashSet**

Stores unique elements → underlying HashMap.

```java
Set<Integer> set = new HashSet<>();
```

### **Time Complexity**

* add, remove, contains → O(1) average

### **Use in DSA**

Top 5 most used:

* detecting duplicates
* seen states (graphs, recursion)
* frequency elimination
* sliding window uniqueness
* checking visited nodes

---

## **LinkedHashSet**

Maintains insertion order.

Use when order matters.

---

## **TreeSet**

Sorted set (Red-Black Tree internally).

```java
Set<Integer> set = new TreeSet<>();
```

### **Time Complexity**

All operations → O(log n)

### **Use in DSA**

* find next greater element
* maintaining a sorted structure
* "ceiling", "floor" problems

---

# 🔥 **3. Map (HashMap, LinkedHashMap, TreeMap)**

## **HashMap**

Most important collection in DSA.

```java
Map<Integer, Integer> map = new HashMap<>();
```

### **Time Complexity**

* put, get, containsKey → O(1) average

### **Use in DSA**

Used in 40%+ problems:

* frequency maps
* prefix-sum hashing
* hash-based sliding window
* mapping nodes (cloning graphs)
* two-sum patterns

---

## **LinkedHashMap**

Maintains insertion order.

Useful when you need:

* LRU Cache logic
* preserving order of appearance

---

## **TreeMap**

Sorted map.

### **Time Complexity**

All ops → O(log n)

### **Use in DSA**

* finding next higher/lower key
* ordered prefix sums
* range queries

---

# 🔥 **4. Stack (Use Deque Instead)**

`Stack` class is old → use **ArrayDeque**.

```java
Deque<Integer> stack = new ArrayDeque<>();
stack.push(10);
stack.pop();
```

### **Use in DSA**

* valid parentheses
* monotonic stacks
* next greater element
* DFS iteratively
* evaluating expressions

---

# 🔥 **5. Queue**

Use LinkedList or ArrayDeque.

### **Normal queue**

```java
Queue<Integer> q = new LinkedList<>();
```

### **Use in DSA**

* BFS in trees/graphs
* level order traversal
* shortest path in unweighted graph

---

# 🔥 **6. Deque (ArrayDeque)**

Most flexible structure.

```java
Deque<Integer> dq = new ArrayDeque<>();
```

### **Use in DSA**

* sliding window max/min
* palindrome checking
* implementing stack + queue
* two-pointer structures with pops

This is essential for **O(n)** sliding window problems.

---

# 🔥 **7. PriorityQueue (Min-Heap / Max-Heap)**

### **Min Heap**

```java
PriorityQueue<Integer> pq = new PriorityQueue<>();
```

### **Max Heap**

```java
PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());
```

### **Use in DSA**

* K most frequent elements
* find k smallest/largest
* merge k sorted lists
* Dijkstra’s shortest path
* scheduling problems

Internally → binary heap.

---

# 🔥 **8. Comparator & Comparable**

## **Comparable (sorting natural order)**

Implement inside the class.

```java
class Pair implements Comparable<Pair> {
    int x, y;
    public int compareTo(Pair p) {
        return this.x - p.x;
    }
}
```

---

## **Comparator (custom sorting)**

Used in sorting arbitrary ways.

```java
Collections.sort(list, (a, b) -> a.x - b.x);
```

**Very important in DSA**:

* sorting intervals
* sorting by value, then by key
* custom priority queues

---

# 🔥 **9. Arrays Class Methods**

```java
Arrays.sort(arr);
Arrays.binarySearch(arr, target);
Arrays.toString(arr);
```

### **Custom comparator:**

```java
Arrays.sort(arr, (a, b) -> a[0] - b[0]);
```

---

# 🔥 **10. Collections Class Methods**

```java
Collections.sort(list);
Collections.reverse(list);
Collections.max(list);
Collections.min(list);
```

---

# ⭐ **Mental Models for DSA**

* **HashMap + HashSet = 50% of LeetCode**
* **PriorityQueue = top-k / scheduling / merging**
* **Deque = sliding window optimizations**
* **TreeMap/TreeSet = ordered searching next greater/smaller**
* **ArrayList = dynamic arrays & most problems**
* **Queues = BFS**
* **Stacks = DFS, parentheses, monotonic stacks**
