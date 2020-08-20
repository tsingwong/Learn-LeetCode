# [171. Excel表列序号](https://leetcode-cn.com/problems/excel-sheet-column-number/)

## 解法一：暴力法

时间复杂度：$O(n)$

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  if (!s.length) {
    return null
  }
  let result = 0

  for (let i = 0; i < s.length; i++) {
    let num = s.codePointAt(i) - 65 + 1
    result = result * 26 + num
  }
  return result
}
```



### 解题思路

字符串从最左侧字符开始遍历，有点类似 26进制。每遍历一位，需要把前面的数字乘以 26。