package main  //包声明 模块化 module
//go 是一个天生支持多核计算的云开发时代c语言
//node + go 服务器有关
//require('fs') filesystem
import (
	"fmt"//向命令行输出hello world format
	)//es6
 //node 脚本语言
 //go c 2进制文件
 //编译器
 func minEatingSpeed(piles []int,H int) int{
	 low :=1 //let low = 1;
	 //最大pile的数量 交给一个函数
	//  函数是组织代码的最小单元 {块级作用域}
	hi :=maxPiles(piles)
	for{if low >hi{break}}
	fmt.Printf("d%",hi)
	 return low
 }

 func maxPiles(piles []int) int {
	 h :=0 
	 // range
	 for k, n :=range piles{
		 h = max (h,n)
	 }
return h
 }
 func max(a int,b int)  int{
	 if a > b{return a} 
	 return b
 }
func main (){ //func 函数关键字
// 从main开始
fmt.Printf("%d小时内吃完香蕉的最慢速度是%d只/小时",8,minEatingSpeed([]int{3,6,7,11}, 8));
}