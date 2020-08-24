[数组的度](https://leetcode-cn.com/problems/degree-of-an-array/)

解题思路


第一次循环找出最多出现元素出现的次数，例如[1, 2, 3, 2, 1] 求出size = 2;
第二次循环，当某个数出现的次数 = size，取当前索引减去数字初始位置(indexOf) + 1

作者：wanyuxuan
链接：https://leetcode-cn.com/problems/degree-of-an-array/solution/si-lu-jian-dan-by-wanyuxuan/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。