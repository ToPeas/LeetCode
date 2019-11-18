
/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (27.23%)
 * Likes:    1427
 * Dislikes: 0
 * Total Accepted:    134.8K
 * Total Submissions: 489.2K
 * Testcase Example:  '"babad"'
 *
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * 
 * 示例 1：
 * 
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 * 
 * 
 * 示例 2：
 * 
 * 输入: "cbbd"
 * 输出: "bb"
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s == "") {
    return "";
  }
  if (s.length = 1) {
    return s
  }

  let dp = [];
  let max = 0
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    dp[i] = new Array(s.length).fill(0, 0)
  }

  for (let l = 1; l <= s.length; l++) {
    for (let i = 0; i < s.length; i++) {
      let j = i + l - 1
      if (j >= s.length) {
        break
      }
      if ((l === 1 || l === 2 || dp[i + 1][j - 1] === 1) && s[i] === s[j]) {
        dp[i][j] = 1
      }

      if (dp[i][j] === 1 && (j - i + 1) > max) {
        max = j - i + 1
        star = i
        end = j
      }
    }
  }

  console.log(dp)
  console.log(start)
  console.log(max)
  console.log(end)

  return s.substr(start, max)

};
// @lc code=end