# [换酒问题](https://leetcode-cn.com/problems/water-bottles/description/)

## 解法一：遍历

时间复杂度：$O(n)$

```javascript
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  let result = numBottles
  while (numBottles >= numExchange) {
    let exchangeNum = Math.floor(numBottles / numExchange)
    result += exchangeNum
    numBottles = exchangeNum + (numBottles % numExchange)
  }
  return result
}
```



### 解题思路

每次取商和取余，作为下一次所有的空瓶子数。每次喝的只有商数量的瓶子。