# [判断能否形成等差数列](https://leetcode-cn.com/problems/can-make-arithmetic-progression-from-sequence/description/)

## 解法一：排序 + 遍历

时间复杂度：$O(nlogn)$

```javascript
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  arr.sort((a, b) => a - b)
  let distance
  for (let i = 1; i < arr.length; i++) {
    if (typeof distance === 'number' && !isNaN(distance)) {
      if (arr[i] - arr[i - 1] !== distance) {
        return false
      }
    } else {
      distance = arr[i] - arr[i - 1]
    }
  }
  return true
}
```

### 解题思路

先排序，排序之后判断每个间距是否一致。