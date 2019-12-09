/*
 * @lc app=leetcode.cn id=334 lang=javascript
 *
 * [334] 递增的三元子序列
 *
 * https://leetcode-cn.com/problems/increasing-triplet-subsequence/description/
 *
 * algorithms
 * Medium (35.48%)
 * Likes:    86
 * Dislikes: 0
 * Total Accepted:    11.2K
 * Total Submissions: 31.3K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 给定一个未排序的数组，判断这个数组中是否存在长度为 3 的递增子序列。
 * 
 * 数学表达式如下:
 * 
 * 如果存在这样的 i, j, k,  且满足 0 ≤ i < j < k ≤ n-1，
 * 使得 arr[i] < arr[j] < arr[k] ，返回 true ; 否则返回 false 。
 * 
 * 说明: 要求算法的时间复杂度为 O(n)，空间复杂度为 O(1) 。
 * 
 * 示例 1:
 * 
 * 输入: [1,2,3,4,5]
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: [5,4,3,2,1]
 * 输出: false
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  // if (nums.length < 3) return false
  // let min = nums[0]
  // let min_i = 0
  // let max_i = 0
  // let max = nums[0]
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] >= max) {
  //     max = nums[i]
  //     max_i = i
  //   }
  //   if (nums[i] < min) {
  //     min = nums[i]
  //     min_i = i
  //   }
  // }
  // console.log(min)
  // console.log(max)
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] > min && nums[i] < max && i > min_i && i < max_i) {
  //     return true
  //   }
  // }
  // return false
  let a = Number.MAX_SAFE_INTEGER
  let b = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= a) {
      a = nums[i]
    } else if (nums[i] <= b) {
      b = nums[i]
    } else {
      return true
    }
  }
  return false
};
// @lc code=end

