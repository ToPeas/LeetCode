/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 *
 * https://leetcode-cn.com/problems/implement-queue-using-stacks/description/
 *
 * algorithms
 * Easy (64.35%)
 * Likes:    203
 * Dislikes: 0
 * Total Accepted:    55K
 * Total Submissions: 85.2K
 * Testcase Example:  '["MyQueue","push","push","peek","pop","empty"]\n[[],[1],[2],[],[],[]]'
 *
 * 使用栈实现队列的下列操作：
 * 
 * 
 * push(x) -- 将一个元素放入队列的尾部。
 * pop() -- 从队列首部移除元素。
 * peek() -- 返回队列首部的元素。
 * empty() -- 返回队列是否为空。
 * 
 * 
 * 
 * 
 * 示例:
 * 
 * MyQueue queue = new MyQueue();
 * 
 * queue.push(1);
 * queue.push(2);  
 * queue.peek();  // 返回 1
 * queue.pop();   // 返回 1
 * queue.empty(); // 返回 false
 * 
 * 
 * 
 * 说明:
 * 
 * 
 * 你只能使用标准的栈操作 -- 也就是只有 push to top, peek/pop from top, size, 和 is empty
 * 操作是合法的。
 * 你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
 * 假设所有操作都是有效的 （例如，一个空的队列不会调用 pop 或者 peek 操作）。
 * 
 * 
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
class MyQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
  push(x) {
    this.stack1.push(x);
  }
  pop() {
    while (this.stack1.length) {    // 把stack1的元素全部弹出并推入到stack2
      this.stack2.push(this.stack1.pop());
    }
    const item = this.stack2.pop(); // 弹出stack2的栈顶，即“队列头”，缓存给item
    if (this.stack2.length) {       // 如果stac2还有元素，全部弹出并推入stack1
      while (this.stack2.length) {
        this.stack1.push(this.stack2.pop());
      }
    }
    return item;
  }
  peek() {
    while (this.stack1.length) {   // 把stack1的元素全部弹出并推入到stack2
      this.stack2.push(this.stack1.pop());
    }
    const item = this.stack2[this.stack2.length - 1]; // 获取stack2的栈顶，即“队列头”，缓存给item
    while (this.stack2.length) {   // stac2的元素全部弹出，推入stack1
      this.stack1.push(this.stack2.pop());
    }
    return item;
  }
  empty() {
    return this.stack1.length == 0;
  }
}


/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

