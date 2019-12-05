/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 *
 * https://leetcode-cn.com/problems/largest-number/description/
 *
 * algorithms
 * Medium (33.71%)
 * Likes:    180
 * Dislikes: 0
 * Total Accepted:    16.4K
 * Total Submissions: 47.3K
 * Testcase Example:  '[10,2]'
 *
 * 给定一组非负整数，重新排列它们的顺序使之组成一个最大的整数。
 * 
 * 示例 1:
 * 
 * 输入: [10,2]
 * 输出: 210
 * 
 * 示例 2:
 * 
 * 输入: [3,30,34,5,9]
 * 输出: 9534330
 * 
 * 说明: 输出结果可能非常大，所以你需要返回一个字符串而不是整数。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  if (!nums.length) return '0'
  nums.sort((a, b) => {
    let t1 = a + '' + b
    let t2 = b + "" + a
    if (t1 > t2) {
      return -1
    } else if (t1 < t2) {
      return 1
    } else {
      return 0
    }
  })
  return parseInt(nums.join('')) === 0 ? '0' : nums.join('')
};
// @lc code=end

