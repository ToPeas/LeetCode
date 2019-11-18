const { test } = require("./test")

const selectSort = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      if (arr[j] > arr[i]) {
        [arr[j], arr[i]] = [arr[i], arr[j]]
      }
    }
  }
  return arr
}

// 步骤
// 1.首先外层从最后面向前循环，根据length-1
// 2.然后每次都内层循环都循环到外层的位置，每次都进行对比，谁更大。就跟外层的最大位置处替换

console.log(selectSort(test))
