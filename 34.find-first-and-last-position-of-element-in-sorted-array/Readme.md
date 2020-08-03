# [在排序数组中查找元素的第一个和最后一个位置](https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/)

## 解法一：暴力法

时间复杂度：$O(n)$

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let len = nums.length
  let result = [-1, -1]
  if (nums[0] > target || nums[len - 1] < target) {
    return result
  }
  for (let i = 0; i < len; i++) {
    if (nums[i] === target) {
      result[0] = i
      break
    }
  }
  if (result[0] === -1) {
    return result
  }
  for (let i = len - 1; i >= 0; i--) {
    if (nums[i] === target) {
      result[1] = i
      break
    }
  }
  return result
}
```



### 解题思路

暴力法没有什么特别的思路，可能有几个点需要注意下：

1. 需要记得 break 退出循环
2. 有一些提前结束的判断，可以有助于提高效率



## 解法二：二分法

时间复杂度：$O(log_2n)$

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  let mid
  while (right >= left) {
    mid = ~~((left + right) / 2)
    if (nums[mid] === target) break
    if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  if (left > right) return [-1, -1]
  let i = mid,
    j = mid
  while (nums[i] === nums[i - 1]) i--
  while (nums[j] === nums[j + 1]) j++
  return [i, j]
}
```

### 题解思路

题目终于有时间复杂度要求，所以是需要 $O(logn)$ ，且是有序的数组。这时候很明显可以想到需要使用使用二分查找。

使用二分法找到结果后，即可退出循环。

这时候没法确定第一个和最后一个，所以需要两次循环，循环出来第一个和最后一个。



