# [区域和检索 - 数组不可变](https://leetcode-cn.com/problems/range-sum-query-immutable/description/)

## 解法一：遍历

时间复杂度：$O(n)$

```javascript
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums
}

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  let count = 0
  for (let index = 0; index < this.nums.length; index++) {
    if (index >= i && index <= j) {
      count += this.nums[index]
    }
  }
  return count
}
```

### 解题思路

非常容易想到的解法，判断区间。



至于动态规划的写法，等学会了动态规划再来写吧。