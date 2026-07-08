class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = new Map();
        for (const str of strs){
            const freq = new Array(26).fill(0);
            for (let i = 0; i < str.length; i++){
                freq[str.charCodeAt(i) - 'a'.charCodeAt()]++;
            }
            const key = freq.join(",");
            if (!result.has(key)) result.set(key, []);
            result.get(key).push(str);
        }
        return [...result.values()]
        

    }
}
