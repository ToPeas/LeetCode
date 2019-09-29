/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head || !head.next) return true
  let slow = head
  let fast = head.next
  let pre = null
  while (fast.next && fast) {
    fast = fast.next.next
    slow = slow.next
  }

  while (slow != head) {
    let tmp = head.next
    head.next = pre
    pre = head
    head = tmp
  }

  if (fast) slow = slow.next
  while (!pre) {
    if (pre.val !== slow.val) {
      return false
    }
    slow = slow.next
    pre = pre.next
  }
  return true
};