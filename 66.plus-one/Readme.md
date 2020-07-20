# [66. 加一](https://leetcode-cn.com/problems/plus-one/)

## 解法一：数组倒序遍历

时间复杂度：$O(n)$

```javascript
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let last = digits.length - 1
  while (last > -1) {
    digits[last]++
    digits[last] %= 10
    if (digits[last] !== 0) {
      return digits
    }
    last--
  }
  digits.unshift(1)
  return digits
}
```



### 解题思路

最开始的时候我没有考虑到可以在循环里返回数组，也忘记了最后的首位增加。

下面来说下这道题可能会遇到的情况：

- 末位无进位，则末位加一即可。因为末位无进位，前面也不可能产生进位，比如 `45 => 46`
- 末位有进位，在中间进位停止，则需要找到进位的典型标识，那就是 当前位 为0， 则前一位加一，直到不为 0  为止，比如 `499=>500`
- 末位有进位，并且一直进位到最前方导致结果多出一位，对于这种情况，需要在第 2 种情况遍历结束的基础上，进行单独处理，比如 `999 => 1000`

