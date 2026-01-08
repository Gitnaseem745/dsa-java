---
id: 0002
title: Intersection of Two Arrays II
platform: LeetCode
link: https://leetcode.com/problems/intersection-of-two-arrays-ii/description/
difficulty: Easy
topics: [arrays, binary-search, hash-table, two-pointers, sorting]
patterns: [two-pointers]
date: 2025-12-01
status: solved
---

## Problem (in your own words)
Given two integer arrays, return an array containing their intersection **including duplicate occurrences**.  
Elements should appear in the result as many times as they appear in both arrays.  
The output order does not matter.

## Constraints
- `1 <= nums1.length, nums2.length <= 1000`
- Each element can be in the range `[-10^9, 10^9]`
- Arrays may contain duplicates
- Answer can be in any order

## Approaches Considered

### 1) HashMap Frequency Count (Classic Approach)
- Count occurrences of each value from the smaller array using a map.
- Traverse the second array and decrement counts.
- Add to result whenever count > 0.  
**Time:** O(n + m)  
**Space:** O(min(n,m))

### 2) Sorting + Two Pointers (Chosen Approach)
This solution sorts both arrays and uses two pointers to walk through them:

- If `nums1[i] < nums2[j]`: move `i`  
- If `nums1[i] > nums2[j]`: move `j`  
- If equal: it's part of the intersection → store and move both

The duplicate handling happens naturally because equal values are consumed together.

This method avoids HashMap space and gives a very clean two-pointer solution.

**Time:** O(n log n + m log m)  
**Space:** O(1) extra (in-place reuse of `nums1` as output buffer)

## Complexity
- **Time:** O(n log n + m log m)  
- **Space:** O(1) extra

## Edge Cases
- No intersection → return empty array  
- All values same  
- One array much smaller than the other  
- Negative values  
- Large duplicates count (e.g., `[2,2,2,2]` + `[2,2]`)

## Dry Run
`nums1 = [4,9,5]` → sorted: `[4,5,9]`  
`nums2 = [9,4,9,8,4]` → sorted: `[4,4,8,9,9]`

Pointers:  
- i=0, j=0 → 4 == 4 → store 4  
- i=1, j=1 → 5 > 4 → j++  
- i=1, j=2 → 5 < 8 → i++  
- i=2, j=2 → 9 > 8 → j++  
- i=2, j=3 → 9 == 9 → store 9  

Output: `[4, 9]`

## Notes / Gotchas
- Using `nums1` as the output buffer avoids extra space allocation.  
- Be careful with the `k` pointer — it tracks the write index.  
- Sorting allows duplicates to line up naturally for correct matching.  
- Two pointers is often optimal when sorting is allowed and duplicates matter.
