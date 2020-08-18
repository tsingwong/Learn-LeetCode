# [167. 两数之和 II - 输入有序数组](https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/)

## 解法一：双指针

时间复杂度：$O(n)$

```javascript
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0
  let right = numbers.length - 1
  while (left < right) {
    if (numbers[left] + numbers[right] === target) {
      return [left + 1, right + 1]
    }
    if (numbers[left] + numbers[right] > target) {
      right--
    } else {
      left++
    }
  }
  return []
}
```



### 解题思路

排序数组、两数之和 很容易就想到了双指针夹壁。



初始时两个指针分别指向第一个元素位置和最后一个元素的位置。

每次计算两个指针指向的两个元素之和，并和目标值比较。

- 如果两个元素之和等于目标值，则发现了唯一解。

- 如果两个元素之和小于目标值，则将左侧指针右移一位。

- 如果两个元素之和大于目标值，则将右侧指针左移一位。

移动指针之后，重复上述操作，直到找到答案。



