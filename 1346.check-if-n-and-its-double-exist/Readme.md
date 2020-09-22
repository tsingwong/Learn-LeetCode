# [检查整数及其两倍数是否存在](https://leetcode-cn.com/problems/check-if-n-and-its-double-exist/description/)

## 解法一：排序 + 遍历

时间复杂度：$O(n^2)$

```javascript
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  arr.sort((a, b) => a - b)
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === 2 * arr[i] || arr[i] === 2 * arr[j]) {
        return true
      }
    }
  }
  return false
}
```

### 解题思路

先排序保障从小到大

再遍历，这时候可能会出现负数的情况，所以要同时考虑两种情况。

## 解法二：哈希表

时间复杂度：$O(n)$

```javascript
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  const set = new Set()
  for (const val of arr) {
    if (set.has(val << 1) || set.has(val / 2)) return true
    set.add(val)
  }
  return false
}
```

或是 哈希表

```javascript
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  let hash = new Map()
  for (let i = 0; i < arr.length; i++) {
    if (hash.get(arr[i] / 2) || hash.get(arr[i] * 2)) {
      return true
    }
    hash.set(arr[i], true)
  }
  return false
}
```

### 解题思路

使用哈希表来记录已经遍历过得数，判断当前数的 2倍或 1/2 是否存在于哈希表中即可。