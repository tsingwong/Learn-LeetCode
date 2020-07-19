# [21. 合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists/)

## 解法一：哨兵 + 迭代

时间复杂度：$O(n)$

```javascript
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let prevNode = new ListNode(-1)

  let prev = prevNode
  while (l1 && l2) {
    if (l1.val > l2.val) {
      prev.next = l2
      l2 = l2.next
    } else {
      prev.next = l1
      l1 = l1.next
    }
    prev = prev.next
  }
  prev.next = l1 ? l1 : l2
  return prevNode.next
}
```

### 解题思路

链表的题目一般需要迭代的时候，都需要增加一个哨兵节点。

这里增加一个哨兵节点的目的，是为了最后的时候能较容易的返回最后合并之后的链表。

## 解法二：迭代

时间复杂度：$O(n)$

```javascript
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (!l1) {
    return l2
  }
  if (!l2) {
    return l1
  }

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}
```



### 解题思路

前面说过，递归需要关注三个要素：

1. 返回结果
2. 调用单元做了什么
3. 终止条件

在这道题而言：

1. 返回结果：已经排序好子链表
2. 调用单元做了什么：比较传入的两个链表节点的大小，然后将当前链表的 next 指向已经排序好的子链表
3. 终止条件：其中一个链表为空。