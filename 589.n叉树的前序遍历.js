/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  if (!root) return []
  let arr = []

  function order(root) {
    if (root) {
      arr.push(root.val)
      for (let i = 0; i < root.children.length; i++) {
        order(root.children[i])
      }
    }
  }
  order(root)
  return arr
};