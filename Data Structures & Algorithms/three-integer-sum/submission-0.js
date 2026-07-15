class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a-b);
        const count = new Map();
        const result = [];
        for (const num of nums){
            count.set(num, (count.get(num) || 0) + 1);
        }
        for (let i = 0; i < nums.length; i++){
            count.set(nums[i], count.get(nums[i]) - 1);
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            for (let j = i+1; j < nums.length; j++ ){
                count.set(nums[j], count.get(nums[j])-1);
                if (j > i+1 && nums[j-1] === nums[j]) continue;
                if (count.has(-nums[i] - nums[j]) && count.get(-nums[i] - nums[j]) > 0){
                    result.push([nums[i], nums[j], -nums[i] - nums[j]]);
                }
            }
            for (let j = i+1; j < nums.length; j++ ){
                count.set(nums[j], count.get(nums[j])+1);
            }
        }
        return result;
    }
}
