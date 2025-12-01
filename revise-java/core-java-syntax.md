# ✅ **Core Java Syntax — Quick Revision**

## **1. Variables & Data Types**

Java has **primitive types** + **reference types**.

### **Primitive Types**

* **byte** (1 byte)
* **short** (2 bytes)
* **int** (4 bytes) — default integer type
* **long** (8 bytes)
* **float** (4 bytes)
* **double** (8 bytes) — default decimal type
* **char** (2 bytes, Unicode)
* **boolean** (true/false)

### **Reference Types**

Objects, arrays, Strings, classes.

### **Variable Declaration**

```java
int x = 10;
String name = "Naseem";
```

---

## **2. Type Casting**

### **Implicit Casting (Widening)**

Small → Big (safe)

```java
int x = 10;
long y = x;   // implicit
```

### **Explicit Casting (Narrowing)**

Big → Small (may lose data)

```java
double a = 9.8;
int b = (int) a;   // explicit
```

---

## **3. Operators**

### **Arithmetic**

```
+  -  *  /  %  
```

### **Logical**

```
&&  ||  !
```

### **Bitwise**

```
&  |  ^  ~  <<  >>  >>>
```

Used rarely, mostly in low-level or mask problems.

### **Comparison**

```
==  !=  >  <  >=  <=
```

### **Ternary**

Short if-else:

```java
int max = (a > b) ? a : b;
```

---

## **4. Input / Output**

### **Scanner (easy, but slower)**

```java
Scanner sc = new Scanner(System.in);
int x = sc.nextInt();
String s = sc.nextLine();
```

### **BufferedReader (fast)**

```java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
String s = br.readLine();     // always returns String
int n = Integer.parseInt(s);
```

---

# ⭐ Quick Mental Notes

* Java is **strongly typed** → every variable has a fixed type.
* Most DSA code uses only **int, long, boolean, arrays, String, ArrayList**.
* Prefer **BufferedReader** when input is huge; otherwise Scanner is fine.
* Type casting matters mainly in:

  * division results
  * narrowing conversion
  * ASCII/char-based problems
