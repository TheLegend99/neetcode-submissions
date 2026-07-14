class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
        const set = new Set(nums);
        let result = 0;
        for (const num of nums){
            if (num === -Math.pow(10, 9) || !set.has(num-1) ){
                let length = 1;
                while (set.has(num + length)){
                    length++;
                }
                result = Math.max(result, length);
            } 
        }
        return result;
    }
}