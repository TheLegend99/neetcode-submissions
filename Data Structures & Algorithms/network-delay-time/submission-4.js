class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        // bellman ford queue optimization
        const minDist = new Array(n+1).fill(Infinity);
        const graph = new Map();
        for (const [u, v, w] of times){
            if (!graph.has(u)) graph.set(u, []);
            graph.get(u).push([v, w]);
        }
        const inQ = new Array(n+1).fill(false);
        const q = [];
        minDist[k] = 0;
        let head = 0;
        q.push(k);
        inQ[k] = true
        while (head < q.length){
            const cur = q[head];
            head++;
            inQ[cur] = false;
            if (graph.has(cur)){
                for (const [v, w] of graph.get(cur)){
                    if ( minDist[cur] + w < minDist[v] ){
                        minDist[v] = minDist[cur] + w;
                        if (!inQ[v] ){
                            q.push(v);
                            inQ[v] = true;
                        }
                        
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
