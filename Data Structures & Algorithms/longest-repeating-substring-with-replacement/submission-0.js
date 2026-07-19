class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const count = new Map();
        let result = 1;
        let i = 0;
        let maxF = 0;
        for (let j = 0; j < s.length; j++){
            count.set(s[j], (count.get(s[j]) || 0) + 1);
            maxF = Math.max(maxF, count.get(s[j]));
            while (j - i + 1 - maxF > k){
                count.set(s[i], count.get(s[i]) - 1);
                i++;
            }
            result = Math.max(result, j - i + 1);

        }
        return result;

    }
}
