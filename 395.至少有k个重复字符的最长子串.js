/*
 * @lc app=leetcode.cn id=395 lang=javascript
 *
 * [395] 至少有K个重复字符的最长子串
 *
 * https://leetcode-cn.com/problems/longest-substring-with-at-least-k-repeating-characters/description/
 *
 * algorithms
 * Medium (40.77%)
 * Likes:    84
 * Dislikes: 0
 * Total Accepted:    5.3K
 * Total Submissions: 12.9K
 * Testcase Example:  '"aaabb"\n3'
 *
 * 找到给定字符串（由小写字符组成）中的最长子串 T ， 要求 T 中的每一字符出现次数都不少于 k 。输出 T 的长度。
 * 
 * 示例 1:
 * 
 * 
 * 输入:
 * s = "aaabb", k = 3
 * 
 * 输出:
 * 3
 * 
 * 最长子串为 "aaa" ，其中 'a' 重复了 3 次。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入:
 * s = "ababbc", k = 2
 * 
 * 输出:
 * 5
 * 
 * 最长子串为 "ababb" ，其中 'a' 重复了 2 次， 'b' 重复了 3 次。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  let hash = {}, max = 0;
  s.split('').forEach((val) => { hash[val] = hash[val] + 1 || 1 })
  let c = Object.entries(hash).filter(([key, val]) => val < k);

  if (c[0]) {
    for (let seg of s.split(c.shift()[0])) {
      max = Math.max(longestSubstring(seg, k), max)
    }
    return max
  }
  return s.length
};
// @lc code=end

