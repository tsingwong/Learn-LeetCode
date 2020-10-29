# [寻找比目标字母大的最小字母](https://leetcode-cn.com/problems/find-smallest-letter-greater-than-target/description/)

## 解法一：迭代

时间复杂度：$O(n)$

```javascript
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let len = letters.length
  for (let i = 0; i < len; i++) {
    if (letters[i] > target) {
      return letters[i]
    }
  }
  return letters[0]
}
```



### 解题思路

JavaScript 中的 字符可以比较，其根本是基于 `CodePointAt()` 方法的。

注意题目中说的 **字母是依序循环出现的**，且 **排序后的字符列表**，所以如果当前数组中所有项都不满足，即可返回第一项即可。