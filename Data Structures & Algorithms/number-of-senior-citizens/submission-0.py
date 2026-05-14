class Solution:
    def countSeniors(self, details: List[str]) -> int:
        ans = 0;
        for i in range(0, len(details)):
            passenger = details[i]
            age = int(passenger[11:13])
            if (age > 60):
                ans += 1;
            else: 
                continue
        return ans;
