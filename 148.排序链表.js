/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head) return null
  let _head = head
  function order(node) {
    let nob = node
    let left = head
    let right = head
    while (node) {
      if (nob.val > node.val) {
        left.next = node
      } else {
        right.next = node
      }
      node = node.next
    }
    order(left)
    order(right)
  }
  order(head)
  return _head
};