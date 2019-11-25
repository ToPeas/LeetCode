/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 *
 * https://leetcode-cn.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (35.72%)
 * Likes:    3347
 * Dislikes: 0
 * Total Accepted:    249.8K
 * Total Submissions: 694.2K
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 
 * 示例：
 * 
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 * 
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // if (l1.val === 0) {
  //   return l2
  // }
  // if (l2.val === 0) {
  //   return l1
  // }
  // let r1 = 0
  // let r1_sum = 1
  // let r2 = 0
  // let r2_sum = 1
  // while (l1) {
  //   r1 += l1.val
  //   r1_sum = r2_sum + "0"
  //   l1 = l1.next
  // }
  // while (l2) {
  //   r2 += l2.val
  //   r2_sum = r2_sum + "0"
  //   l2 = l2.next
  // }
  // let sum = r1 + r2
  // let node = new ListNode()


  let pre = new ListNode(0)
  let cur = pre
  let carry = 0
  while (l1 || l2) {
    let x = l1 ? l1.val : 0
    let y = l2 ? l2.val : 0
    let sum = x + y + carry

    carry = Math.floor(sum / 10)
    sum = sum % 10
    let node = new ListNode(sum)
    cur.next = node
    cur = cur.next
    if (l1) {
      l1 = l1.next
    }
    if (l2) {
      l2 = l2.next
    }
  }
  if (carry) {
    cur.next = new ListNode(carry)
  }
  return pre.next

};
// @lc code=end

