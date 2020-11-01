# [重复 N 次的元素](https://leetcode-cn.com/problems/n-repeated-element-in-size-2n-array/description/)

## 解法一：排序

时间复杂度：$O(nlogn)$

```javascript
/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function (A) {
  A.sort()
  for (let i = 1; i < A.length; i++) {
    if (A[i] === A[i - 1]) {
      return A[i]
    }
  }
}
```



### 解题思路

题目中提到一共是 2N长度，其中有 N + 1 个元素，其中有一个重复了 N次。那也就是说只要重复的数字就是我们要查找的数字。所以可以通过先排序，然后再比较相邻数字的方法。