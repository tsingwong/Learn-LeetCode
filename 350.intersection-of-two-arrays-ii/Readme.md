# [两个数组的交集 II](https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/description/)

## 解法一：遍历+检索

时间复杂度：$O(nlongn)$

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let result = []
  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
      result.push(nums1[i])
      nums2.splice(nums2.indexOf(nums1[i]), 1)
    }
  }
  return result
}
```

### 解题思路

这种解法跟前面 349 类似。

## 解法二：暴力法

时间复杂度：$O(n^2)$

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let result = []
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        result.push(nums2[j])
        nums2.splice(j, 1)
        break
      }
    }
  }
  return result
}
```

### 解题思路

同  349

 有一个细节需要注意 这里需要将 num2中已匹配的元素删除掉，以保证唯一性。



## 解法三：排序双指针

时间复杂度：$O(nlogn)$ （若已知是有序，时间复杂度为$O(n)$）

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let result = []
  nums1 = nums1.sort((a, b) => a - b)
  nums2 = nums2.sort((a, b) => a - b)
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
    } else {
      nums1[i] > nums2[j] ? j++ : i++
    }
  }
  return result
}
```

### 解题思路

同 349 ，只是这里不需要去重。

