/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
 *
 * https://leetcode-cn.com/problems/path-sum-iii/description/
 *
 * algorithms
 * Easy (52.17%)
 * Likes:    201
 * Dislikes: 0
 * Total Accepted:    11.8K
 * Total Submissions: 22.7K
 * Testcase Example:  '[10,5,-3,3,2,null,11,3,-2,null,1]\n8'
 *
 * 给定一个二叉树，它的每个结点都存放着一个整数值。
 * 
 * 找出路径和等于给定数值的路径总数。
 * 
 * 路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。
 * 
 * 二叉树不超过1000个节点，且节点数值范围是 [-1000000,1000000] 的整数。
 * 
 * 示例：
 * 
 * root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8
 * 
 * ⁠     10
 * ⁠    /  \
 * ⁠   5   -3
 * ⁠  / \    \
 * ⁠ 3   2   11
 * ⁠/ \   \
 * 3  -2   1
 * 
 * 返回 3。和等于 8 的路径有:
 * 
 * 1.  5 -> 3
 * 2.  5 -> 2 -> 1
 * 3.  -3 -> 11
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */


//  这题没有思路
// var pathSum = function (root, sum) {
//   let num = 0;
//   function order(root) {
//     if (!root) {
//       return null
//     } else {
//       let left = order(root.left)
//       let right = order(root.right)
//       if (root.val + left + right === sum) {
//         num++
//       }
//     }
//   }
//   order(root)
//   return num
// };



// 看了下别人最龙鸣的写法

var pathSum = function (root, sum) {
  if (!root) return 0
  function order(root, sum) {
    if (!root) return 0
    sum = sum - root.val
    return (sum === 0 ? 1 : 0) + order(root.left, sum) + order(root.right, sum)
  }
  return order(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum)
};
// @lc code=end

