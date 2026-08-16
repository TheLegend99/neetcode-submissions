class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const m = grid.length;
        const n = grid[0].length;
        const q = [];
        const seen = Array.from({length: m}, ()=> new Array(n).fill(false));
        for (let i = 0; i < m; i++){
            for (let j = 0; j < n; j++){
                if (grid[i][j] === 0) {
                    q.push([i, j]);
                    seen[i][j] = true;
                }
            }
        }
        const dirs = [[1, 0], [-1 ,0], [0, 1], [0, -1]];
        let dist = 0;
        let head = 0;
        while (head < q.length){
            const size = q.length - head;
            for (let i = 0; i < size; i++ ){
                const [x, y] = q[head];
                head++;
                grid[x][y] = dist;
                for (let j = 0; j < 4; j++){
                    const nextX = x + dirs[j][0];
                    const nextY = y + dirs[j][1];
                    if (nextX < 0 || nextX >= m || nextY < 0 || nextY >= n || grid[nextX][nextY] === -1 ||seen[nextX][nextY]){
                        continue;
                    }
                    seen[nextX][nextY] = true;
                    q.push([nextX, nextY]);
                }
            }
            dist++;
        }
    }
}
