# [计数质数](https://leetcode-cn.com/problems/count-primes/description/)

## 解法一：埃拉托斯特尼筛法

时间复杂度：

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let count = 0
  let signs = new Array(n)

  for (let i = 2; i < n; i++) {
    if (!signs[i - 1]) {
      count++
    }
    for (let j = i * i; j <= n; j += i) {
      signs[j - 1] = true
    }
  }
  return count
}
```

### 解题思路

要得到自然数n以内的全部素数，必须把不大于 $\sqrt{n}$ 的所有素数的倍数剔除，剩下的就是素数。

![1.gif](Readme.assets/23d348bef930ca4bb73f749500f664ccffc5e41467aac0ba9787025392ca207b-1.gif)

```javascript
// 从 2 开始遍历，每次 +1
for (let i = 2; i < n; i++) {
  // 如果当前数字存在，即当前数字为质数
  if (!signs[i - 1]) {
    count++
  }
  //  i * 2, i * 3, i *4 ,i * 5...前面这些数字在遍历到 i 时
  // 已经都处理过了，所以从 i 的平方开始
  for (let j = i * i; j <= n; j += i) {
    signs[j - 1] = true
  }
}
```

