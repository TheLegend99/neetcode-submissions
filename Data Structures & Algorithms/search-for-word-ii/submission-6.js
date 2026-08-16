class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const root = {};
        for (const word of words){
            let node = root;
            for (const char of word){
                if (!(char in node)) node[char] = {};
                node = node[char];
            }
            node.word = word;
        }
        const m = board.length;
        const n = board[0].length;
        const seen = Array.from({length: m}, ()=> new Array(n).fill(false));
        const result = [];
        const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        const dfs = function(x, y, node){
            const next = node[board[x][y]];
            seen[x][y] = true;
            if (!next) return;
            if (next.word){
                result.push(next.word);
                delete next.word;
            }
            
            for (let i = 0; i < 4; i++ ){
                const nextX = x + dirs[i][0];
                const nextY = y + dirs[i][1];
                if (nextX < 0 || nextX >= m || nextY < 0 || nextY >= n || seen[nextX][nextY] || !next[board[nextX][nextY]]){
                    continue;
                }
                dfs(nextX, nextY, next);
            }
            seen[x][y] = false;
            if (Object.keys(next).length === 0){
                delete node[board[x][y]];
            }
        }
        for (let i = 0; i < m; i++){
            for (let j = 0; j < n; j++){
                if (board[i][j] in root){
                    dfs(i, j, root);
                }
            }
        }
        return result;
        
    }
}
