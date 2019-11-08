/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 *
 * https://leetcode-cn.com/problems/count-primes/description/
 *
 * algorithms
 * Easy (30.16%)
 * Likes:    219
 * Dislikes: 0
 * Total Accepted:    32.1K
 * Total Submissions: 104K
 * Testcase Example:  '10'
 *
 * 统计所有小于非负整数 n 的质数的数量。
 * 
 * 示例:
 * 
 * 输入: 10
 * 输出: 4
 * 解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

// function isPrime(x) {
//   if(x===1) return false
//   if (x === 2) {
//     return true
//   } else {
//     for (let i = 2; i < x; i++) {
//       if (x % i === 0) {
//         return false
//       }
//     }
//     return true
//   }
// }

// var countPrimes = function (n) {

//   let arr = []
//   let i = 1

//   while (i < n) {
//     if (isPrime(i)) {
//       arr.push(i)
//     }
//     i++
//   }
//   return arr.length
// };

// 上面的方法直接超时

// 第一版方法
var countPrimes = function (n) {
  let arr = Array(n).fill(true)
  let sum = 0

  for (let i = 2; i * i < n; i++) {
    if (arr[i]) {
      for (let j = i * i; j < n; j += i) {
        arr[j] = false;
      }
    }
  }
  for (let j = 2; j < arr.length; j++) {
    if (arr[j]) sum++
  }
  return sum

}


// @lc code=end

