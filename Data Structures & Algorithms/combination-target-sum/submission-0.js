class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        nums.sort((a, b) => a-b);
        if (nums[0] > target) return [];
        const result = [];
        const path = [];
        let sum = 0;
        const backTracking = function(nums, start){
            if (sum > target) return;
            if (sum === target){
                result.push([...path]);
                return;
            }
            for (let i = start; i < nums.length; i++){
                sum += nums[i];
                path.push(nums[i]);
                backTracking(nums, i);
                path.pop();
                sum -= nums[i];
            }
        }
        backTracking(nums, 0);
        return result;

    }
}
