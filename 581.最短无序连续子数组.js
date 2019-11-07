/*
 * @lc app=leetcode.cn id=581 lang=javascript
 *
 * [581] 最短无序连续子数组
 *
 * https://leetcode-cn.com/problems/shortest-unsorted-continuous-subarray/description/
 *
 * algorithms
 * Easy (33.11%)
 * Likes:    167
 * Dislikes: 0
 * Total Accepted:    11.4K
 * Total Submissions: 34.5K
 * Testcase Example:  '[2,6,4,8,10,9,15]'
 *
 * 给定一个整数数组，你需要寻找一个连续的子数组，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。
 * 
 * 你找到的子数组应是最短的，请输出它的长度。
 * 
 * 示例 1:
 * 
 * 
 * 输入: [2, 6, 4, 8, 10, 9, 15]
 * 输出: 5
 * 解释: 你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。
 * 
 * 
 * 说明 :
 * 
 * 
 * 输入的数组长度范围在 [1, 10,000]。
 * 输入的数组可能包含重复元素 ，所以升序的意思是<=。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var findUnsortedSubarray = function (nums) {
//   if (nums.length === 1) return 0
//   let head = 0
//   let tail = nums.length - 1
//   let head_ = true
//   let tail_ = true
//   while ((head_ || tail_) && head <= tail) {
//     if (head_ && nums[head] <= nums[head + 1]) {
//       head++
//     } else {
//       head_ = false
//     }

//     if (tail_ && nums[tail - 1] <= nums[tail]) {
//       tail--
//     } else {
//       tail_ = false
//     }
//     if (head === tail) return 0
//   }
//   return tail - head + 1
// };


// 正常的解法
// 这题已经想到用双指针
// js 的sort 是原地算法

var findUnsortedSubarray = function (nums) {
  let sort_nums = [...nums].sort((a, b) => a - b)
  let n = nums.length - 1
  let i = 0
  while (i < n && nums[i] === sort_nums[i]) {
    i++
  }
  while (n >= 0 && nums[n] === sort_nums[n]) {
    n--
  }
  if ((n - i + 1) < 0) return 0
  return n - i + 1
}
// @lc code=end

