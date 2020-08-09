# [83. 删除排序链表中的重复元素](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/)



## 解法一：暴力法

时间复杂度：$O(n)$

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let curr = head
  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next
    } else {
      curr = curr.next
    }
  }
  return head
}
```



### 解题思路

- 指定 curr 指针指向头部 head
- 当 curr 和 curr.next 的存在为循环结束条件，当二者有一个不存在时说明链表没有去重复的必要了
- 当 curr.val 和 curr.next.val 相等时说明需要去重，则将 curr 的下一个指针指向下一个的下一个，这样就能达到去重复的效果
- 如果不相等则 cur 移动到下一个位置继续循环



