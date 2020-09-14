# [最长回文串](https://leetcode-cn.com/problems/longest-palindrome/description/)

## 解法一：哈希表

时间复杂度：$O(n)$

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let hash = new Map()
  let flag = false
  let result = 0
  for (let i = 0; i < s.length; i++) {
    hash.set(s[i], (hash.get(s[i]) || 0) + 1)
  }
  for (let val of hash.values()) {
    if (val % 2 === 0) {
      result += val
    } else {
      result += val - 1
      flag = true
    }
  }
  return flag ? result + 1 : result
}
```

### 解题思路

遍历所有字符串并计数。然后再遍历这个哈希表，如果当前字符串的值是偶数，就相加，否则就 相加 -1。