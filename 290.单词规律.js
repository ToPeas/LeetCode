/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 *
 * https://leetcode-cn.com/problems/word-pattern/description/
 *
 * algorithms
 * Easy (43.00%)
 * Likes:    176
 * Dislikes: 0
 * Total Accepted:    28.3K
 * Total Submissions: 65.7K
 * Testcase Example:  '"abba"\n"dog cat cat dog"'
 *
 * 给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。
 * 
 * 这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。
 * 
 * 示例1:
 * 
 * 输入: pattern = "abba", str = "dog cat cat dog"
 * 输出: true
 * 
 * 示例 2:
 * 
 * 输入:pattern = "abba", str = "dog cat cat fish"
 * 输出: false
 * 
 * 示例 3:
 * 
 * 输入: pattern = "aaaa", str = "dog cat cat dog"
 * 输出: false
 * 
 * 示例 4:
 * 
 * 输入: pattern = "abba", str = "dog dog dog dog"
 * 输出: false
 * 
 * 说明:
 * 你可以假设 pattern 只包含小写字母， str 包含了由单个空格分隔的小写字母。    
 * 
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  let arr = str.split(' ')
  let map1 = new Map()
  let map2 = new Map()
  if (pattern.length !== arr.length) return false
  for (let i = 0; i < pattern.length; i++) {
      if (!map1.has(pattern[i])) {
          map1.set(pattern[i], arr[i])
      } else {
          if (map1.get(pattern[i]) !== arr[i]) {
              return false
          }
      }
      if (!map2.has(arr[i])) {
          map2.set(arr[i], pattern[i])
      } else {
          if (map2.get(arr[i]) !== pattern[i]) {
              return false
          }
      }
  }
  return true
};
// @lc code=end

