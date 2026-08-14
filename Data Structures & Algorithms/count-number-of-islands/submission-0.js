class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let result = 0;
        const m = grid.length;
        const n = grid[0].length;
        const seen = Array.from({length: m}, ()=> new Array(n).fill(false));
        const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        const dfs = function(x, y){
            seen[x][y] = true;
            for (let i = 0; i < 4; i++){
                const nextX = x + dirs[i][0];
                const nextY = y + dirs[i][1];
                if (nextX < 0 || nextX >= m || nextY < 0 || nextY >= n || seen[nextX][nextY] || grid[nextX][nextY] !== '1') continue;
                dfs(nextX, nextY);
            }   
        }
        for (let i = 0;  i < m; i++){
            for (let j = 0; j < n; j++){
                if (!seen[i][j] && grid[i][j] === '1'){
                    result++;
                    dfs(i, j);
                }
            }
        }
        return result;
    }
}
