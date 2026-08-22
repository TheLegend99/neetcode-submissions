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
        
        let minDist = new Array(n).fill(Infinity);
        minDist[src] = 0;
        for (let i = 0; i < k + 1 ; i++){
            const tempMinDist = [...minDist];
            for (const [u, v, w] of flights){
                if (minDist[u] !== Infinity && minDist[u] + w < tempMinDist[v]){
                    tempMinDist[v] = minDist[u] +  w;
                }
            }
            minDist = tempMinDist;
        }
        return minDist[dst] === Infinity ? -1 : minDist[dst];
    }
}
