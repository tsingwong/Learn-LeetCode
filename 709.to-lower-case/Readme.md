# [转换成小写字母](https://leetcode-cn.com/problems/to-lower-case/description/)

## 解法一：暴力法

时间复杂度：$O(n)$

```javascript
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
  let result = []
  for (let i = 0; i < str.length; i++) {
    if (str[i].codePointAt(0) > 64 && str[i].codePointAt(0) < 91) {
      result.push(String.fromCharCode(str[i].codePointAt(0) - 64 + 96))
    } else {
      result.push(str[i])
    }
  }
  return result.join('')
}
```

### 解题思路

暴力遍历，每个字符判断是否在大写字母的范畴中。