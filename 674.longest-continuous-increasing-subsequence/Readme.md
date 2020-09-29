# [最长连续递增序列](https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/description/)

## 解法一：暴力法

时间复杂度：$O(n)$

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let max = 0
  if (nums.length < 2) {
    return nums.length
  }
  let count = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1] > 0) {
      count++
    } else {
      max = Math.max(count, max)
      count = 1
    }
  }
  max = Math.max(count, max)
  return max
}
```

### 解题思路

暴力法解题，最后注意可能存在 [1,2,3,4] 这种递增的数组，所以需要最后再比较一次 count 和max。



