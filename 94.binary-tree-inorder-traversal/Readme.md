# [二叉树的中序遍历](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/description/)



## 解法一：递归

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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  function visit(root) {
    root.left && visit(root.left)
    result.push(root.val)
    root.right && visit(root.right)
  }
  // 左中右 中序
  let result = []
  root && visit(root)

  return result
}
```



### 解题思路

这里需要构造一个内部的函数，以保证能返回一个数组。

这里需要注意需要有几个存在性的判断条件。否则程序会 panic。



## 解法二：迭代

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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let result = []
  let stack = []
  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    result.push(root.val)
    root = root.right
  }
  return result
}
```



### 解题思路

左-根-右

每到一个节点 A ，因为根的访问在中间，将 A 入栈。然后遍历左子树，接着访问 A ， 最后遍历 右子树。

在访问完 A 后，A 就可以出栈了。因为 A 和 他的左子树都完成访问了。

