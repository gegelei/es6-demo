let result
// const MIN_VALUE = 1000;
const MIN_VALUE = 1111
// const MAX_VALUE = 1111;
const MAX_VALUE = 9999
for (let i = MIN_VALUE; i < MAX_VALUE; i++) {
  let tempNumber = i
  let oneNumber = tempNumber % 10
  // console.log(oneNumber, 'oneNumber')
  tempNumber = (tempNumber - oneNumber) / 10
  let tenNumber = tempNumber % 10
  // console.log(tenNumber, 'tenNumber')
  tempNumber = (tempNumber - tenNumber) / 10
  let hundredNumber = tempNumber % 10
  // console.log(hundredNumber, 'hundredNumber')
  tempNumber = (tempNumber - hundredNumber) / 10
  let thousandNumber = tempNumber % 10
  // console.log(thousandNumber, 'thousandNumber')
  // console.log(oneNumber * 1000 + tenNumber * 100 + hundredNumber * 10 + thousandNumber, 'oneNumber * 1000 + tenNumber * 100 + hundredNumber * 10 + thousandNumber')
  if (tempNumber * 9 === oneNumber * 1000 + tenNumber * 100 + hundredNumber * 10 + thousandNumber) {
    console.log(11111111111)
    result = tempNumber
    console.log(oneNumber, tempNumber, hundredNumber, thousandNumber)
    break
  }
}
console.log(result, 'result')
