# [Fizz Buzz](https://leetcode-cn.com/problems/fizz-buzz/description/)

## 解法一：遍历

时间复杂度：$O(n)$

```javascript
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  function temp(n) {
    let Fizz = 'Fizz'
    let Buzz = 'Buzz'
    let div3 = !(n % 3)
    let div5 = !(n % 5)
    if (div3 && div5) {
      return Fizz + Buzz
    } else if (div3) {
      return Fizz
    } else if (div5) {
      return Buzz
    }
    return '' + n
  }
  let result = []
  for (let i = 1; i <= n; i++) {
    result.push(temp(i))
  }
  return result
}
```

### 解题思路

遍历每个数字，符合条件后返回对应的字符串，否则返回其本身对应的字符串。