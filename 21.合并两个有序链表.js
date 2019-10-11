/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (57.42%)
 * Likes:    656
 * Dislikes: 0
 * Total Accepted:    121.4K
 * Total Submissions: 210.8K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 示例：
 * 
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
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
// @lc code=end

