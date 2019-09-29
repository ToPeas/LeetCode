/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// var removeNthFromEnd = function (head, n) {
//   let node = null
//   while (head) {
//     let tmp = head.next

//     head.next = node

//     node = head

//     head = tmp

//   }
//   let _node = node
//   while (n > 0 && _node.next) {
//     _node = _node.next
//     n--
//     if (n == 0) {
//       node 
//       return
//     }
//   }

// };

var removeNthFromEnd = function (head, n) {
  let nob = new ListNode(0)
  nob.next = head
  let first = nob
  let second = nob
  for (let i = 0; i < n + 1; i++) {
    first = first.next
  }
  while (first) {
    first = first.next
    second = second.next
  }
  second.next = second.next.next
  return nob.next
}
