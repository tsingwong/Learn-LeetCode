# [二叉树的所有路径](https://leetcode-cn.com/problems/binary-tree-paths/description/)



## 解法一：DFS

时间复杂度：$O(n)$

```javascript
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  function DFS(root, path, paths) {
    root && path.push(root.val)
    if (!root.left && !root.right) {
      paths.push(path.join('->'))
      return
    }
    root.left && DFS(root.left, path.slice(), paths)
    root.right && DFS(root.right, path.slice(), paths)
  }
  let result = []
  if (!root) {
    return result
  }
  DFS(root, [], result)
  return result
}
```

### 解题思路

这里有几个细节需要注意：

1. 递归的时候需要多传递两个参数，一个表示生成当前的 path 的路径集合，一个表示最终结果的集合
2. 递归往下传递时，需要浅拷贝下 表示生成当前的 path 的路径集合
3. 最终退出递归时，需要在最终结果的集合中添加当前 path 集合生成的字符串

## 解法二：BFS


```javascript
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let stack = []
  let result = []
  let path = []
  if (!root) {
    return []
  }
  path.push([root.val])
  stack.push(root)
  while (stack.length) {
    let curr = stack.pop()
    let currPath = path.pop()
    if (!curr.left && !curr.right) {
      result.push(currPath.join('->'))
    }
    if (curr.left) {
      stack.unshift(curr.left)
      let temp = currPath.slice()
      temp.push(curr.left.val)
      path.unshift(temp)
    }
    if (curr.right) {
      stack.unshift(curr.right)
      let temp = currPath.slice()
      temp.push(curr.right.val)
      path.unshift(temp)
    }
  }
  return result
}
```

### 解题思路



维护三个数组，分别是一个表示生成当前的路径集合，一个表示最终结果的集合，一个是节点的集合。

跟上面解法类似，这里也需要浅拷贝一下当前的路径集合。

