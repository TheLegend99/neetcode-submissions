class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const m = grid.length;
        const n = grid[0].length;
        let result = 0;
        let area = 0;
        const seen = Array.from({length: m}, ()=> new Array(n).fill(false));
        const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        const dfs = function(x, y){
            seen[x][y] = true;
            area++;
            result = Math.max(area, result);
            for (let i = 0; i<4;i++){
                const nextX = x + dirs[i][0];
                const nextY = y + dirs[i][1];
                if (nextX < 0|| nextX >= m || nextY < 0 || nextY >= n || seen[nextX][nextY] || grid[nextX][nextY] === 0)continue;
                dfs(nextX, nextY);
            }
        }
        for (let i = 0; i < m ; i++){
            for (let j = 0; j <n; j++){
                if (!seen[i][j] && grid[i][j] === 1){
                    area = 0;
                    dfs(i, j);
                }
            }
        }
        return result;
    }
}
