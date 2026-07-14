class Solution {
    alphaNum (c){
        return  (c >= 'A' && c <= 'Z' ) || (c >= 'a' && c <= 'z' ) || (c >= '0' && c <= '9' )
    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const n = s.length;
        let l = 0;
        let r = n-1;
        while (l < r){
            while (l < r && !this.alphaNum(s[l])){
                l++;
            }
            while (l < r && !this.alphaNum(s[r])){
                r--;
            }
            if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
            l++;
            r--;
        }
        return true;
        
    }
    
}
