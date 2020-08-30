# [删除链表中的节点](https://leetcode-cn.com/problems/delete-node-in-a-linked-list/description/)

## 解法一：

时间复杂度：$O(1)$

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  node.val = node.next.val
  node.next = node.next.next
}
```

### 解题思路

![img](Readme.assets/3579a496897df5321c110bf1301872b6e10c342f5e400ce45d2db0348d00d715-file_1555866623326.png)

![img](Readme.assets/902dc5d3f8c44d3cbc0b6e837711cad2eefc021fd2b9de8dfabc6d478bc779b1-file_1555866680932.png)

![img](Readme.assets/902dc5d3f8c44d3cbc0b6e837711cad2eefc021fd2b9de8dfabc6d478bc779b1-file_1555866680932-20200830235118559.png)

![img](Readme.assets/2a6409b98dd73d6649fdc6fb984c88690547127467104c3923367be6f8fbc916-file_1555866773685.png)