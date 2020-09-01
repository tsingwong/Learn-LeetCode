# [丑数](https://leetcode-cn.com/problems/ugly-number/description/)

## 解法一：递归

时间复杂度：$O(n)$

```javascript
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
  if (!num) {
    return false
  }
  if (num === 1) {
    return true
  }
  if (num % 2 === 0) {
    return isUgly(num / 2)
  } else if (num % 3 === 0) {
    return isUgly(num / 3)
  } else if (num % 5 === 0) {
    return isUgly(num / 5)
  }
  return false
}
```



### 解题思路

编写一个程序判断给定的数是否为丑数。丑数就是只包含质因数 `2, 3, 5` 的**正整数**。

也就是 num 可以由  `2, 3, 5`  相乘组成。

所以 num 可以被 `2, 3, 5`整除，其整除之后的结果也可以被 `2, 3, 5` 整除，所以这时候就想到了 递归。

