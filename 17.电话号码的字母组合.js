/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 *
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (50.95%)
 * Likes:    501
 * Dislikes: 0
 * Total Accepted:    59.3K
 * Total Submissions: 115K
 * Testcase Example:  '"23"'
 *
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 * 
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * 
 * 
 * 
 * 示例:
 * 
 * 输入："23"
 * 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * 
 * 
 * 说明:
 * 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。
 * 
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */


let map = {
  0: '',
  1: '',
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
}
var letterCombinations = function (digits) {
  let len = digits.length
  if (len === 0) return []
  let S = digits
  let res = []
  let path = []
  dfs(S, len, 0, res, path)
  return res
};

function dfs(S, size, index, res, path) {
  if (size === index) {
    return res.push(path.join(''))
  }
  let tmp = map[+S[index]]
  if (tmp.length) {
    for (let i = 0; i < tmp.length; i++) {
      path.push(tmp[i])
      dfs(S, size, index + 1, res, path)
      path.pop()
    }
  } else {
    path.push('')
    dfs(S, size, index + 1, res, path)
    path.pop()
  }
}
// @lc code=end

