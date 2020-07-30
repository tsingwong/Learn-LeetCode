# [589. N叉树的前序遍历](https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/)



## 解法一：递归

时间复杂度：$O(n)$

```javascript
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  let result = []
  function visit(root) {
    root && result.push(root.val)
    root.children &&
      root.children.forEach(child => {
        child && visit(child)
      })
  }
  root && visit(root)
  return result
}
```

### 解题思路

递归的思路跟其他的树遍历基本一样没啥区别。



## 解法二：迭代

时间复杂度：$O(n)$

```javascript
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  let stack = []
  let result = []
  root && stack.push(root)
  while (stack.length) {
    let currentNode = stack.pop()
    result.push(currentNode.val)
    let children = currentNode.children
    children.reverse()
    for (let child of children) {
      child && stack.push(child)
    }
  }
  return result
}
```



### 解题思路

稍微有点绕。

其中有一步需要注意的 `children.reverse()`

这一步的目的是为了将子元素 逆序，这样可以保证子节点可以按照顺序依次被 `pop`出来。

