# [84. 柱状图中最大的矩形](https://leetcode-cn.com/problems/largest-rectangle-in-histogram/)

### 解法一：暴力

时间复杂度： $O(n)$

```javascript
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let len = heights.length
  let area = 0
  for (let i = 0; i < len; i++) {
    let height = heights[i]
    let left = i
    let right = i
    do {
      left--
      if (heights[left] < height) {
        break
      }
    } while (left >= 0)

    do {
      right++
      if (heights[right] < height) {
        break
      }
    } while (right < len)

    area = Math.max(area, height * (right - left - 1))
  }
  return area
}
```



### 解题思路

需要这么理解这道题。

枚举的元素是每个棒子，每次以当前棒子作为高度，向左向右寻找第一个小于它的柱子。

举个栗子 [2,1,5,6,3]

- 以 5 柱子为例
- 向左找到是height[1] < 5
- 向右找到是 height[4] < 5
- 左右柱子分别是 1、4，那么其实覆盖的柱子是 1的结束到 4的开始，所以需要多减一
- 得到结果是 5 * (4-1 -1) = 10

这时候有可能会有人问

[2, 1] 这个柱子是怎么求的

- 首先选择 2 这根柱子
- 向左 height[-1] 是 undefined， undefined 跟其他任何数比较都是 false， 由于 left 小于 0，所以这里 left 是-1
- 向右 height[1] 是 1，1 < 2， 所以这里的 right 是 1
- 2 当前左右柱子分别是 -1 到 1， 那么其实覆盖的柱子是 -1的结束到 1 的开始，所以需要多减一
- 得到结果是 2* (1- -1 - 1) = 2



## 解法二：

这个方法暂时还没研究懂先不写了。等回头研究清楚再来写。



### 解题思路



首先要思考一个问题，我们在暴力的方法中，找它的左右边界能不能更快一些。

我们之前的做法是从当前柱子向左，向右遍历，所以这样就会增加一个  $O(n)$ 时间复杂度。

当我们遍历到当前节点是，因为前面节点的高度都已经遍历过了，所以只需要用一个最小值，或者是一个有序的栈按高度排列出来，所以当前节点的左边界是可以通过 $O(1)$ 求解的。

我们需要维护一个递增的栈（从栈低到栈顶的元素所对应的柱子的高度是递增的），所以栈里存放的是柱子的下标，并不是柱子的高度。

每当我们遍历一个柱子时，如果当前柱子的高度大于等于栈顶元素的高度时，就将当前柱子的下标压入栈顶。



