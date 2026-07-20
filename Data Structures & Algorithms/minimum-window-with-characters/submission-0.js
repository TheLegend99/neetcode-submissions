class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.length < t.length ) return "";
        const count1 = new Map();
        const count2 = new Map();
        for (let i = 0; i < t.length; i++){
            count2.set(t[i], (count2.get(t[i]) || 0) + 1);
        }
        let result = [-1, -1];
        let minSize = Infinity;
        let l = 0, r = 0;
        const uniqueCount = count2.size;
        let matchCount = 0;
        while (r < s.length && matchCount < uniqueCount){
            count1.set(s[r], (count1.get(s[r]) || 0) + 1);
            if (count2.has(s[r]) && count1.get(s[r]) === count2.get(s[r])){
                matchCount++;
            }
            while (matchCount === uniqueCount){
                if (r- l + 1 < minSize){
                    minSize = r - l + 1;
                    result = [l, r];
                }
                count1.set(s[l] , count1.get(s[l]) - 1);
                if (count1.get(s[l]) < count2.get(s[l])){
                    matchCount--;
                }
                l++;
            }
            r++;
        }
        return minSize === Infinity ? '' : s.slice(result[0], result[1]+ 1);

        

    }
}
