class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;
        const count1 = new Array(26).fill(0);
        const count2 = new Array(26).fill(0);
        for (let i = 0; i < s1.length; i++){
            count1[s1.charCodeAt(i) - 'a'.charCodeAt()]++;
        }
        for (let i = 0; i < s1.length; i++){
            count2[s2.charCodeAt(i) - 'a'.charCodeAt()]++;
        }
        for (let i = 0; i <= s2.length - s1.length; i++){
            let match = true;
            for (let j = 0; j < 26; j++){
                if (count1[j] !== count2[j]) {
                    match = false;
                    break;
                }
            }
            if (match) return true;
            count2[s2.charCodeAt(i) - 'a'.charCodeAt()]--;
            count2[s2.charCodeAt(i + s1.length) - 'a'.charCodeAt()]++;
        }
        return false;


    }


}
