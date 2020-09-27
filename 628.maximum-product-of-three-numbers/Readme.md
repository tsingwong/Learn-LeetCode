# [三个数的最大乘积](https://leetcode-cn.com/problems/maximum-product-of-three-numbers/description/)

## 解法一：排序

时间复杂度：$O(nlogn)$

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  let len = nums.length
  nums.sort((a, b) => a - b)
  return Math.max(nums[0] * nums[1] * nums[len - 1], nums[len - 1] * nums[len - 2] * nums[len - 3])
}
```



### 解题思路

先排序之后再比较。

如果数组中所有的元素都是非负数，那么答案即为最后三个元素的乘积。

如果数组中出现了负数，那么我们还需要考虑乘积中包含负数的情况，显然选择最小的两个负数和最大的数是最优的，即为前两个元素与最后一个元素的乘积。

上述两个结果中的较大值就是答案。注意我们可以不用判断数组中到底有没有正数，0 或者负数，因为上述两个结果实际上已经包含了所有情况，最大值一定在其中。





