class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let result = 0;
        let curMin = Infinity;
        for (let i = 0; i < prices.length; i++){
            if (prices[i] > curMin){
                result = Math.max(result, prices[i] - curMin);
            } 
            curMin = Math.min(curMin, prices[i]);
        }
        return result;


    }
}
