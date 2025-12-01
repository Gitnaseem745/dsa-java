# ✅ **Exception Handling + Utility Classes — Quick Revision**

These topics are small but very useful for writing clean code during DSA.

---

# 🔥 **1. Exception Handling (Quick Overview)**

Not heavily used in DSA but useful to understand basic concepts.

### **try–catch**

```java
try {
    int x = 10 / 0;
} catch (Exception e) {
    System.out.println("Error");
}
```

### **finally**

Runs ALWAYS.

```java
finally {
    // cleanup
}
```

### **throw**

Manually throw exception.

```java
throw new IllegalArgumentException("Invalid");
```

### **throws**

Used in function signature.

```java
void read() throws IOException {}
```

### **DSA relevance:**

Almost none.
Used rarely for input-heavy problems or debugging.

---

# 🔥 **2. Arrays Utility Class**

Most commonly used helper methods.

### **Sort**

```java
Arrays.sort(arr);
```

### **Binary Search**

```java
int index = Arrays.binarySearch(arr, target);
```

### **Copy**

```java
int[] copy = Arrays.copyOf(arr, arr.length);
```

### **Fill**

```java
Arrays.fill(arr, -1);
```

### **To String**

```java
System.out.println(Arrays.toString(arr));
```

### **Deep To String (multidimensional)**

```java
Arrays.deepToString(matrix);
```

---

# 🔥 **3. Collections Utility Class**

Works with Lists, not arrays.

### **Sort a list**

```java
Collections.sort(list);
```

### **Reverse**

```java
Collections.reverse(list);
```

### **Max / Min**

```java
Collections.max(list);
Collections.min(list);
```

### **Frequency**

```java
Collections.frequency(list, element);
```

Useful in:

* quick debugging
* sorting arraylists
* quick helpers for greedy solutions

---

# 🔥 **4. Math Utility Class**

Built-in math operations.

### **Common ones**

```java
Math.min(a, b);
Math.max(a, b);
Math.abs(x);
Math.pow(a, b);
Math.sqrt(x);
```

### **Other useful ones**

```java
Math.ceil();
Math.floor();
Math.random();
```

### **DSA relevance**

Used everywhere:

* binary search boundaries
* geometry problems
* absolute difference
* fast calculations

---

# 🔥 **5. BigInteger (VERY Useful for Overflow Problems)**

Used when numbers exceed 64-bit range.

### **Declaration**

```java
BigInteger x = new BigInteger("12345678901234567890");
```

### **Common Operations**

```java
x = x.add(y);
x = x.subtract(y);
x = x.multiply(y);
x = x.divide(y);
x = x.mod(y);
```

### **Convert int → BigInteger**

```java
BigInteger.valueOf(100);
```

### **Use cases in DSA**

* factorial with large numbers
* big-number arithmetic
* mod problems

---

# 🔥 **6. Comparator & Comparable (Recap)**

### **Comparator**

```java
Arrays.sort(arr, (a, b) -> a[0] - b[0]);
```

### **Comparable (inside class)**

```java
class Node implements Comparable<Node> {
    public int compareTo(Node other) {
        return this.val - other.val;
    }
}
```

Used heavily in:

* sorting intervals
* priority queues
* custom data structures

---

# ⭐ Quick Mental Notes

* You don’t write exception handling in LC/DSA → but knowing it helps.
* Arrays & Collections utility methods make coding easier.
* BigInteger saves you from overflow when constraints require huge nums.
* Math functions appear in 30–40% problems.
