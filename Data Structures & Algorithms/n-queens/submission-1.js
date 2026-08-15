class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const result = [];
        const path = [];
        const used = new Array(n).fill(false);

        const diagonalValid = function(curPath){
            const length = curPath.length;

            for (let i = 0; i < length - 1; i++){
                if (Math.abs(curPath[i] - curPath[length - 1]) === Math.abs(i - (length - 1))){
                    return false;
                }
                
            }
            return true;
        }
        const backTracking = function(){
            if (!diagonalValid(path)) return;
            if (path.length === n){
                const board = [];
                for (let i = 0; i < n; i++){
                    const row = new Array(n).fill(".");
                    row[path[i]] = "Q";
                    board.push(row.join("")); 
                }
                result.push([...board]);
            }
            for (let i = 0; i < n; i++){
                if (!used[i]){
                    used[i] = true;
                    path.push(i);
                    backTracking();
                    path.pop();
                    used[i] = false;
                }
            }
        }
        backTracking();
        return result;
        

    }
}
