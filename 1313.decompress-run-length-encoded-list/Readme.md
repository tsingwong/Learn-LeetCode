# [解压缩编码列表](https://leetcode-cn.com/problems/decompress-run-length-encoded-list/description/)

## 解法一：遍历

时间复杂度：$O(n)$

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  let result = []
  while (nums.length) {
    let count = nums.shift()
    let number = nums.shift()
    let tempArr = new Array(count)
    tempArr.fill(number)
    result.push(...tempArr)
  }
  return result
}
```

### 解题思路

每次循环时取出前两个值，一个作为个数，一个作为填充数。然后构建一个新的数组，每次遍历的最后把这个数组推到最后的数组中即可。