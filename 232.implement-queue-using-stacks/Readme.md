# [用栈实现队列](https://leetcode-cn.com/problems/implement-queue-using-stacks/description/)

## 解法一：

时间复杂度：

push： $O(n)$

pop：$O(n)$

peek：$O(1)$

```javascript
/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.stack1 = []
  this.stack2 = []
  this.head = null
}

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  if (!this.stack1.length) {
    this.head = x
  }
  while (this.stack1.length) {
    this.stack2.push(this.stack1.pop())
  }
  this.stack2.push(x)
  while (this.stack2.length) {
    this.stack1.push(this.stack2.pop())
  }
}

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  this.head = this.stack1[this.stack1.length - 2]
  return this.stack1.pop()
}

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.head
}

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.stack1.length
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
```

### 解题思路

一个队列是 FIFO 的，但一个栈是 LIFO 的。这就意味着最新压入的元素必须得放在栈底。为了实现这个目的，我们首先需要把 stack1 中所有的元素移到 stack2 中，接着把新元素压入 s2。最后把 stack2 中所有的元素弹出，再把弹出的元素压入 stack1。



![Push an element in queue](Readme.assets/c631edf5bdffe4fb3f9708d1d7ee70e992c1afe17563445b7b29f2686384a2b7-file_1561371337486.png)