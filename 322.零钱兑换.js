/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 *
 * https://leetcode-cn.com/problems/coin-change/description/
 *
 * algorithms
 * Medium (35.60%)
 * Likes:    288
 * Dislikes: 0
 * Total Accepted:    31.2K
 * Total Submissions: 85.7K
 * Testcase Example:  '[1,2,5]\n11'
 *
 * 给定不同面额的硬币 coins 和一个总金额
 * amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
 * 
 * 示例 1:
 * 
 * 输入: coins = [1, 2, 5], amount = 11
 * 输出: 3 
 * 解释: 11 = 5 + 5 + 1
 * 
 * 示例 2:
 * 
 * 输入: coins = [2], amount = 3
 * 输出: -1
 * 
 * 说明:
 * 你可以认为每种硬币的数量是无限的。
 * 
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// 递归，然后超出时间
// var coinChange = function (coins, amount) {
//   if (amount === 0) return 0
//   let min = Number.MAX_SAFE_INTEGER
//   for (let i = 0; i < coins.length; i++) {
//     let remain = amount - coins[i]
//     if (remain < 0) continue
//     let child_coin = coinChange(coins, remain)
//     if (child_coin === -1) continue
//     min = Math.min(min, child_coin + 1)
//   }
//   return min === Number.MAX_SAFE_INTEGER ? -1 : min
// };


var coinChange = function (coins, amount) {
  let dp = Array(amount + 1).fill(amount + 1)
  dp[0] = 0
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
      }
    }
  }
  return dp[amount] > amount ? -1 : dp[amount];
}
// @lc code=end

