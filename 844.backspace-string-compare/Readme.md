# [比较含退格的字符串](https://leetcode-cn.com/problems/backspace-string-compare/description/)

## 解法一：栈

时间复杂度：$O(n)$

```javascript
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  let newS = []
  let newT = []
  for (let i = 0; i < S.length; i++) {
    if (S[i] === '#') {
      newS.pop()
    } else {
      newS.push(S[i])
    }
  }
  for (let i = 0; i < T.length; i++) {
    if (T[i] === '#') {
      newT.pop()
    } else {
      newT.push(T[i])
    }
  }
  return newS.join('') === newT.join('')
}
```



### 解题思路

使用栈，遇到 # 时出栈，最后把数组转换成字符串比较即可。