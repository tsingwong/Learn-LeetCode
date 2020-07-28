# [二叉树的前序遍历](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/description/)



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
var preorderTraversal = function (root) {
  let result = []
  function visit(root) {
    root && result.push(root.val)
    root.left && visit(root.left)
    root.right && visit(root.right)
  }
  root && visit(root)
  return result
}
```



### 解题思路

没啥好说的，跟前面中序遍历一样，需要注意的是几个判断条件。



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
var preorderTraversal = function (root) {
  let result = []
  let stack = []
  root && stack.push(root)
  while (stack.length) {
    let currentNode = stack.pop()

    result.push(currentNode.val)
    if (!currentNode.right) {
      stack.push(currentNode.right)
    }
    if (!currentNode.left) {
      stack.push(currentNode.left)
    }
  }
  return result
}
```



### 解题思路

- 首先根入栈
- 将根节点出栈，将根节点值放入结果数组中
- 然后遍历左子树、右子树，因为栈是先入后出，所以，我们先右子树入栈，然后左子树入栈
- 继续出栈（左子树被出栈）…….
- 依次循环出栈遍历入栈，直到栈为空，遍历完成

