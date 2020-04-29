/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 *
 * https://leetcode-cn.com/problems/restore-ip-addresses/description/
 *
 * algorithms
 * Medium (45.47%)
 * Likes:    168
 * Dislikes: 0
 * Total Accepted:    20.5K
 * Total Submissions: 45.4K
 * Testcase Example:  '"25525511135"'
 *
 * 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。
 * 
 * 示例:
 * 
 * 输入: "25525511135"
 * 输出: ["255.255.11.135", "255.255.111.35"]
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  if (s.length > 12) return []
  let res = []
  function helper(str, tmp, result) {
    if (tmp.length === 3) {
      return isValid(str) && result.push([...tmp, str].join('.'))
    }
    for (let i = 0; i < 4; i++) {
      isValid(str.substring(0, i)) && helper(str.substring(i), [...tmp, str.substring(0, i)], result)
    }
  }
  function isValid(str) {
    if (!str.length) return false
    return 0 <= +str && +str <= 255 && (str.length > 1 ? !!+str[0] : true)
  }
  helper(s, [], res)
  return res
};
// @lc code=end

