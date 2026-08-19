class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        const n = grid.length;
        const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        const visited = Array.from({length: n}, ()=> new Array(n).fill(false));
        let max = n * n + 1;
        const minDist = Array.from({length: n}, ()=> new Array(n).fill(max));
       

        let dist = 0;
        minDist[0][0] = grid[0][0];
        for (let i = 0; i < n; i++){
            for (let j = 0; j < n; j++){
                dist = max;
               let cur = [-1, -1];
                for (let k = 0; k < n; k++){
                    for (let l = 0; l < n; l++){
                        if (!visited[k][l] && minDist[k][l] < dist){
                            cur = [k, l];
                            dist = minDist[k][l];
                            
                        }
                    }
                }
                const [x ,y] = cur;
                visited[x][y] = true;
                
                for (let k = 0;  k < 4; k++){
                    
                    const nextX = x + dirs[k][0];
                    const nextY = y + dirs[k][1];
                    if (nextX < 0 || nextX >= n || nextY < 0 || nextY >= n || visited[nextX][nextY] ) continue;
                    const cand = Math.max(minDist[x][y], grid[nextX][nextY]);
                    if (cand < minDist[nextX][nextY]){
                        minDist[nextX][nextY] = cand
                    }
                }
            }
        }
        return minDist[n-1][n-1];

    }
}
