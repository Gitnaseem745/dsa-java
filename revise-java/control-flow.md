# ✅ **Control Flow — Quick Revision**

## **1. if / else**

Basic conditional branching.

```java
if (a > b) {
    // do something
} else if (a == b) {
    // another case
} else {
    // fallback
}
```

**Used in:** comparisons, boundary checks, branching logic inside loops.

---

## **2. switch**

Cleaner alternative to multiple `if-else` for fixed values.

```java
switch(day) {
    case 1: System.out.println("Mon"); break;
    case 2: System.out.println("Tue"); break;
    default: System.out.println("Invalid");
}
```

⚡ Good for: character checks, menu-driven logic, mapping inputs.

---

## **3. Loops**

### **for loop**

Most common for arrays + index operations.

```java
for (int i = 0; i < n; i++) {
    // iterate
}
```

### **while loop**

Used when condition-based looping matters.

```java
while (x > 0) {
    x--;
}
```

### **do-while loop**

Runs at least once.

```java
do {
    count++;
} while (count < 5);
```

⚡ In DSA:

* `for` → index loops
* `while` → two pointers / sliding window
* `do-while` → rare

---

## **4. break & continue**

### **break**

Stop the loop instantly.

```java
for (int i = 0; i < n; i++) {
    if (arr[i] == target) break;
}
```

### **continue**

Skip current iteration.

```java
for (int i = 0; i < n; i++) {
    if (arr[i] < 0) continue;  
    sum += arr[i];
}
```

Useful in:

* skipping invalid cases
* early exits
* pruning unnecessary loops

---

## **5. Enhanced for-loop (for-each)**

Simplest way to iterate when index is not needed.

```java
for (int num : arr) {
    System.out.println(num);
}
```

⚡ Great for: printing, sums
❗ Not good when:

* you need index
* you need to modify array in-place

---

# ⭐ Quick Mental Notes

* Arrays & lists → use **for** or **for-each**.
* Two pointers → mostly **while** loops.
* Avoid `break` too often; use only for **early termination**.
* Loop patterns are the backbone of 80% of DSA.
