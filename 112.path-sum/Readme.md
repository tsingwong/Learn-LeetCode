# [路径总和](https://leetcode-cn.com/problems/path-sum/description/)

## 解法一：深度优先遍历

时间复杂度：$O(n)$

```javascript
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (!root) {
    return false
  }
  if (!root.right && !root.left && root.val === sum) {
    return true
  }

  sum = sum - root.val
  return hasPathSum(root.left, sum) || hasPathSum(root.right, sum)
}
```



### 解题思路

我本来是这么写的：

```javascript
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  let flag = false
  function visit(root, target) {
    if (!root) {
      return
    }
    if (!root.right && !root.left && root.val === target) {
      flag = true
    }

    target = target - root.val
    root.left && visit(root.left, target)
    root.right && visit(root.right, target)
  }
  visit(root, sum)
  return flag
}
```

因为我没想到递归返回怎么联系在一起，所以额外增加了一个变量用来标识。



sum —— 从根节点到叶子节点的路径上的节点值相加的目标和

递归。转为判断：左、右子树中能否找出和为 sum - root.val 的路径

每遍历一个节点，sum 就减去当前节点值，当遍历到叶子节点时，已经没有子节点了，如果当前节点值正好等于 sum ，就是找到了从根节点到叶子节点的和为 sum 的路径。

