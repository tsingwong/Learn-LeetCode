# [二叉树的最小深度](https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/description/)

## 解法一：深度优先遍历

时间复杂度：$O(n)$

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) {
    return 0
  }
  let leftHeight = minDepth(root.left)
  let rightHeight = minDepth(root.right)
  return leftHeight === 0 || rightHeight === 0
    ? 1 + leftHeight + rightHeight
    : Math.min(leftHeight, rightHeight) + 1
}
```



### 解题思路

递归左右子树：

当有叶子节点时，将深度+1，继续遍历左右子树，找到 left 和 right 最小值返回。
当有左右其中之一为空时，其深度需要 +1 , 则需取 left，right 最大值。由于其中之一为 0，可以直接相加
当左右子数都为空时，返回，可直接包含在上一步中。



## 解法二：广度优先遍历

 时间复杂度：$O(n)$

```javascript
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) {
    return 0
  }
  let level = 0
  let deque = []
  deque.push(root)
  while (deque.length) {
    level += 1
    let size = deque.length
    while (size--) {
      let node = deque.pop()

      if (!node.right && !node.left) {
        return level
      }
      if (node.right) {
        deque.unshift(node.right)
      }
      if (node.left) {
        deque.unshift(node.left)
      }
    }
  }
  return level
}
```



### 解题思路

每一层节点，当有叶子节点（左右均可）时，说明有下一层，level+1，否则找到第一个无叶子节点的层级就是最小层数。