/**
 * Initialize your data structure here.
 */

function node(val) {
  this.val = val
  this.next = null
}


var MyLinkedList = function () {
  return []
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  return
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const node = new node(val)
  let prevFirst = this[0]
  return this.length ? node.next = prevFirst : this.push(node)
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const node = new node(val)
  let lastFirst = this.length > 1 ? this[this.length - 1] : null
  return lastFirst ? lastFirst.next = node : this.push(node)

};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  const node = new node(val)
  if (index < 0) {
    this.addAtHead(node)
  } else if (this.length > index) {
    this.splice(index - 1, 0, node)
    this[index - 2].next = node
    node.next = this[index]
  } else if (this.length === index) {
    this.addAtTail(node)
  }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index <= this.length && index >= 0) {
    this.splice(index, 1)
    if (index === 0) {
      this.shift()
    } else if (index === this.length) {
      this.pop()
    } else {
      this[index - 1].next = this[index]

    }
  }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */


//  这里使用了数组来解决，并且还有错