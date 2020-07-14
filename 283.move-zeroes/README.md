# [283] [移动零](https://leetcode-cn.com/problems/move-zeroes/)

## 题解一：双指针交换

时间复杂度：`O(n)`

```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  for (let i = 0, current = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      ;[nums[i], nums[current]] = [nums[current++], nums[i]]
    }
  }
}
```

### 解题思路

有点类似冒泡排序，冒泡排序交换的是相邻的两个，这里交换的是非 0 项和 0 项。

![283_2.gif](README.assets/36d1ac5d689101cbf9947465e94753c626eab7fcb736ae2175f5d87ebc85fdf0-283_2.gif)



## 题解二：双指针补0

时间复杂度：`O(n)`

```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let zeroCount = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[zeroCount] = nums[i]
      zeroCount++
    }
  }
  for (let i = zeroCount; i < nums.length; i++) {
    nums[i] = 0
  }
}
```

### 解题思路

同上，只是把交换操作改为 循环补0。

![283_1.gif](README.assets/9669b4ffb158eaeeee6f0cd66a70f24411575edab1ab8a037c4c9084b1c743f5-283_1.gif)



## 题解三：引入空间

时间复杂度：`O(n)`

```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let ans = []
  let zeroCount = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      ans.push(nums[i])
      zeroCount++
    }
  }
  for (let i = zeroCount; i < nums.length; i++) {
    ans.push(0)
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = ans[i]
  }
}
```

### 解题思路

这个方法就没什么好说的，不是很推荐这种。