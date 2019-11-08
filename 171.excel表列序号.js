/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 *
 * https://leetcode-cn.com/problems/excel-sheet-column-number/description/
 *
 * algorithms
 * Easy (65.11%)
 * Likes:    88
 * Dislikes: 0
 * Total Accepted:    24.1K
 * Total Submissions: 36.9K
 * Testcase Example:  '"A"'
 *
 * 给定一个Excel表格中的列名称，返回其相应的列序号。
 * 
 * 例如，
 * 
 * ⁠   A -> 1
 * ⁠   B -> 2
 * ⁠   C -> 3
 * ⁠   ...
 * ⁠   Z -> 26
 * ⁠   AA -> 27
 * ⁠   AB -> 28 
 * ⁠   ...
 * 
 * 
 * 示例 1:
 * 
 * 输入: "A"
 * 输出: 1
 * 
 * 
 * 示例 2:
 * 
 * 输入: "AB"
 * 输出: 28
 * 
 * 
 * 示例 3:
 * 
 * 输入: "ZY"
 * 输出: 701
 * 
 * 致谢：
 * 特别感谢 @ts 添加此问题并创建所有测试用例。
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// var titleToNumber = function (s) {
//   let sum = 0
//   for (let i = s.length - 1; i >= 0; i--) {
//     sum = sum + ((s[i].charCodeAt() - 64) * tmp)
//   }
//   return sum
// };

var titleToNumber = function (s) {
  let sum = 0
  for (let i = 0; i < s.length; i++) {
    let num = s[i].charCodeAt() - 64
    sum = sum * 26 + num
  }
  return sum
}
// @lc code=end

