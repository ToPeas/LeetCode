/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */
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
var hasCycle = function (head) {
  let arr = []
  while (head) {
    arr.push(head)
    // if (arr.find(item => item === head.next)) {
    //   return true
    // }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === head.next) return true
    }
    head = head.next
  }
  return false
};

