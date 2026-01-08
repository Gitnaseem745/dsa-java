// Longest Palindromic Substring (LeetCode)
// ID: 0003 | Topics: two-pointers, string, dynamic-programming | Patterns: two-pointers
// Link: https://leetcode.com/problems/longest-palindromic-substring/description/
// Difficulty: Medium
// Time: Worst case O(n³) | Space: O(1)

class Solution {
    public String longestPalindrome(String s) {
        for(int len = s.length(); len>0; len--){
            for(int start = 0; start <= s.length() - len; start++){
                if(check(start, start + len, s)){
                    return s.substring(start, start + len);
                }
            }
        }
        return "";
    }
    private boolean check(int i, int j, String s){
        int l = i, r = j-1;
        while(l<r){
            if(s.charAt(l) != s.charAt(r)) return false;
            l++;
            r--;
        }
        return true;
    }
}
