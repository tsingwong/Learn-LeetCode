# 15.[三数之和](http://leetcode-cn.com/3sum)

## 解法一：排序 + 双指针

时间复杂度：$O(n^2)$

```typescript
function threeSum(nums: number[]): number[][] {
  let sort_nums = nums.sort((a, b) => a - b)
  let result = []
  let len = nums.length
  if (sort_nums[0] > 0) {
    return []
  }

  for (let i = 0; i < len - 2; i++) {
    if (i > 0 && sort_nums[i] == sort_nums[i - 1]) {
      continue
    }
    let j = i + 1
    let k = len - 1
    while (k > j) {
      let sum = sort_nums[i] + sort_nums[j] + sort_nums[k]
      if (sum === 0) {
        result.push([sort_nums[i], sort_nums[j], sort_nums[k]])
        j++
        k--
        while (k > j && sort_nums[k] === sort_nums[k + 1]) {
          k--
        }
        while (k > j && sort_nums[j] === sort_nums[j - 1]) {
          j++
        }
      } else if (sum > 0) {
        k--
      } else {
        j++
      }
    }
  }
  return result
}
```

### 解题思路

遇事不决先排序，两数夹壁就是干。



- 先将数组进行排序
- 从左侧开始，选定一个值为 定值 ，右侧进行求解，获取与其相加为 00 的两个值
- 类似于快排，定义首和尾
- 首尾与定值 相加
  - 等于 0，记录这三个值
  - 小于 0，首部右移
  - 大于 0，尾部左移
- 定值右移，重复该步骤



![Video_2019-06-19_192352.gif](README.assets/2124b524439bcf0eb159ba43be4420c76f60ff2b3b51f87de269c001a323ea1a-Video_2019-06-19_192352.gif)