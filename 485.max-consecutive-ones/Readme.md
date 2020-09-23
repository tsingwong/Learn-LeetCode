# [最大连续1的个数](https://leetcode-cn.com/problems/max-consecutive-ones/description/)

## 解法一：暴力法

时间复杂度：$O(n)$

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      count++
    } else {
      count = 0
    }
    max = Math.max(max, count)
  }
  return max
}
```

### 解题思路

暴力遍历每次都需要比较 max 和 count ，以免最后一个数不是 0 。



## 解法二：API



```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  return Math.max.apply(
    null,
    nums
      .join('')
      .split('0')
      .map(item => item.length)
  )
}
```

### 解题思路

先把数组转换成字符串，在以 0 为分隔，计算其最大长度。