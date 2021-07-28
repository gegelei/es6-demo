//给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
//
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
//
//
//
// 示例:
//
// 给定 nums = [2, 7, 11, 15], target = 9
//
//因为 nums[0] + nums[1] = 2 + 7 = 9
//所以返回 [0, 1]
//
// Related Topics 数组 哈希表

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let sum = nums.length
  let arr = []
  for (let i = 0; i < sum; i++) {
    for (let j = i + 1; j < sum; j++) {
      if (nums[i] + nums[j] == target) {
        arr[0] = i
        arr[1] = j
        return arr
      }
    }
  }
  return arr
}

console.log(twoSum([2, 7, 11, 15], 9))
//leetcode submit region end(Prohibit modification and deletion)

console.log("---------------")
let arr = new Array()
arr.push(1)
arr.push(2)
arr.push(3)
arr.push(4)
arr.push(5)
console.log(arr.indexOf(5))


console.log(arr.splice(0,1))


var set = new Set()
set.add(1)
set.add(2)
set.add(3)
set.add(4)
set.add(5)
console.log(set.has(5))



var map = new Map()
map.set(1,1);
map.set(2,1);
map.set(3,1);
map.set(4,1);
map.set(5,1);
console.log(map.has(5))
