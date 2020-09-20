# [重复的子字符串](https://leetcode-cn.com/problems/repeated-substring-pattern/description/)



## 解法一：API



```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  return s.repeat(2).slice(1, -1).includes(s)
}
```

### 解题思路

可以创建一个新的字符串str,它等于原来的字符串S再加上S自身，这样其实就包含了所有移动的字符串。

比如字符串：S = acd，那么str = S + S = acdacd

acd移动的可能：dac、cda。其实都包含在了str中了。就像一个滑动窗口

一开始acd (acd) ，移动一次ac(dac)d,移动两次a(cda)cd。循环结束

所以可以直接判断str中去除首尾元素之后，是否包含自身元素。如果包含。则表明存在重复子串。
