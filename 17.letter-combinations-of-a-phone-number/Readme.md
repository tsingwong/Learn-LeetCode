# [电话号码的字母组合](https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/description/)

## 解法一：分治

时间复杂度：$O(N^M)$

```typescript
function letterCombinations(digits: string): string[] {
  let map = {
    '1': [],
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
    '*': [],
    '0': [],
    '#': []
  }
  let result: Array<string> = []
  let recursion = function (level: number, str: string) {
    if (level === digits.length) {
      if (str) {
        result.push(str)
      }
      return
    }
    for (let val of map[digits.charAt(level)]) {
      recursion(level + 1, str + val)
    }
  }

  recursion(0, '')

  return result
}
```



### 解题思路

使用分治法。

分治法退出条件是层级等于当前字符串长度。

分治法的主体是需要把当前数字对应的字符串全都统计一遍，所以每个都需要下探一层。



