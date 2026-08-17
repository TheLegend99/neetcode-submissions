class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const m = board.length;
        const n = board[0].length;
        const boarders = [];
        const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        for (let i = 0; i < m; i++){
            if (board[i][0] === "O") boarders.push([i, 0]);
            if (board[i][n-1] === "O") boarders.push([i, n - 1]);
            
        }
        for (let i = 1; i < n - 1; i++){
            if (board[0][i] === "O")boarders.push([0, i]);
            if (board[m-1][i] === "O")boarders.push([m-1, i]);
        }
        const dfs = function(x, y){
            board[x][y] = "A";
            for (let i = 0; i < 4; i++){
                const nextX = x + dirs[i][0];
                const nextY = y + dirs[i][1];
                if (nextX < 0 || nextX >= m || nextY < 0 || nextY >= n || board[nextX][nextY] !== 'O') continue;
                dfs(nextX, nextY);
            }
        }
        for (const [x, y] of boarders){
            dfs(x, y);
        }
        for (let i = 0;  i< m; i++){
            for (let j = 0; j < n; j++){
                if (board[i][j] === 'A'){
                    board[i][j] = "O";
                } else if (board[i][j] === 'O'){
                    board[i][j] = 'X';
                }
            }
        }
        
    }
}
