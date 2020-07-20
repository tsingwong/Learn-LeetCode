# [155. 最小栈](https://leetcode-cn.com/problems/min-stack/)

## 解法一：辅助栈



```javascript
/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = []
  this.minStack = [Infinity]
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack[this.stack.length] = x
  if (this.minStack[this.minStack.length - 1] >= x) {
    this.minStack.push(x)
  }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const top = this.top()
  delete this.stack[this.stack.length - 1]
  this.stack.length--
  if (this.minStack[this.minStack.length - 1] === top) {
    delete this.minStack[this.minStack.length - 1]
    this.minStack.length--
  }
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
```



### 解题思路

构建一个辅助栈，用来存放每次 push 之后的最小值。

所以只需要保证这个辅助栈的 push 和 pop 跟基准栈一直就可以了。



## 解法二：空间换时间



```javascript
/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = []
  this.min = Infinity
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  if (this.min >= x) {
    this.stack[this.stack.length] = this.min
    this.min = x
  }
  this.stack[this.stack.length] = x
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const top = this.top()
  delete this.stack[this.stack.length - 1]
  this.stack.length--
  if (this.min === top) {
    this.min = this.stack[this.stack.length - 1]
    delete this.stack[this.stack.length - 1]
    this.stack.length--
  }
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
```

### 解题思路

这个解法真的很巧妙。

- push：如果当前 min 大等于 当前传入值，那么stack 中推入 min 和 当前传入值，这时候的 min 表示除了当前传入值，他是最小的。
- pop：如果当前推出栈的元素正巧是最小值的话，那么除了它之外的最小值就是栈顶元素，所以还需要推出并返回栈顶元素，才能保证返回的是最小值且 stack 的正确性。

举个栗子： push(0) push (1) push(-1) push(2) push(-6) 

最后的结果是 [Infinity,0, 0,1, 0, -1, 2, -1, -6]

如果执行 pop ，min 会变成 -1。stack 会变成 [Infinity,0, 0,1, 0, -1, 2]



