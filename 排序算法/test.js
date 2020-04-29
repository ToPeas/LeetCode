const test = [4, 9, 1, 9, 11, 2, 3, 99, 27, 22]


module.exports.test = test

function ListNode(val) {
  this.val = val
  this.next = null;
}



const reverseList = (head) => {
  let pre = null
  let cur = head
  while (cur) {
    let tmp = head.next
    cur.next = pre
    pre = cur
    cur = tmp
  }
  return head
}



const compose = (...fns) => {
  return fns.reduceRight((fn1, fn2) => (...args) => fn2(fn1(...args)))
}
const curry = (fn) => {
  if (typeof fn !== 'function') {
    throw Error('必须是函数')
  }
  return function curry(...args) {
    if (args.length < fn.length) {
      return function (...params) {
        return curry.apply(null, ...args, ...params)
      }
    }
    return fn.apply(null, ...args)
  }
}