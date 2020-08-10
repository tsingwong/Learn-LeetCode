# [x 的平方根](https://leetcode-cn.com/problems/sqrtx/description/)

## 解法一：暴力解法

时间复杂度： $O(n)$

```javascript
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let current = 1
  while (current * current <= x) {
    current++
  }
  return current - 1
}
```

### 解题思路

返回结果从 1 开始，当满足条件时返回结果就 + 1。

退出条件是current * current > x， 这时候返回的结果需要 -1。



## 解法二：二分查找

时间复杂度：$O(n)$

```javascript
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0 || x === 1) return x
  let left = 0
  let right = x
  let mid
  while (left < right) {
    mid = Math.floor((left + right) / 2)
    let val = mid * mid
    if (val === x) {
      return mid
    }
    if (val < x && (mid + 1) * (mid + 1) > x) {
      return mid
    }
    if (val > x) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return left
}
```



### 解题思路

使用二分查找

需要注意一点是，在二分法本身的判断之前我们需要增加两个判断：

1. 当前值是否就是要查找的值，是的话直接返回结果
2. 判断mid下一位的平方是否会比给定的阿平方数大，也就是是否满足平方根的整数部分。



