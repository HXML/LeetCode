/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let left = 0,
      right = nums.length - 1,
      index = 0
    while (left <= right) {
      index = parseInt((right - left) / 2, 10) + left
      if (nums[index] === target) return index
      if (left === right) return nums[index] > target ? index : index + 1
      if (target > nums[index]) left = index + 1
      else right = index
    }
  }
  