# [两个列表的最小索引总和](https://leetcode-cn.com/problems/minimum-index-sum-of-two-lists/description/)

## 解法一：哈希表

时间复杂度：$O(n)$

```javascript
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let hash = new Map()
  let hash2 = new Map()
  let result = []
  let minIndexCount = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < list1.length; i++) {
    hash.set(list1[i], i)
  }
  for (let i = 0; i < list2.length; i++) {
    if (hash.get(list2[i]) > -1) {
      let count = hash.get(list2[i]) + i
      if (count < minIndexCount) {
        result = []
        result.push(list2[i])
        minIndexCount = count
      } else if (count === minIndexCount) {
        result.push(list2[i])
      }
    }
  }
  return result
}
```



### 解题思路

最开始我是这么写的

```javascript
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let hash = new Map()
  let hash2 = new Map()
  let result = []
  let minIndexCount = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < list1.length; i++) {
    hash.set(list1[i], i)
  }
  for (let i = 0; i < list2.length; i++) {
    if (hash.get(list2[i]) > -1) {
      hash2.set(list2[i], hash.get(list2[i]) + i)
    }
  }
  for (let val of hash2.values()) {
    minIndexCount = Math.min(val, minIndexCount)
  }
  for (let [key, val] of hash2.entries()) {
    if (val === minIndexCount) {
      result.push(key)
    }
  }
  return result
}
```

没考虑到可以在第二次循环内部完成比较整个过程。

