class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = [[]];
        const path = [];
        const backTracking = function(nums, start){
            
            for (let i = start; i < nums.length; i++){
                path.push(nums[i]);
                result.push([...path]);
                backTracking(nums, i + 1);
                path.pop();
            }
        }
        if (nums.length > 0){
            backTracking(nums, 0)
        }
        
        return result;
    }
}
