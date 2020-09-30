# [二分查找](https://leetcode-cn.com/problems/binary-search/description/)

## 解法一：二分查找

时间复杂度：$O(logn)$

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    mid = (left + right) >> 1
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return -1
}
```

### 解题思路

标准的二分查找的写法。