# 70. [爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/)



## 题解一：斐波那契

时间复杂度： `O(n)`

```typescript
function climbStairs(n: number): number {
  let f1 = 0
  let f2 = 0
  let f3 = 1
  for (let i = 1; i <= n; i++) {
    f1 = f2
    f2 = f3
    f3 = f1 + f2
  }
  return f3
}
```



先说下我的理解，我是这么想的：

- 每次只能移动一步或两步，那么到达 `n`阶的情况只有两种 `n-1`  和 `n-2`
- 那么依次类推下去，最后就变成了斐波那契序列



那么看了题解之后，说这种方法是动态规划。

我们用 $f(x)$ 表示爬到第 $x$ 级台阶的方案数，考虑最后一步可能跨了一级台阶，也可能跨了两级台阶，所以我们可以列出如下式子：

$f(x) = f(x - 1) + f(x - 2)$
$f(x)=f(x−1)+f(x−2)$

它意味着爬到第 $x$ 级台阶的方案数是爬到第 $x - 1$ 级台阶的方案数和爬到第 $x−2$ 级台阶的方案数的和。很好理解，因为每次只能爬 1 级或 2 级，所以 $f(x)$ 只能从 $f(x - 1)$ 和 $f(x−2)$ 转移过来，而这里要统计方案总数，我们就需要对这两项的贡献求和。

![fig1](README.assets/70_fig1.gif)



## 题解二：递归

时间复杂度：$O(2^n)$

注：然而这种写法在跑测试的时候 44  就已经超时了，所以不推荐使用仅作为参考

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  return climb_stairs(0, n)
}

function climb_stairs(from, to) {
  if (from > to) {
    return 0
  }
  if (from === to) {
    return 1
  }
  return climb_stairs(from + 1, to) + climb_stairs(from + 2, to)
}
```

