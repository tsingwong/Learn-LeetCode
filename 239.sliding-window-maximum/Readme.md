# [239. 滑动窗口最大值](https://leetcode-cn.com/problems/sliding-window-maximum/)



## 解法一：暴力解法

时间复杂度: $O(n^2)$

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let deque = []
  let result = []
  let max = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < k; i++) {
    max = Math.max(nums[i], max)
    deque.push(nums[i])
  }
  result.push(max)

  for (let i = 0; i < nums.length - k; i++) {
    max = Number.MIN_SAFE_INTEGER
    deque.shift()
    deque.push(nums[i + k])
    for (let j = 0; j < k; j++) {
      max = Math.max(deque[j], max)
    }
    result.push(max)
  }
  return result
}
```

### 解题思路

暴力法遍历



## 解法二：双端队列

时间复杂度： $O(n)$

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let deque = []
  let result = []
  for (let i = 0; i < nums.length; i++) {
    if (i - deque[0] >= k) {
      deque.shift()
    }
    while (nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop()
    }
    deque.push(i)
    if (i >= k - 1) {
      result.push(nums[deque[0]])
    }
  }
  return result
}
```

### 解题思路

- 核心思想：维护一个单调递减队列，然后最大值就是队列中的第一个元素对应的值
- 合法性检测：滑动窗口外的元素删除
- 维护单调队列：如果新加进来的数大于等于队尾元素，则依次将队尾元素删除吊，始终维持队头元素所对应的值是最大值。

举个栗子：

[1, 3, -1, -3, 5, 3, 6, 7]

其单调队列每次遍历为，这里需要注意入队的是下标！！！

之所以存下标的原因是，可以通过下标直接来计算出滑动窗口之后是否需要将队头删除掉。

[0] ：nums[undefined] = undefined undefined 与任意数字比较都是 false。所以这里 0 入队

[1]：1 < 3，所以 0 从队尾出队，1 从队尾进队

[1, 2]：  3 > -1 , 所以 2 从队尾进队

[1, 2, 3]：同上

[4]：-3 <= 5,-1 <=5 所以对内所有元素都被弹出了

依次类推下去。

