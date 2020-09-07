# [反转字符串中的元音字母](https://leetcode-cn.com/problems/reverse-vowels-of-a-string/description/)

## 解法一：双指针+遍历

时间复杂度：$O(n)$

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let arr = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
  let left = 0
  let right = s.length - 1
  let result = s.split('')
  while (left < right) {
    if (arr.indexOf(result[left]) === -1) {
      left++
      continue
    }
    if (arr.indexOf(result[right]) === -1) {
      right--
      continue
    }
    ;[result[left++], result[right--]] = [result[right], result[left]]
  }
  return result.join('')
}
```



### 解题思路

将元音字母维护在一个数组中，双指针每次遍历时会先判断该字符串是否是元音字母。

需要注意的是元音字母有 **大小写** 两种哦。

