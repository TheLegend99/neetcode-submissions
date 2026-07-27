class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        const n = nums.length;
        let l = 0, r = n-1;
        let mid = 0;
       
        while (l < r){
            mid = Math.floor((l +r)/2);
            if (nums[mid] > nums[r]){
                l = mid + 1;
            } else {
                r = mid;
            }
        }
        return nums[l];
        
    }
}
