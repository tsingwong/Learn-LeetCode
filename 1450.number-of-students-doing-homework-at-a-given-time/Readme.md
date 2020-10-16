# [在既定时间做作业的学生人数](https://leetcode-cn.com/problems/number-of-students-doing-homework-at-a-given-time/description/)



## 解法一：迭代

时间复杂度：$O(n)$

```javascript
/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function (startTime, endTime, queryTime) {
  let result = 0
  for (let i = 0; i < startTime.length; i++) {
    if (queryTime >= startTime[i] && queryTime <= endTime[i]) {
      result++
    }
  }
  return result
}
```



### 解题思路

这个题实在是简单。没啥好说的。所有的评论都是说这道题是刷 leetcode 以来遇到的最简单的题目。 