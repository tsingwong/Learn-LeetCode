# [反转字符串](https://leetcode-cn.com/problems/reverse-string/description/)

## 解法一：双指针夹壁

时间复杂度：$O(n)$

```javascript
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let left = 0
  let right = s.length - 1
  while (left < right) {
    ;[s[left++], s[right--]] = [s[right], s[left]]
  }
}
```

### 解题思路

感觉这道题属于做过所有题里面最简单的了。