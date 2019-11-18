const { test } = require("./test")


const merge = (left, right) => {

  let res = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      res.push(left.shift())
    } else {
      res.push(right.shift())
    }
  }
  while (left.length) {
    res.push(left.shift())
  }
  while (right.length) {
    res.push(right.shift())
  }
  return res
}

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr
  }
  let mid = Math.floor(arr.length / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)
  return merge(mergeSort(left), mergeSort(right))

}

// 步骤 时间复杂度始终是nlogn

// 思路还是用递归
// 1. 首先还是分治的思维，分为左右2个数组，递归直到分成2个数的数组，然后最后2个数组在进行第一项的对比
// 谁小就排在前面。这样每次都是把最小的放在数组的最前面。

console.log(mergeSort(test))
