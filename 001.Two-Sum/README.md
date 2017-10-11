### 题目

Given an array of integers, return **indices** of the two numbers such that they add up to a specific target.

You may assume that each input would have **exactly** one solution, and you may not use the *same* element twice.

### 解析

- First of all, we should judge the `length` of `nums`,if the `length` less than 1，return `false`
- Use Array `other_nums` to save already looped number
- if `target` minus loop value in the Array `other_nums`, return the Array contain result and index. Else send loop value to `other_nums`.