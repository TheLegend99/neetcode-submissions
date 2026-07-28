class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const m = nums1.length;
        const n = nums2.length;
        if (m > n) return this.findMedianSortedArrays(nums2, nums1);
        // number of things in the left half. for the odd total case, the left part doesn't include the median 
        const half = Math.floor( (m + n)/2); 
        let l = 0, r = m ;
        while (l <= r){
            const i = Math.floor((l+r)/2);
            const j = half - i;
            const left1 = i > 0 ? nums1[i - 1] : -Infinity;
            const right1 = i < m ? nums1[i] : Infinity; 
            const left2 = j > 0 ? nums2[j - 1] : -Infinity;
            const right2 = j < n ? nums2[j] : Infinity;
            if (left1 <= right2 && left2 <= right1){
                if ((m + n) %2 === 0){
                    return (Math.max(left1, left2) + Math.min(right1, right2))/2;
                } else {
                    return Math.min(right1, right2);
                }
            } else if (left1 > right2){
                r = i - 1;
            } else {
                // left 2 > right1
                l = i + 1 ;
            }
        }
        return -1;

    }
}
