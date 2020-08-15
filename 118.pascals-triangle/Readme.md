# [杨辉三角](https://leetcode-cn.com/problems/pascals-triangle/description/)

## 解法一：暴力法



时间复杂度：$O(n^2)$

```javascript
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let result = []
  for (let i = 0; i < numRows; i++) {
    let temp = []
    temp[0] = 1
    temp[i] = 1
    if (i > 1) {
      for (let j = 1; j < i; j++) {
        temp[j] = result[i - 1][j - 1] + result[i - 1][j]
      }
    }
    result.push(temp)
  }
  return result
}
```

### 解题思路



![img](Readme.assets/PascalTriangleAnimated2.gif)

有几个特点

- 可以看到每一层的第一个和第i个都是1
- 每一层的第n个是上一层的第 n-1个 + 上一层第 n 个的结果。