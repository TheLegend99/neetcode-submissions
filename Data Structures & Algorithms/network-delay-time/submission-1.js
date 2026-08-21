class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        // bellman ford
        const minDist = new Array(n+1).fill(Infinity);
        const graph = new Map();
        for (const [u, v, w] of times){
            if (!graph.has(u)) graph.set(u, []);
            graph.get(u).push([v, w]);
        }
        minDist[k] = 0;
        for (let i = 0; i < n-1; i++){
            for (const [u, v, w] of times){
                if (minDist[u] !== Infinity ){
                    minDist[v] = Math.min(minDist[v], minDist[u] + w);
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
