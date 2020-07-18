# [26. 删除排序数组中的重复项](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/)

## 解法一：双指针

时间复杂度： $O(n)$

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (!nums.length) {
    return 0
  }
  let slow = 1
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast]
      slow++
    }
  }
  return slow
}
```



### 解题思路

快慢指针，只要快指针与上一个不一样，将快指针位置的值至于慢指针，慢指针加一。

也就是说当 快指针与上一个一样时，只增加快指针。



## 解法二：JavaScript 数组原生方法

时间复杂度 ：$O(n)$


```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) !== i) {
      nums.splice(i, 1)
      i--
    }
  }
  return nums.length
}
```

### 解题思路

使用数组几个原生方法：

- `Array.prototype.indexOf(searchElement[, fromIndex])` 返回 target 在数组中的位置，没找到返回 -1
- `Array.prototype.splice(start[, deleteCount[, item1[, item2[, ...]]]])` 返回被删除的元素。

