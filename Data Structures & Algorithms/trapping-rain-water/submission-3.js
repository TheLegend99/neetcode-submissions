class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const stack = [];
        let result = 0;
        for (let i = 0; i < height.length; i ++){
            if (stack.length === 0) {
                stack.push(i);
            }else if (stack.length > 0 && height[stack[stack.length-1]] < height[i]){
                while (stack.length > 0 && height[stack[stack.length-1]] < height[i]){
                    const midIdx = stack.pop();
                    if (stack.length > 0){
                        const leftIdx = stack[stack.length - 1];
                        result += (Math.min(height[leftIdx], height[i]) - height[midIdx]) * (i - leftIdx - 1);
                    }
                }
                stack.push(i);
            } else{
                stack.push(i);
            }
        }
        return result;
    }
}
