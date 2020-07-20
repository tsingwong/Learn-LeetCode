# [20. 有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)

## 解法一：暴力解法

时间复杂度：$O(n)$

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let hashMap = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if (hashMap[stack[stack.length - 1]] !== s[i]) {
      stack.push(s[i])
    } else {
      stack.pop()
    }
  }
  return stack.length === 0
}
```

### 解题思路

回想了半天没有什么思路就着手使用暴力解法了。

这里维护了一个 hashMap 和 stack。

具体也没啥好讲的了。



## 解法二：哈希表

时间复杂度：$O(n)$

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let hashMap = new Map()
  let stack = []
  hashMap.set('(', ')')
  hashMap.set('{', '}')
  hashMap.set('[', ']')
  for (let char of s) {
    if (hashMap.get(char)) {
      stack.push(char)
    } else {
      if (hashMap.get(stack.pop()) !== char) {
        return false
      }
    }
  }
  return !stack.length
}
```



### 解题思路

跟解法一差不多。

>  边遍历边匹配。也就是遍历的时候遇到左括号存入数组，下次遇到的第一个右括号必须和数组中最后一个元素匹配，否则为无效字符串，匹配完成后从数组中删除此元素。若最终数组为空，表示括号已全部匹配完，字符串有效。



只不过有所优化的是可以直接 pop 出来栈顶的元素比较，如果比较失败可以直接返回 false。

最后之所以返回 `!stack.length`是为了防止全部为左括号。