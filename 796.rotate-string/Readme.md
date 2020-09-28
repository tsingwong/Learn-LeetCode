# [旋转字符串](https://leetcode-cn.com/problems/rotate-string/description/)

## 解法一：暴力法

时间复杂度：$O(n)$

```javascript
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function (A, B) {
  if (A === B) {
    return true
  }
  for (let i = 0; i < A.length; i++) {
    A = A.substr(1) + A.substr(0, 1)
    if (A === B) {
      return true
    }
  }
  return false
}
```

### 解题思路

暴力遍历，每次变更 A ，然后比较 A 与 B 是否相等。



## 解法二：判断子串



```javascript
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function (A, B) {
  return A.length === B.length && (A + A).indexOf(B) > -1
}
```



### 解题思路

由于 `A + A` 包含了所有可以通过旋转操作从 `A` 得到的字符串，因此我们只需要判断 `B` 是否为 `A + A` 的子串即可。