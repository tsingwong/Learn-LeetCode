# [IP 地址无效化](https://leetcode-cn.com/problems/defanging-an-ip-address/description/)

## 解法一：数组API



```javascript
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  return address.split('.').join('[.]')
}
```

### 解题思路

按照题目逻辑，解答即可。