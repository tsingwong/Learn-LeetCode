# [寻找数组的中心索引](https://leetcode-cn.com/problems/find-pivot-index/description/)

## 解法一：暴力法

时间复杂度：$O(n^2)$

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  if (nums.length < 3) {
    return -1
  }
  for (let i = 0; i < nums.length; i++) {
    let leftCount = nums.slice(0, i).reduce((prev, curr) => prev + curr, 0)
    let rightCount = nums.slice(i + 1).reduce((prev, curr) => prev + curr, 0)
    if (leftCount === rightCount) {
      return i
    }
  }
  return -1
}
```



### 解题思路

暴力法，疯狂遍历。



## 解法二：前缀

时间复杂度：$O(n)$

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let sum = nums.reduce((prev, curr) => prev + curr, 0)
  let leftCount = 0

  for (let i = 0; i < nums.length; i++) {
    if (leftCount === sum - nums[i] - leftCount) {
      return i
    }
    leftCount += nums[i]
  }
  return -1
}
```

### 解题思路

跟上面那个解法类似，这次是先计算出来一个总计，然后每次减去前缀计算，而不是在 for 循环里统计。