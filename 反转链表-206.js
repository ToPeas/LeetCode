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
// var reverseList = function (head) {
//   if (!head) return null
//   let stack = []
//   while (head) {
//     stack.push(head)
//     head = head.next
//   }
//   let len = stack.length
//   for (let i = len - 1; i >= 0; i--) {
//     stack[i].next = stack[i - 1]
//     if (i == 0) {
//       stack[0].next = null
//     }
//   }
//   return stack[len - 1]
// };

var reverseList = function (head) {
  if (head == null) return null
  let pre = null
  while (head) {
    let tmp = head.next
    // head.next = null
    // head.next.next = head
    head.next = pre
    pre = head
    head = tmp
  }
  return pre
};