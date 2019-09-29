/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */


// 思路，就是求一个节点，左右子节点的最大深度


var diameterOfBinaryTree = function (root) {
  let result = 1
  maxDepth(root)
  return result - 1
  function maxDepth(root) {
    if (!root) return 0
    let L = maxDepth(root.left)
    let R = maxDepth(root.right)
    result = Math.max(result, L + R + 1)
    return Math.max(L, R) + 1
  }

};




