# [38. 外观数列](https://leetcode-cn.com/problems/count-and-say/)

## 解法一：迭代

时间复杂度：$O(n^2)$

```javascript
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) {
    return '1'
  }
  let str = '1'
  for (let i = 1; i < n; i++) {
    let currStr = ''
    let count = 1
    for (let j = 0; j < str.length; j++) {
      if (str[j] === str[j + 1]) {
        count++
      } else {
        currStr += `${count}${str[j]}`
        count = 1
      }
    }
    str = currStr
  }
  return str
}
```

### 解题思路

暴力法解题



## 解法二：递归

```javascript
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) {
    return '1'
  }
  let str = countAndSay(n - 1)

  let currStr = ''
  let count = 1
  for (let j = 0; j < str.length; j++) {
    if (str[j] === str[j + 1]) {
      count++
    } else {
      currStr += `${count}${str[j]}`
      count = 1
    }
  }
  return currStr
}
```

### 解题思路

基本逻辑同上面迭代。

