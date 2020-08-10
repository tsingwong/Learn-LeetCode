# [二进制求和](https://leetcode-cn.com/problems/add-binary/description/)



## 解法一：暴力法

时间复杂度：$O(n)$

```javascript
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let result = []
  let aArr = a.split('')
  let bArr = b.split('')
  let flag = 0
  while (aArr.length > 0 && bArr.length > 0) {
    let count = +aArr.pop() + +bArr.pop() + flag
    if (count > 1) {
      flag = 1
      count %= 2
    } else {
      flag = 0
    }
    result.unshift(count)
  }
  while (aArr.length > 0) {
    let count = +aArr.pop() + flag
    if (count > 1) {
      flag = 1
      count %= 2
    } else {
      flag = 0
    }
    result.unshift(count)
  }
  while (bArr.length > 0) {
    let count = +bArr.pop() + flag
    if (count > 1) {
      flag = 1
      count %= 2
    } else {
      flag = 0
    }
    result.unshift(count)
  }
  if (flag) {
    result.unshift(flag)
  }
  return result.join('')
}
```



### 解题思路

按照计算二进制的方法，从最后一个位开始加，需要引入一个第三变量做为是否进位的标识。

一直到其中一个数已经所有位已经读完，就需要把剩下的一个也按照上面的形式继续叠加。

到最后如果还存在进位，就表示最后还需要进一位。



上面代码可以在优化一下：

```javascript
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let result = []
  let aArr = a.split('')
  let bArr = b.split('')
  let flag = 0
  while (aArr.length > 0 || bArr.length > 0) {
    let count = +(aArr.pop() || 0) + +(bArr.pop() || 0) + flag
    if (count > 1) {
      flag = 1
      count %= 2
    } else {
      flag = 0
    }
    result.unshift(count)
  }
  if (flag) {
    result.unshift(flag)
  }
  return result.join('')
}
```

