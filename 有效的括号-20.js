/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (!s) return true
  let arr = s.split('')
  if (arr % 2 === 1) return false
  let len = _arr.length
  let stack = []

  for (let i = 0; i < len - 1; i++) {
    if (arr[i] === '(' || arr[i] === '[' || arr[i] === '{') {
      stack.push(_arr[i])
    } else {
      if ((arr[i] === ')' && stack.pop() !== '(') || (arr[i] === ']' && stack.pop() !== '[') || (arr[i] === '{' && stack.pop() !== '}')) {
        return false
      }
    }
  }
  return true
};