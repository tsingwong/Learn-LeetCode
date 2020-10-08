# [机器人能否返回原点](https://leetcode-cn.com/problems/robot-return-to-origin/description/)

## 解法一：遍历

时间复杂度：$O(n)$

```javascript
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let x = 0
  let y = 0
  for (let i = 0; i < moves.length; i++) {
    switch (moves[i]) {
      case 'U':
        y += 1
        break
      case 'R':
        x += 1
        break
      case 'D':
        y -= 1
        break
      case 'L':
        x -= 1
        break

      default:
        break
    }
  }
  return x === 0 && y === 0
}
```

### 解题思路

使用 (x, y) 来表示当前的位置，遍历字符串，匹配到 URDL 分别对应上有下左移动，最后看 x y 是否还是 0，来判断是否在原点。

