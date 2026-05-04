class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        n = len(arr);
        ans = [];
        for i in range (0, n):
            for j in range(i + 1, n):
                greatest = arr[j]
                for k in range(j, n):
                    if(arr[j] > greatest):
                        greatest = arr[j]
                    else: 
                        continue
        return ans;
            