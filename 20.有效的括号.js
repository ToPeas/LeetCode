/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (39.67%)
 * Likes:    1112
 * Dislikes: 0
 * Total Accepted:    135.6K
 * Total Submissions: 341.1K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 
 * 
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1:
 * 
 * 输入: "()"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "()[]{}"
 * 输出: true
 * 
 * 
 * 示例 3:
 * 
 * 输入: "(]"
 * 输出: false
 * 
 * 
 * 示例 4:
 * 
 * 输入: "([)]"
 * 输出: false
 * 
 * 
 * 示例 5:
 * 
 * 输入: "{[]}"
 * 输出: true
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (!s) return true
  let arr = s.split('')
  if (arr % 2 === 1) return false
  let len = _arr.length
  let stack = []

  for (let i = 0; i < len - 1; i++) {
    if (arr[i] === '(' || arr[i] === '[' || arr[i] === '{') {
      stack.push(_arr[i])
    } else {
      if ((arr[i] === ')' && stack.pop() !== '(') || (arr[i] === ']' && stack.pop() !== '[') || (arr[i] === '{' && stack.pop() !== '}')) {
        return false
      }
    }
  }
  return true
};
// @lc code=end

