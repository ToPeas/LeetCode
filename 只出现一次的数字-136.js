/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function (nums) {
  if (nums.length === 1) return nums[0]
  if (nums.length === 0) return null
  nums = nums.sort()
  if (nums[0] !== nums[1]) {
    return nums[0]
  }
  if (nums[nums.length - 1] !== nums[nums.length - 2]) {
    return nums[nums.length - 1]
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[i + 1] && nums[i] != nums[i - 1]) {
      //   console.log(nums[i])
      return nums[i]
    }
  }
};


// 生成随机的数组 

let randomArray = (length) => {
  let i = 0
  let index = 0
  let temp = null
  let arr = [length]
  length = typeof (length) === 'undefined' ? 9 : length
  for (i = 1; i <= length; i++) {
    arr[i - 1] = i
  }
  for (i = 1; i <= length; i++) {
    index = window.parseInt(Math.random() * (length - i)) + i
    if (index != i) {
      temp = arr[i - 1]
      arr[i - 1] = arr[index - 1]
      arr[index - 1] = temp
    }
  }
  return arr
}



// 插入排序

let charu = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = i
    while (j) {
      if (arr[j] < arr[j - 1]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
      }
      j--
    }
  }
  return arr
}

// charu([20, 14, 2, 111, 77, 9, 12, 100, 5])


// 快速排序

var quick = function (arr) {
  let p = arr[0]
  let left = []
  let right = []
  if (arr.length < 2) return arr
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= p) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }
  return quick(left).concat(p, quick(right))
}

// console.log(quick([20, 14, 2, 111, 77, 9, 12, 100, 5]))


// 冒泡算法

var bubble = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

let r = randomArray(20)
console.log(r)

console.log(bubble(r))
