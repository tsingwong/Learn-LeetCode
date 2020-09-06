# [3的幂](https://leetcode-cn.com/problems/power-of-three/description/)

## 解法一：递归

时间复杂度：$O(n)$

```javascript
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (!n || !Number.isInteger(n)) {
    return false
  }
  if (n === 1) {
    return true
  }
  return isPowerOfThree(n / 3)
}
```

### 解题思路

最开始，我写到时候没有加上 `Number.isInteger(n)` 的判定条件，这时候我被 97% 的用户超越了。

后来我想到如果第一时间无法被整除就可以退出递归了。于是我超越了 97% 的用户，哈哈哈哈。