class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (digits === '') return [];
        const digitsMap = {"2": "abc", "3": "def", "4": "ghi", "5": "jkl", "6": "mno", "7": "pqrs", "8": "tuv", "9": "wxyz"};
        const result = [];
        const path = [];
        const backTracking = function(idx){
            if (path.length === digits.length){
                result.push([...path].join(""));
                return;
            }
            
            for (let i = 0; i < digitsMap[digits[idx]].length; i++){
                path.push(digitsMap[digits[idx]][i]);
                backTracking(idx+1);
                path.pop();
            }
            
        }
        backTracking(0);
        return result;
    }
}
