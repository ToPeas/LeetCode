/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 *
 * https://leetcode-cn.com/problems/jump-game/description/
 *
 * algorithms
 * Medium (36.25%)
 * Likes:    366
 * Dislikes: 0
 * Total Accepted:    42.3K
 * Total Submissions: 114.8K
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * 给定一个非负整数数组，你最初位于数组的第一个位置。
 * 
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 
 * 判断你是否能够到达最后一个位置。
 * 
 * 示例 1:
 * 
 * 输入: [2,3,1,1,4]
 * 输出: true
 * 解释: 我们可以先跳 1 步，从位置 0 到达 位置 1, 然后再从位置 1 跳 3 步到达最后一个位置。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [3,2,1,0,4]
 * 输出: false
 * 解释: 无论怎样，你总会到达索引为 3 的位置。但该位置的最大跳跃长度是 0 ， 所以你永远不可能到达最后一个位置。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var canJump = function (nums) {
//   let dp = {}
//   dp[nums] = 2
//   dp[0] = 0
//   for (let i = nums.length - 2; i >= 0; i--) {
//     for (let j = i; j >= 0; j--) {
//       if (j + nums[j] > nums.length - 1 || nums[j + nums[j]] === 2) {
//         nums[j] = 2
//       } else {
//         nums[j] = 1
//       }
//     }
//   }
//   return dp[1] === 2
// };

var canJump = function (nums) {
    let dp = {}
    for (let k = 0; k < nums.length - 1; k++) {
        dp[k] = 0
    }
    dp[nums.length - 1] = 2
    for (let i = nums.length - 2; i >= 0; i--) {
        let min = Math.min(i + nums[i], nums.length - 1)
        for (let j = i + 1; j <= min; j++) {
            if (dp[j] === 2) {
                dp[i] = 2
                break
            }
        }
    }
    return dp[0] === 2
};
// @lc code=end

