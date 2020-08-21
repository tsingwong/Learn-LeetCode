# [阶乘后的零](https://leetcode-cn.com/problems/factorial-trailing-zeroes/description/)

## 解法一：迭代

时间复杂度：$O(n)$

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let count = 0
  while (n >= 5) {
    let temp = Math.floor(n / 5)
    count += temp
    n = temp
  }
  return count
}
```

### 解题思路

这里是求最后结果后面 0 的个数。那么就可以考究下如何能得到 5。

聪明的小伙伴可能已经想到了这两种情况：

- `2 * 5 `：阶乘中，`2的倍数`肯定比`5的倍数`多。所以，只需要考虑`5的倍数`出现了多少次
- `x0`

如果这样想，结果可能是 `Math.floor(n / 10) * 2 + n % 10 >= 5 : 1 + 0`



那么就少了一些结果，我们需要考虑 25 这个结果是  `5 * 5`，所以他可以转换成两个 5。

所以这里就 n 变成了不断的除以 5 的结果相加。



## 解法二：递归

时间复杂度：$O(n)$

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  if (n < 5) {
    return 0
  } else {
    let temp = Math.floor(n / 5)
    return temp + trailingZeroes(temp)
  }
}
```



### 解题思路

同上，不做过多赘述了。

需要注意的是递归的基本模式：

```javascript
function recur(level, param) {
  // 递归终止条件（recursion terminator）
  if (level > MAX_LEVEL) {
    return
  }
  // 处理当前层逻辑（current process logic）
  process(level, param)
  // 下探到下一层（drill down）
  recur(level + 1, newParam)
  // 清理当前层（reverse the current level status）
}
```

