# [学生出勤记录 I](https://leetcode-cn.com/problems/student-attendance-record-i/description/)

## 解法一：笨方法

时间复杂度：$O(n)$

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let countA = 0
  let maxCountC = 0
  let countC = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== 'L') {
      countC = 0
    } else {
      countC += 1
    }
    if (s[i] === 'A') {
      countA += 1
    }
    maxCountC = Math.max(maxCountC, countC)
  }
  if (countA <= 1 && maxCountC <= 2) {
    return true
  }
  return false
}
```



### 解题思路

笨方法，维护三个变量，分别表示 A 的个数和 连续 C的个数及结束时 C 的连续数。