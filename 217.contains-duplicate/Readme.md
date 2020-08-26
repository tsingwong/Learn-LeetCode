# [存在重复元素](https://leetcode-cn.com/problems/contains-duplicate/description/)

## 解法一：哈希表

时间复杂度：$O(n)$

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let set = new Set()
  // nums = nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true
    }
    set.add(nums[i])
  }
  return false
}
```

### 解题思路

借助 哈希表 来判断元素是否存在，存在即为重复元素。



## 解法二： 排序

时间复杂度：$O(nlogn)$

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b)
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      return true
    }
  }
  return false
}
```

### 解题思路

先排序后遍历比较相邻的数字是否相等即可。

这里的排序的时间复杂度是 $O(nlogn)$， 遍历的时间复杂度是 $O(n)$，所以整个算法的时间复杂度是 $O(nlogn)$。



## 解法三：暴力法

时间复杂度：$O(n^2)$

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true
      }
    }
  }
  return false
}
```

### 解题思路

没啥好讲的两层暴力遍历，比较两个指针的值。