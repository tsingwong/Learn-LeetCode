/*
 * @Author: tsingwong 
 * @Date: 2017-10-11 18:15:50 
 * @Last Modified by: tsingwong
 * @Last Modified time: 2017-10-11 19:35:50
 */
var twoSum = function(nums, target) {
    let len = nums.length;
    if (len <= 1) {
        return false;
    }
    let other_nums = [];
    for (let [index, val] of nums.entries()) {
        const otherIndex = other_nums.indexOf(target - val);
        if (otherIndex > -1) {
            return [otherIndex, index];
        } else {
            other_nums[index] = val;
        }
    }
};
