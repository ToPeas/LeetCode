/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
  let node = {}
  node.val = t1.val + t2.val
  node.left = mergeTrees(t1.left, t2.right)
  node.right = mergeTrees(t1.left, t2.right)
  return node
};