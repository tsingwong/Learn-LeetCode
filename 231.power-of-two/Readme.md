# [2的幂](https://leetcode-cn.com/problems/power-of-two/description/)

## 解法一：递归

时间复杂度：$O(logn)$

```javascript
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n === 0) {
    return false
  }
  if (n === 1) {
    return true
  }
  if (n % 2 === 0) {
    return isPowerOfTwo(n / 2)
  } else {
    return false
  }
}
```

### 解题思路

递归的终止条件：n = 0 或 1

处理当前层逻辑：判断 n 是否能被 2 整除



## 解法二：迭代

时间复杂度：$O(logn)$

```javascript
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  let current = 0
  while (n > Math.pow(2, current)) {
    current++
  }
  return n === Math.pow(2, current)
}
```



### 解题思路

思路同上。



### 解法三：