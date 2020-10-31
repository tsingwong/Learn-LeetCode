# [仅仅反转字母](https://leetcode-cn.com/problems/reverse-only-letters/description/)

## 解法一：双指针

时间复杂度：$O(n)$

```javascript
/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function (S) {
  let ArrS = S.split('')
  let left = 0
  let right = ArrS.length - 1
  while (left < right) {
    let leftCode = ArrS[left].codePointAt()
    let rightCode = ArrS[right].codePointAt()
    if (leftCode < 65 || leftCode > 122 || (leftCode > 90 && leftCode < 97)) {
      left++
    } else if (rightCode < 65 || rightCode > 122 || (rightCode > 90 && rightCode < 97)) {
      right--
    } else {
      ;[ArrS[left++], ArrS[right--]] = [ArrS[right], ArrS[left]]
    }
  }
  return ArrS.join('')
}
```



### 解题思路

因为需要考虑到，非字母的字符串都不动，所以可以使用双指针操作。然后判断左右指针是否是字母。

这里判断是否为字母使用的是 `codePointAt()` 方法。

