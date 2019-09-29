/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  if (!root) return
  let head = root
  let arr = []
  function order(root) {
    if (root) {
      arr.push(root)
      order(root.left)
      order(root.right)
    }
  }
  order(root)
};