class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const result = [];
        const path = [];
        const set = new Set();
        const backTracking = function(){
            if (path.length === nums.length){
                result.push([...path]);
                return;
            }
            for (let i = 0;  i < nums.length; i++){
                if (!set.has(nums[i])){
                    path.push(nums[i]);
                    set.add(nums[i]);
                    backTracking();
                    path.pop();
                    set.delete(nums[i]);
                }
            }
            
        }
        backTracking();
        return result;
    }
}
