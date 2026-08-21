class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        // dijkstra
        const graph = new Map();
        const minDist = new Array(n+1).fill(Infinity);
        const visited = new Array(n+1).fill(false);
        for (const [u, v, t] of times){
            if (!graph.has(u)){
                graph.set(u,[]);
            }
            graph.get(u).push([v, t]);
        }
        minDist[k] = 0;
        for (let i = 1; i < n; i++){
            let cur = -1;
            let min = Infinity;
            for (let j = 1; j <= n; j++){
                if (!visited[j] && minDist[j] < min){
                    cur = j;
                    min = minDist[j];
                }
            }
            visited[cur] = true;
            if (!graph.has(cur)) continue;
            const edges = graph.get(cur);
           
            for (const [v, t] of edges){
                if (!visited[v]){
                    const cand = minDist[cur] + t;
                    if (cand < minDist[v]){
                        minDist[v] = cand;
                    }
                }
            }

        }
        let result = 0;
        for (let i = 1; i <= n; i++){
            if (minDist[i] === Infinity) return -1;
            result = Math.max(result, minDist[i]);
        }
        return result;
    }
}
