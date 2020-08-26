# [用队列实现栈](https://leetcode-cn.com/problems/implement-stack-using-queues/description/)

## 解法一

时间复杂度：

- push: $O(1)$
- pop: $O(n^2)$
- top: $O(1)$
- empty: $O(1)$

```javascript
/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  this.queue1 = new Array()
  this.queue2 = new Array()
  this.head = null
}

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue1.push(x)
  this.head = x
}

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  while (this.queue1.length > 1) {
    this.head = this.queue1.shift()
    this.queue2.push(this.head)
  }
  let result = this.queue1.shift()
  while (this.queue2.length) {
    this.queue1.push(this.queue2.shift())
  }
  return result
}

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.head
}

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue1.length === 0
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
```



### 解题思路

用两个队列实现一个栈的基本思路：

栈是先进后出，队列是先进先出。

push 时，将所有的数据都 push 到 queue1 中，这时候为了使 top 方法能做到 $O(1)$ 时间复杂度，所以需要保存最后一个 push 的元素，即栈顶元素。

pop 时，如下图，需要先将前 n -1 个数据推到 queue2 中，这时候 queue1 中只剩下一个最后进入的数据，即栈顶元素了。



![pop( ).png](Readme.assets/1598259441-jfBSVy-pop( ).png)

