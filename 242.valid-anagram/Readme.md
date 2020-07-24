# [242. 有效的字母异位词](https://leetcode-cn.com/problems/valid-anagram/)



首先需要解释下：

字母异位词：字母出现的次数是一样的。



所以这里需要提一下，解题四件套：

1. 跟面试官反复确认题目细节
2. 可能的解，选出最优解
3. 写代码
4. 测试用例



## 解法一：哈希表

时间复杂度：$O(n)$

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let hashMap = new Map()
  for (let i of s) {
    if (hashMap.has(i)) {
      hashMap.set(i, hashMap.get(i) + 1)
    } else {
      hashMap.set(i, 1)
    }
  }
  for (let i of t) {
    if (hashMap.has(i)) {
      hashMap.set(i, hashMap.get(i) - 1)
    } else {
      return false
    }

    if (hashMap.get(i) === 0) {
      hashMap.delete(i)
    }
  }
  return hashMap.size === 0
}
```



### 解题思路

- 维护一个哈希表
- 遍历第一个字符串，将所有遇到的字符判断是否在哈希表中，在哈希表中就加一，不在就置为以
- 遍历第二个字符串，如果当前字符串不在哈希表中，直接返回false（表示第二个字符串中出现了第一个中没有的字符，那肯定不是有效的字母异位词了），如果存在即减一，并判断哈希表中是否为零，为零即可删除该值。
- 最后判断哈希表的长度是否为零即可。

## 解法二：排序

时间复杂度：$O(nlogn)$  排序的时间复杂度是 $O(nlogn)$ 

```javascript

```



