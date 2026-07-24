class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const n = matrix.length;
        const m = matrix[0].length;
        let u = 0, d = n - 1, l = 0, r = m - 1;
        while (u <= d){
            const midRow = Math.floor( (u+d)/2);
            if (matrix[midRow][0] <= target && matrix[midRow][m-1] >= target ){
                while (l <= r){
                    const midCol = Math.floor((l + r)/2);
                    if (matrix[midRow][midCol] === target){
                        return true;
                    } else if (matrix[midRow][midCol] > target){
                        r = midCol - 1;
                    } else {
                        l = midCol + 1;
                    }
                }
                return false;
            } else if (matrix[midRow][0] > target ){
                d = midRow - 1;
            } else if (matrix[midRow][m - 1] < target){
                u = midRow + 1;
            }
        }
        return false;
    }
}
