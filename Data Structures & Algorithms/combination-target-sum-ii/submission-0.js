class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a, b) => a-b);
        if (candidates[0] > target) return [];
        const result =[];
        const path = [];
        let sum = 0;
        const backTracking = function(candidates, start){
            if (sum > target) return;
            if (sum === target){
                result.push([...path]);
                return;
            }
            for (let i = start; i < candidates.length; i++){
                if (i > start && candidates[i-1] === candidates[i]) continue;
                sum += candidates[i];
                path.push(candidates[i]);
                backTracking(candidates, i+1);
                sum -= candidates[i];
                path.pop();
            }
        }
        backTracking(candidates, 0);
        return result;
    }
}
