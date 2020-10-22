# [整数的各位积和之差](https://leetcode-cn.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/description/)

## 解法一：遍历

时间复杂度：$O(n)$

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  let addCount = 0
  let multiCount = 1
  while (n > 0) {
    let temp = n % 10
    addCount += temp
    multiCount *= temp
    n = Math.floor(n / 10)
  }
  return multiCount - addCount
}
```

### 解题思路

逻辑题，按照题意，遍历每一位即可得到结果。