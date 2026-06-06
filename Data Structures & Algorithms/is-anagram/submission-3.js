class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sCount = {};
        let tCount = {};
        if(s.length != t.length){
            return false;
        }
        for(let i = 0; i < s.length; i++){
            if (s[i] in sCount){
                sCount[s[i]] += 1
            } else{
                sCount[s[i]] = 1
            } if (t[i] in tCount){
                tCount[t[i]] += 1
            } else {
                tCount[t[i]] = 1
            }
        }
        for (let key in sCount) {
            if (!(key in tCount) || sCount[key] !== tCount[key]) {
                return false;
            }
        }
        return true;
    }
}
