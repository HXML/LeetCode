[总持续时间可被 60 整除的歌曲](https://leetcode-cn.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/)

解题思路

采用哈希表, 记录模60的余数， 采用MAP保存起来。
然后遍历哈希表，每遍历一个entry(key, count1),
就访问 entry(60-key, count2),
一共有count1 * count2 种组合。

<b>特殊情况：</b>
模数为 0 和 30 的时候， 组合的个数为 C(count, 2);

