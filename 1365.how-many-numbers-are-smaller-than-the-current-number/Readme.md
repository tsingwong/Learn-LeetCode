# [有多少小于当前数字的数字](https://leetcode-cn.com/problems/how-many-numbers-are-smaller-than-the-current-number/description/)

## 解法一：双层遍历

时间复杂度：$O(n)$

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let result = []
  for (let i = 0; i < nums.length; i++) {
    let count = 0
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] > nums[j]) {
        count++
      }
    }
    result.push(count)
  }
  return result
}
```



### 解题思路

双层遍历，外层是控制当前位置，里层是统计当前位置的数字大于多少位置。