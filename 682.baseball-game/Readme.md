# [棒球比赛](https://leetcode-cn.com/problems/baseball-game/description/)

## 解法一：使用栈

时间复杂度：$O(n)$

```javascript
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  let stack = []
  for (let i = 0; i < ops.length; i++) {
    if (!Number.isNaN(Number(ops[i]))) {
      stack.push(Number(ops[i]))
    } else if (ops[i] === '+') {
      stack.push(stack[stack.length - 1] + stack[stack.length - 2])
    } else if (ops[i] === 'D') {
      stack.push(stack[stack.length - 1] * 2)
    } else if (ops[i] === 'C') {
      stack.pop()
    }
  }
  return stack.reduce((prev, curr) => prev + curr, 0)
}
```



### 解题思路

因为存在 C 会影响之前的数据，所以需要借用栈来实现。

