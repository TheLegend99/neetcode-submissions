class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        
        let result = 0;
        const stack = [];
       
        for (let i = 0; i <= heights.length; i++){
            if (i === heights.length){
                while (stack.length > 0 ){
                    const idx = stack.pop();
                    if (stack.length > 0) {
                        result = Math.max(result,  heights[idx] * (i - stack[stack.length - 1] - 1));
                    } else {
                        result = Math.max(result,  heights[idx] *i);
                    }
                
                }   

            } else {
                while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]){
                    const idx = stack.pop();
                    
                    if (stack.length > 0) {
                        result = Math.max(result,  heights[idx] * (i - stack[stack.length - 1] - 1));
                    } else {
                        result = Math.max(result,  heights[idx] *i);
                    }
                
                }   
                stack.push(i);
            }

            
        }
        return result;
        


    }
}
