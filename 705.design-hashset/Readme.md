# [设计哈希集合](https://leetcode-cn.com/problems/design-hashset/description/)

## 解法一：数组

时间复杂度：$O(n)$

```javascript
/**
 * Initialize your data structure here.
 */
var MyHashSet = function () {
  this.set = []
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  let index = 0
  for (let i = 0; i < this.set.length; i++) {
    if (this.set[i] === key) {
      index = i
      break
    }
  }
  !index && this.set.push(key)
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  for (let i = 0; i < this.set.length; i++) {
    if (this.set[i] === key) {
      this.set.splice(i, 1)
      break
    }
  }
}

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  for (let i = 0; i < this.set.length; i++) {
    if (this.set[i] === key) {
      return true
    }
  }
  return false
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
```

### 解题思路

遍历数组。