/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 *
 * https://leetcode-cn.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (41.06%)
 * Likes:    121
 * Dislikes: 0
 * Total Accepted:    58.5K
 * Total Submissions: 141.8K
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 * 
 * 示例 1:
 * 
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "race a car"
 * 输出: false
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

// 使用双指针的方法
var isPalindrome = function (s) {
  if (!s) return true
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  let j = s.length -1
  let i = 0
  while (i < j) {
    if (s[i] !== s[j]) {
      return false
    }
    i++
    j--
  }
  return true
};
// @lc code=end

