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

var merge = function (l1, l2) {
  if (!l1) return l2
  if (!l2) return l1
  if (l1.val <= l2.val) {
      l1.next = merge(l1.next, l2)
      return l1
  } else {
      l2.next = merge(l2.next, l1)
      return l2
  }
}

var helper = function (node) {
  if (!node || !node.next) return node
  let fast = node
  let slow = node
  let compare = node
  while (fast && fast.next) {
      fast = fast.next.next
      compare = slow
      slow = slow.next
  }
  compare.next = null
  let l1 = helper(node)
  let l2 = helper(slow)
  return merge(l1, l2)
}





var sortList = function (head) {
  return helper(head)
};

