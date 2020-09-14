# [判断子序列](https://leetcode-cn.com/problems/is-subsequence/description/)

## 解法一：快慢指针遍历

时间复杂度：$O(n)$

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s === t) {
    return true
  }
  let i = 0
  let j = 0
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++
    }
    j++
  }
  if (i === s.length) {
    return true
  }
  return false
}
```

### 解题思路

快慢双指针遍历，当前字符串相同时，快慢指针都前进一步，否则只有快指针前进。



## 解法二：动态规划

PS：目前还不会动态规划，等学会了再来写吧。o(╥﹏╥)o