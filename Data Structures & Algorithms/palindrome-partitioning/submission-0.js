class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        // inclusive
        const isPalindromic = function(s, l, r){
            while (l <= r){
                if (s[l] !== s[r]) return false;
                l++;
                r--;
            }
            return true;
        }
        const result = [];
        const path = [];
       
        const backTracking = function(start){
            if (start === s.length){
                result.push([...path]);
                return;
            }
            for (let i = start; i < s.length; i++){
                if (isPalindromic(s, start, i)){
                    // make the cut at i
                    path.push(s.slice(start, i+1 ));
                    backTracking(i+1);
                    path.pop();
                }
            }
        }
        backTracking(0);
        return result;
    }
}
