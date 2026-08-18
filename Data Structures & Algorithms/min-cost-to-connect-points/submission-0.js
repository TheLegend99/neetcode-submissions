class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        //prim 
        const n = points.length;
        const minDist = new Array(n).fill(Infinity);
        const visited = new Array(n).fill(false);
        for (let i = 0; i < n - 1; i++){
            let cur = 0;
            let min = Infinity;
            for (let j = 0; j < n; j++){
                if (!visited[j] && minDist[j] < min ){
                    min = minDist[j];
                    cur = j;
                }
            }
            visited[cur] = true;
            for (let j = 0; j < n; j++){
                if (j === cur) continue;
                const dist = Math.abs(points[cur][0] - points[j][0]) + Math.abs(points[cur][1] - points[j][1]);
                if (!visited[j] && dist< minDist[j]){
                    minDist[j] = dist;
                }
            }
        }
        let result = 0;
        for (let i = 1; i < n; i++){
            result += minDist[i];
        }
        return result;

    }
}
