# [最大子序和](https://leetcode-cn.com/problems/maximum-subarray/description/)

## 解法一：动态规划

时间复杂度：$O(n)$

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let result = nums[0]
  let sum = 0
  nums.forEach(num => {
    sum = Math.max(sum + num, num)
    result = Math.max(result, sum)
  })
  return result
}
```

### 解题思路



动态规划首先是对数组进行遍历，当前最大连续子序列和为 sum，结果为 result

Math.max(sum+ num, num) 的意思是：

- sum 如果大于 0 的时候，返回 sum + num，也就是说 sum 对于结果是增益效果，所以需要 sum 需要保留且加上当前遍历的数字
- sum 如果小于 0 的时候，返回 num，也就是 sum 对于结果是减益效果，所以这时候需要舍弃之前的 sum，将 sum 置为当前便利的数字



`sum = Math.max(sum + num, num)` 

等价于

```javascript
if(sum > 0) {
  sum += num
} else {
  sum = nu	m
}
```



