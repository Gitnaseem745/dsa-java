# ✅ **Functions / Methods — Quick Revision**

## **1. Method Declaration**

A method = **return type + name + parameters + body**.

```java
int add(int a, int b) {
    return a + b;
}
```

Structure:

```
[access modifier] [return type] [method name] (parameters) { ... }
```

Common examples in DSA:

```java
int binarySearch(int[] arr, int target)
boolean isPalindrome(String s)
void reverse(int[] arr)
```

---

## **2. Method Overloading**

Same method name, different parameters.

```java
void print(int x) {}
void print(String s) {}
void print(int x, int y) {}
```

Key rules:

* Parameter **type/order/count** must differ.
* Return type **alone** cannot overload.

Useful for helper methods in recursion & utility functions.

---

## **3. Pass-by-Value Behaviour**

Java is **100% pass-by-value**.

### **Primitives**

The value is copied.

```java
void change(int x) { x = 20; }
int a = 10;
change(a);  
// a stays 10
```

### **Objects / Arrays**

The **reference** is copied → so changes to internal state affect the original.

```java
void update(int[] arr) {
    arr[0] = 99;
}
int[] nums = {1, 2, 3};
update(nums);
// nums[0] becomes 99
```

But reassigning inside the method does NOT change the original reference:

```java
void reset(int[] arr) {
    arr = new int[]{0,0,0}; // does NOT affect original
}
```

---

## **4. Return Types**

Defines what the method sends back.

```java
int sum(...) → returns int  
boolean check(...) → returns true/false  
void method() → returns nothing
```

Return type must match the returned value:

```java
String greet() {
    return "Hello";  // OK
}
```

`void` methods can return early using:

```java
return;
```

In DSA:

* functions return answers (boolean, int, long)
* often return arrays/lists or build results
* recursion relies heavily on proper return types

---

# ⭐ Quick Mental Notes

* Java methods **always** take arguments by value.
* Arrays & objects appear “mutable” because references are copied.
* Overloading is just for convenience, not logic.
* Write small helper functions to make DSA code cleaner.
