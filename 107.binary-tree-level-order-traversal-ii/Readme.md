

## 解法一：广度优先遍历

时间复杂度：$O(n)$

```javascript
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  let result = []
  let queue = []
  queue.unshift(root)
  while (queue.length) {
    let tempArr = []
    let size = queue.length
    while (size--) {
      let node = queue.pop()
      if (node) {
        queue.unshift(node.left)
        queue.unshift(node.right)
        tempArr.push(node.val)
      }
    }
    tempArr.length && result.unshift(tempArr)
  }
  return result
}
```



### 解题思路

跟其他的二叉树遍历的题目差不多。

BFS 是按层层推进的方式，遍历每一层的节点。题目要求的是返回每一层的节点值，所以这题用 BFS 来做非常合适。

BFS 需要用队列作为辅助结构，我们先将根节点放到队列中，然后不断遍历队列。



## 解法二：深度优先遍历

时间复杂度：$O(n)$

```javascript
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  let result = []

  function visit(tree, depth) {
    if (!tree) return
    if (!result[depth]) {
      result[depth] = []
    }
    tree && result[depth].push(tree.val)
    tree && tree.left && visit(tree.left, depth + 1)
    tree && tree.right && visit(tree.right, depth + 1)
  }
  visit(root, 0)
  result.reverse()
  return result
}
```



### 解题思路

DFS 是沿着树的深度遍历树的节点，尽可能深地搜索树的分支

DFS 做本题的主要问题是： DFS 不是按照层次遍历的。为了让递归的过程中同一层的节点放到同一个列表中，在递归时要记录每个节点的深度 depth 。递归到新节点要把该节点放入 depth 对应列表的末尾。

当遍历到一个新的深度 depth ，而最终结果 res 中还没有创建 depth 对应的列表时，应该在 res 中新建一个列表用来保存该 depth 的所有节点。

