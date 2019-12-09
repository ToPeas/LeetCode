/*
 * @lc app=leetcode.cn id=341 lang=javascript
 *
 * [341] 扁平化嵌套列表迭代器
 *
 * https://leetcode-cn.com/problems/flatten-nested-list-iterator/description/
 *
 * algorithms
 * Medium (60.39%)
 * Likes:    56
 * Dislikes: 0
 * Total Accepted:    4.4K
 * Total Submissions: 7.2K
 * Testcase Example:  '[[1,1],2,[1,1]]'
 *
 * 给定一个嵌套的整型列表。设计一个迭代器，使其能够遍历这个整型列表中的所有整数。
 * 
 * 列表中的项或者为一个整数，或者是另一个列表。
 * 
 * 示例 1:
 * 
 * 输入: [[1,1],2,[1,1]]
 * 输出: [1,1,2,1,1]
 * 解释: 通过重复调用 next 直到 hasNext 返回false，next 返回的元素的顺序应该是: [1,1,2,1,1]。
 * 
 * 示例 2:
 * 
 * 输入: [1,[4,[6]]]
 * 输出: [1,4,6]
 * 解释: 通过重复调用 next 直到 hasNext 返回false，next 返回的元素的顺序应该是: [1,4,6]。
 * 
 * 
 */

// @lc code=start
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */

var NestedIterator = function (nestedList) {
    this.lists = []
    this.resetList(nestedList);
};
NestedIterator.prototype.resetList = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].isInteger())
            this.lists.push(arr[i].getInteger())
        else
            this.resetList(arr[i].getList())
    }
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
    return this.lists.length > 0
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
    return this.lists.shift()
};


// class NestedIterator {
//   constructor(nestedList) {
//     this.nodes = flatten(nestedList)
//   }

//   hasNext() {
//     return this.nodes.length > 0
//   }
//   next() {
//     return this.nodes.shift()
//   }
// }

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
// @lc code=end

