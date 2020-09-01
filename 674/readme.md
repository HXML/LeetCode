[最长连续递增序列](https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/)

思路：每次当后面的数小于前面的数时，直接count++,否则重置为1，最终保存的最大count即是结果