# [最小绝对差](https://leetcode-cn.com/problems/minimum-absolute-difference/description/)

## 解法一：排序 + 双指针

时间复杂度：$O(nlogn)$

```javascript
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  let minArr = []
  arr.sort((a, b) => a - b)
  let min = Number.MAX_SAFE_INTEGER
  let left = 0
  let right = 1
  while (right < arr.length) {
    let temp = Math.abs(arr[left] - arr[right])
    if (temp === min) {
      minArr.push([arr[left], arr[right]])
    } else if (temp < min) {
      min = temp
      minArr = []
      minArr.push([arr[left], arr[right]])
    }
    left++
    right++
  }
  return minArr
}
```



### 解题思路

如果使用笨方法暴力遍历的话，可能会超时。

所以这时候要想一些其他的办法，即使用双指针。