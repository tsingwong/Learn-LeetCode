# [左叶子之和](https://leetcode-cn.com/problems/sum-of-left-leaves/description/)

## 解法一：深度优先遍历



```javascript
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  let count = 0
  function DFS(root) {
    if (root && root.left) {
      if (!root.left.left && !root.left.right) {
        count += root.left.val
      }
      DFS(root.left, count)
    }
    if (root && root.right) {
      DFS(root.right, count)
    }
  }
  DFS(root)
  return count
}
```

### 解题思路

上面代码里还有其他参数存在，不是标准的递归。

优化一下：

```javascript
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  if (!root) {
    return 0
  }
  if (root.left && !root.left.left && !root.left.right) {
    return root.left.val + sumOfLeftLeaves(root.right)
  } else {
    return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right)
  }
}
```

