# [斐波那契数](https://leetcode-cn.com/problems/fibonacci-number/description/)



## 解法一： 暴力法

时间复杂度： $O(n)$

```javascript
/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  let arr = [0, 1]
  for (let i = 2; i <= N; i++) {
    arr.push(arr[i - 2] + arr[i - 1])
  }
  return arr[N]
}
```

###  解题思路

emmm 我自己理解的他是暴力法，在题解里面看了下，这个叫动态规划啊。

我是这样理解的，维护一个数组，里面存放 N 对应的 斐波那契数，这样就可以很方便的获取到第 N 个。

但是这里存在一个问题就是空间复杂度是 N。

其实也可以不用数组，只用 3个变量就行。因为这里不关心其他的斐波那契数，只关心前两个。



## 解法二：递归

时间复杂度：$O(2^n)$

```javascript
/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  if (N === 0) {
    return 0
  }
  if (N === 1) {
    return 1
  }
  return fib(N - 1) + fib(N - 2)
}
```



### 解题思路

这道题很容易会想到递归。

为什么呢。斐波那契数就是前两个数之和。

退出条件就是 0 或 1 返回 他们自身。



## 解法三：优化

时间复杂度：$O(n)$

```javascript
/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  if (N <= 1) {
    return N
  }
  if (N === 2) {
    return 1
  }
  let first = 1
  let second = 1
  let current
  for (let i = 3; i <= N; i++) {
    current = first + second
    first = second
    second = current
  }
  return current
}
```

