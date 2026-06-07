class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let groups = {};
        for (let i of strs){
            let key = i.split('').sort().join('');
            if(key in groups){
                groups[key].push(i);
            } else {
                groups[key] = [i];
            }
        }
        return Object.values(groups);
    }
}
