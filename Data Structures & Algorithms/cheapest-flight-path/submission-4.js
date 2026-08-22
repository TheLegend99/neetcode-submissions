class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
        const graph  = new Map();
        for (const [u, v, w] of flights){
            if (!graph.has(u)) graph.set( u, []);
            graph.get(u).push([v, w]);
        }
        const q = [];
        const minDist = new Array(n).fill(Infinity);
        minDist[src] = 0;
        let head = 0;
        q.push(src);
       
        let times = k + 1;
       
        while (times-- && head < q.length){
            let size = q.length - head;
            const preMinDist = [...minDist];
            while(size--){
                const u = q[head];
                head++;
              
                
                for (const [v, w] of graph.get(u)?? []){
                    if (minDist[v] > preMinDist[u] + w){
                        minDist[v] = preMinDist[u] + w;
                        
                        q.push(v);
                       
                    }
                }
                
            }
        }
        return minDist[dst] === Infinity ? -1: minDist[dst];
    }
}
