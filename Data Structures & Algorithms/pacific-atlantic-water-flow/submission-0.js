class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const m = heights.length;
        const n = heights[0].length;
        const seen1 = Array.from({length: m}, ()=> new Array(n).fill(false));
        const seen2 = Array.from({length: m}, ()=> new Array(n).fill(false));
        const q1 = [];
        const q2 = [];
        const result1 = Array.from({length: m}, ()=> new Array(n).fill(false));;
        const result2 = Array.from({length: m}, ()=> new Array(n).fill(false));;
        const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        for (let i = 0; i < m; i++){
            q1.push([i, 0]);
            seen1[i][0] = true;
            q2.push([i, n-1]);
            seen2[i][n-1] = true;
        }
        for (let j = 1; j < n; j++){
            q1.push([0, j]);
            seen1[0][j] = true;
            q2.push([m-1, j - 1]);
            seen2[m-1][j-1] = true;
        }
        const bfs = function(seen, q, result){
            let head = 0;
            while(head < q.length){
                const size = q.length - head;
                for (let i = 0; i < size; i++){
                    const [x, y] = q[head];
                    result[x][y] = true;
                    head++;
                    for (let j = 0; j < 4; j++){
                        const nextX = x + dirs[j][0];
                        const nextY = y + dirs[j][1];
                        if (nextX < 0 || nextX >= m || nextY < 0 || nextY >= n || seen[nextX][nextY] || heights[nextX][nextY] < heights[x][y]){
                            continue;
                        }
                        seen[nextX][nextY] = true;
                        q.push([nextX, nextY]);
                    }
                }
            }
        }
        bfs(seen1, q1, result1);
        bfs(seen2, q2, result2);
        const result = [];
        for (let i = 0; i < m; i++){
            for (let j = 0; j < n; j++){
                if (result1[i][j] && result2[i][j]) result.push([i, j]);
            }
        }
        return result;
    }
}
