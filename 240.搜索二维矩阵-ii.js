/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 *
 * https://leetcode-cn.com/problems/search-a-2d-matrix-ii/description/
 *
 * algorithms
 * Medium (37.68%)
 * Likes:    177
 * Dislikes: 0
 * Total Accepted:    32.6K
 * Total Submissions: 86.1K
 * Testcase Example:  '[[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]\n' +
  '5'
 *
 * 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target。该矩阵具有以下特性：
 * 
 * 
 * 每行的元素从左到右升序排列。
 * 每列的元素从上到下升序排列。
 * 
 * 
 * 示例:
 * 
 * 现有矩阵 matrix 如下：
 * 
 * [
 * ⁠ [1,   4,  7, 11, 15],
 * ⁠ [2,   5,  8, 12, 19],
 * ⁠ [3,   6,  9, 16, 22],
 * ⁠ [10, 13, 14, 17, 24],
 * ⁠ [18, 21, 23, 26, 30]
 * ]
 * 
 * 
 * 给定 target = 5，返回 true。
 * 
 * 给定 target = 20，返回 false。
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // for (let i = 0; i < matrix.length; i++) {
  //   for (let j = 0; j < matrix[i].length; j++) {
  //     let arr = matrix[i]
  //     let left = 0
  //     let right = arr.length - 1
  //     while (left <= right) {
  //       let mid = Math.floor((left + right) / 2)
  //       if (target > arr[mid]) {
  //         left = mid + 1
  //       } else if (target < arr[mid]) {
  //         right = mid - 1
  //       } else if (target === arr[mid]) {
  //         return true
  //       }
  //     }
  //   }
  // }
  // return false
  // let res = []
  // for (let i = 0; i < matrix.length; i++) {
  //   res.concat(matrix[i])
  // }
  // res.sort()
  // let left = 0
  // let right = res.length - 1
  // while (left <= right) {
  //   let mid = Math.floor((left + right) / 2)
  //   if (target > res[mid]) {
  //     left = mid + 1
  //   } else if (target < res[mid]) {
  //     right = mid - 1
  //   } else if (target === res[mid]) {
  //     return true
  //   }
  // }
  // return false
  if (!matrix.length) return 0 
  let left = 0
  let up = matrix.length - 1
  let row = matrix[0].length
  while (left < row && up >= 0) {
    let sum = matrix[up][left]
    if (target === sum) {
      return true
    } else if (target > sum) {
      left++
    } else if (target < sum) {
      up--
    }
  }
  return false

};
// @lc code=end

