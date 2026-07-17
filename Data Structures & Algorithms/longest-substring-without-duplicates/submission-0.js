class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let result = 0;
        const map = new Map();
        let i = 0;
        for (let j = 0; j < s.length; j++){
            while ( map.has(s[j]) && map.get(s[j]) > 0){
                if (map.has(s[i])){
                    map.set(s[i], map.get(s[i]) - 1);
                }
                i++;
            }
            map.set(s[j], (map.get(s[j]) || 0 ) + 1);
            result = Math.max(result, j - i + 1);
        }
        return result;

    }
}
