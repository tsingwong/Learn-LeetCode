/**
 * @file: Describe the file
 * @author: tsingwong
 * @Date: 2019-02-12 19:10:54
 * @Last Modified by: tsingwong
 * @Last Modified time: 2019-02-12 19:12:05
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s) {
        return 0;
    }
    let ans = 1;

    for (let i = 0; i < s.length; i++) {
        let count = 1;
        let obj = {};
        obj[s[i]] = s[i];
        for (let j = i + 1; j < s.length; j++) {
            if (obj[s[j]]) {
                break;
            } else {
                count++;
                obj[s[j]] = s[j];
            }
        }
        ans = ans >= count ? ans : count;
    }

    return ans;
};


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring2 = function(s) {
    let lastOccurred = {};
    let start = 0;
    let maxLength = 0;
    for (let i = 0; i < s.length; i++) {
        if (lastOccurred[s[i]] >= start) {
            start = lastOccurred[s[i]] + 1;
        }
        maxLength = Math.max(i - start + 1, maxLength);
        lastOccurred[s[i]] = i;
    }
    return maxLength;
};
