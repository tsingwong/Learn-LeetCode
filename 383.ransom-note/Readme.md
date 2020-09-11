# [赎金信](https://leetcode-cn.com/problems/ransom-note/description/)

## 解法一：哈希表

时间复杂度：$O(n)$

```javascript
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let hash = new Map()
  for (let i = 0; i < magazine.length; i++) {
    if (hash.has(magazine[i])) {
      hash.set(magazine[i], hash.get(magazine[i]) + 1)
    } else {
      hash.set(magazine[i], 1)
    }
  }
  for (let i = 0; i < ransomNote.length; i++) {
    if (hash.has(ransomNote[i]) && hash.get(ransomNote[i]) > 0) {
      hash.set(ransomNote[i], hash.get(ransomNote[i]) - 1)
    } else {
      return false
    }
  }
  return true
}
```

### 解题思路

遍历杂志中，将所有字符串录入到哈希表中， key 为当前字符，value 为当前字符的出现频率。

遍历赎金信，判断当前字符是否在哈希表中，且数字大于 0 ，否则就失败。

另外由于字符需要一一对应，所以这里没判定成功一次，需要将哈希表中对应的值 减一。





