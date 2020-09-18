# [字符串中的单词数](https://leetcode-cn.com/problems/number-of-segments-in-a-string/description/)

## 解法一：API

时间复杂度：取决于JavaScript 引擎数组中使用的排序和遍历算法

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  return s.split(' ').filter(val => val !== '').length
}
```

### 解题思路

借助数组的 split 和 filter 函数来完成对于空字符串的去除工作。

## 解法二：遍历

时间复杂度：$O(n)$

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  let result = 0
  let inSpace = true
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      inSpace = true
    } else if (inSpace) {
      inSpace = false
      result++
    }
  }
  return result
}
```



### 解题思路

- 一个单词的开始的标识，就是它前面是空格
- 我们遇到第一个字母时就计数+1
- 设置一个标识变量 inSpace ，代表当前遍历是否处于空格之中
- 如果在 inSpace 为 true 的情况下，遇到第一个字母，就计数+1