# [千位分隔数](https://leetcode-cn.com/problems/thousand-separator/description/)

## 解法一：迭代

时间复杂度：$O(n)$

```javascript
/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
  let strN = n.toString()
  if (strN.length <= 3) {
    return strN
  }
  let result = []
  let count = 0

  for (let i = strN.length - 1; i >= 0; i--) {
    if (count && count % 3 === 0) {
      result.unshift('.')
    }
    result.unshift(strN[i])
    count++
  }
  return result.join('')
}
```

### 解题思路

使用栈的先进后出原则，逆向构建字符串。