# [Excel表列名称](https://leetcode-cn.com/problems/excel-sheet-column-title/description/)

## 解法一：暴力解法

时间复杂度：$O()$

```javascript
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  let CodePointZero = 64
  let result = []
  while (n > 0) {
    let i = n % 26
    n = Math.floor(n / 26)
    if (i) {
      result.unshift(i + CodePointZero)
    } else {
      result.unshift(26 + CodePointZero)
      n--
    }
  }
  return String.fromCodePoint(...result)
}
```



### 解题思路

n>0的情况下取余数为0可以证明正好整除，添一个Z正好占了高位一个26（没有高位也不要紧，下次循环自然就不满足条件了）