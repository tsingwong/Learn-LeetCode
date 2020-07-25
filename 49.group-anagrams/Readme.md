# [49. 字母异位词分组](https://leetcode-cn.com/problems/group-anagrams/)

## 解法一：哈希表

时间复杂度：$O(n)$

```javascript
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let hashMap = new Map()
  for (let str of strs) {
    let s = str.split('').sort().join()
    if (hashMap.has(s)) {
      let temp = hashMap.get(s)
      temp.push(str)
      hashMap.set(s, temp)
    } else {
      hashMap.set(s, [str])
    }
  }
  return [...hashMap.values()]
}
```

### 解题思路

这个题的思路还好，主要就是维护一个 Map，Map 的 key 是当前字符串排序之后的结果，value 是一个数组，包含所有排序为 key 的 字符串。

注意事项：

这里为什么用 `for ... of`  而不用  `for...in` 呢。

- 循环对象属性时使用 `for...in` ，循环数组时使用 `for...of`
- `for...in` 循环的是 key，`for...of` 循环的是 value
- `for...of` 是 ES6 新增的特性，`for...in` 是 ES 5 的特性
- `for...of` 不能遍历普通对象，需要与 `Object.keys()` 配合使用



最后 `hashMap.values()` 返回的是一个迭代器，要把这个迭代器转换成数组，需要使用 `...`展开操作符。





