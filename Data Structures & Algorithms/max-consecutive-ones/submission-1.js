class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let count = 0;
        let max_count = 0;
        for (let i = 0; i < nums.length; i++){
            if (nums[i] == 1){
                count += 1;
                max_count = Math.max(max_count, count);
            } else {
                count = 0;
            }
            return max_count;
        }
    }
}
