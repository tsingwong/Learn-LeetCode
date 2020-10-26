# [拥有最多糖果的孩子](https://leetcode-cn.com/problems/kids-with-the-greatest-number-of-candies/description/)

## 解法一：遍历



时间复杂度：$O(n)$

```javascript
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let max = Number.MIN_SAFE_INTEGER
  let result = []
  for (let i = 0; i < candies.length; i++) {
    max = Math.max(max, candies[i])
  }
  let min = max - extraCandies
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] >= min) {
      result.push(true)
    } else {
      result.push(false)
    }
  }
  return result
}
```



### 解题思路

两次遍历

第一次遍历是为了得到最大值，第二次遍历是计算当前小朋友是否能做到加上其他糖果达到最大值。

