# [Nim 游戏](https://leetcode-cn.com/problems/nim-game/description/)

## 解法一：数学分析

时间复杂度：$O(1)$

```javascript
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
  return n % 4 !== 0
}
```

### 解题思路

题目中提到 “你们是聪明人，每一步都是最优解。”

那么什么是聪明人的选择呢。也就是每次两个人的之和都为 4 ，这样就能保证从数目和先后手就能判定出来谁胜谁负。

 那么为什么是 4 呢？

让我们考虑一些小例子。显而易见的是，如果石头堆中只有一块、两块、或是三块石头，那么在你的回合，你就可以把全部石子拿走，从而在游戏中取胜。而如果就像题目描述那样，堆中恰好有四块石头，你就会失败。因为在这种情况下不管你取走多少石头，总会为你的对手留下几块，使得他可以在游戏中打败你。因此，要想获胜，在你的回合中，必须避免石头堆中的石子数为 4 的情况。同样地，如果有五块、六块、或是七块石头，你可以控制自己拿取的石头数，总是恰好给你的对手留下四块石头，使他输掉这场比赛。但是如果石头堆里有八块石头，你就不可避免地会输掉，因为不管你从一堆石头中挑出一块、两块还是三块，你的对手都可以选择三块、两块或一块，以确保在再一次轮到你的时候，你会面对四块石头。

显然，它以相同的模式不断重复 n=4,8,12,16，基本可以看出是 4 的倍数。
