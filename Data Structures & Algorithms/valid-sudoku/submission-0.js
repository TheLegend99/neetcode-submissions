class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rowSets = Array.from({length: 9}, ()=> new Set());
        const colSets = Array.from({length: 9}, ()=> new Set());
        const sqrSets = Array.from({length: 9}, ()=> new Set());
        for (let i = 0; i < 9; i ++){
            for (let j = 0; j < 9; j++){
                const cur = board[i][j];
                if (cur === '.') continue;
                if (rowSets[i].has(cur) || colSets[j].has(cur) || sqrSets[Math.floor(i/3) * 3 + Math.floor(j/3)].has(cur)) return false;
                rowSets[i].add(cur);
                colSets[j].add(cur);
                sqrSets[Math.floor(i/3) * 3 + Math.floor(j/3)].add(cur);
            }
        }
        return true;
    }
    
}
