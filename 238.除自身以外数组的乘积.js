/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 *
 * https://leetcode-cn.com/problems/product-of-array-except-self/description/
 *
 * algorithms
 * Medium (63.35%)
 * Likes:    253
 * Dislikes: 0
 * Total Accepted:    21.9K
 * Total Submissions: 33.9K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给定长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i]
 * 之外其余各元素的乘积。
 * 
 * 示例:
 * 
 * 输入: [1,2,3,4]
 * 输出: [24,12,8,6]
 * 
 * 说明: 请不要使用除法，且在 O(n) 时间复杂度内完成此题。
 * 
 * 进阶：
 * 你可以在常数空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组不被视为额外空间。）
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let sum = 1
  let res = Array(nums.length)
  
  for (let i = 0; i < nums.length; i++) {
    res[i] = sum
    sum = sum * nums[i]
  }
  sum = 1
  for (let j = nums.length - 1; j >= 0; j--) {
    res[j] = sum * res[j]
    sum = sum * nums[j]
  }
  return res
};
// @lc code=end
