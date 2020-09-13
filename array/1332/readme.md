[数组序号转换](https://leetcode-cn.com/problems/rank-transform-of-an-array/)

解题思路:复制一份数组排序去重
原数组查找每个元素在排序去重数组中的索引（找到后要中断循环，不然会超时）