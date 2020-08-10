# [相同的树](https://leetcode-cn.com/problems/same-tree/description/)

## 解法一：暴力法

时间复杂度：$O(n)$

```javascript
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  let pTraverse = []
  let qTraverse = []
  visit(p, pTraverse)
  visit(q, qTraverse)
  if (pTraverse.length !== qTraverse.length) {
    return false
  }
  for (let i = 0; i < pTraverse.length; i++) {
    if (pTraverse[i] !== qTraverse[i]) {
      return false
    }
  }
  return true
  function visit(tree, arr) {
    tree && arr.push(tree.val)
    tree && (tree.left ? visit(tree.left, arr) : arr.push(null))
    tree && (tree.right ? visit(tree.right, arr) : arr.push(null))
  }
}
```



### 解题思路

想法比较笨

- 先序/中序/后序遍历
- 比较遍历之后的数组

## 解法二：深度优先遍历

时间复杂度：$O(n)$

```javascript
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p === null && q === null) {
    return true
  } else if (p === null || q === null) {
    return false
  }
  if (p.val !== q.val) {
    return false
  }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}
```



### 解题思路

深度优先遍历

- 如果两个二叉树都为空，则两个二叉树相同。

- 如果两个二叉树中有且只有一个为空，则两个二叉树一定不相同。

- 如果两个二叉树都不为空，首先判断它们的根节点的值是否相同，若不相同则两个二叉树一定不同，若相同，再分别判断两个二叉树的左子树是否相同以及右子树是否相同。

这是一个递归的过程，因此可以使用深度优先搜索，递归地判断两个二叉树是否相同。



## 解法三：广度优先遍历



```javascript
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p === null && q === null) {
    return true
  } else if (p === null || q === null) {
    return false
  }
  let pArr = []
  let qArr = []
  pArr.push(p)
  qArr.push(q)
  while (pArr.length && qArr.length) {
    let nodeP = pArr.pop()
    let nodeQ = qArr.pop()

    if (nodeP.val !== nodeQ.val) {
      return false
    }
    let { left: leftP, right: rightP } = nodeP
    let { left: leftQ, right: rightQ } = nodeQ
    if (!(leftP === null && leftQ === null) && (leftP === null || leftQ === null)) {
      return false
    }
    if (!(rightP === null && rightQ === null) && (rightP === null || rightQ === null)) {
      return false
    }
    if (rightP !== null) {
      pArr.push(rightP)
    }
    if (leftP !== null) {
      pArr.push(leftP)
    }
    if (rightQ !== null) {
      qArr.push(rightQ)
    }
    if (leftQ !== null) {
      qArr.push(leftQ)
    }
  }
  return !pArr.length && !qArr.length
}
```



### 解题思路

通过广度优先搜索判断两个二叉树是否相同。

- 同样首先判断两个二叉树是否为空，如果两个二叉树都不为空，则从两个二叉树的根节点开始广度优先搜索。

- 使用两个队列分别存储两个二叉树的节点。初始时将两个二叉树的根节点分别加入两个队列。每次从两个队列各取出一个节点，进行如下比较操作。
  - 比较两个节点的值，如果两个节点的值不相同则两个二叉树一定不同；
  - 如果两个节点的值相同，则判断两个节点的子节点是否为空，如果只有一个节点的左子节点为空，或者只有一个节点的右子节点为空，则两个二叉树的结构不同，因此两个二叉树一定不同；
  - 如果两个节点的子节点的结构相同，则将两个节点的非空子节点分别加入两个队列，子节点加入队列时需要注意顺序，如果左右子节点都不为空，则先加入左子节点，后加入右子节点。
  - 如果搜索结束时两个队列同时为空，则两个二叉树相同。如果只有一个队列为空，则两个二叉树的结构不同，因此两个二叉树不同。