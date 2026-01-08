---
id: 0003
title: Longest Palindromic Substring
platform: LeetCode
link: https://leetcode.com/problems/longest-palindromic-substring/description/
difficulty: Medium
topics: [two-pointers, string, dynamic-programming]
patterns: [two-pointers]
date: 2025-12-01
status: solved
---

## Problem
Find the longest substring in `s` that reads the same forward and backward.  
Substring must be continuous. If multiple answers exist, return any one of them.

## Constraints
- `1 <= s.length <= 1000`
- Characters are lowercase or uppercase letters
- Only contiguous substrings count (not subsequences)

## Approaches Considered

### 1) Dynamic Programming (Classic O(n²) space)
- `dp[i][j]` = whether substring `s[i..j]` is palindrome  
- Expand lengths bottom-up  
- Good readability but heavy memory usage

### 2) Expand Around Center (Optimal O(n²) time / O(1) space)
- Treat each index (and gap between indices) as center
- Expand outward symmetrically  
- Track max length  
- Clean and commonly used for interviews

### **3) Brute Force With Early Pruning (Your Approach)**
This solution checks substrings from longest → shortest:

1. Choose the length `len` from `n` down to `1`
2. Slide a window across `s`
3. For each substring, check palindrome using two pointers  
4. Return the first (longest) one found

Why it works well:
- Since lengths decrease, the first valid palindrome is guaranteed longest.
- Palindrome check is O(n), but due to early exit, many substrings are pruned quickly.

**Time:** O(n³) worst case, but prunes well in practice  
**Space:** O(1)

It’s a brute-force strategy but intelligently ordered.

## Complexity
- **Time:** Worst case O(n³)  
- **Space:** O(1)

## Edge Cases
- Single character string  
- Entire string is palindrome  
- No palindrome longer than length 1 → return first character  
- Mixed case characters  
- Repeated characters like `"aaaaaa"`

## Dry Run
`s = "babad"`

Check len = 5 → no palindrome  
Check len = 4 → no palindrome  
Check len = 3:
- `"bab"` → palindrome → return `"bab"`  
Output: `"bab"` (or `"aba"` depending on scan order)

## Notes / Gotchas
- Using two pointers for palindrome check avoids extra space.  
- Checking longer substrings first ensures correctness with early returns.  
- Center expansion is usually preferred for optimal performance, but this implementation is clean and passes constraints confidently.  
- Always ensure substring indices are correct: `start` to `start + len - 1` checked, and `substring(start, start + len)` returned.
