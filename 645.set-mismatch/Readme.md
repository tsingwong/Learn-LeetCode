# [错误的集合](https://leetcode-cn.com/problems/set-mismatch/description/)

## 解法一：排序

时间复杂度：$o(nlogn)$

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let repeatNum
  let loseNum
  nums.sort((a, b) => a - b)
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) {
      repeatNum = nums[i]
    } else if (nums[i] - nums[i - 1] > 1) {
      loseNum = nums[i] - 1
    }
  }

  if (nums[0] !== 1) {
    loseNum = 1
  } else if (nums[nums.length - 1] !== nums.length) {
    loseNum = nums.length
  }
  return [repeatNum, loseNum]
}
```



### 解题思路

先排序，然后比较相邻两个的差值，相等就是重复元素，相差大于 1 就是缺少的元素。

需要注意两个临界情况，缺少第一个和最后一个的情况。



## 解法二：哈希表

时间复杂度：$O(n)$

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let repeatNum
  let loseNum
  let hash = new Set()
  for (let i = 1; i <= nums.length; i++) {
    hash.add(i)
  }
  for (let i = 0; i < nums.length; i++) {
    if (hash.has(nums[i])) {
      hash.delete(nums[i])
    } else {
      repeatNum = nums[i]
    }
  }
  for (let v of hash.values()) {
    loseNum = v
  }
  return [repeatNum, loseNum]
}
```

### 解题思路

维护一个全集的 set ，然后删除之前判断是否存在，存在可以删除，不存在表示当前元素是重复元素。最后 set 中剩下的元素就是缺少的元素。