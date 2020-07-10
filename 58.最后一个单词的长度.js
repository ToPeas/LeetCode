/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 *
 * https://leetcode-cn.com/problems/length-of-last-word/description/
 *
 * algorithms
 * Easy (33.41%)
 * Likes:    212
 * Dislikes: 0
 * Total Accepted:    103.7K
 * Total Submissions: 310.4K
 * Testcase Example:  '"Hello World"'
 *
 * 给定一个仅包含大小写字母和空格 ' ' 的字符串 s，返回其最后一个单词的长度。如果字符串从左向右滚动显示，那么最后一个单词就是最后出现的单词。
 *
 * 如果不存在最后一个单词，请返回 0 。
 *
 * 说明：一个单词是指仅由字母组成、不包含任何空格字符的 最大子字符串。
 *
 *
 *
 * 示例:
 *
 * 输入: "Hello World"
 * 输出: 5
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

//  经典的转成数组来解决问题
// 利用第三方的标记量来判断 字母是否是正确的被统计
var lengthOfLastWord = function (s) {
  s = s.split('').reverse()
  let res = 0
  let flag = false
  for (let i = 0; i < s.length; i++) {
      if (flag && res !== 0) {
          break
      }
      if (s[i] === ' ' && res !== 0) {
          flag = true
          continue
      }
      if (/[A-Za-z]/.test(s[i])) {
          res++
      }
  }
  return res
}
// @lc code=end
