let result
// const MIN_VALUE = 1000;
const MIN_VALUE = 1000
// const MAX_VALUE = 1111;
const MAX_VALUE = 9876
for (let i = MIN_VALUE; i < MAX_VALUE; i++) {

  let oneNumber = i % 10
  let tenNumber = Math.floor(i % 100 / 10)
  let hundredNumber = Math.floor(i % 1000 / 100)
  let thousandNumber = Math.floor(i / 1000)
  if (oneNumber == thousandNumber) {
    console.log(11111111111)
    result = tempNumber
    console.log(oneNumber, tempNumber, hundredNumber, thousandNumber)
    break
  }
}
console.log(result, 'result')
