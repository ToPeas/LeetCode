/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (t1, t2) {
  let head = new ListNode()
  let _head = head
  while (t1 || t2) {
    if (t1.val > t2.val) {
      _head.next = t2
      t2 = t2.next
    } else {
      _head.next = t1
      t1 = t1.next
    }
    _head = _head.next
  }
  head = head.next
  return head
};