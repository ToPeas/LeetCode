/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 *
 * https://leetcode-cn.com/problems/minimum-path-sum/description/
 *
 * algorithms
 * Medium (62.38%)
 * Likes:    321
 * Dislikes: 0
 * Total Accepted:    42.8K
 * Total Submissions: 67.8K
 * Testcase Example:  '[[1,3,1],[1,5,1],[4,2,1]]'
 *
 * 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 * 
 * 说明：每次只能向下或者向右移动一步。
 * 
 * 示例:
 * 
 * 输入:
 * [
 * [1,3,1],
 * ⁠ [1,5,1],
 * ⁠ [4,2,1]
 * ]
 * 输出: 7
 * 解释: 因为路径 1→3→1→1→1 的总和最小。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let m = grid.length
  let n = grid[0].length
  let dp = []
  for (let i = 0; i < grid.length; i++) {
      dp[i] = new Array(m).fill(0)
  }
  dp[m - 1][n - 1] = grid[m - 1][n - 1]
  for (let i = m - 1; i >= 0; i--) {
      for (let j = n - 1; j >= 0; j--) {
          // dp[i - 1][j - 1] = Math.min(dp[i][j - 1] || 10000, dp[j - 1][i] || 10000) + grid[i - 1][j - 1] + grid[i][j]
          if (i === m - 1 && j !== n - 1) {
              dp[i][j] = dp[i][j + 1] + grid[i][j]
          } else if (j === n - 1 && i !== m - 1) {
              dp[i][j] = dp[i + 1][j] + grid[i][j]
          } else if (i !== m - 1 && j !== n - 1) {
              dp[i][j] = grid[i][j] + Math.min(dp[i][j + 1], dp[i + 1][j])
          } else {
              dp[i][j] = grid[i][j]
          }
      }
  }
  return dp[0][0]
};
// @lc code=end

