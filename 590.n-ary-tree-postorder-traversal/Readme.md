# [590. N叉树的后序遍历](https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/)



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
 * @return {number[]}
 */
var postorder = function (root) {
  let result = []
  function visit(root) {
    root.children.length > 0 &&
      root.children.forEach(child => {
        child && visit(child)
      })
    root && result.push(root.val)
  }
  root && visit(root)
  return result
}
```



### 解题思路

跟之前的类似，先遍历 children 节点，然后再遍历根节点，就实现 左- 右 - 根 的遍历顺序。



## 解法二：迭代

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
 * @return {number[]}
 */
var postorder = function (root) {
  let result = []
  let deque = []

  root && deque.unshift(root)
  while (deque.length) {
    let currentNode = deque.pop()
    result.unshift(currentNode.val)
    let children = currentNode.children
    for (let child of children) {
      child && deque.push(child)
    }
  }

  return result
}
```



### 解题思路

维护了一个队列 和 结果数组。

举个栗子是 [1,null,3,2,4,null,5,6]

![img](Readme.assets/narytreeexample.png)

| 队列      | 结果数组           |
| --------- | ------------------ |
| [1]       | []                 |
| [3, 2, 4] | [1]                |
| [3, 2]    | [4, 1]             |
| [3]       | [2, 4, 1]          |
| [5, 6]    | [3, 2, 4, 1]       |
| [5]       | [6, 3, 2, 4, 1]    |
| []        | [5, 6, 3, 2, 4, 1] |

由此可见，`result.unshift(currentNode.val)`这一行代码如果改成 `result.push(currentNode.val)` 就应该是先序遍历了。具体是不是呢，等做到先序的题目就可以验证下咯。