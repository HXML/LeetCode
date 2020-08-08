 [删除排序数组中的重复项](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/)

 解题思路 
 1使用indexOf判断元素第一次出现的下标，不等于当前则重复，删除它
删除数组长度减1，所以下标要往前移动一位