/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 *
 * https://leetcode-cn.com/problems/remove-linked-list-elements/description/
 *
 * algorithms
 * Easy (45.77%)
 * Likes:    414
 * Dislikes: 0
 * Total Accepted:    91.3K
 * Total Submissions: 198.9K
 * Testcase Example:  '[1,2,6,3,4,5,6]\n6'
 *
 * 删除链表中等于给定值 val 的所有节点。
 *
 * 示例:
 *
 * 输入: 1->2->6->3->4->5->6, val = 6
 * 输出: 1->2->3->4->5
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
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

// 方法一，哨兵
var removeElements = function (head, val) {
  let node = new ListNode(null)
  node.next = head
  let pre = node
  let cur = head
  while (cur) {
    if (cur.val === val) {
      pre.next = cur.next
    } else {
      pre = cur
    }
    cur = cur.next
  }
  return node.next
}
// @lc code=end
