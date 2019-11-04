/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 *
 * https://leetcode-cn.com/problems/partition-list/description/
 *
 * algorithms
 * Medium (52.85%)
 * Likes:    125
 * Dislikes: 0
 * Total Accepted:    17.6K
 * Total Submissions: 32.9K
 * Testcase Example:  '[1,4,3,2,5,2]\n3'
 *
 * 给定一个链表和一个特定值 x，对链表进行分隔，使得所有小于 x 的节点都在大于或等于 x 的节点之前。
 * 
 * 你应当保留两个分区中每个节点的初始相对位置。
 * 
 * 示例:
 * 
 * 输入: head = 1->4->3->2->5->2, x = 3
 * 输出: 1->2->2->4->3->5
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  // let front = head
  // let flag = head
  // let back = null
  // while (head) {
  //   head = head.next
  //   back = head
  // }
  // while (front) {
  //   if (front.val >= x) {
  //     back.next = front
  //     back = back.next
  //   }
  //   front = front.next
  // }
  // beck.next = null
  // front.next = back
  // return flag

  let _less = new ListNode()
  let _more = new ListNode()
  let node = head
  let less = _less
  let more = _more

  while (node) {
    if (node.val < x) {
      less = less.next = node
    } else {
      more = more.next = node
    }
    node = node.next
  }
  less.next = _more.next
  more.next = null
  return _less.next
};

// 总结：
// 链表问题首先得把遍历的头结点保存下来
// let _head = head
// 循环的时候用node来进行循环
// @lc code=end

