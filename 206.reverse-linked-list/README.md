# 206.



## 解法一：递归

时间复杂度：$O(n)$

```typescript
function reverseList(head: ListNode | null): ListNode | null {

  if (!head || !head.next) {
    return head
  }
  let p: ListNode = reverseList(head.next)
  head.next.next = head
  head.next = null
  return p
}
```

### 解题思路

这道题的递归法比较难理解。

递归的终止条件是：

- 当前节点或下一个节点为空
- 函数内部，改变节点的指向，也就是 `head.next.next = head`，通俗点将，这句话的意思是将 head 的下一个节点指向 head。

需要记住的是 递归函数中每次返回的 cur 其实都只是最后一个节点。

![递归.gif](README.assets/dacd1bf55dec5c8b38d0904f26e472e2024fc8bee4ea46e3aa676f340ba1eb9d-递归.gif)



## 解法二：迭代

时间复杂度：$O(n)$

```typescript
function reverseList(head: ListNode | null): ListNode | null {
  let prev = null
  let curr = head
  if (!curr) return null
  while (curr) {
    let tmp:ListNode|null = curr.next
    curr.next = prev
    prev = curr
    curr = tmp
  }
  return prev
}
```

### 解题思路

这里我们维护两个指针，第一个指针是 prev ，最初是指向 null，第二个指针指向 head。不断遍历 curr，每次迭代玩，都将 curr 的 next 指向 prev，然后 prev 和 curr 前进一步，直到 curr 为空，也就是当前 prev 指到最后一个节点了。

![迭代.gif](README.assets/7d8712af4fbb870537607b1dd95d66c248eb178db4319919c32d9304ee85b602-迭代.gif)