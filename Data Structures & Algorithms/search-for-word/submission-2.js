class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const m = board.length;
        const n = board[0].length;
        const seen = Array.from({length: m}, ()=> new Array(n).fill(false));
        const directions = [ [1, 0], [-1, 0], [0, -1], [0, 1]];
        const path = [];
        const dfs = function(x, y){
            if (board[x][y] !== word[path.length]) return false;
            path.push(board[x][y]);
            seen[x][y] = true;
            if (path.length === word.length && path.join("") === word) return true;
            for (let i = 0; i < 4; i++){
                const nextX = x + directions[i][0];
                const nextY = y + directions[i][1];
                if (nextX < 0 || nextX >= m || nextY < 0 || nextY >= n || seen[nextX][nextY]) continue;
                const cur = dfs(nextX, nextY);
                if(cur) return true; 
            }
            seen[x][y] = false;
            path.pop();
            return false;  
        }
        for (let i = 0; i < m; i++){
            for (let j = 0; j < n; j++){
                
                if (dfs(i, j)) return true;
                
            }
        }
        return false;
    }
}
