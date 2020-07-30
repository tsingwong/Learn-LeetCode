# [N叉树的层序遍历](https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/description/)

## 解法一：递归

时间复杂度：$O(n)$

```javascript
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let result = []
  function visit(root, k) {
    if (!root) {
      return null
    }
    if (!result[k]) {
      result[k] = []
    }
    result[k].push(root.val)
    let children = root.children
    for (let child of children) {
      child && visit(child, k + 1)
    }
  }
  root && visit(root, 0)
  return result
}
```



### 解题思路

跟其他的递归类似，这里是需要增加一个 k 作为当前是第几层，以方便处理同层数据。