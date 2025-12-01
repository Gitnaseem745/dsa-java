# ✅ **Arrays + Sorting + Two-Pointers + Prefix Sums — Quick DSA Revision**

---

# 🔥 **1. Arrays (1D & 2D)**

## **1D Array Basics**

```java
int[] arr = new int[5];
int[] nums = {1, 2, 3};
```

### Key operations:

* `arr.length`
* iterating with for / enhanced-for
* swapping
* reversing
* copying (use `Arrays.copyOf` or manual)

## **Traversal Patterns**

### Forward

```java
for (int i = 0; i < n; i++) {}
```

### Backward

```java
for (int i = n - 1; i >= 0; i--) {}
```

---

## **2D Arrays**

```java
int[][] grid = new int[3][3];
```

### Traversal

```java
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {}
}
```

Used in:

* matrices
* grid BFS/DFS problems
* DP tables

---

# 🔥 **2. Sorting (Arrays & Lists)**

## **Default Sort (Ascending)**

```java
Arrays.sort(arr);
```

## **Custom Sort**

Sorting 2D arrays, pairs, objects:

```java
Arrays.sort(intervals, (a, b) -> a[0] - b[0]);
```

Sorting lists:

```java
Collections.sort(list);
```

### Sorting Tricks (Important For DSA)

* Sort intervals by start time
* Sort by value, then by index
* Sort frequencies descending using comparator

---

# 🔥 **3. Two-Pointers Technique**

One of the MOST used DSA patterns.

## **Types**

### **A. Opposite Ends (i = 0, j = n-1)**

Used for:

* 2-sum in sorted array
* checking palindrome
* reverse array

```java
while (i < j) {
    if (arr[i] + arr[j] == target) break;
    else if (sum < target) i++;
    else j--;
}
```

---

### **B. Same Direction (Sliding Window)**

```java
int left = 0;
for (int right = 0; right < n; right++) {
    // expand right
    // shrink left when condition breaks
}
```

Used for:

* longest substring without repeating
* max/min subarray with constraints
* fixed window (size K)
* variable window

---

### **C. Fast–Slow Pointer**

Used for:

* Linked list cycle detection (Floyd’s algorithm)
* find cycle start
* mid-point of list
* remove nth node from end

```java
ListNode slow = head, fast = head;
while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
}
```

---

# 🔥 **4. Prefix Sums**

A prefix sum array stores running totals.

## **Create Prefix Array**

```java
int[] prefix = new int[n];
prefix[0] = nums[0];

for (int i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] + nums[i];
}
```

### Range Sum Query

Sum of subarray `l → r`:

```java
sum = prefix[r] - (l == 0 ? 0 : prefix[l - 1]);
```

Used in:

* subarray sum problems
* Kadane variations
* difference arrays
* prefix-sum hashing (subarray sum = k)

---

# 🔥 **5. Important Array DSA Patterns**

## **A. Kadane’s Algorithm (Max Subarray Sum)**

```java
int max = nums[0], curr = nums[0];
for (int i = 1; i < nums.length; i++) {
    curr = Math.max(nums[i], curr + nums[i]);
    max = Math.max(max, curr);
}
```

---

## **B. Binary Search**

```java
int left = 0, right = n - 1;
while (left <= right) {
    int mid = left + (right - left) / 2;
    if (arr[mid] == target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
}
```

Used for:

* search in sorted array
* peaks, boundaries
* rotated sorted array problems
* first/last position

---

## **C. Difference Array (For Range Updates)**

```java
diff[l] += x;
diff[r+1] -= x;
```

Then build final array.

---

## **D. Frequency Array**

For chars:

```java
int[] freq = new int[26];
```

For nums with limits:

```java
int[] freq = new int[100001];
```

---

# ⭐ Quick Mental Notes

* Arrays are the starting point of 60–70% of LC easy/medium problems.
* ALWAYS think: **two pointers** → if sorted or substring.
* ALWAYS think: **prefix sums** → if range sums or cumulative constraints.
* ALWAYS think: **sorting** → if you need order or greedy solution.
