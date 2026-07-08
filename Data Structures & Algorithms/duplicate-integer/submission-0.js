class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if (nums.length <= 1) return false;
        nums.sort((a , b)=> a-b);
        for (let i = 1; i < nums.length; i++){
            if (nums[i] === nums[i-1]) return true;
        }
        return false;
    }
}
