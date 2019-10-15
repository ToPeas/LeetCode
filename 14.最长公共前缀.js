/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (34.84%)
 * Likes:    723
 * Dislikes: 0
 * Total Accepted:    134.1K
 * Total Submissions: 383.4K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs[0]) return ""
  let arr = strs[0].split("")
  for (let i = 1; i < strs.length; i++) {
    if (strs[i].length < arr.length) {
      arr = arr.slice(0, strs[i].length)
    }
    for (let j = 0; j < strs[i].length; j++) {
      if (arr[j] !== strs[i][j]) {
        arr = arr.slice(0, j)
      }
    }
  }
  return arr.join("")
};
// @lc code=end

