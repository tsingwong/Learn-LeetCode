# [一年中的第几天](https://leetcode-cn.com/problems/day-of-the-year/description/)

## 解法一：逻辑

时间复杂度：$O(n)$

```javascript
/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
  let arr = date.split('-')
  let largeMonth = [1, 3, 5, 7, 8, 10, 12]
  let count = 0
  for (let i = 1; i < Number(arr[1]); i++) {
    if (largeMonth.indexOf(i) > -1) {
      count += 31
    } else if (i === 2) {
      let n = Number(arr[0])
      count += (n % 4 == 0 && n % 100 != 0) || n % 400 == 0 ? 29 : 28
    } else {
      count += 30
    }
  }
  count += Number(arr[2])
  return count
}
```



### 解题思路

这里我把大月单独拎出来处理，然后还有一个闰年的计算。

闰年的定义是**四年一闰，百年不闰，四百年再闰。**

