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
var maxDepth = function (root) {
  if (!root) {
    return 0
  }
  if (root && !root.left && !root.right) {
    return 1
  }
  let left = 1
  let right = 1
  if (root.left) {
    left++
    maxDepth(root.left)
  }
  if (root.right) {
    right++
    maxDepth(root.right)
  }
  return left > right ? left : right
};


// 看到别人的写法

// return root == null ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;