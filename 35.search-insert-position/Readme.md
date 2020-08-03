# [搜索插入位置](https://leetcode-cn.com/problems/search-insert-position/description/)

## 解法一：暴力法

时间复杂度： $O(n)$

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (nums[0] >= target) {
    return 0
  }
  if (nums[nums.length - 1] < target) {
    return nums.length
  }
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] < target && nums[i] >= target) {
      return i
    }
  }
  return i
}
```



### 解题思路



## 解法二：二分查找

时间复杂度：$O(logn)$

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  let mid
  let result = nums.length
  while (left <= right) {
    mid = ~~((left + right) / 2)
    if (nums[mid] === target) {
      result = mid
      break
    }
    if (nums[mid] > target) {
      result = mid
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return result
}
```



### 解题思路

这个题目实际上是 在排序数组中寻找一个目标值的同时，如果数组中不存在时需要返回按顺序插入的位置。

所以这个插入位置是 $pos$ 的成立条件为：

$nums[pos-1]<target ≤ nums[pos]$

套用二分法，不断用二分法逼近查找第一个大于等于 target 下标。