# [第三大的数](https://leetcode-cn.com/problems/third-maximum-number/description/)

## 解法一：去重 + 排序



时间复杂度：$O(nlogn)$

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let set = Array.from(new Set(nums))
  set.sort((a, b) => b - a)
  return set.length >= 3 ? set[2] : set[0]
}
```

### 解题思路

先去重，再排序。

最后看数组长度是否大于等于3，决定结果是返回第三大还是最大值。



## 解法二：空间换时间

时间复杂度：$O(n)$

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let second = Number.MIN_SAFE_INTEGER
  let first = Number.MIN_SAFE_INTEGER
  let third = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > first) {
      third = second
      second = first
      first = nums[i]
    } else if (nums[i] > second && nums[i] < first) {
      third = second
      second = nums[i]
    } else if (nums[i] > third && nums[i] < second) {
      third = nums[i]
    }
  }
  return third === Number.MIN_SAFE_INTEGER ? first : third
}
```

### 解题思路

维护三个变量，分别表示第一到第三大的数。

遍历数组中的值时，判断其与这三个数的关系。

需要注意一点，存在相同值的情况，所以在后面几个判断中需要增加小于前面值条件。

