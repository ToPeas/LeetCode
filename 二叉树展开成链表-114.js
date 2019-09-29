/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root) return null
  let head = null

  function order(node) {
    if (node) {
      let right = node.right
      head.right = node
      order(node.left)
      order(right)
    }
  }
  order(root)
  return head
};