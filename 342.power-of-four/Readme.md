# [4的幂](https://leetcode-cn.com/problems/power-of-four/description/)

## 解法一：递归

时间复杂度：$O(n)$

```javascript
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
  if (!num || !Number.isInteger(num)) {
    return false
  }
  if (num === 1) {
    return true
  }
  return isPowerOfFour(num / 4)
}
```



### 解题思路

同前面的 326 的思路。

## 解法二：数学公式

时间复杂度：O(1)

```javascript
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
  return Number.isInteger(Math.log10(num) / Math.log10(4))
}
```

### 解题思路

假设： $4^x = n$

那么两边取对数得：$xlog(4) = log(n)$

所以：$x = log(n) / log(4)$

