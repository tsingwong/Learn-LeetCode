# [排列硬币](https://leetcode-cn.com/problems/arranging-coins/description/)

## 解法一：遍历



时间复杂度：$O(n)$

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let i = 1
  if (!n) {
    return 0
  }
  while (n > 0) {
    n = n - i
    i++
    if (n < i) {
      return i - 1
    }
  }
}
```

### 解题思路

每次遍历减去当前层，判断剩余是否够下一层。

