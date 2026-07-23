class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length;
        const result = new Array(n).fill(0);
        const minStack = [];
        let j = -1;
        for (let i = 0; i < n; i++){
            while (minStack.length > 0 && temperatures[minStack[minStack.length - 1]] < temperatures[i]){
                j = minStack.pop();
                result[j] = i - j;
            }
            minStack.push(i);
        }
        return result;
    }
}
