class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const map = new Array(26).fill(0);
        for (let i = 0; i < s.length; i++){
            map[s.charCodeAt(i) - 'a'.charCodeAt()] = map[s.charCodeAt(i) - 'a'.charCodeAt()]+1;
        }
        for (let i = 0; i < t.length; i++){
            map[t.charCodeAt(i) - 'a'.charCodeAt()] = map[t.charCodeAt(i) - 'a'.charCodeAt()]-1;
        }
        for (let i = 0; i < 26; i++){
            if (map[i] !== 0) return false;
        }
        return true;
    }
}
