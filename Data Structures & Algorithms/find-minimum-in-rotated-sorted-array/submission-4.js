class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        const n = nums.length;
        let l = 0, r = n - 1;
        let res = nums[0];
        let mid = -1;
        while (l <= r){
            if (nums[l] < nums[r]){
                res = Math.min(res, nums[l]);
                break;
            }
            mid = Math.floor((l+r)/2);
            res = Math.min(res, nums[mid]);
            if (nums[mid] <= nums[r]){
                r = mid - 1;
            } else {
                l = mid+1;
            }
        }
        return res;
    }
}
