# [杨辉三角 II](https://leetcode-cn.com/problems/pascals-triangle-ii/description/)

## 解法一：暴力法

时间复杂度：$O(n^2)$

```javascript
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let result = []
  let last
  for (let i = 0; i < rowIndex + 1; i++) {
    last = result
    result = []
    result[0] = 1
    result[i] = 1
    if (i > 1) {
      for (let j = 1; j < i; j++) {
        result[j] = last[j - 1] + last[j]
      }
    }
  }
  return result
}
```



### 题解思路

跟上一题 118 类似。

这里不需要所有的层的数据，只需要上一层的数据。