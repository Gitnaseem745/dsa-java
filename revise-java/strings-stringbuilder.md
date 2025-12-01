# ✅ **Strings & StringBuilder — Quick DSA Revision**

---

# 🔥 **1. String Basics**

Strings are **immutable** → cannot be changed after creation.

```java
String s = "hello";
```

### Key consequences:

* Every modification creates a **new** string
* That’s why using `+` in loops is slow

---

# 🔥 **2. Common String Methods (Most Used in DSA)**

### **Length**

```java
s.length();
```

### **Character Access**

```java
char c = s.charAt(i);
```

### **Substring**

```java
s.substring(start);
s.substring(start, end);
```

### **Search**

```java
s.indexOf("abc");
s.startsWith("hi");
s.endsWith("bye");
```

### **Split**

```java
String[] parts = s.split(" ");
```

### **Replace**

```java
s.replace('a', 'b');
s.replaceAll("regex", "value");
```

---

# 🔥 **3. Comparing Strings**

### **Correct way**

```java
s.equals("hello");
```

### **Wrong way**

```java
s == "hello";   // compares references
```

### **Ignore case**

```java
s.equalsIgnoreCase("HELLO");
```

---

# 🔥 **4. StringBuilder (For Performance)**

Used when building or modifying strings repeatedly.

```java
StringBuilder sb = new StringBuilder();
sb.append('a');
sb.append("hello");
sb.reverse();
String result = sb.toString();
```

### Why it's important:

* All substring generation
* All string construction
* Most brute-force + recursion results
* Reduces TC from O(n²) → O(n)

---

# 🔥 **5. Convert Between Types**

### **String → char[]**

```java
char[] arr = s.toCharArray();
```

### **char[] → String**

```java
String s = new String(arr);
```

### **int → String**

```java
String.valueOf(num);
```

### **String → int**

```java
Integer.parseInt(s);
```

### **char → int (ASCII)**

```java
int x = c - '0';
```

Useful in digit/character problems.

---

# 🔥 **6. Reversal Patterns**

### **Reverse full string**

```java
new StringBuilder(s).reverse().toString();
```

### **Reverse manually**

```java
while (i < j) {
    swap(arr, i++, j--);
}
```

---

# 🔥 **7. Palindrome Check**

```java
int i = 0, j = s.length() - 1;
while (i < j) {
    if (s.charAt(i++) != s.charAt(j--)) return false;
}
return true;
```

Used in many LC problems.

---

# 🔥 **8. Frequency Counting**

### Using int array:

```java
int[] freq = new int[26];
for (char c : s.toCharArray())
    freq[c - 'a']++;
```

### Using HashMap:

```java
Map<Character, Integer> map = new HashMap<>();
```

Core for:

* anagrams
* character-based sliding window

---

# 🔥 **9. Sliding Window Essentials**

Common patterns:

* longest substring without repeating chars
* minimum window substring
* check-inclusion

Two pointers:

```java
int left = 0;
for (int right = 0; right < s.length(); right++) {
    // expand right
    // shrink left when needed
}
```

---

# 🔥 **10. StringBuilder vs String**

| Operation    | String                    | StringBuilder  |
| ------------ | ------------------------- | -------------- |
| Modification | slow (creates new string) | fast           |
| Append       | O(n)                      | O(1) amortized |
| Reverse      | no direct method          | sb.reverse()   |
| Best for DSA | ❌                         | ✔️             |

---

# ⭐ Quick Mental Notes

* Always use **StringBuilder** when building new strings.
* Strings are immutable → avoid `s += c` in loops.
* `.charAt(i)` is O(1).
* Know frequency-array pattern (26/256).
* Know sliding window patterns for substring-based problems.
