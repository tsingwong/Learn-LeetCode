# [有序数组的平方](https://leetcode-cn.com/problems/squares-of-a-sorted-array/description/)

## 解法一：暴力法

时间复杂度：$O(n)$

```javascript
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  let result = []
  for (let i = 0; i < A.length; i++) {
    result.push(A[i] * A[i])
  }
  return result.sort((a, b) => a - b)
}
```

### 解题思路

迭代两次，一次计算 平方，一次排序。



## 解法二：双指针

时间复杂度：$O(n)$

```javascript
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  let result = []
  let left = 0
  let right = A.length - 1
  while (left <= right) {
    if (Math.abs(A[left]) <= A[right]) {
      result.unshift(Math.pow(A[right], 2))
      right--
    } else {
      result.unshift(Math.pow(A[left], 2))
      left++
    }
  }
  return result
}
```

### 解题思路

因为原来的数组是一个有序数组，所以很容易想到双指针解法。每次遍历中判断两个指针对应的值的绝对值大小，再决定往最终数组里推送的顺序。