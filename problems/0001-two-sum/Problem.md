---
id: 0001
title: Two Sum
platform: LeetCode
link: https://leetcode.com/problems/two-sum/description/
difficulty: Easy
topics: [arrays]
patterns: [hash-table]
date: 2025-12-01
status: solved
---

## Problem (in your own words)
Given an array of integers and a target value, find two numbers whose sum equals the target.  
Return their indices. You cannot use the same element twice, and the order of indices doesn’t matter.

## Constraints
- `2 <= nums.length <= 10^4`  
- `-10^9 <= nums[i] <= 10^9`  
- Exactly one valid answer exists

## Approaches Considered
1) **Brute Force:** Check all pairs `(i, j)` to see if `nums[i] + nums[j] == target`.  
   ➤ Time: O(n²), Space: O(1)

2) **Optimized (HashMap):**  
   - Store each number’s index in a `HashMap`.  
   - For each element, compute `target - nums[i]` and check if it exists in the map.  
   - Return both indices when found.  
   ➤ Time: O(n), Space: O(n)

## Complexity
- **Time:** O(n)  
- **Space:** O(n)

## Edge Cases
- Negative numbers in array  
- Repeated numbers (e.g., `[3, 3]`, `target = 6`)  
- No solution → return empty array

## Dry Run
Input: `nums = [2, 7, 11, 15], target = 9`  
Map after first pass: `{2:0, 7:1, 11:2, 15:3}`  
Check `i=0 → rem=7` → found in map at index 1 → return `[0,1]`

## Notes / Gotchas
- Don’t use the same index twice (`ans.get(rem) != i` check is crucial).  
- Make sure to use `HashMap<Integer,Integer>` to store both value and index.  
- Return indices, not values.
