class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const n = nums1.length;
        const m = nums2.length;
        
        const getKthElement = function(nums1, nums2, k){
            if (nums1.length > nums2.length){
                return getKthElement(nums2, nums1, k);
            }
            if (nums1.length === 0){
                return nums2[k-1];
            }
            if (k === 1){
                return Math.min(nums1[0], nums2[0]);
            }
            const i = Math.min(nums1.length, Math.floor(k/2));
            const j = Math.min(nums2.length, Math.floor(k/2));
            if (nums1[i - 1] < nums2[j-1]){
                return getKthElement(nums1.slice(i, nums1.length), nums2, k - i)
            } else {
                return getKthElement(nums1, nums2.slice(j, nums2.length), k - j);
            }
        }

        const total = m + n;
        if (total % 2 === 0){
            return (getKthElement(nums1, nums2, total/2) + getKthElement(nums1, nums2, total/2 + 1))/2;
        } else {
            return getKthElement(nums1, nums2, (total+1)/2);
        }
    }
}
