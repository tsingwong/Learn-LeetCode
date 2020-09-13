# [找不同](https://leetcode-cn.com/problems/find-the-difference/description/)

## 解法一：排序+遍历

时间复杂度：$O(nlogn)$

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  //
  let arrS = s.split('').sort()
  let arrT = t.split('').sort()

  for (let i = 0; i < arrT.length; i++) {
    if (arrS[i] !== arrT[i]) {
      return arrT[i]
    }
  }
  return undefined
}
```

### 解题思路

先排序，然后比较其对应的位置，第一个不一样的字符就是 t 中多余的字符串。

## 解法二：哈希表

时间复杂度：$O(n)$

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let map = new Map()
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.get(s[i]) + 1 || 1)
  }
  for (let i = 0; i < t.length; i++) {
    if (!map.has(t[i]) || map.get(t[i]) === 0) {
      return t[i]
    } else {
      map.set(t[i], map.get(t[i]) - 1)
    }
  }
  return undefined
}
```

### 解题思路

遍历 s 将其中的字符导入到哈希表中，其值为出现次数。

遍历 t 判断其字符是否在哈希表中，如果存在就将其值减一，直到为 0 。

