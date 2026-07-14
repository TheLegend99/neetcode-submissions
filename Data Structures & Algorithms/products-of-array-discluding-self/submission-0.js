class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const prefix = new Array(n).fill(0), suffix = new Array(n).fill(0);
        prefix[0] = nums[0];
        suffix[n-1] = nums[n-1];
        for (let i = 1; i < n; i++){
            prefix[i] = prefix[i-1] * nums[i];
            suffix[n-1-i] = suffix[n-i] * nums[n-1-i];
        }
        const result = new Array(n).fill(0);
        result[0] = suffix[1];
        result[n-1] = prefix[n-2];
        for (let i = 1; i < n-1; i++){
            result[i] = prefix[i-1] * suffix[i+1];
        }
        return result;


    }
}
