// Two Sum (LeetCode)
// ID: 0001 | Topics: arrays | Patterns: hash-table
// Link: https://leetcode.com/problems/two-sum/description/
// Difficulty: Easy
// Time: O(n2) | Space: O(n2)

class Solution {
    public int[] twoSum(int[] nums, int target) {
     HashMap<Integer,Integer> ans = new HashMap<>();
        for(int i = 0; i < nums.length; i++){
                ans.put(nums[i], i);
            }
        for(int i = 0; i < nums.length; i++){
            int rem = target - nums[i];
            if (ans.containsKey(rem) && ans.get(rem) != i) {
                return new int[] { i, ans.get(rem) };
            }
        }
        return new int[] {};
    }
}
