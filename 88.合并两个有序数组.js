/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 *
 * https://leetcode-cn.com/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (45.36%)
 * Likes:    319
 * Dislikes: 0
 * Total Accepted:    72.7K
 * Total Submissions: 160.2K
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。
 * 
 * 说明:
 * 
 * 
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
 * 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 * 
 * 
 * 示例:
 * 
 * 输入:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 * 
 * 输出: [1,2,2,3,5,6]
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} mg
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let p = m + n - 1
  let p1 = m - 1
  let p2 = n - 1
  while ((p1 >= 0) && (p2 >= 0)) {
    if (nums2[p2] > nums1[p1]) {
      nums1[p] = nums2[p2]
      p2--
      p--
    } else {
      nums1[p] = nums1[p1]
      p1--
      p--
    }
  }
  while (p2 >= 0) {
    nums1[p2] = nums2[p2]
    p2--
  }
};
// 这个地方是考虑过多了。
// @lc code=end

