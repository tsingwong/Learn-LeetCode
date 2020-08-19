# [多数元素](https://leetcode-cn.com/problems/majority-element/description/)

## 解法一：哈希表

时间复杂度：$O(n)$

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let target = Math.ceil(nums.length / 2)
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1)
    } else {
      map.set(nums[i], 1)
    }
    if (map.get(nums[i]) >= target) {
      return nums[i]
    }
  }
  return null
}
```



### 解题思路

用 哈希表来记录数量，当大于一半时就返回这个结果。

## 解法二：排序

时间复杂度：$O(logn)$ （快排）

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  nums.sort((a, b) => a - b)
  return nums[Math.floor(nums.length / 2)]
}
```

### 解题思路

因为大于一半, 所以排序后的中间那个数必是我们需要的那个结果。