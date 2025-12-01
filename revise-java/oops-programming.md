# ✅ **OOP in Java — Quick & Complete Revision (DSA-Friendly)**

## **1. Classes & Objects**

A **class** = blueprint.
An **object** = actual instance.

```java
class Node {
    int val;
    Node next;
}
Node head = new Node();
```

**In DSA:**
Classes are mainly for building:

* Linked List nodes
* Tree nodes
* Graph nodes
* Custom data structures

---

## **2. `this` keyword**

Refers to **current object**.

Uses:

* Access instance variables
* Resolve naming conflicts
* Call other constructors using `this()`

```java
class A {
    int x;
    A(int x) {
        this.x = x;
    }
}
```

---

## **3. `super` keyword**

Refers to **parent class**.

Uses:

* Access parent methods/variables
* Call parent constructor using `super()`

```java
class B extends A {
    B() {
        super(10);   // calls A's constructor
    }
}
```

---

## **4. Constructors**

Special methods to create objects.

### **Default constructor**

Created automatically if you don’t define any.

```java
class A {
    A() {}  // default
}
```

### **Parameterized constructor**

```java
class A {
    int x;
    A(int val) {
        x = val;
    }
}
```

### **Constructor chaining**

```java
A() { this(10); }
```

**In DSA:**
Node creation often uses parameterized constructors.

---

## **5. Inheritance**

One class extends another.

```java
class Animal {}
class Dog extends Animal {}
```

Purpose:

* Code reuse
* Parent-child relationships
* Method overriding

Not directly used in LeetCode, but **important to understand override & super**.

---

## **6. Encapsulation**

Hide data → expose through controlled methods.

```java
private int age;

public int getAge() { return age; }
public void setAge(int a) { age = a; }
```

Why it matters:

* Keeps objects safe
* Used in custom data structures (like your own Stack/Queue class)

---

## **7. Polymorphism**

### **Compile-time (Method Overloading)**

Same method name, different parameters.

Already revised above.

### **Runtime (Method Overriding)**

Child class rewrites parent method.

```java
class A {
    void show() { System.out.println("A"); }
}
class B extends A {
    @Override
    void show() { System.out.println("B"); }
}
```

**Used in DSA:**

* Priority queues with custom comparators
* Custom sorting
* When overriding `compare()` for trees/graphs

---

## **8. Abstraction**

Hide implementation details.

### **Abstract Classes**

```java
abstract class Shape {
    abstract void draw();
}
```

### **Interfaces**

100% abstraction contract.

```java
interface Animal {
    void run();
}
```

**DSA relevance:**
Used heavily in:

* Custom comparator for sorting
* Using built-in classes like `List`, `Map`, `Queue` (they’re interfaces)

---

## **9. Static vs Non-static**

### **Static**

Belongs to the **class**, not object.

```java
static int count;
static void print() {}
```

Use cases:

* Utility functions (e.g., reverse array)
* Global variables inside classes
* Single instance shared by all

### **Non-static**

Belongs to each **object**.

```java
int age; // each object has its own age
```

**In DSA:**
Most helper methods are `static`:

```java
static int binarySearch(...)
```

---

## **10. Inner Classes (Basic Only)**

A class inside another class.

```java
class Outer {
    class Inner {
        void show() {}
    }
}
```

Rare in DSA except:

* Tree/graph nodes defined inside solution class
* Helper nested classes for custom objects (e.g., pair objects)

---

# ⭐ DSA Relevance — Why OOP Matters

### **1. Linked Lists**

All LL problems rely on understanding object references:

```java
class ListNode {
    int val;
    ListNode next;
}
```

Passing nodes around → reference behavior.

---

### **2. Trees**

Binary trees need custom objects:

```java
class TreeNode {
    int val;
    TreeNode left, right;
}
```

---

### **3. Graphs**

Nodes have lists of neighbors:

```java
class Node {
    int val;
    List<Node> neighbors;
}
```

---

### **4. Custom Comparators**

Sorting complex objects requires overriding compare logic.

---

### **5. Recursion**

Works smoothly with objects and class structures.

---

# ⭐ Quick Mental Notes

* Java uses **objects to represent nodes → must understand references**.
* `this` and `super` → for constructor clarity.
* `static` methods are ideal for DSA coding.
* Interfaces matter mainly for **Comparator** and Collections.
