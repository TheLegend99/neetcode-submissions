class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        const n = nums.length;
        let l = 0, r = n - 1, mid = -1;
        let cutIdx = -1;
        while(l < r){
            mid = Math.floor( (l+r)/2);
            if (nums[r] > nums[mid]){
                r = mid ;
            } else  {
                l = mid+1;
            }
        }
        cutIdx = r;
        const binarySearch = function(l, r, target){
            while (l <= r){
                const mid = Math.floor((l+r)/2);
                if (nums[mid] === target) {
                    return mid;
                } else if (nums[mid] > target){
                    r = mid - 1;
                } else {
                    l = mid + 1;
                }
            }
            return -1;
        }
        const leftIdx = binarySearch(0, cutIdx - 1, target);
        const rightIdx = binarySearch(cutIdx, n-1, target);
        if (leftIdx !== -1){
            return leftIdx;
        } else{
            return rightIdx;
        }
    }
}
