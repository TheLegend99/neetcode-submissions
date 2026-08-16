class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const m = grid.length;
        const n = grid[0].length;
        const q = [];
        const seen = Array.from({length:m}, ()=> new Array(n).fill(false));
        const dirs = [[ 1, 0], [-1, 0], [0, 1], [0, -1]];
        for (let i = 0; i < m; i++){
            for (let j = 0; j< n; j++){
                if(grid[i][j] === 2){
                    q.push([i,j]);
                    seen[i][j] = true;
                }
            }
        }
        let head = 0;
        let time = 2;
        while (head < q.length){
            const size = q.length - head;
            for (let j = 0; j < size; j++){
                const [x, y] = q[head];
                head++;
                grid[x][y] = time;
                for (let i = 0; i < 4; i++){
                    const nextX = x + dirs[i][0];
                    const nextY = y + dirs[i][1];
                    if (nextX < 0 || nextX >= m || nextY < 0|| nextY >= n || seen[nextX][nextY] || grid[nextX][nextY] !== 1) {
                        continue;
                    }
                    seen[nextX][nextY] = true;
                    q.push([nextX, nextY]);
                }
            }
            time++;
        }
        let result = 0;
        for (let i = 0; i < m; i++){
            for (let j = 0;  j < n; j++){
                if (grid[i][j] === 1) return -1;
                if (grid[i][j] === 0) continue;
                result = Math.max(result, grid[i][j] - 2); 
            }
        }
        return result;
    }
}
