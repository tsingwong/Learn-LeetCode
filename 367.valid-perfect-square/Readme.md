# [有效的完全平方数](https://leetcode-cn.com/problems/valid-perfect-square/description/)

## 解法一：暴力法

时间复杂度：$O(\sqrt n)$

```javascript
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let count = 0
  let i = 1
  while (count < num) {
    count = i * i
    i++
  }
  return count === num
}
```

### 解题思路

暴力法



## 解法二：二分法



```javascript
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num === 1) {
    return true
  }
  let left = 1
  let right = num
  while (left <= right) {
    let mid = (left + right) >> 1
    let temp = mid * mid
    if (temp === num) {
      return true
    } else if (temp < num) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return false
}
```

### 解题思路

标准二分法

