# [找到所有数组中消失的数字](https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/description/)

## 解法一：空间换时间

时间复杂度：$O(n)$

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let result = []
  for (let i = 1; i <= nums.length; i++) {
    result.push(i)
  }
  for (let i = 0; i < nums.length; i++) {
    result.splice(nums[i] - 1, 1, 0)
  }

  return result.filter(val => !!val)
}
```

### 解题思路

这里先是构造了一个 1- n 的全集数组，遍历 nums ，对应位置设置为0 ，最后再遍历一遍去除  0 即可。