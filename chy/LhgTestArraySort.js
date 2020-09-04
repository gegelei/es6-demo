function Person (sex, age, index) {
  this.sex = sex
  this.age = age
}

Person.prototype.toString = function () {
  return '(' + this.sex + ', ' + this.age + ')'
}

function compare(property){
  return function(a,b){
      var value1 = a[property];
      var value2 = b[property];
      return value1 - value2;
  }
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

people = new Person();
let arr3 = []
let arr4 = []
let arr6 = []
let n = 0

arr.findIndex((value, index, arr) => {
  if(value.sex === '女') {
    arr4.push(index)
  }else {
    arr6.push(new Person(value.sex, value.age))
  }
})
arr6.sort(compare('age'));

for(let k = 0; k<arr.length; k++) {
  //女
  if(arr4.indexOf(k) !== -1) {
    arr3.push(new Person(arr[k].sex, arr[k].age))
  }else{
    arr3.push(new Person(arr6[n].sex, arr6[n].age))
    n++
  }
}
console.log(arr3.toString());
