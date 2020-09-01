# [各位相加](https://leetcode-cn.com/problems/add-digits/description/)

## 解法一：递归

时间复杂度：$O(n^2)$

```javascript
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let result = recursion(num)
  function recursion(num) {
    let quotient = Math.floor(num / 10)
    if (!quotient) {
      return num % 10
    } else {
      return (num % 10) + recursion(quotient)
    }
  }
  while (result > 9) {
    result = recursion(result)
  }
  return result
}
```

### 解题思路

递归 用来获取当前数字的各个位相加之和。

迭代用来判断是否满足退出条件。不满足再次执行递归函数。

## 解法二：迭代

时间复杂度：$O(n^2)$

```javascript
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  while (num > 9) {
    num = String(num)
      .split('')
      .reduce((prev, curr) => {
        return +prev + +curr
      }, 0)
  }
  return num
}
```

### 解题思路

借助字符串和数组的 reduce 函数来完成迭代。



## 解法三：数学归纳法

时间复杂度：$O(1)$

```javascript
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  return (num && (num % 9 || 9)) || 0
}
```

### 解题思路

要求的数在数学上被称为是 数字根（也叫数根）。

每个自然数都有一个 数根。

数根是将一正整数的各个位数相加（即横向相加），若加完后的值大于 10 ，则继续将各位数相加知道其结果小于十为止。

数根有以下作用：

- 可以计算[模运算](https://zh.wikipedia.org/wiki/模运算)的[同余](https://zh.wikipedia.org/wiki/同餘)，对于非常大的数字的情况下可以节省很多时间。
- 验证计算正确性。如两个数的和的数根等于两个数分别的数根之和。
- 判断数字的整除性，如果数根能被3或9整除，则原来的数也能被3或9整除。



那么如何寻找数根呢。下面采用数学归纳法

```
原数: 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30
数根: 1 2 3 4 5 6 7 8 9  1  2  3  4  5  6  7  8  9  1  2  3  4  5  6  7  8  9  1  2  3 
```

不难看出来 数根 是 9 个一组循环出现的。所以只需要 取余就可以了。

那么对于给定的数字 num 会出现一下三种情况：

1. num 是 0 ，其数根就是 0；
2. num 不是 9 的倍数，数根就是 num 对于 9 取余，也就是 `num mod 9`
3. num 是 9 的倍数，数根就是 9

