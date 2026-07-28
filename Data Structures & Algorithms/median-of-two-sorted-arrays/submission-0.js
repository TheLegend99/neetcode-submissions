class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const n = nums1.length;
        const m = nums2.length;
        let i = 0, j = 0;
        let median1 = 0, median2 = 0;
        for (let count = 0; count < Math.floor((n + m)/2) +1; count++){
            median2 = median1;
            if (i < n && j < m){
                if (nums1[i] <= nums2[j]){
                    median1 = nums1[i]
                    i++;
                   
                } else {
                    median1 = nums2[j]
                    j++;
                }
            } else if (i < n){
                median1 = nums1[i];
                i++;
        
            } else {
                median1 = nums2[j];
                j++;
            }
        }
        if ((n+m) %2 === 0){
            return (median1 +median2)/2;
        } else {
            return median1;
        }
    }
}
