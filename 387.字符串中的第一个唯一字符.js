/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 *
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (40.66%)
 * Likes:    154
 * Dislikes: 0
 * Total Accepted:    47.8K
 * Total Submissions: 115.8K
 * Testcase Example:  '"leetcode"'
 *
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 * 
 * 案例:
 * 
 * 
 * s = "leetcode"
 * 返回 0.
 * 
 * s = "loveleetcode",
 * 返回 2.
 * 
 * 
 * 
 * 
 * 注意事项：您可以假定该字符串只包含小写字母。
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

// hash 表
var firstUniqChar = function (s) {
  if (!s) return -1
  let map = {}
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1
    } else {
      map[s[i]]++
    }
  }
  for (let j = 0; j < s.length; j++) {
    if (map[s[j]] === 1) return j
  }
  return -1
};

// // 先排序
// var firstUniqChar = function (s) {
//   let _s = s.sort((a, b) => a - b)
//   for (let i = 0; i < s.length;)

//  }
// @lc code=end

