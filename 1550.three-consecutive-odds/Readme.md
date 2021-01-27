# [存在连续三个奇数的数组](https://leetcode-cn.com/problems/three-consecutive-odds/description/)

## 解法一：遍历

时间复杂度：$O(n)$

```javascript
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
  let count = 0
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] % 2 === 1 && arr[i + 1] % 2 === 1 && arr[i + 2] % 2 === 1) {
      return true
    }
  }
  return false
}
```

### 解题思路

疯狂遍历，然后每次判断当前数字和后面俩数字是否为基数。