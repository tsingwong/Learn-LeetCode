# [检测大写字母](https://leetcode-cn.com/problems/detect-capital/description/)

## 解法一：遍历

时间复杂度：$O(n)$

```javascript
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  let firstUpper
  let upperCount = 0
  for (let i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() === word[i]) {
      upperCount++
    }
  }
  if (
    !upperCount ||
    word.length === upperCount ||
    (upperCount === 1 && word[0].toUpperCase() === word[0])
  ) {
    return true
  }
  return false
}
```



### 解题思路

判断单词的大写使用是否正确可以通过以下

- 全大写 `word.length === upperCount`
- 全小写 `!upperCount`
- 首字母大写 `(upperCount === 1 && word[0].toUpperCase() === word[0])`



