class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const result = [[]];
        const path = [];
        nums.sort((a, b) => a - b);
        const backTracking = function(start){
            if (start === nums.length) return;
            
            for (let i = start; i < nums.length; i++){
                if (i > start && nums[i - 1] === nums[i]) continue;
                path.push(nums[i]);
                result.push([...path]);
                backTracking(i+1);
                path.pop();
            }
        }
        backTracking(0);
        return result;
    }
}
