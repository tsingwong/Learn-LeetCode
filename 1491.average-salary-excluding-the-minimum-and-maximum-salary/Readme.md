# [去掉最低工资和最高工资后的工资平均值](https://leetcode-cn.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/description/)

## 解法一：排序+遍历

时间复杂度：$O(n)$

```javascript
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  salary.sort((a, b) => a - b)
  let count = 0

  for (let i = 1; i < salary.length - 1; i++) {
    count += salary[i]
  }
  return count / (salary.length - 2)
}
```

### 解题思路

先排序， 遍历第二个到倒数第一个即可。