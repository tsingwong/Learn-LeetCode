# [两个数组的交集](https://leetcode-cn.com/problems/intersection-of-two-arrays/description/)

## 解法一：暴力法

时间复杂度：$O(n^2)$

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let result = []
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j] && result.indexOf(nums2[j]) === -1) {
        result.push(nums2[j])
      }
    }
  }
  return result
}
```

### 解题思路

暴力法两层遍历



## 解法二：排序

时间复杂度：$O(nlogn)$

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let result = []
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)
  if (nums1[0] > nums2[nums2.length - 1] || nums2[0] > nums1[nums1.length - 1]) {
    return result
  }
  let i = 0
  let j = 0
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums1[i - 1]) {
      i++
      continue
    }
    if (nums2[j] === nums2[j - 1]) {
      j++
      continue
    }
    if (nums1[i] === nums2[j]) {
      result.push(nums2[j])
      i++
      j++
    } else if (nums1[i] > nums2[j]) {
      j++
    } else {
      i++
    }
  }
  return result
}
```

### 解题思路

题目中描述说不管顺序，于是我们就可以先排序然后再用双指针。

这里可以使用 数组的去重来优化：

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let result = []
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)
  nums1 = [...new Set(nums1)]
  nums2= [...new Set(nums2)]
  if (nums1[0] > nums2[nums2.length - 1] || nums2[0] > nums1[nums1.length - 1]) {
    return result
  }
  let i = 0
  let j = 0
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      result.push(nums2[j])
      i++
      j++
    } else if (nums1[i] > nums2[j]) {
      j++
    } else {
      i++
    }
  }
  return result
}
```

那么就引申出来几种数组的去重方法：

- ES6 Set 

- 双层循环 splice

- indexOf/includes

- sort 之后比较相邻元素

- filter

  



## 解法三：工具函数

时间复杂度：算不清楚了，哈哈哈哈

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  return [...new Set([...new Set(nums1)].filter(v => new Set(nums2).has(v)))]
}
```

### 解题思路

借助 JavaScript ES6 的各种新特性来完成。