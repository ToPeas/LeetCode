/**
 * @param {number[]} nums
 * @return {number[][]}
 */


// 查看的答案
var threeSum = function (_nums) {
  let nums = _nums.sort((a,b) => a-b )
  let len = nums.length
  let res = []
  if (!nums || nums.length < 3) return res
  for (let i = 0; i < len - 2; i++) {
    if (nums[i] > 0) return res
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let L = i + 1
    let R = len - 1
    while (L < R) {
      let sum = nums[i] + nums[L] + nums[R]
      if (sum === 0) {
        res.push([nums[i], nums[L], nums[R]]);
        while (L < R && nums[L] == nums[L + 1]) L++;
        while (L < R && nums[R] == nums[R - 1]) R--;
        L++
        R--
      } else if (sum < 0) {
        L++
      } else if (sum > 0) {
        R--
      }
    }
  }
  return res
};