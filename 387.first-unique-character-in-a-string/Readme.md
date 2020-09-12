# [字符串中的第一个唯一字符](https://leetcode-cn.com/problems/first-unique-character-in-a-string/description/)

## 解法一：API

时间复杂度：$O(n^2logn)$

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  // API
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i
    }
  }
  return -1
}
```

### 解题思路

从左到右依次遍历字符，使用数组或字符串的API `indexOf` 和 `lastIndexOf` 来判断当前字符串的第一次和最后一次出现位置，如果一直则认为该数字是第一个唯一字符串

## 解法二：哈希表

时间复杂度：$O(n)$

```javascript
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let hash = new Map()
  for (let i = 0; i < s.length; i++) {
    hash.set(s[i], (hash.get(s[i]) || 0) + 1)
  }
  for (let i = 0; i < s.length; i++) {
    if (hash.get(s[i]) === 1) {
      return i
    }
  }
  return -1
}
```

### 解题思路

遍历两次数组

第一遍遍历时将字符插入到哈希表中，并计数。

第二遍遍历时判断当前字符串在哈希表中的结果是否为1。