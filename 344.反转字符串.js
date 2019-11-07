/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 *
 * https://leetcode-cn.com/problems/reverse-string/description/
 *
 * algorithms
 * Easy (67.68%)
 * Likes:    185
 * Dislikes: 0
 * Total Accepted:    86.2K
 * Total Submissions: 126.9K
 * Testcase Example:  '["h","e","l","l","o"]'
 *
 * 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
 * 
 * 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
 * 
 * 你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：["h","e","l","l","o"]
 * 输出：["o","l","l","e","h"]
 * 
 * 
 * 示例 2：
 * 
 * 输入：["H","a","n","n","a","h"]
 * 输出：["h","a","n","n","a","H"]
 * 
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// var reverseString = function (s) {
//   let len = s.length - 1
//   let mid = Math.ceil(len / 2)
//   for (let i = 0; i < mid; i++) {
//     let tmp = s[len]
//     s[len] = s[i]
//     s[i] = tmp
//     len--
//   }
// };
// 这里还可以用最简单的方式
var reverseString = function (s) {
  let n = s.length - 1
  let i = 0
  while (i < n) {
    [s[i], s[n]] = [s[n], s[i]]
    i++
    n--
  }
}
// @lc code=end

