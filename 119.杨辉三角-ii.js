/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 *
 * https://leetcode-cn.com/problems/pascals-triangle-ii/description/
 *
 * algorithms
 * Easy (61.27%)
 * Likes:    166
 * Dislikes: 0
 * Total Accepted:    63.2K
 * Total Submissions: 102.6K
 * Testcase Example:  '3'
 *
 * 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
 * 
 * 
 * 
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例:
 * 
 * 输入: 3
 * 输出: [1,3,3,1]
 * 
 * 
 * 进阶：
 * 
 * 你可以优化你的算法到 O(k) 空间复杂度吗？
 * 
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let res = []
  if (rowIndex === 0) return [1]
  for (let i = 0; i < rowIndex + 1; i++) {
      let tmp = []
      for (let j = 0; j <= i; j++) {
          if (j > 0 && j < i) {
              tmp.push(res[i - 1][j - 1] + res[i - 1][j])
          } else {
              tmp.push(1)
          }
      }
      res.push(tmp)
  }
  return res[rowIndex]
};
// @lc code=end

