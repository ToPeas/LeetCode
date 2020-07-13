/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (54.28%)
 * Likes:    431
 * Dislikes: 0
 * Total Accepted:    112.2K
 * Total Submissions: 206.7K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给你两个二进制字符串，返回它们的和（用二进制表示）。
 *
 * 输入为 非空 字符串且只包含数字 1 和 0。
 *
 *
 *
 * 示例 1:
 *
 * 输入: a = "11", b = "1"
 * 输出: "100"
 *
 * 示例 2:
 *
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 *
 *
 *
 * 提示：
 *
 *
 * 每个字符串仅由字符 '0' 或 '1' 组成。
 * 1 <= a.length, b.length <= 10^4
 * 字符串如果不是 "0" ，就都不含前导零。
 *
 *
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// 解法一 失败
// var addBinary = function (a, b) {
//   const zhuan = (n) => {
//     if (!n.length) return 0
//     n = n.split('')
//     console.log(n)
//     let len = n.length - 1
//     let res = Math.pow(2, len)
//     while (len) {
//       len--
//       if (n[len] == 1) {
//         res = res + Math.pow(2, len)
//       }
//     }
//     return res
//   }
//   const jinzhi = (n) => {
//     return n.parseInt(star, 2)
//   }
//   return jinzhi(zhuan(a) + zhuan(b))
// }

var addBinary = function (a, b) {
  a = a.split('').reverse().join('')
  b = b.split('').reverse().join('')
  if (a.length < b.length) {
    ;[a, b] = [b, a]
  }
  let res = ''
  let flag = 0
  for (let i = 0; i < a.length; i++) {
    let term = parseInt(a[i]) + parseInt(b[i] || 0) + flag
    flag = parseInt(term / 2)
    term = term % 2
    res = term + res
  }
  if (flag > 0) {
    res = flag + res
  }
  return res
}
// @lc code=end
