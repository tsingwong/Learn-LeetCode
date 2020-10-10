# [翻转图像](https://leetcode-cn.com/problems/flipping-an-image/description/)

## 解法一：暴力遍历

时间复杂度：$o(n^2)$

```javascript
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
  for (let i = 0; i < A.length; i++) {
    let left = 0
    let right = A[i].length - 1
    while (left <= right) {
      ;[A[i][left], A[i][right]] = [Number(!A[i][right]), Number(!A[i][left])]
      left++
      right--
    }
  }
  return A
}
```

### 解题思路

思路很简单，暴力遍历。