# [汉明距离](https://leetcode-cn.com/problems/hamming-distance/description/)

## 解法一：异或+遍历

时间复杂度：$O(n)$

```javascript
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let temp = x ^ y
  let count = 0
  while (temp > 0) {
    if (temp & 1) {
      count++
    }
    temp = temp >> 1
  }
  return count
}
```



### 解题思路

题目中提到 的[汉明距离](https://baike.baidu.com/item/汉明距离)指的是这两个数字对应二进制位不同的位置的数目。

这时候很容易想到，先进行异或（仅不同的字符串为 1），然后统计二进制中所有的 1

统计二进制中的所有 1 时，用到 & （与）和  >> （右移）。