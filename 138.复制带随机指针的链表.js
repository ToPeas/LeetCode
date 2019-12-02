/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 *
 * https://leetcode-cn.com/problems/copy-list-with-random-pointer/description/
 *
 * algorithms
 * Medium (37.41%)
 * Likes:    155
 * Dislikes: 0
 * Total Accepted:    14.8K
 * Total Submissions: 36.9K
 * Testcase Example:  '{"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}'
 *
 * 给定一个链表，每个节点包含一个额外增加的随机指针，该指针可以指向链表中的任何节点或空节点。
 * 
 * 要求返回这个链表的深拷贝。 
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 
 * 输入：
 * 
 * {"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}
 * 
 * 解释：
 * 节点 1 的值是 1，它的下一个指针和随机指针都指向节点 2 。
 * 节点 2 的值是 2，它的下一个指针指向 null，随机指针指向它自己。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 你必须返回给定头的拷贝作为对克隆列表的引用。
 * 
 * 
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
// var copyRandomList = function (head) {
//   let pre = head
//   let pre1 = head
//   let pre2 = head
//   let node = new Node()
//   node.next = pre
//   while (pre1) {
//     let tmp = new Node(pre1.val)
//     tmp.next = pre1.next
//     pre = pre1.next
//   }

//   while (pre2) {
//     tmp.random = pre2.random
//     pre2 = pre2.next
//   }

//   return node.next

// };

var copyRandomList = function (head) {
  if (!head) return head
  let cur = head
  let map = new Map()
  let tmp = new Node()
  let node = tmp

  while (cur) {
    tmp.val = cur.val
    tmp.next = cur.next ? new Node() : null
    map.set(cur, tmp)
    tmp = tmp.next
    cur = cur.next
  }
  tmp = node
  while (head) {
    tmp.random = head.random ? map.get(head.random) : null
    head = head.next
    tmp = tmp.next
  }
  return node
};
// @lc code=end

