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

// 给定集合进行排序。要求，女的位置不变，男的按年龄正序
// 给定初始数据→(男, 22),(女, 8),(男, 21),(男, 12),(女, 2),(女, 5),(男, 11),(女, 3),(男, 4),(男, 10)
// 要求输出数据→(男, 4),(女, 8),(男, 10),(男, 11),(女, 2),(女, 5),(男, 12),(女, 3),(男, 21),(男, 22)

function People (index) {
  this.index = index
}

People.prototype = new Person();
people = new People();
arr2 = [];
for (let i = 0; i<arr.length; i++) {
  arr2.push(new People(i, arr[i]))
}
