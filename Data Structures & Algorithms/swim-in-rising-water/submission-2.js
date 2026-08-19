class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        const n = grid.length;
        let max = -Infinity;
        let min = Infinity;
        for (let i = 0; i < n; i++){
            for (let j = 0; j < n; j++){
                max = Math.max(max, grid[i][j]);
                min = Math.min(min, grid[i][j]);
            }
        }
        const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        
        const dfs = function(x, y, t, visited){
            if (grid[x][y] > t) return false;
            if (x === n - 1 && y === n - 1) return true;
            visited[x][y] = true;
            for (let i = 0; i < 4; i++){
                const nextX = x + dirs[i][0];
                const nextY = y + dirs[i][1];
                if (nextX < 0 || nextX >= n || nextY < 0 || nextY >= n || grid[nextX][nextY] > t ||  visited[nextX][nextY]) continue;
                if (dfs(nextX, nextY, t, visited)) return true;
            }
           
            return false;
        }
        let l = min, r = max;
        while (l < r){
            const mid = Math.floor(l + (r-l)/2);
            const visited = Array.from({length: n}, ()=> new Array(n).fill(false));
            if (dfs(0, 0, mid, visited)){
                r = mid;
            } else {
                l = mid + 1;
            }
        }
        return r;
    }
}
