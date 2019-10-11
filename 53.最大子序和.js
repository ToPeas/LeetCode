/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 *
 * https://leetcode-cn.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (47.53%)
 * Likes:    1259
 * Dislikes: 0
 * Total Accepted:    102.1K
 * Total Submissions: 214.7K
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 
 * 示例:
 * 
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 * 
 * 
 * 进阶:
 * 
 * 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let arr = []
  let len = nums.length
  let max = nums[0]

  if (!len) {
    return null
  } else {
    for (let i = 0; i < len; i++) {
      if (nums[i] + arr[i - 1] > nums[i]) {
        arr[i] = nums[i] + arr[i - 1]
      } else {
        arr[i] = nums[i]
      }
      if (max < arr[i]) {
        max = arr[i]
      }
    }
  }
  // console.log(arr)
  return max
};



// var maxSubArray = function (nums) {
//   let sum = 0
//   let ans = nums[0]
//   let len = nums.length
//   if (len === 0) {
//     return 0
//   } else if (len === 1) {
//     return nums[0]
//   } else {
//     for (let i = 0; i < len; i++) {
//       if (sum > 0) {
//         sum = sum + nums[i]
//       } else {
//         sum = nums[i]
//       }
//       ans = Math.max(sum, ans)
//     }
//   }
//   return ans
// };
// @lc code=end

