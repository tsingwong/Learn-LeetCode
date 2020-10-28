# [数组拆分 I](https://leetcode-cn.com/problems/array-partition-i/description/)

## 解法一：递归

时间复杂度：$O(nlogn)$

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  let result = 0
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i += 2) {
    result += nums[i]
  }
  return result
}
```



### 解题思路

根据题目思路按照升序排列，然后选择奇数位置相加即可。
