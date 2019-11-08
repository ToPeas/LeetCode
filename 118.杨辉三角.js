/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 *
 * https://leetcode-cn.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (64.10%)
 * Likes:    197
 * Dislikes: 0
 * Total Accepted:    44.3K
 * Total Submissions: 68.5K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 
 * 
 * 
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例:
 * 
 * 输入: 5
 * 输出:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let res = []
  if (numRows.length === 0) return []
  for (let i = 0; i < numRows; i++) {
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
  return res
};
// @lc code=end

