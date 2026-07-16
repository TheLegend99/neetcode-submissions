class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let result = 0;
        let l = 0, r = heights.length - 1;
        while (l < r){
            result = Math.max(result, (r - l) * Math.min(heights[l], heights[r]));
            if (heights[l] < heights[r]){
                l++;
            } else {
                r--;
            }
        }
        return result;
    }
}
