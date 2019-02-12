/**
 * @file: Describe the file
 * @author: tsingwong
 * @Date: 2019-02-12 19:12:17
 * @Last Modified by: tsingwong
 * @Last Modified time: 2019-02-12 19:12:39
 */
func lengthOfLongestSubstring(s string) int {
    // 记录每个字符出现的最后位置
	lastOccureed := make(map[byte]int)
	start := 0
	maxLength := 0

	for i, ch := range []byte(s) {
		
		if lastI, ok := lastOccureed[ch]; ok && lastI >= start {
			start = lastI + 1
		}
		if i - start + 1 > maxLength {
			maxLength = i - start + 1
		}
		lastOccureed[ch] = i
	}
    return maxLength
}
