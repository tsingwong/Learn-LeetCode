# [两个相同字符之间的最长子字符串](https://leetcode-cn.com/problems/largest-substring-between-two-equal-characters/description/)

## 解法一：哈希表

时间复杂度：$O(n)$

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  let hash = new Map()
  let max = -1
  for (let i = 0; i < s.length; i++) {
    if (hash.has(s[i])) {
      max = Math.max(max, i - hash.get(s[i]) - 1)
    } else {
      hash.set(s[i], i)
    }
  }
  return max
}
```

### 解题思路

顺着题意，可以知道需要判断的结果是两个相同的值的位置差，这时候就很容易想到使用哈希表即可。

当前元素在哈希表中不存在时，即记录下当前的位置，存在时即计算其位置差，同时比较其大小。

