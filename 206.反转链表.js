/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 *
 * https://leetcode-cn.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (64.62%)
 * Likes:    600
 * Dislikes: 0
 * Total Accepted:    105.9K
 * Total Submissions: 163.3K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 反转一个单链表。
 * 
 * 示例:
 * 
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * 
 * 进阶:
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
 * 
 */

// @lc code=start
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
};// @lc code=end

