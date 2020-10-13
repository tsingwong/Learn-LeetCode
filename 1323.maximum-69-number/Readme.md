# [6 和 9 组成的最大数字](https://leetcode-cn.com/problems/maximum-69-number/description/)

## 解法一：替换

时间复杂度：$O(n)$

```javascript
/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
  return Number(num.toString().replace(6, 9))
};
```

### 解题思路

使用字符串的 replace 方法把第一个匹配到 6 的字符串转换为 9。

