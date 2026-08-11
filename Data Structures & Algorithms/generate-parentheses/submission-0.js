class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const result = [];
        const path = [];
        const map = new Map();
        const choices = ["(", ")"];
        map.set("(", n);
        map.set(")", n);
        const backTracking = function(){
            if (path.length === 2 * n){
                result.push(path.join(""));
                return;
            }
            if (map.get(")") < map.get("(")) return;
            for (let i = 0; i < choices.length; i++){
                const count = map.get(choices[i]);
                if (count > 0){
                    path.push(choices[i]);
                    map.set(choices[i], count - 1);
                    backTracking();
                    path.pop();
                    map.set(choices[i], count);
                }
                
            }
        }
        backTracking();
        return result;
    }
}
