/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 *
 * https://leetcode-cn.com/problems/min-stack/description/
 *
 * algorithms
 * Easy (50.11%)
 * Likes:    287
 * Dislikes: 0
 * Total Accepted:    46.2K
 * Total Submissions: 92.2K
 * Testcase Example:  '["MinStack","push","push","push","getMin","pop","top","getMin"]\n' +
  '[[],[-2],[0],[-3],[],[],[],[]]'
 *
 * 设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。
 * 
 * 
 * push(x) -- 将元素 x 推入栈中。
 * pop() -- 删除栈顶的元素。
 * top() -- 获取栈顶元素。
 * getMin() -- 检索栈中的最小元素。
 * 
 * 
 * 示例:
 * 
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin();   --> 返回 -3.
 * minStack.pop();
 * minStack.top();      --> 返回 0.
 * minStack.getMin();   --> 返回 -2.
 * 
 * 
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = []
  this.min = Number.MAX_VALUE
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  if (this.min >= x) this.min = x
  this.stack.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let tmp = this.stack.pop()
  this.min = Number.MAX_VALUE
  // console.log(this.stack)
  // console.log(this.min)
  for (let i = 0; i < this.stack.length; i++) {
    if (this.min > this.stack[i]) {
      this.min = this.stack[i]
    }
  }
  // console.log(this.stack)
  // console.log(this.min)

  return tmp
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min
};


// @lc code=end

