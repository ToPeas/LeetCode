/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 *
 * https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (37.72%)
 * Likes:    252
 * Dislikes: 0
 * Total Accepted:    45.7K
 * Total Submissions: 119.6K
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 * 
 * 你的算法时间复杂度必须是 O(log n) 级别。
 * 
 * 如果数组中不存在目标值，返回 [-1, -1]。
 * 
 * 示例 1:
 * 
 * 输入: nums = [5,7,7,8,8,10], target = 8
 * 输出: [3,4]
 * 
 * 示例 2:
 * 
 * 输入: nums = [5,7,7,8,8,10], target = 6
 * 输出: [-1,-1]
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let start = 0
  let end = nums.length - 1
  let i
  let j
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (target > nums[mid]) {
      start = mid + 1
    } else if (target < nums[mid]) {
      end = mid - 1
    } else {
      let sum = nums[mid]
      i = mid
      j = mid
      while (nums[i] === sum) {
        i--
      }
      while (nums[j] === sum) {
        j++
      }
      return [i + 1, j - 1]
    }
  }
  return [-1, -1]
};
// @lc code=end

