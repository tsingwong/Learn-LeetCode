# [缺失数字](https://leetcode-cn.com/problems/missing-number/description/)

## 解法一：哈希表

时间复杂度：

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let temp = []
  for (let i = 0; i < nums.length + 1; i++) {
    temp.push(i)
  }
  while (nums.length) {
    temp.splice(nums.pop(), 1, 0)
  }
  return temp.reduce((prev, curr) => prev + curr, 0)
}
```



### 解题思路

我最开始是用上面的本方法做的。

其中有一个点需要注意，我这里是 `temp.splice(nums.pop(), 1, 0)`，用 0 来填充当前位置，以便最后能通过 reduce 来计算结果。

再看了题解之后可以使用

我们将数组中的所有数插入到一个集合中，这样每次查询操作的时间复杂度都是 O(1) 的。

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let set = new Set()
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i])
  }
  for (let i = 0; i < nums.length + 1; i++) {
    if (!set.has(i)) {
      return i
    }
  }
  return -1
}
```



## 解法二：排序

时间复杂度：$O(nlogn)$

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  nums.sort((a, b) => a - b)
  if (nums[nums.length - 1] !== nums.length) {
    return nums.length
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i
    }
  }
  return -1
}
```

### 解题思路

先排序，然后判断当前位的数组是否等于当前的索引值。

需要注意存在[0] 的情况，所以需要前置一个判断。



### 解法三：数学公式

时间复杂度：$O(n)$

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  nums.sort((a, b) => a - b)
  if (nums[nums.length - 1] !== nums.length) {
    return nums.length
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i
    }
  }
  return -1
}
```

### 解题思路

我们在线性时间内可以求出数组中所有数的和，并在常数时间内求出前 n+1*n*+1 个自然数（包括 0）的和，将后者减去前者，就得到了缺失的数字。