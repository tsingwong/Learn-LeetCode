# [一维数组的动态和](https://leetcode-cn.com/problems/running-sum-of-1d-array/description/)

## 解法一：迭代

时间复杂度：$O(n)$

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1]
  }
  return nums
}
```



### 解题思路

顺着题目逻辑解题即可。