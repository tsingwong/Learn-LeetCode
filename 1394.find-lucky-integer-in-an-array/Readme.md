# [找出数组中的幸运数](https://leetcode-cn.com/problems/find-lucky-integer-in-an-array/description/)

## 解法一：哈希表

时间复杂度：$O(n)$

```javascript
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  let result = -1
  let hash = new Map()
  for (let i = 0; i < arr.length; i++) {
    hash.set(arr[i], (hash.get(arr[i]) || 0) + 1)
  }
  for (let [key, val] of hash) {
    if (key === val) {
      result = Math.max(result, key)
    }
  }
  return result
}
```



### 解题思路

根据题意，可以想到使用哈希表来存储每个整数的次数，最后遍历结束后，再遍历一遍哈希表里的键值对，当他们相等时候，再与最终需要返回的结果对比大小，取最大值。