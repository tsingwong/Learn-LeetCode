# [最后一个单词的长度](https://leetcode-cn.com/problems/length-of-last-word/description/)

## 解法一：借用原生 API

时间复杂度：$O(1)$

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let arr = s.trim().split(' ')
  return arr[arr.length - 1].length
}
```



### 解题思路

由于空格属于最后一个单词，所以可以使用原生 trim() 方法，将首尾的空格去掉，然后再按照空格切分 split 字符串，切分后数组的最后一项就是这道题需要的结果，即最后一个单词。



## 解法二：双指针迭代

时间复杂度：$O(n)$

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let end = s.length - 1
  while (s[end] === ' ' && end >= 0) {
    end--
  }
  let start = end
  while (s[start] !== ' ' && start >= 0) {
    start--
  }
  return end - start
}
```

### 解题思路

从最后开始遍历，先寻找最后一个单词的末尾位置，当找到最后一个单词的末尾时，这时候我们需要找到最后一个单词的开始，所以需要改变下判断逻辑。

