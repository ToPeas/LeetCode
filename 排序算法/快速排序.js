const { test } = require("./test")

const quickSort = (arr) => {
  // console.log(arr)
  if (arr.length <= 1) {
    return arr
  }
  let pivot = arr[0]
  let left = []
  let right = []
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}


console.log(quickSort(test))
