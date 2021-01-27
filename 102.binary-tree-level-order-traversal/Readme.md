# [二叉树的层序遍历](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/description/)

## 解法一：BFS

时间复杂度：$O(N)$

```typescript
function levelOrder(root: TreeNode | null): number[][] {
  let result: Array<Array<number>> = []
  let queue: Array<TreeNode> = []
  root && queue.push(root)
  while (queue.length) {
    let len = queue.length
    let layer = []
    for (let i = 0; i < len; i++) {
      let node = queue.shift()
      node && layer.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    result.push(layer)
  }
  return result
}
```

### 解题思路

![DFS 与 BFS 对比](Readme.assets/fdcd3bd27f4008948084f6ec86b58535e71f66862bd89a34bd6fe4cc42d68e89.gif)

根据上图我们可以知道 BFS 的过程。 需要维护一个队列。

那么重要的问题是我们如何来确定一层的数据呢。

当前队列的长度就是当前层的数量，所以这时候我们需要缓存下来这个length，然后queue 先入先出 length 个节点，然后对于每个节点我们都需要判断其时候存在左右子节点，存在即推入队列中。

