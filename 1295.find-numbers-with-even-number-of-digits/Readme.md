# [统计位数为偶数的数字](https://leetcode-cn.com/problems/find-numbers-with-even-number-of-digits/description/)



## 解法一：迭代

时间复杂度：$O(n)$

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    let count = 0
    let temp = nums[i]
    while (temp > 0) {
      count++
      temp = Math.floor(temp / 10)
    }
    !(count % 2) && result++
  }
  return result
}
```



### 解题思路

顺着题意逻辑，使用两层遍历即可解决。