class Solution:
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        if len(nums) <= 1:
            return false
        other_nums = {}
        # enumerate 遍历
        for key, val in enumerate(nums):
            if target - val in other_nums:
                return [other_nums[target - val], key]
            other_nums[val] = key
        return []

    def twoSum2(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        if len(nums) <= 1:
            return false
        k = 0
        # 遍历键名
        for i in nums:
            j = target - i
            k += 1
            temp_nums = nums[k:]
            if j in temp_nums:
                return [k - 1, nums.index(j)]
        return []


if __name__ == '__main__':
    print Solution().twoSum((1, 9, 7, 3, 7), 15)
