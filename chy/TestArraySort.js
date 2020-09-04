function Person (sex, age) {
  this.sex = sex
  this.age = age
}

Person.prototype.toString = function () {
  return '(' + this.sex + ', ' + this.age + ')'
}

let arr = []
arr.push(new Person('男', 22))
arr.push(new Person('女', 8))
arr.push(new Person('男', 21))
arr.push(new Person('男', 12))
arr.push(new Person('女', 2))
arr.push(new Person('女', 5))
arr.push(new Person('男', 11))
arr.push(new Person('女', 3))
arr.push(new Person('男', 4))
arr.push(new Person('男', 10))
console.log(arr.toString())

// 添加标记处理
for (const i in arr) {
  arr[i].seq = i
}

let seqArr = arr.filter(p => p.sex == '男')

let fixArr = arr.filter(p => p.sex == '女')

seqArr.sort((p1, p2) => p1.age - p2.age)

for (const i in fixArr) {
  seqArr.splice(fixArr[i].seq, 0, fixArr[i])
}
console.log(seqArr.toString())





// map处理
// let map = new Map()
//
// let tempArr = arr.filter((item, index) => {
//   if (item.sex === '女') {
//     map.set(index, item)
//   }
//   return item.sex === '男'
// })
//
// tempArr.sort((a, b) => a.age - b.age)
//
// map.forEach(function (value, key) {
//   tempArr.splice(key, 0, value)
// })
// console.log(tempArr.toString())
