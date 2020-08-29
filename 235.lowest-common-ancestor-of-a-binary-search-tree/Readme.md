# [二叉搜索树的最近公共祖先](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/)

## 解法一：递归

时间复杂度：$O(n)$

```javascript
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q)
  }
  if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q)
  }
  return root
}
```



### 解题思路

首先来复习一下 BST 二叉平衡树的性质：

- 节点 N 左子树上的所有节点的值都小于等于节点 N 的值
- 节点 N 右子树上的所有节点的值都大于等于节点 N 的值
- 左子树和右子树也都是 BST
  

既然是BST，如果p和q都比root.val小，则递归左子树，如果都比root.val大，则递归右子树，否则，root 即为所求

因为 root 为 p,q 的最近公共祖先，只可能是下面的情况

- p,q 分居root的两个子树

- p 为 root ，q 在root的左或右子树中
- q 为 root ， p 在root 的左或右子树中



## 解法二：迭代

时间复杂度：$O(n)$

```javascript
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  while (root) {
    if (root.val > p.val && root.val > q.val) {
      root = root.left
    } else if (root.val < p.val && root.val < q.val) {
      root = root.right
    } else {
      break
    }
  }
  return root
}
```

### 解题思路

while 循环，当 root 为null时退出

如果p q都在root的左子树中，则遍历到root.left

如果p q都在root的右子树中，则遍历到root.right

否则，说明当前root就是最近公共祖先，找到了，break

最后返回 root 即为所求

