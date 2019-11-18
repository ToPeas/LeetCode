const { test } = require("./test")


let BubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}




// 操作顺序
// 1.首先比较相邻的元素，如果前面的元素比后面的元素大，那么就交换他们的位置
// 2.所以，每次外层循环就会找到一个最大值，内层循环的终止条件，就少了一个元素



console.log(BubbleSort(test))