
//输入：["0:1","1:1","0:2","4:1","0:3","0:4","0:0","1:2","2:4","2:1","4:4","1:4","3:3","2:2","3:0","4:3","3:1","3:4","1:3","2:3","4:2","2:0","1:0","4:0","3:2"]
//排序后输出：["0:0","1:0","2:0","3:0","4:0","0:1","1:1","2:1","3:1","4:1","0:2","1:2","2:2","3:2","4:2","0:3","1:3","2:3","3:3","4:3","0:4","1:4","2:4","3:4","4:4"]

/**
 * @param {number[]} nums
 * @param {number[]} target
 */

let nums = ["0:1","1:1","0:2","4:1","0:3","0:4","0:0","1:2","2:4","2:1","4:4","1:4","3:3","2:2","3:0","4:3","3:1","3:4","1:3","2:3","4:2","2:0","1:0","4:0","3:2"]

function getLastNum ( val ) {
  return val.substr(2,1)
}

function getFirstNum ( val ) {
  return val.slice(0,1)
}

function getAllLastN(nums) {
  let arr = []
  for(let k = 0; k<nums.length; k++) {
    if(arr.indexOf(getLastNum(nums[k])) === -1) {
      arr.push(getLastNum(nums[k]))
    }
  }
  return arr.sort()
}

function toList (nums, target) {
  let arr1 = []
  target.forEach(function (item, key) {
    arr1[item] = []
    nums.forEach(function (v, k) {
      if (getLastNum(v) === item) {
        arr1[item].push(v)
      }
    })
  })
  return arr1
}
function quickSort (v) {
  console.log(v)

  let pivotIndex = Math.floor(v.length / 2);
  let pivot = v.slice(pivotIndex, 1);
  let left = [];
  let right = [];
  v.forEach(function (val, key) {
    if (getFirstNum(val) < getFirstNum(pivot)) {
      left.push(val);
    } else {
      right.push(val);
    }
  })
  return quickSort(left).concat([pivot], quickSort(right))
}

function getRes (nums) {
  let arr2 = []
  nums.forEach(function (v, k) {
    arr2.push(quickSort(v))
  })
  return arr2
}

let mod = getAllLastN(nums)
let mod1 = toList(nums, mod)
console.log(getRes(mod1))
