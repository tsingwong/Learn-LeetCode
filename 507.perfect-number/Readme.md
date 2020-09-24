# [完美数](https://leetcode-cn.com/problems/perfect-number/description/)

## 解法一：遍历

时间复杂度：$O(n)$

```javascript
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  let result = 0
  if (num === 0) {
    return false
  }
  for (let i = 1; i <= num >> 1; i++) {
    if (num % i === 0) {
      result += i
    }
  }
  return result === num
}
```



### 解题思路

遍历到 num/2 即可。

