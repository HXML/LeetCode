[换酒问题](https://leetcode-cn.com/problems/water-bottles/)

题目分析

1.递归求解，传入参数，1.当前满瓶的数量，2.当前兑换一瓶需要的空瓶，3.当前空瓶的数量
2.首次满瓶的数量为numBottles，numExchange为定值，空瓶数为0
3. res为计算总数的结果，每次只计算满瓶的结果
4.空瓶的结果等于 当前满瓶喝完的空瓶数+上次本身剩余的空瓶数
5.递归终止条件 没有满瓶且空瓶不足以兑换一瓶时，求最后结果。
if (numBottles == 0 && limt < numExchange) {
return;
}


