# [移除链表元素](https://leetcode-cn.com/problems/remove-linked-list-elements/description/)

## 解法一：哨兵

时间复杂度：$O(n)$

```javascript
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let result = new ListNode(-1)
  result.next = head

  let prev = result
  let current = head
  while (current) {
    if (current.val === val) {
      prev.next = current.next
    } else {
      prev = current
    }
    current = current.next
  }
  return result.next
}
```

### 解题思路

最后需要返回整个链表，所以就想到要增加一个哨兵节点。最后只需要返回哨兵的 `next` 节点即可

- 初始化哨兵节点为 `ListNode(-1)` 且设置 哨兵的 `next` 节点是 `head`。
- 初始化两个指针 `current 和 `prev` 指向当前节点和前继节点。
- 当 `current` 节点存在时：
  - 比较当前节点和要删除的节点：若当前节点就是要删除的节点：则 `prev.next = current.next`。
  - 否则设 `prve = current`。
  - 遍历下一个元素：`current = current.next`。
- 最后返回 哨兵 的 `next`节点即可。

![image.png](Readme.assets/79abd00de9bc8811483d019b86b1eafd7f3735800cc244012cde7b8a3d1dd751-image.png)

