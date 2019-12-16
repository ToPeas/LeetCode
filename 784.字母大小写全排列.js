/*
 * @lc app=leetcode.cn id=784 lang=javascript
 *
 * [784] 字母大小写全排列
 *
 * https://leetcode-cn.com/problems/letter-case-permutation/description/
 *
 * algorithms
 * Easy (59.53%)
 * Likes:    119
 * Dislikes: 0
 * Total Accepted:    11.1K
 * Total Submissions: 18.2K
 * Testcase Example:  '"a1b2"'
 *
 * 给定一个字符串S，通过将字符串S中的每个字母转变大小写，我们可以获得一个新的字符串。返回所有可能得到的字符串集合。
 * 
 * 
 * 示例:
 * 输入: S = "a1b2"
 * 输出: ["a1b2", "a1B2", "A1b2", "A1B2"]
 * 
 * 输入: S = "3z4"
 * 输出: ["3z4", "3Z4"]
 * 
 * 输入: S = "12345"
 * 输出: ["12345"]
 * 
 * 
 * 注意：
 * 
 * 
 * S 的长度不超过12。
 * S 仅由数字和字母组成。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
  let len = S.length
  if (len === 0) return []
  let res = []
  let path = []
  dfs(S, len, 0, res, path)
  return res
};

function dfs(S, size, index, res, path) {
  if (size === index) {

    return res.push(path.join(''))
  }
  path.push(S[index])
  dfs(S, size, index + 1, res, path)
  path.pop()
  let s = S[index].charCodeAt()
  let _s = ''
  if (s > 96 && s < 123) _s = S[index].toUpperCase()
  if (s > 64 && s < 97) _s = S[index].toLowerCase()
  if (_s) {
    path.push(_s)
    dfs(S, size, index + 1, res, path)
    path.pop()
  }
}
// @lc code=end

