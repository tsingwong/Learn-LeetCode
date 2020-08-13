# [平衡二叉树](https://leetcode-cn.com/problems/balanced-binary-tree/description/)

## 解法一：暴力法（自顶向下）

时间复杂度：$O(nlogn)$

```javascript
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  function height(node) {
    if (!node) return 0
    return Math.max(height(node.right), height(node.left)) + 1
  }
  if (!root) {
    return true
  }
  if (Math.abs(height(root.right) - height(root.left)) > 1) {
    return false
  }
  return isBalanced(root.right) && isBalanced(root.left)
}
```



### 解题思路

自顶向下的比较每个节点的左右子树的最大高度差，如果二叉树中每个节点的左右子树最大高度差小于等于 `1` ，即每个子树都平衡时，此时二叉树才是平衡二叉树。