### 题目

Given an array of integers, return **indices** of the two numbers such that they add up to a specific target.

You may assume that each input would have **exactly** one solution, and you may not use the *same* element twice.

### 解析

- First of all, we should judge the `length` of `nums`,if the `length` less than 1，return `[]`
- Use Array `other_nums` to save already looped number
- if `target` minus loop value in the Array `other_nums`, return the Array contain result and index. Else send loop value to `other_nums`.
- The Last, when there are no result , we should return `[]`

### 解析2

- First of all, we should judge the `length` of `nums`,if the `length` less than 1，return `false`
- Use `k` to count, loop the value of `nums`, make other Array `temp_nums` equal to slice `nums` from `k` to the end
- If `target` minus loop value in `temp_nums`, return the Array contain `k - 1` and `nums.indexOf(j)`
- The Last, when there are no result , we should return `[]`