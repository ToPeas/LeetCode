/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 *
 * https://leetcode-cn.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (40.98%)
 * Likes:    356
 * Dislikes: 0
 * Total Accepted:    83.8K
 * Total Submissions: 203.1K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 * 
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 * 
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 * 
 * 示例 1:
 * 
 * 输入: [1,2,3]
 * 输出: [1,2,4]
 * 解释: 输入数组表示数字 123。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [4,3,2,1]
 * 输出: [4,3,2,2]
 * 解释: 输入数组表示数字 4321。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
// 天真的解法 这种遇到大数就来不了

// var plusOne = function (digits) {
//   let tmp = digits.join("") * 1 + 1
//   return (tmp + '').split("")
// };


var plusOne = function (digits) {
  let len = digits.length
  while (len >= 0) {
    if (digits[len - 1] !== 9) {
      digits[len - 1] = digits[len - 1] + 1
      return digits
    } else {
      digits[len - 1] = 0
      if (len === 1) {
        digits.unshift(1)
        return digits
      }
      len--
    }

  };
}
// @lc code=end

