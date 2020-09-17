# [字符串相加](https://leetcode-cn.com/problems/add-strings/description/)

## 解法一：遍历

时间复杂度：$O(n)$

```javascript
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let flag = false
  let l1 = num1.length - 1
  let l2 = num2.length - 1
  let result = []
  while (l1 >= 0 || l2 >= 0 || flag) {
    let temp = (Number(num1[l1]) || 0) + (Number(num2[l2]) || 0) + Number(flag)
    if (temp > 9) {
      flag = true
      temp %= 10
    } else {
      flag = false
    }
    result.unshift(temp)
    l1--
    l2--
  }
  return result.join('')
}
```

### 解题思路

最开始写的时候我 进位的判断放在最后循环之外。

后来优化了一版。

其中 l1 l2 到了后期可能会为 负数，也就是 `num1[l1]`的结果可能会为  `undefined`，在经过 Number 方法转换为 `NaN`，NaN 是假值之一，所以可以使用 `(Number(num1[l1]) || 0)` 来完成计算。



**假值**：

- false
- 0, -0
- ""
- null
- undefined
- NaN



