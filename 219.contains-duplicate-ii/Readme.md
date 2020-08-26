# [存在重复元素 II](https://leetcode-cn.com/problems/contains-duplicate-ii/description/)

## 解法一：哈希表

时间复杂度：$O(n)$

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      if (i - map.get(nums[i]) - 1 < k) {
        return true
      }
    }
    map.set(nums[i], i)
  }
  return false
}
```

### 解题思路

维护一个哈希表，key 是当前数字，value 是当前顺序，每次通过哈希表中是否存在，且距离 < k 得到其结果。



## 解法二：哈希表

时间复杂度：$(n)$

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let set = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true
    }
    set.add(nums[i])
    if (set.size > k) {
      set.delete(nums[i - k])
    }
  }
  return false
}
```



### 解题思路

维护一个哈希表，里面始终保持最多为 k 个 元素，当出现重复值时表示在 k 范围内存在重复元素。

每次遍历一个元素，判断其是否存在，不存在就加入到哈希表中，这时候当哈希表的长度大于 k 时，要将最前面的数据移除。