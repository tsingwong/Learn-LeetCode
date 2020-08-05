# [28. 实现 strStr()](https://leetcode-cn.com/problems/implement-strstr/)

## 解法一：暴力解法

时间复杂度：$O(n^2)$

```javascript
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle) {
    return 0
  }
  for (let i = 0; i < haystack.length; i++) {
    let j = 0
    for (; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        break
      }
    }
    if (j === needle.length) {
      return i
    }
  }
  return -1
}
```



### 解题思路

首先需要判断 needle 是否为空，它不存在时需要返回 0；

然后就是双指针 i, j 遍历即可，

需要注意的有两个点：退出条件和成功判断条件。



## 解法二：KMP

还没学会等学会再说吧