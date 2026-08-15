class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const map = new Map();
        const wordsSet = new Set(words);
        let maxLength = 0;
        for (const word of words){
            maxLength = Math.max(maxLength, word.length);
            for (let i = 0; i < word.length; i++){
                if (!map.has(word[i])){
                    map.set(word[i], new Set());
                }
                if (i < word.length - 1){
                    map.get(word[i]).add(word[i+1]);
                }
            }
        }
        const m = board.length;
        const n = board[0].length;
        let seen = Array.from({length: m}, ()=> new Array(n).fill(false));
        const path = [];
        const resultSet = new Set();
        const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        const dfs = function(x, y){
            seen[x][y] = true;
            path.push(board[x][y]);
            if (wordsSet.has(path.join("") )){
                resultSet.add(path.join(""));
            }
            if (path.length < maxLength){
                const choices = map.get(board[x][y]);
                for (let i = 0;  i < 4; i++){
                    const nextX = x + dirs[i][0];
                    const nextY = y + dirs[i][1];
                    if (nextX < 0 || nextX >= m || nextY <0 || nextY >= n || seen[nextX][nextY] || !choices  || !choices.has(board[nextX][nextY])){
                        continue;
                    }
                    dfs(nextX, nextY);
        

                }
            }
            
            seen[x][y] = false;
            path.pop();
        }
        for (let i = 0; i < m; i++){
            for (let j = 0; j < n; j++){
               if (map.has(board[i][j])){
                    dfs(i, j);
               }
                
            }
        }
        return Array.from(resultSet);

    }
}
