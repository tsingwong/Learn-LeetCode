# [翻转二叉树](https://leetcode-cn.com/problems/invert-binary-tree/description/)

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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root && (root.left || root.right)) {
    ;[root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
  }
  return root
}
```

### 解题思路

同深度优先遍历的代码。

这里不是遍历时候的操作不是读取其结果，而是交换其左右子树，故 `;[root.left, root.right] = [invertTree(root.right), invertTree(root.left)]`。

## 解法二：广度优先遍历

时间复杂度：$O(n)$

```javascript
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) {
    return root
  }
  let stack = []
  stack.push(root)
  while (stack.length) {
    let node = stack.shift()
    ;[node.left, node.right] = [node.right, node.left]
    node.right && stack.push(node.right)
    node.left && stack.push(node.left)
  }
  return root
}
```

### 解题思路

同广度优先遍历代码。

这不过这里会增加一句交换左右节点的步骤

 `;[node.left, node.right] = [node.right, node.left]`