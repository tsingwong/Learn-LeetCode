# [第 N 个泰波那契数](https://leetcode-cn.com/problems/n-th-tribonacci-number/description/)

## 解法一：遍历

时间复杂度：$O(n)$

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  let TnFront = 0
  let Tn = 1
  let TnNext = 1
  let result = 2
  let i = 3
  if (!n) {
    return 0
  } else if (n <= 2) {
    return 1
  }
  while (i <= n) {
    result = TnFront + Tn + TnNext
    TnFront = Tn
    Tn = TnNext
    TnNext = result
    i++
  }
  return result
}
```



### 解题思路

跟之前的斐波那契数列类似，之前是 n = n-1 + n -2 ，现在是之前三个值的和了，所以需要维护四个变量，这样可以极大地节约空间复杂度。

