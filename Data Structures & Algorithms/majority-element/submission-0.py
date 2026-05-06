class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        ans = {}
        largest = 0;
        n = len(nums)
        for i in range(n):
            if(nums[i] not in ans):
                ans[nums[i]] = 1;
            elif(nums[i] in ans):
                ans[nums[i]] += 1;
        most_key = 0
        most = 0;
        for key, value in (ans.items()):
            if(value > most):
                most = value
                most_key = key
        return most_key