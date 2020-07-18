# [141. 环形链表](https://leetcode-cn.com/problems/linked-list-cycle/)

## 解法一：双指针

时间复杂度：$O(n)$

```javascript
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (head === null || head.next === null || head.next.next === null) {
    return false
  }
  let fast = head.next.next
  let slow = head.next
  while (fast.next !== null && fast.next.next !== null) {
    if (slow.next === fast.next.next) {
      return true
    }
    slow = slow.next
    fast = fast.next.next
  }
  return false
}
```

### 解题思路

双指针分别是 fast 和 slow 快慢指针。

快指针一次走两步，慢指针一次走一步。

他们最终会相遇。

## 解法二：借助哈希表

时间复杂度：$O(n)$

```javascript
var hasCycle = function (head) {
  let hashMap = new Map()
  while (head) {
    if (hashMap.has(head)) {
      return true
    }
    hashMap.set(head, true)
    head = head.next
  }
  return false
}
```

### 解题思路

借助 哈希表 来存放已经遍历过的节点。

然后通过 `hashMap.has()` 方法来判定是否已经遍历过该节点，以确定是否有环。



