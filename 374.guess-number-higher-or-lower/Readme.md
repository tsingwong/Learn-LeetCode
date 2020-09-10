# [猜数字大小](https://leetcode-cn.com/problems/guess-number-higher-or-lower/description/)

## 解法一：二分法

时间复杂度：$O(logn)$

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let left = 1
  let right = n
  while (left <= right) {
    // 2126753390 1702766719 会超时？？？这个是为什么呢
    // let mid = (left + right) >> 1
    let mid = Math.floor((left + right) / 2)
    if (guess(mid) === 0) {
      return mid
    }
    if (guess(mid) === 1) {
      left = mid + 1
    }
    if (guess(mid) === -1) {
      right = mid - 1
    }
  }
  return -1
}
```

### 解题思路

标准二分法公式

其中有一个问题：

我在前面时候学到可以通过二进制右移来达到 `Math.floor((left + right) / 2)`的效果。

但是在这个题目中有一条数据： `2126753390 1702766719 ` 会导致超时。后续弄明白再来填坑。

## 解法二：暴力法

时间复杂度：$O(n)$

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  while (n) {
    if (guess(n) === 0) {
      return n
    }
    n--
  }
  return -1
}
```

### 解题思路

暴力解法。