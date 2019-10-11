/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 *
 * https://leetcode-cn.com/problems/single-number/description/
 *
 * algorithms
 * Easy (63.53%)
 * Likes:    871
 * Dislikes: 0
 * Total Accepted:    108.8K
 * Total Submissions: 170.7K
 * Testcase Example:  '[2,2,1]'
 *
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 
 * 说明：
 * 
 * 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 * 
 * 示例 1:
 * 
 * 输入: [2,2,1]
 * 输出: 1
 * 
 * 
 * 示例 2:
 * 
 * 输入: [4,1,2,1,2]
 * 输出: 4
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 使用同一个数组的形式
var singleNumber = function (_nums) {
  _nums = _nums.sort()
  for (let i = 0; i < _nums.length;i++) {
    if (_nums[i - 1] !== _nums[i] && _nums[i] !== _nums[i + 1]) {
      return _nums[i]
    }
  }
};

// 使用map的形式,但是这个时候好像也是使用额外了空间
var singleNumber = function (_nums) {
  // _nums = _nums.sort()
  // for (let i = 0; i < _nums.length;i++) {
  //   if (_nums[i - 1] !== _nums[i] && _nums[i] !== _nums[i + 1]) {
  //     return _nums[i]
  //   }
  // }
};
// @lc code=end

