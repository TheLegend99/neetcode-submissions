class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const n = nums.length;
        const freq = Array.from({length: n+1}, ()=> []);
        const count = {};
        for (const num of nums){
            count[num] = (count[num] || 0) + 1;
        }
        for (const num in count){
            freq[count[num]].push(num);
        }
        const result = [];
        for (let i = n; i > 0 ; i--){
            for (const num of freq[i]){
                result.push(num);
                if (result.length === k){
                    return result;
                }
            }
        }
        return result;
    }
}
