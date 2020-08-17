# [只出现一次的数字](https://leetcode-cn.com/problems/single-number/description/)

## 解法一：哈希表

时间复杂度：$O(n)$

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let set = new Set()
  let len = nums.length
  for (let i = 0; i < len; i++) {
    if (set.has(nums[i])) {
      set.delete(nums[i])
    } else {
      set.add(nums[i])
    }
  }
  for (let val of set) {
    return val
  }
}
```

### 解题思路

借助哈希表来实现，当其中存在相同结果时删除掉该结果，否则添加该结果。

这样最后只会剩一个结果，那就是我们需要的值。

