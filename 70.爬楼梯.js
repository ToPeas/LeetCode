/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 *
 * https://leetcode-cn.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (44.93%)
 * Likes:    639
 * Dislikes: 0
 * Total Accepted:    84K
 * Total Submissions: 179.6K
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 
 * 注意：给定 n 是一个正整数。
 * 
 * 示例 1：
 * 
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 * 
 * 示例 2：
 * 
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

// var climbStairs = function (n) {
//   if (n === 0) return 0
//   if (n === 1) return 1
//   if (n === 2) return 2
//   return climbStairs(n - 1) + climbStairs(n - 2)
// };


// 递归存在的问题就是会爆栈，因为有很多重复的计算

// 所以要用什么标记量把之前已经计算过的结果保存起来，这就是动态规划的问题



// 非递归的方法




var climbStairs = function (n) {
  if (n === 0) {
    return 0
  } else if (n === 1 || n === 2) {
    return n
  } else {
    let arr = [1, 2]
    for (let i = 3; i <= n + 1; i++) {
      arr[i - 1] = arr[i - 2] + arr[i - 3]
    }
    return arr[n - 1]

  }
}


// @lc code=end

