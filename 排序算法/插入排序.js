const { test } = require("./test")

const insertSort = (arr) => {
  let pre
  let cur 
  for (let i = 1; i < arr.length; i++) {
    pre = i - 1
    cur = arr[i]
    while (pre >= 0 && arr[pre] > cur) {
      arr[pre + 1] = arr[pre]
      pre--
    }
    arr[pre + 1] = cur
  }
  return arr
}


// 步骤
// 1. 只需2个空间 ，一个是用来记录往前传递的指针，一个是来记录之前需要插入的数据
// 2. 然后往前找的时候，如果发现前一个值比现在这个值小，那么，就把后一个值和前一个值交换位置
// 3. 第三就是把之前存下来的值把它放在之前之前的值都比他小的后面
console.log(insertSort(test))
