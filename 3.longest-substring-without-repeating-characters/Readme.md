

# [无重复字符的最长子串](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/)

## 解法一：双指针



```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let hashMap = new Map()
  let max = 0
  let left = 0
  let right = 0
  for (; right < s.length; right++) {
    if (hashMap.has(s[right])) {
      left = Math.max(hashMap.get(s[right]) + 1, left)
    }
    hashMap.set(s[right], right)
    max = Math.max(right - left + 1, max)
  }

  return max
}
```



### 解题思路

- 维护一个哈希表和左右双指针

- 右指针遍历全数组
- 当哈希表中已存在右指针时，表示当前右指针已经是第二次出现了
- 同时需要在哈希表中再次记录右指针所遍历过的值

