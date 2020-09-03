# [单词规律](https://leetcode-cn.com/problems/word-pattern/description/)

## 解法一：indexOf 比较下标

时间复杂度：$O(n^2)$ （其中 indexOf 的时间复杂度是 $O(n)$）

```javascript
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  let arr1 = str.split(' ')
  let arr2 = pattern.split('')
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1.indexOf(arr1[i]) !== arr2.indexOf(arr2[i])) {
      return false
    }
  }
  return true
}
```



### 解题思路

将两个字符串转换为数组，就转化为同 205 【同构字符串】一样的问题了。



## 解法二：哈希表

时间复杂度：$O(n)$

```javascript
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  let arr1 = str.split(' ')
  let arr2 = pattern.split('')
  if (arr1.length !== arr2.length) {
    return false
  }
  let hash1 = new Map()
  let hash2 = new Map()
  for (let i = 0; i < arr1.length; i++) {
    if (!hash1.has(arr1[i])) {
      hash1.set(arr1[i], arr2[i])
    }
    if (!hash2.has(arr2[i])) {
      hash2.set(arr2[i], arr1[i])
    }
    if (hash1.get(arr1[i]) !== arr2[i] || hash2.get(arr2[i]) !== arr1[i]) {
      return false
    }
  }
  return true
}
```

### 解题思路

构建两个哈希表，然后双向映射，取值比较。



同 205 题的解法二。