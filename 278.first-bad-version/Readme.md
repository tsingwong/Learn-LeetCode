# [第一个错误的版本](https://leetcode-cn.com/problems/first-bad-version/description/)

## 解法一：二分法

时间复杂度：$O(logn)$

```javascript
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1
    let right = n
    let mid = 0
    while (left <= right) {
      mid = Math.floor((left + right) / 2)
      if (isBadVersion(mid)) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
    return left
  }
}
```

### 解题思路

分析题目得，可以通过二分法来解决。

只不过是二分法的判断条件是 `isBadVersion()` 的结果。

