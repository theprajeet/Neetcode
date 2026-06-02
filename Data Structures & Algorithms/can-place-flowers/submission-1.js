class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    canPlaceFlowers(flowerbed, n) {
        let count = 0;
        for(let i = 0; i < flowerbed.length; i++){
            if(!(flowerbed[i] || flowerbed[i-1] || flowerbed[i+1])){
                count ++;
                i++;
            }
            if(count >= n){
                return true;
            }
        }
        return false;
    }
}
