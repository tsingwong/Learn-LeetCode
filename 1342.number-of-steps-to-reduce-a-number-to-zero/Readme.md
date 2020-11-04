# [将数字变成 0 的操作次数](https://leetcode-cn.com/problems/number-of-steps-to-reduce-a-number-to-zero/description/)

## 解法一：递归

时间复杂度：$O(logn)$

```javascript
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  return !num ? 0 : numberOfSteps(num % 2 === 0 ? num / 2 : num - 1) + 1
}
```



### 解题思路

这道题可以使用 递归或者 遍历来实现。这里回顾下递归的通用公式。

递归三要素：

1. 返回结果：最后的操作次数
2. 调用单元做了什么：除以二或者是减一
3. 终止条件：num 为 0

这样理下来递归的写法就显而易见了。

