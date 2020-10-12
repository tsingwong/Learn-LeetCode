# [复写零](https://leetcode-cn.com/problems/duplicate-zeros/description/)

## 解法一：两层迭代

时间复杂度：$O(n^2)$

```javascript
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      for (let j = arr.length - 1; j > i; j--) {
        arr[j] = arr[j - 1]
      }
      i++
    }
  }
}
```



### 解题思路

按照题目的意思就可以想到两层迭代。



## 解法二：