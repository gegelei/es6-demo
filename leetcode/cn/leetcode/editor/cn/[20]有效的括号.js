//给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
//
// 有效字符串需满足：
//
//
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
//
//
// 注意空字符串可被认为是有效字符串。
//
// 示例 1:
//
// 输入: "()"
//输出: true
//
//
// 示例 2:
//
// 输入: "()[]{}"
//输出: true
//
//
// 示例 3:
//
// 输入: "(]"
//输出: false
//
//
// 示例 4:
//
// 输入: "([)]"
//输出: false
//
//
// 示例 5:
//
// 输入: "{[]}"
//输出: true
// Related Topics 栈 字符串


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let obj = {"{": "}", "[": "]", "(": ")"}

  let arr = s.split('');
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (obj.hasOwnProperty(arr[i])) {
      stack.push(arr[i]);
    } else {
      let pop = stack.pop();
      let newVar = obj[pop];
      if (newVar == arr[i]) {
        continue;
      } else {
        return false;
      }
    }
  }
  return stack.length === 0
};

console.log(isValid("{[]}"))
//leetcode submit region end(Prohibit modification and deletion)
