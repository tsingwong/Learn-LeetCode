/*
 * @Author: tsingwong 
 * @Date: 2017-10-11 18:15:50 
 * @Last Modified by: tsingwong
 * @Last Modified time: 2017-10-11 21:56:51
 */
var twoSum = function (nums, target) {
    const len = nums.length;
    if (len <= 1) {
        return [];
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
    return [];
};

let twoSum2 = function (nums, target) {
    const len = nums.length;
    if (len <= 1) {
        return [];
    }
    let k = 0;
    for (let val of nums) {
        let j = target - val;
        k += 1;
        let temp_nums = nums.slice(k);
        if (temp_nums.indexOf(j) > -1) {
            return [k - 1, nums.indexOf(j)];
        }
    }
    return [];
}

console.log(twoSum([1, 9, 7, 3, 7], 12));