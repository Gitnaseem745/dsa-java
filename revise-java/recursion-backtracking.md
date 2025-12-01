# ✅ **Recursion + Backtracking — Quick DSA Revision**

This block covers everything important for subsets, permutations, DFS, trees, graphs, and many medium/hard problems.

---

# 🔥 **1. What is Recursion?**

A function calling itself.

Every recursion has:

* **Base case** → stops recursion
* **Recursive case** → continues recursion

Template:

```java
void solve(...) {
    if (base condition) return;
    // work
    solve(...);  // recursive call
}
```

---

# 🔥 **2. How Recursion Works (Call Stack)**

Each recursion call adds a **new frame** to the stack:

* local variables
* parameters
* temporary states

Understanding this helps avoid:

* stack overflow
* wrong answers due to shared states

---

# 🔥 **3. Types of Recursion You Must Know**

## **A. Linear Recursion**

```java
f(n) → f(n-1)
```

Examples:

* factorial
* sum of array
* fibonacci

---

## **B. Divide & Conquer**

Problem split into subproblems.

Examples:

* merge sort
* quicksort
* binary search

---

## **C. Tree Recursion**

Two or more recursive calls.

Example (Binary Tree):

```java
void dfs(TreeNode root) {
    if (root == null) return;
    dfs(root.left);
    dfs(root.right);
}
```

Used in:

* tree traversals
* solving tree problems
* graph DFS

---

# 🔥 **4. Backtracking Essentials**

Backtracking = recursion + undo (backtrack step).

Template:

```java
void backtrack(List<Integer> path) {
    if (solution found) {
        ans.add(new ArrayList<>(path));
        return;
    }

    for (choice in choices) {
        path.add(choice);
        backtrack(path);
        path.remove(path.size() - 1); // undo
    }
}
```

Used in:

* subsets
* permutations
* n-queens
* sudoku
* path searching

---

# 🔥 **5. Key Patterns**

## **A. Subsets (Power Set)**

```java
void dfs(int i, List<Integer> path) {
    ans.add(new ArrayList<>(path));
    for (int j = i; j < n; j++) {
        path.add(nums[j]);
        dfs(j + 1, path);
        path.remove(path.size() - 1);
    }
}
```

---

## **B. Permutations**

```java
void permute(List<Integer> path) {
    if (path.size() == n) {
        ans.add(new ArrayList<>(path));
        return;
    }

    for (int num : nums) {
        if (used[num]) continue;
        used[num] = true;
        path.add(num);

        permute(path);

        used[num] = false;
        path.remove(path.size() - 1);
    }
}
```

---

## **C. DFS on Trees**

Preorder, Inorder, Postorder.

```java
void dfs(TreeNode root) {
    if (root == null) return;
    dfs(root.left);
    dfs(root.right);
}
```

---

## **D. DFS on Graphs**

```java
void dfs(int node) {
    visited[node] = true;
    for (int nei : graph[node]) {
        if (!visited[nei]) dfs(nei);
    }
}
```

---

## **E. Decision Tree Backtracking**

Used in problems like:

* combinations
* word search
* phone keypad letters
* generate parentheses

---

# 🔥 **6. Return Types in Recursion**

### **Returning a value**

```java
int sum(TreeNode root) {
    if (root == null) return 0;
    return root.val + sum(root.left) + sum(root.right);
}
```

### **Returning boolean**

Used in:

* path exists
* is balanced
* search for value

```java
boolean exists(Node root, int target)
```

---

# 🔥 **7. Recursion vs Iteration in DSA**

Use recursion when:

* problem is naturally a tree
* exploring all combinations
* applying DFS

Use iteration when:

* depth is huge → risk stack overflow
* BFS-style problems

---

# 🔥 **8. Common Mistakes**

* Missing **base case** → infinite recursion
* Forgetting **backtracking step** → wrong results
* Modifying shared objects incorrectly
* Using **String concatenation** inside recursion instead of StringBuilder

---

# ⭐ Quick Mental Notes

* Backtracking = “try → explore → undo”.
* Recursion heavily used in trees, graphs, DP, and brute force.
* Always copy list before adding to result.
* Understand call-stack behavior to avoid bugs.
