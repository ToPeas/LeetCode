const { test } = require("./test")


let len

const buildMaxHeap = arr => {
  len = arr.length
  for (let i = Math.floor(len / 2); i >= 0; i--) {
    headify(arr, i)
    console.log(arr)
    debugger
  }
}


const headify = (arr, i) => {
  let left = 2 * i + 1
  let right = 2 * i + 2
  let _i = i

  if (left < len && arr[left] > arr[_i]) {
    _i = left
  }

  if (right < len && arr[right] > arr[_i]) {
    _i = right
  }

  if (_i !== i) {
    [arr[i], arr[_i]] = [arr[_i], arr[i]]
    headify(arr, _i)
  }

}

const heapSort = (arr) => {
  buildMaxHeap(arr)
  for (let j = arr.length - 1; j > 0; j--) {
    [arr[0], arr[j]] = [arr[j], arr[0]]
    len--
    headify(arr, 0)
  }
  return arr
}

// 步骤 1.首先时间复杂度为nlogn
// 1.首先是要建立有序堆，父节点要比左右个节点的值都要大
// left 为 父节点 * 2 + 1
// right 为 父节点 * 2 + 2
// 如此返回的构造出来堆
// 再做一次循环把最大值去掉，把最后一个值给放在根节点上面，重新构造堆



console.log(heapSort(test))
