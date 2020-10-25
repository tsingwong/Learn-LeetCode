# [数组中两元素的最大乘积](https://leetcode-cn.com/problems/maximum-product-of-two-elements-in-an-array/description/)

## 解法一：遍历

时间复杂度：$O(n^2)$

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      max = Math.max(max, (nums[i] - 1) * (nums[j] - 1))
    }
  }
  return max
}
```



### 解题思路

两层遍历。

