# [平方数之和](https://leetcode-cn.com/problems/sum-of-square-numbers/description/)

## 解法一：双指针夹壁

时间复杂度：$O(n)$

```javascript
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  let i = 0
  let j = Math.floor(Math.sqrt(c))
  while (i <= j) {
    let s = i * i + j * j
    if (s === c) {
      return true
    }
    s > c ? j-- : i++
  }
  return false
}
```



### 解题思路



最初想使用暴力法解题，两层遍历，时间复杂度是 $O(n^2)$，部分栗子会超时。

所以使用双指针夹壁法。