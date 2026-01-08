// Intersection of Two Arrays II (LeetCode)
// ID: 0002 | Topics: arrays, binary-search, hash-table, two-pointers, sorting | Patterns: two-pointers
// Link: https://leetcode.com/problems/intersection-of-two-arrays-ii/description/
// Difficulty: Easy
// Time: O(?) | Space: O(?)

class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        Arrays.sort(nums1);
        Arrays.sort(nums2);
        int i = 0, j = 0, k = 0;
        int p1 = nums1.length, p2 = nums2.length;
        while( i < p1 && j < p2){
            if(nums1[i] < nums2[j]) i++;
            else if(nums1[i] > nums2[j]) j++;
            else {
                nums1[k++] = nums1[i++];
                j++;
            }
        } 
        return Arrays.copyOfRange(nums1, 0, k);
    }
}
