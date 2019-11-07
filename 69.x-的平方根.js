/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 *
 * https://leetcode-cn.com/problems/sqrtx/description/
 *
 * algorithms
 * Easy (36.95%)
 * Likes:    249
 * Dislikes: 0
 * Total Accepted:    70K
 * Total Submissions: 188.2K
 * Testcase Example:  '4'
 *
 * 实现 int sqrt(int x) 函数。
 * 
 * 计算并返回 x 的平方根，其中 x 是非负整数。
 * 
 * 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
 * 
 * 示例 1:
 * 
 * 输入: 4
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: 8
 * 输出: 2
 * 说明: 8 的平方根是 2.82842..., 
 * 由于返回类型是整数，小数部分将被舍去。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let i = 1
  let j = x
  let mid
  if (x < 1) return 0
  while (i < j - 1) {
    mid = Math.floor((i + j) / 2)
    if (mid * mid > x) {
      j = mid
    } else if (mid * mid < x) {
      i = mid
    } else if (mid * mid == x) {
      return mid
    }
  }
  return i
};
// @lc code=end

