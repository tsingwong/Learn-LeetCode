# [总持续时间可被 60 整除的歌曲](https://leetcode-cn.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/description/)

## 解法一：两层遍历

时间复杂度：$O(n)$

```javascript
/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
  let result = 0
  for (let i = 0; i < time.length - 1; i++) {
    for (let j = i + 1; j < time.length; j++) {
      if ((time[i] + time[j]) % 60 === 0) {
        result++
      }
    }
  }
  return result
}
```

### 解题思路

这道题很容想到，笨方法双层遍历。